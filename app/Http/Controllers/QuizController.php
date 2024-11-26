<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\QuizQuestion;
use App\Models\QuizQuestionOption;
use App\Models\QuizUserAnswers;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuizController extends Controller
{
    public function index()
    {
        return Inertia::render('Kuis/index', [
            'quizzes' => Quiz::with('materials:id,slug')->where('isActive', true)->get()
        ]);
    }

    public function detail(Quiz $quiz)
    {
        $quiz = Quiz::with(['materials:id,slug', 'questions'])->where('id', $quiz->id)->first();
        return Inertia::render('Kuis/Detail/index', [
            'quiz' => $quiz
        ]);
    }

    public function goAttempt(Request $request, Quiz $quiz)
    {
        $quiz = Quiz::where('slug', $request->quiz_slug)->first();
        $user = User::where('username', $request->user_username)->first();

        if ($quiz) {
            return redirect('/kuis/' . $quiz->slug . '/attempt')->with('quizAttempt', [
                "quiz_slug" => $quiz->slug,
                "user_username" => $user->username
            ]);
        } else {
            return redirect()->back();
        }
    }

    public function attempt(Quiz $quiz)
    {
        $quiz = Quiz::with('materials:id,title')->where('id', $quiz->id)->first();
        return Inertia::render('Kuis/Attempt/index', [
            'quiz' => $quiz,
            'quizQuestions' => QuizQuestion::with('options:uuid,quiz_question_id,content')->where('quiz_id', $quiz->id)->get()->random($quiz->amountPerSession)
        ]);
    }

    public function checkAns(Request $request)
    {
        $check = QuizQuestionOption::where('quiz_question_id', $request->quiz_question_id)->where('uuid', $request->option_uuid)->where('isCorrect', 1)->first();

        // $ansUser = QuizQuestionOption::where('quiz_question_id', $request->quiz_question_id)->where('uuid', $request->option_uuid)->first();

        if ($check) {
            $result = 1;
        } else {
            $result = 0;
        }

        // $user = User::where('username', $request->user_username)->first();

        // QuizUserAnswers::create([
        //     'user_id' => $user->id,
        //     'quiz_question_id' => $request->quiz_question_id,
        //     'quiz_question_option_id' => $ansUser->id
        // ]);

        return response($result, 200);
    }

    public function saveAns(Request $request)
    {
        $user_username = $request->user_username;
        $quiz_slug = $request->quiz_slug;
        $user = User::where('username', $user_username)->first();
        $quiz = Quiz::where('slug', $quiz_slug)->first();

        try {
            $quiz_user_answer = QuizUserAnswers::create([
                'user_id' => $user->id,
                'quiz_id' => $quiz->id,
                'correct' => $request->correct,
                'wrong' => $request->wrong,
                'last_grade' => $request->last_grade
            ]);
            return response(["status" => "success"], 201);
        } catch (Exception $err) {
            return response(["status" => "failed"], 400);
        }
    }
}
