<!-- resources/views/student/complaint_form.blade.php -->

@extends('layouts.app')

@section('content')
    <div class="container">
        <h2>Soumettre une Réclamation</h2>

        <form action="{{ route('student.complaint.submit') }}" method="POST">
            @csrf

            <div class="form-group">
                <label for="email">Adresse Email</label>
                <input type="email" class="form-control" id="email" name="email" required>
            </div>

            <div class="form-group">
                <label for="description">Description du Problème</label>
                <textarea class="form-control" id="description" name="description" required></textarea>
            </div>

            <button type="submit" class="btn btn-warning">Envoyer la Réclamation</button>
        </form>
    </div>
@endsection
