<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

use function PHPSTORM_META\map;

class AdminUserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $authUser = Auth::user()->id;

        return Inertia::render('Admin/User/index', [
            'users' => User::with('role')->get()->except($authUser)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/User/create', [
            'roles' => Role::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'password' => 'required|min:6',
            'confPassword' => 'required|same:password|min:6',
        ]);
        $validated = $request->validate([
            'name' => 'required',
            'username' => 'required|unique:users,username',
            'email' => 'required|email',
            'role_id' => 'required|exists:roles,name',
            'image' => 'required|file|image|max:2048'
        ]);

        $validated['password'] = bcrypt($request->password);
        $validated['role_id'] = Role::where('name', $validated['role_id'])->first()->id;
        $validated['image'] = $request->file('image')->store('profile-images');

        $createdUser = User::create($validated);

        if ($createdUser) {
            return redirect('/admin/user')->with('flash', [
                'status' => 'success',
                'title' => "Berhasil Menambahkan User",
                'icon' => 'success',
            ]);
        } else {
            return redirect('/admin/user')->with('flash', [
                'status' => 'failed',
                'title' => "Gagal Menambahkan User",
                'icon' => 'error'
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        $user = User::with('role')->where('id', $user->id)->first();
        return Inertia::render('Admin/User/edit', [
            'user' => $user,
            'roles' => Role::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        if ($request->password) {
            $request->validate([
                'password' => 'required|min:6',
                'confPassword' => 'required|same:password|min:6'
            ]);
        }
        $rules = [
            'name' => 'required',
            'email' => 'required|email',
            'role_id' => 'required|exists:roles,name',
        ];

        if ($request->username !== $user->username) {
            $rules['username'] = 'unique:users,username';
        }

        if ($request->image) {
            $rules['image'] = 'image|file|max:2048';
        }

        $validated = $request->validate($rules);

        if ($request->password) {
            $validated['password'] = bcrypt($request->password);
        }
        $validated['role_id'] = Role::where('name', $validated['role_id'])->first()->id;
        if ($request->file('image')) {
            if ($request->oldImage) {
                Storage::delete($request->oldImage);
            }
            $validated['image'] = $request->file('image')->store('profile-images');
        }

        $user->update($validated);
        if ($user) {
            return redirect('/admin/user')->with('flash', [
                'status' => 'success',
                'title' => "Berhasil Mengedit User",
                'icon' => 'success',
            ]);
        } else {
            return redirect('/admin/user')->with('flash', [
                'status' => 'failed',
                'title' => "Gagal Mengedit User",
                'icon' => 'error',
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        if ($user->image) {
            if ($user->image != "profile-images/default-profile.webp") {
                Storage::delete($user->image);
            }
        }
        $hasil = $user->delete();
        if ($hasil) {
            return redirect('/admin/user')->with('flash', [
                'status' => 'success',
                'title' => "Berhasil Menghapus User",
                'icon' => 'success',
            ]);
        } else {
            return redirect('/admin/user')->with('flash', [
                'status' => 'failed',
                'title' => "Gagal Menghapus User",
                'icon' => 'error',
            ]);
        }
    }
}
