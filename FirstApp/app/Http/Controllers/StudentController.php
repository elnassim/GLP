<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
{
    // Show the request form
    public function showRequestForm()
    {
        return view('student.request_form');
    }

    // Handle the submission of the request
    public function submitRequest(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'apogee' => 'required|string',
            'cin' => 'required|string',
            'document_type' => 'required|string',
        ]);

        // Example validation with a database check
        $student = DB::table('students')
            ->where('email', $request->email)
            ->where('apogee', $request->apogee)
            ->where('cin', $request->cin)
            ->first();

        if ($student) {
            // Store the request
            DB::table('requests')->insert([
                'email' => $request->email,
                'apogee' => $request->apogee,
                'cin' => $request->cin,
                'document_type' => $request->document_type,
                'additional_info' => $request->additional_info,
                'created_at' => now(),
            ]);

            return redirect()->back()->with('success', 'Votre demande a été soumise avec succès.');
        } else {
            return redirect()->back()->with('error', 'Les informations fournies sont incorrectes.');
        }
    }

    // Show the complaint form
    public function showComplaintForm()
    {
        return view('student.complaint_form');
    }

    // Handle complaint submission
    public function submitComplaint(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'description' => 'required|string',
        ]);

        DB::table('complaints')->insert([
            'email' => $request->email,
            'description' => $request->description,
            'created_at' => now(),
        ]);

        return redirect()->back()->with('success', 'Votre réclamation a été soumise.');
    }
}
