<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\QuizUserAnswers;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function index()
    {
        return Inertia::render('Login/index');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => "required|email",
            'password' => "required"
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            if (Auth::user()->role_id == 3) {
                return redirect('/')->with('flash', [
                    'status' => 'success',
                    'title' => "Berhasil Login",
                    'icon' => 'success',
                ]);
            } else {
                return redirect('/admin')->with('flash', [
                    'status' => 'success',
                    'title' => "Berhasil Login",
                    'icon' => 'success',
                ]);
            }
        }

        return back()->withErrors([
            'email' => "email/password invalid"
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/')->with('flash', [
            'status' => 'success',
            'title' => "Berhasil Logout",
            'icon' => 'success',
        ]);
    }

    public function registerView()
    {
        return Inertia::render('Register/index');
    }

    public function register(Request $request)
    {
        // return redirect()->back()->with('flash', [
        //     'status' => 'success',
        //     'title' => "Berhasil Registrasi",
        //     'icon' => 'success',
        // ]);
        $request->validate([
            'email' => "required|email",
            'name' => "required|min:4",
            'username' => "required|unique:users,username",
            'password' => "required|min:6",
            'confPassword' => "required|same:password|min:6"
        ]);

        $createdUser = User::create([
            'email' => $request->email,
            'name' => $request->name,
            'username' => $request->username,
            'password' => bcrypt($request->password),
            'role_id' => Role::where('name', 'Pengguna')->first()->id
        ]);

        if ($createdUser) {
            return redirect('/login')->with('flash', [
                'status' => 'success',
                'title' => "Berhasil Registrasi",
                'icon' => 'success',
            ]);
        } else {
            return redirect()->with('flash', [
                'status' => 'failed',
                'title' => "Ada Kesalahan",
                'icon' => 'error'
            ]);
        }
    }

    public function profile()
    {
        $quizAnswers = QuizUserAnswers::with('quiz:id,slug,title')->where('user_id', Auth::user()->id)->orderBy('created_at', 'desc')->get();
        return Inertia::render('Profile/index', [
            'quizAnswers' => $quizAnswers
        ]);
    }

    public function changeProfilePicture(Request $request)
    {
        $request->validate([
            'username' => 'required|exists:users,username'
        ]);

        $user = User::where('username', $request->username)->first();

        $validated = $request->validate([
            'image' => 'image|file|max:2048'
        ]);

        $validated['image'] = $request->file('image')->store('profile-images');
        if ($user->image) {
            if ($user->image != "profile-images/default-profile.webp") {
                Storage::delete($user->image);
            }
        }
        $updateUser = $user->update($validated);

        if ($updateUser) {
            return redirect('/profile')->with('flash', [
                'status' => 'success',
                'title' => "Berhasil Mengganti Foto Profil",
                'icon' => 'success',
            ]);
        } else {
            return redirect('/profile')->with('flash', [
                'status' => 'failed',
                'title' => "Gagal Mengganti Foto Profil",
                'icon' => 'error',
            ]);
        }
    }
}
