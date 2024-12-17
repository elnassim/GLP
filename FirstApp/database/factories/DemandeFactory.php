<?php

namespace Database\Factories;

use App\Models\Demande;
use Illuminate\Database\Eloquent\Factories\Factory;

class DemandeFactory extends Factory
{
    protected $model = Demande::class;
    
    public function definition()
    {
        $documentTypes = [
            'Attestation de Scolarité',
            'Convention de Stage',
            'Attestation de Réussite',
        ];
        $statuses = [
            'pending',
            'accepted',
            'refused',
        ];

        return [
            'email'        => $this->faker->unique()->safeEmail,
            'apogee'       => $this->faker->unique()->numerify('#####'),
            'cin'          => $this->faker->unique()->regexify('L[0-9]{6}'),
            'document_type'=> $this->faker->randomElement($documentTypes),
            'autres'       => $this->faker->optional()->sentence,
            'status'        => 'pending',
        ];
    }
}