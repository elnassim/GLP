<?php
// routes/api.php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DemandeController;
use App\Http\Controllers\Api\ReclamationController;

// Routes for Demande
Route::post('/demande', [DemandeController::class, 'store']);

// Routes for Reclamation
Route::post('/reclamation', [ReclamationController::class, 'store']);