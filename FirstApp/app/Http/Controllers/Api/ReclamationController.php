<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Reclamation;
use Illuminate\Support\Facades\Validator;
use App\Models\Student;
use Illuminate\Http\JsonResponse;

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
            'sujet'       => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        // Handle validation failures
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }


        $studentExists = Student::where('email', $request->email)->exists();

        if (!$studentExists) {
            return response()->json([
                'error' => 'L\'email fourni n\'existe pas.',
            ], 404);
        }

        
        // Create and save the Reclamation
        $reclamation = Reclamation::create($validator->validated());

        // Return success response
        return response()->json([
            'message' => 'Reclamation created successfully',
            'data'    => $reclamation,
        ], 201);
    }

     /**
     * Fetch all reclamations from the database.
     */
    public function index(): JsonResponse
    {
        try {
            // Fetch all reclamations with ordering by latest
            $reclamations = Reclamation::orderBy('created_at', 'desc')->get();

            // Format the response with additional metadata
            return response()->json([
                'success' => true,
                'message' => 'Reclamations retrieved successfully',
                'data' => $reclamations,
                'count' => $reclamations->count(),
            ], 200);
        } catch (\Exception $e) {
            // Handle potential errors
            return response()->json([
                'success' => false,
                'message' => 'Error fetching reclamations',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    public function show($id)
{
    $reclamation = Reclamation::find($id);

    if (!$reclamation) {
        return response()->json(['error' => 'Reclamation not found'], 404);
    }

    return response()->json(['data' => $reclamation], 200);
}

public function reply(Request $request, $id)
{
    $request->validate([
        'reply' => 'required|string',
    ]);

    $reclamation = Reclamation::find($id);

    if (!$reclamation) {
        return response()->json(['error' => 'Reclamation not found'], 404);
    }

    // Example: Save reply (extend this as needed)
    $reclamation->reply = $request->reply;
    $reclamation->save();

    return response()->json(['message' => 'Reply saved successfully'], 200);
}
}