<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ReclamationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('reclamations')->insert([
            [
                'email' => 'john.doe@example.com',
                'sujet' => 'Access Issues',
                'description' => 'I am unable to access my student dashboard for the past week.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'email' => 'jane.smith@example.com',
                'sujet' => 'Payment Issues',
                'description' => 'My payment status shows unpaid despite a successful transaction.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'email' => 'alex.johnson@example.com',
                'sujet' => 'Course Enrollment',
                'description' => 'I am unable to enroll in the mandatory courses for the semester.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
