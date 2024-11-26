<?php

namespace App\Http\Controllers;

use App\Models\Material;
use App\Models\Quiz;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard/index', [
            'totalMaterial' => count(Material::all()),
            'totalQuiz' => count(Quiz::all()),
            'totalUser' => count(User::all())
        ]);
    }
}
