<?php

namespace App\Http\Controllers;

use App\Models\Material;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MateriController extends Controller
{
    public function index()
    {
        $materials = Material::all();
        return Inertia::render('Materi/index', [
            'materials' => $materials
        ]);
    }

    public function detail(Material $material)
    {
        $material = Material::where('id', $material->id)->with('quizzes')->first();
        $materials = Material::where('id', '!=', $material->id)->get()->take(4);
        // dd($material);
        return Inertia::render('Materi/Detail/index', [
            'material' => $material,
            'materials' => $materials
        ]);
    }
}
