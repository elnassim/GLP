<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Demande;

class OperationController extends Controller
{
    /**
     * Display a listing of demandes with optional filtering by status.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        // Retrieve the 'status' query parameter (e.g., ?status=accepted)
        $status = $request->query('status');

        // Define allowed statuses
        $allowedStatuses = ['accepted', 'pending', 'refused'];

        // Validate the 'status' parameter
        if ($status && !in_array(strtolower($status), $allowedStatuses)) {
            return response()->json([
                'error' => 'Invalid status filter.',
            ], 400);
        }

        // Query demandes based on 'status' if provided
        if ($status && strtolower($status) !== 'all') {
            $demandes = Demande::where('status', strtolower($status))->get();
        } else {
            // Retrieve all demandes if no filter or 'all' is specified
            $demandes = Demande::all();
        }

        return response()->json(['data' => $demandes], 200);
    }
}