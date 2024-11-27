<?php

use App\Http\Controllers\AdminMaterialController;
use App\Http\Controllers\AdminQuizController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MateriController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\ViewController;
use Illuminate\Support\Facades\Route;

Route::middleware(['onlyGuestStudent'])->group(function () {
    Route::get('/', [HomeController::class, 'index']);
    Route::get('/materi', [MateriController::class, 'index']);
    Route::get('/materi/{material}', [MateriController::class, 'detail']);
    Route::get('/kuis', [QuizController::class, 'index']);
    Route::get('/tentang', [ViewController::class, 'about']);
});
Route::middleware(['guest'])->group(function () {
    Route::get('/login', [AuthController::class, 'index'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/register', [AuthController::class, 'registerView']);
    Route::post('/register', [AuthController::class, 'register']);
});
Route::middleware(['isStudent'])->group(function () {
    Route::get('/kuis/{quiz}', [QuizController::class, 'detail']);
    Route::post('/kuis/{quiz}', [QuizController::class, 'goAttempt']);
    Route::get('/kuis/{quiz}/attempt', [QuizController::class, 'attempt'])->middleware(['AttemptQuiz']);
    Route::post('/api/checkAns', [QuizController::class, 'checkAns']);
    Route::post('/api/saveAns', [QuizController::class, 'saveAns']);
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::post('/profile', [AuthController::class, 'changeProfilePicture']);
});
Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth');
Route::middleware(['notStudent'])->group(function () {
    Route::get('/admin', [DashboardController::class, 'index']);
    Route::resource('/admin/user', AdminUserController::class);
    Route::resource('/admin/material', AdminMaterialController::class);
    Route::post('/admin/quiz/{quiz}/save', [AdminQuizController::class, 'saveAns']);
});
Route::middleware(['isAdmin'])->group(function () {
    Route::resource('/admin/quiz', AdminQuizController::class);
});
// Route::post('/admin/material/create/checkSlug', [AdminMaterialController::class, 'checkSlug']);
