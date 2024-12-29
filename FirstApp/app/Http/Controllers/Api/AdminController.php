<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Demande;
use App\Models\Reclamation;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    /**
     * Fetch statistics for Admin Dashboard.
     */
    public function getStatistics()
    {
        try {
            // General statistics for demandes and reclamations
            $demandes = [
                'total' => Demande::count(),
                'pending' => Demande::where('status', 'pending')->count(),
                'accepted' => Demande::where('status', 'accepted')->count(),
                'refused' => Demande::where('status', 'refused')->count(),
            ];

            $reclamations = [
                'total' => Reclamation::count(),
                'pending' => Reclamation::where('status', 'pending')->count(),
                'replied' => Reclamation::where('status', 'replied')->count(),
            ];

            // Group demandes by date
            $demandesByDate = Demande::select(DB::raw('DATE(created_at) as date'), DB::raw('COUNT(*) as count'))
                ->groupBy('date')
                ->orderBy('date', 'asc')
                ->get();

            // Group reclamations by date
            $reclamationsByDate = Reclamation::select(DB::raw('DATE(created_at) as date'), DB::raw('COUNT(*) as count'))
                ->groupBy('date')
                ->orderBy('date', 'asc')
                ->get();

            return response()->json([
                'success' => true,
                'data' => [
                    'demandes' => $demandes,
                    'reclamations' => $reclamations,
                    'trends' => [
                        'demandesByDate' => $demandesByDate,
                        'reclamationsByDate' => $reclamationsByDate,
                    ],
                ],
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching statistics',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
