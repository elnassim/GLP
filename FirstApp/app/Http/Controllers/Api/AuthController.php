<?php
// FirstApp/app/Http/Controllers/Api/AuthController.php



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

        // Retrieve the administrator by email
        $admin = Administrator::where('email', $request->email)->first();

        if (!$admin) {
            return response()->json([
                'error' => 'Invalid email or password',
            ], 401);
        }

        // Compare the provided password with the stored password
        if ($admin->password !== $request->password) {
            return response()->json([
                'error' => 'Invalid email or password',
            ], 401);
        }

        // Successful login
        return response()->json([
            'message' => 'Login successful',
        ], 200);
    }

    // Administrator logout function
    public function logout(Request $request)
    {
        // Since we're not implementing token-based authentication, simply return a success message
        return response()->json([
            'message' => 'Logout successful',
        ], 200);
    }
}