<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('students')->insert([
            [
                'name' => 'Nassim el kaddaoui',
                'email' => 'elkaddaouinassim@gmail.com',
                'apogee' => '123456',
                'cin' => 'L000001', // Unique CIN
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Ali Sekkal',
                'email' => 'sekkalali@gmail.com',
                'apogee' => '234567',
                'cin' => 'L000002', // Unique CIN
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Yassin Laraichi',
                'email' => 'laraichiyassin@example.com',
                'apogee' => '345678',
                'cin' => 'L000003', // Unique CIN
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Manal talbi',
                'email' => 'talbimanal28@gmail.com',
                'apogee' => '000000',
                'cin' => 'L000004', // Unique CIN
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
