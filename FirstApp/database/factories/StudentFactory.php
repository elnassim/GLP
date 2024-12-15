<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

class StudentFactory extends Factory
{
    protected $model = Student::class;
    
    public function definition()
    {
        return [
            'name'          => $this->faker->name,
            'email'         => $this->faker->unique()->safeEmail,
            'apogee'        => $this->faker->unique()->numerify('#####'), // Changed to 'apogee'
            'cin'           => $this->faker->unique()->regexify('L[0-9]{6}'),
        ];
    }
}