<?php
// routes/api.php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DemandeController;
use App\Http\Controllers\Api\ReclamationController;
use App\Http\Controllers\Api\AuthController;


// Routes for Demande
Route::post('/demande', [DemandeController::class, 'store']);

// Routes for Reclamation
Route::post('/reclamation', [ReclamationController::class, 'store']);

Route::post('/login', [AuthController::class, 'login']);
Route::get('/test', function () {
    return response()->json(['message' => 'API is working']);
});

