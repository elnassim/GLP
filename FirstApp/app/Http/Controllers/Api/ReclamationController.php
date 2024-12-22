<?php
// filepath: FirstApp/app/Http/Controllers/Api/ReclamationController.php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Reclamation;
use Illuminate\Support\Facades\Validator;
use App\Mail\ReclamationReplyMail;
use Illuminate\Support\Facades\Mail;
use App\Models\Student;
use Illuminate\Support\Facades\Log;

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
     * Get Reclamations by Status.
     */
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

    /**
     * Get a specific reclamation by ID.
     */
    public function getReclamationById($id)
    {
        $reclamation = Reclamation::find($id);

        if (!$reclamation) {
            return response()->json([
                'error' => 'Reclamation not found.',
            ], 404);
        }

        return response()->json([
            'data' => $reclamation,
        ], 200);
    }

    /**
     * Reply to a reclamation.
     *
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
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

        // Ensure the reclamation is still pending
        if ($reclamation->status !== 'pending') {
            return response()->json([
                'error' => 'Reclamation has already been replied to.',
            ], 400);
        }

        // Update response and status
        $reclamation->response = $request->response;
        $reclamation->status = 'replied';
        $reclamation->save();

        // Send email with the response
        try {
            Mail::to($reclamation->email)->send(new ReclamationReplyMail($reclamation));
        } catch (\Exception $e) {
            // Log the error for debugging
            Log::error('Mail failed to send: ' . $e->getMessage());

            return response()->json([
                'error' => 'Failed to send email. Please try again later.',
            ], 500);
        }

        return response()->json([
            'message' => 'Reclamation replied successfully.',
        ], 200);
    }
}