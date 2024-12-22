<?php
// routes/api.php
use App\Http\Controllers\Api\OperationController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DemandeController;
use App\Http\Controllers\Api\ReclamationController;
use App\Http\Controllers\Api\AuthController;

// Routes for Demande
Route::post('/demande', [DemandeController::class, 'store']);
Route::get('/demandes/pending', [DemandeController::class, 'getPendingDemandes']);
Route::post('/login', [AuthController::class, 'login']);
Route::put('/demandes/{id}/accept', [DemandeController::class, 'acceptDemande']);
Route::get('/operations', [OperationController::class, 'index']);
Route::put('/demandes/{id}/refuse', [DemandeController::class, 'refuseDemande']);

// Routes for Reclamation
Route::post('/reclamation', [ReclamationController::class, 'store']);


Route::get('/reclamations/{id}', [ReclamationController::class, 'getReclamationById']);
Route::get('/reclamations', [ReclamationController::class, 'getReclamationsByStatus']);

// Route to reply to a reclamation
Route::post('/reclamations/{id}/reply', [ReclamationController::class, 'replyToReclamation']);


Route::get('/test', function () {
    return response()->json(['message' => 'API is working']);
});

