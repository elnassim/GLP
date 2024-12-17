<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrator;


class AuthController extends Controller
{
    // Administrator login function
    public function login(Request $request)
    {
        // Validate the request
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Find the administrator by email
        $admin = Administrator::where('email', $request->email)
        ->where('password', $request->password)
        ->exists();

        if($admin){
            return response()->json([
                'message' => 'Login successful',
                
            ], 200);
        }
    
        return response()->json([
            'error' => 'Invalid email or password',
        ], 401);
    }

    // Administrator logout function
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Logout successful',
        ], 200);
    }
}
