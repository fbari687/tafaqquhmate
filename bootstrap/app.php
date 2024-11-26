<?php

use App\Http\Middleware\AttemptQuiz;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            HandleInertiaRequests::class
        ]);
        $middleware->alias([
            'AttemptQuiz' => \App\Http\Middleware\AttemptQuiz::class,
            'onlyGuestStudent' => \App\Http\Middleware\onlyGuestStudent::class,
            'notStudent' => \App\Http\Middleware\notStudent::class,
            'isStudent' => \App\Http\Middleware\isStudent::class,
            'isAdmin' => \App\Http\Middleware\isAdmin::class
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
