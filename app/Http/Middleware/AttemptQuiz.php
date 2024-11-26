<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AttemptQuiz
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // dd($request->session()->get('quizAttempt'));
        if ($request->session()->get('quizAttempt')) {
            return $next($request);
        } else {
            return redirect("/kuis/" . $request->route()->parameter('quiz')['slug']);
        }
    }
}
