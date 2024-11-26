<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuizResource;
use App\Models\Material;
use App\Models\Quiz;
use App\Models\QuizQuestion;
use App\Models\QuizQuestionOption;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;


class AdminQuizController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Auth::user()->role_id == 1) {
            $quizzes = Quiz::with(['materials', 'questions'])->get();
        } else {
            $quizzes = Quiz::with(['materials', 'questions'])->whereHas('materials', function ($q) {
                $q->where('user_id', Auth::user()->id);
            })->get();
        }
        return Inertia::render('Admin/Quiz/index', [
            'quizzes' => QuizResource::collection($quizzes)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Quiz/create', [
            'materials' => Material::where('user_id', Auth::user()->id)->get(['slug', 'title'])
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'time' => 'required|numeric',
            'amountPerSession' => 'required|numeric',
            'image' => 'image|file|max:2048',
            'description' => 'required',
            'isActive' => 'required|boolean'
        ]);

        $validated['slug'] = SlugService::createSlug(Quiz::class, 'slug', $validated['title']);
        $validated['material_id'] = Material::where('slug', $request->material_slug)->first()->id;
        $validated["image"] = $request->file('image')->store('quiz-images');

        $quiz = Quiz::create($validated);

        if ($quiz) {
            return redirect('/admin/quiz')->with('flash', [
                'status' => 'success',
                'title' => "Berhasil Membuat Kuis",
                'icon' => 'success',
            ]);
        } else {
            return redirect('/admin/quiz')->with('flash', [
                'status' => 'failed',
                'title' => "Gagal Membuat Kuis",
                'icon' => 'error',
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Quiz $quiz)
    {
        $quiz = Quiz::where('id', $quiz->id)->first(['id', 'slug']);
        return Inertia::render('Admin/Quiz/show', [
            'quiz' => $quiz,
            'quizQuestions' => QuizQuestion::with("options")->where('quiz_id', $quiz->id)->get()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Quiz $quiz)
    {
        $quiz = Quiz::with('materials:id,slug')->where('id', $quiz->id)->first();
        return Inertia::render('Admin/Quiz/edit', [
            'quiz' => $quiz,
            'materials' => Material::where('user_id', Auth::user()->id)->get(['slug', 'title'])
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Quiz $quiz)
    {
        $rules = [
            'title' => 'required',
            'time' => 'required|numeric',
            'amountPerSession' => 'required|numeric',
            'description' => 'required',
            'isActive' => 'required|boolean'
        ];

        if ($request->image) {
            $rules["image"] = 'image|file|max:2048';
        }
        $validated = $request->validate($rules);
        $slug = SlugService::createSlug(Quiz::class, 'slug', $validated['title']);
        if ($slug != $quiz->slug) {
            $validated['slug'] = $slug;
        }
        if ($request->file('image')) {
            if ($request->oldImage) {
                Storage::delete($request->oldImage);
            }
            $validated['image'] = $request->file('image')->store('quiz-images');
        }

        $quiz->update($validated);

        if ($quiz) {
            return redirect('/admin/quiz')->with('flash', [
                'status' => 'success',
                'title' => "Berhasil Mengedit Materi",
                'icon' => 'success',
            ]);
        } else {
            return redirect('/admin/quiz')->with('flash', [
                'status' => 'failed',
                'title' => "Gagal Mengedit Materi",
                'icon' => 'error',
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Quiz $quiz)
    {
        if ($quiz->image) {
            Storage::delete($quiz->image);
        }
        $hasil = $quiz->delete();
        if ($hasil) {
            return redirect('/admin/quiz')->with('flash', [
                'status' => 'success',
                'title' => "Berhasil Menghapus Kuis",
                'icon' => 'success',
            ]);
        } else {
            return redirect('/admin/quiz')->with('flash', [
                'status' => 'failed',
                'title' => "Gagal Menghapus Kuis",
                'icon' => 'error',
            ]);
        }
    }

    public function saveAns(Request $request, Quiz $quiz)
    {
        if (count($request->questions) > 0) {
            $questions = $request->questions;
            $quizQuestionsAvailable = QuizQuestion::where('quiz_id', $quiz->id)->get();
            if ($quizQuestionsAvailable->isNotEmpty()) {
                foreach ($quizQuestionsAvailable as $q) {
                    $q->delete();
                }
            }
            for ($i = 0; $i < count($questions); $i++) {
                $createQuestion = QuizQuestion::create([
                    'quiz_id' => $quiz->id,
                    'content' => $questions[$i]["content"]
                ]);
                for ($j = 0; $j < count($questions[$i]["options"]); $j++) {
                    QuizQuestionOption::create([
                        'uuid' => Str::uuid(),
                        'quiz_question_id' => $createQuestion->id,
                        'content' => $questions[$i]["options"][$j]["content"],
                        'isCorrect' => $questions[$i]["options"][$j]["isCorrect"]
                    ]);
                }
            }
        }
        return redirect('/admin/quiz')->with('flash', [
            'status' => 'success',
            'title' => "Berhasil Mengisi Soal Kuis",
            'icon' => 'success',
        ]);
    }
}
