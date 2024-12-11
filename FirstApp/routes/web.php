<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::post('/register',[\App\Http\Controllers\UserController::class,'register']);




use App\Http\Controllers\StudentController;

Route::get('/request-form', [StudentController::class, 'showRequestForm'])->name('student.request.form');
Route::post('/submit-request', [StudentController::class, 'submitRequest'])->name('student.request.submit');

Route::get('/complaint-form', [StudentController::class, 'showComplaintForm'])->name('student.complaint.form');
Route::post('/submit-complaint', [StudentController::class, 'submitComplaint'])->name('student.complaint.submit');
