<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Reclamation;
use Illuminate\Support\Facades\Validator;
use App\Models\Student;

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

    public function getUnrepliedReclamations()
    {
        $unrepliedReclamations = Reclamation::where('replied', false)->get();

        return response()->json([
            'data' => $unrepliedReclamations,
        ], 200);
    }


    public function replyToReclamation($id, Request $request)
    {
        $reclamation = Reclamation::find($id);

        if (!$reclamation) {
            return response()->json(['message' => 'Reclamation not found.'], 404);
        }

        // Validate the reply content
        $validator = Validator::make($request->all(), [
            'reply' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        // Here you can implement the logic to store the reply,
        // such as creating a Reply model or sending an email.

        // For simplicity, we'll mark the reclamation as replied.
        $reclamation->replied = true;
        $reclamation->save();

        return response()->json([
            'message' => 'Reclamation replied successfully.',
        ], 200);
    }
}