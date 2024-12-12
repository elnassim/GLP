<!-- resources/views/student/request_form.blade.php -->
@extends('layouts.app')


@section('content')
    <div class="container">
        <h2>Soumettre une Demande</h2>

        <form action="{{ route('student.request.submit') }}" method="POST">
            @csrf

            <div class="form-group">
                <label for="email">Adresse Email</label>
                <input type="email" class="form-control" id="email" name="email" required>
            </div>

            <div class="form-group">
                <label for="apogee">Numéro d’Apogée</label>
                <input type="text" class="form-control" id="apogee" name="apogee" required>
            </div>

            <div class="form-group">
                <label for="cin">CIN</label>
                <input type="text" class="form-control" id="cin" name="cin" required>
            </div>

            <div class="form-group">
                <label for="document_type">Type de Document</label>
                <select class="form-control" id="document_type" name="document_type" required>
                    <option value="attestation">Attestation de Scolarité</option>
                    <option value="releve_notes">Relevé de Notes</option>
                    <option value="attestation_reussite">Attestation de Réussite</option>
                </select>
            </div>

            <div class="form-group">
                <label for="additional_info">Informations Supplémentaires</label>
                <textarea class="form-control" id="additional_info" name="additional_info"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Soumettre</button>
        </form>
    </div>
@endsection
