<?php

namespace App\Http\Controllers;

use App\Models\Material;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class AdminMaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Auth::user()->role_id == 1) {
            $materials = Material::all();
        } else {
            $materials = Material::where('user_id', Auth::user()->id)->get();
        }

        return Inertia::render('Admin/Material/index', [
            "materials" => $materials
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Material/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $rules = [
            'title' => 'required|max:255',
            'image' => 'required|file|image|max:2048',
            'excerpt' => 'required',
            'body' => 'required',
        ];
        if ($request->link) {
            $rules["link"] = 'url';
        }
        $validated = $request->validate($rules);

        $validated["slug"] = SlugService::createSlug(Material::class, 'slug', $validated["title"]);
        $validated["excerpt"] = Str::limit($validated["excerpt"], 238);
        $validated["user_id"] = Auth::user()->id;
        $validated["image"] = $request->file('image')->store('material-images');

        $material = Material::create($validated);

        if ($material) {
            return redirect('/admin/material')->with('flash', [
                'status' => 'success',
                'title' => "Berhasil Membuat Materi",
                'icon' => 'success',
            ]);
        } else {
            return redirect('/admin/material')->with('flash', [
                'status' => 'failed',
                'title' => "Gagal Membuat Materi",
                'icon' => 'error',
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Material $material)
    {
        return Inertia::render('Admin/Material/show', [
            'material' => $material
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Material $material)
    {
        return Inertia::render('Admin/Material/edit', [
            'material' => $material
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Material $material)
    {
        $rules = [
            'title' => 'required|max:255',
            'body' => 'required',
            'excerpt' => 'required',
        ];

        if ($request->link) {
            $rules["link"] = 'url';
        }

        if ($request->image) {
            $rules["image"] = 'image|file|max:2048';
        }
        $validated = $request->validate($rules);
        $slug = SlugService::createSlug(Material::class, 'slug', $validated['title']);
        if ($slug != $material->slug) {
            $validated['slug'] = $slug;
        }
        $validated["excerpt"] = Str::limit($validated["excerpt"], 238);
        $validated["user_id"] = Auth::user()->id;
        if ($request->file('image')) {
            if ($request->oldImage) {
                Storage::delete($request->oldImage);
            }
            $validated['image'] = $request->file('image')->store('material-images');
        }

        $material->update($validated);

        if ($material) {
            return redirect('/admin/material')->with('flash', [
                'status' => 'success',
                'title' => "Berhasil Mengedit Materi",
                'icon' => 'success',
            ]);
        } else {
            return redirect('/admin/material')->with('flash', [
                'status' => 'failed',
                'title' => "Gagal Mengedit Materi",
                'icon' => 'error',
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Material $material)
    {
        if ($material->image) {
            Storage::delete($material->image);
        }
        $hasil = $material->delete();
        if ($hasil) {
            return redirect('/admin/material')->with('flash', [
                'status' => 'success',
                'title' => "Berhasil Menghapus Materi",
                'icon' => 'success',
            ]);
        } else {
            return redirect('/admin/material')->with('flash', [
                'status' => 'failed',
                'title' => "Gagal Menghapus Materi",
                'icon' => 'error',
            ]);
        }
    }
}
