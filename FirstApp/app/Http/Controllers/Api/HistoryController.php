<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Operation;
use App\Models\Reclamation;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    /**
     * Fetch all operations.
     */
    public function getOperations()
    {
        try {
            $operations = Operation::orderBy('created_at', 'desc')->get();
            return response()->json(['success' => true, 'data' => $operations]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Fetch all reclamations.
     */
    public function getReclamations()
    {
        try {
            $reclamations = Reclamation::orderBy('created_at', 'desc')->get();
            return response()->json(['success' => true, 'data' => $reclamations]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }
}
