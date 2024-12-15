<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Demande; // Ensure you've created this model
use Illuminate\Support\Facades\Validator;

class DemandeController extends Controller
{

        
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
    
        try {
            $demande = Demande::create($validator->validated());

            // Return success response with the created record
            return response()->json([
                'message' => 'Demande créée avec succès!',
                'data'    => $demande,
            ], 201);
        } catch (\Exception $e) {
            // Handle exceptions (e.g., database errors)
            return response()->json([
                'error' => 'Erreur lors de l’insertion des données: ' . $e->getMessage(),
            ], 500);
        }
        // If validation passes, return the validated data
        //return response()->json(['validated' => $validator->validated()], 200);
    }
    
        
    
}
