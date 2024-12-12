<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Demande; // Ensure you've created this model
use Illuminate\Support\Facades\Validator;

class DemandeController extends Controller
{
    /**
     * Store a new Demande.
     */
    public function store(Request $request)
    {
        // Define validation rules
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'apogee'   => 'required|string|max:255',
            'cin'      => 'required|string|max:255',
            'document' => 'required|string|max:255',
            'autres'   => 'nullable|string|max:1000',
        ]);

        // Handle validation failures
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        // Create and save the Demande
        $demande = Demande::create($validator->validated());

        // Optional: Send a confirmation email or perform other actions

        return response()->json([
            'message' => 'Votre demande a été soumise avec succès.',
            'data'    => $demande,
        ], 201);
    }
}