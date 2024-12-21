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

    public function getReclamationsByStatus(Request $request)
    {
        $status = $request->query('status', 'pending'); // Default to 'pending'

        // Validate status input
        if (!in_array($status, ['pending', 'replied', 'all'])) {
            return response()->json([
                'error' => 'Invalid status filter.',
            ], 400);
        }

        if ($status === 'all') {
            $reclamations = Reclamation::all();
        } else {
            $reclamations = Reclamation::where('status', $status)->get();
        }

        return response()->json([
            'data' => $reclamations,
        ], 200);
    }

    public function replyToReclamation(Request $request, $id)
    {
        // Validate input
        $validator = Validator::make($request->all(), [
            'response' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        // Find the reclamation
        $reclamation = Reclamation::find($id);

        if (!$reclamation) {
            return response()->json([
                'error' => 'Reclamation not found.',
            ], 404);
        }

        // Update response and status
        $reclamation->response = $request->response;
        $reclamation->status = 'replied';
        $reclamation->save();

        return response()->json([
            'message' => 'Reclamation replied successfully.',
            'data'    => $reclamation,
        ], 200);
    }

}
