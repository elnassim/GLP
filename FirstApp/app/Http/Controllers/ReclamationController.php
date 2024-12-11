<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Reclamation; // Ensure you've created this model
use Illuminate\Support\Facades\Validator;

class ReclamationController extends Controller
{
    /**
     * Store a new Reclamation.
     */
    public function store(Request $request)
    {
        // Define validation rules
        $validator = Validator::make($request->all(), [
            'email'       => 'required|email',
            'description' => 'required|string',
        ]);

        // Handle validation failures
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        // Create and save the Reclamation
        $reclamation = Reclamation::create($validator->validated());

        // Optional: Send a confirmation email or perform other actions

        return response()->json([
            'message' => 'Votre réclamation a été soumise avec succès.',
            'data'    => $reclamation,
        ], 201);
    }
}