<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class RegisterController extends Controller
{
    public function create() {
        return inertia('Auth/Register');
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'username' => ['required'],
            'email' => ['required','unique:users'],
            'password' => ['required'],
        ]);

        if($validated) {
            $newUser = User::create($validated);
            
            Auth::login($newUser);
    
            return redirect('/dashboard')->with([
                'type' => 'success',
                'message' => $this->log_in_success_message
            ]);
        }

        throw ValidationException::withMessages([
            'email' => $this->log_in_failure_message,
        ]);
    }
}
