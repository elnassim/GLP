<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdministratorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Insert default administrator data
        DB::table('administrators')->insert([
            [
                'name' => 'nassim el kaddaoui',
                'email' => 'elkaddaouinassim@gmail.com',
                'password' => 'nassim123', 
                'created_at' => now(),
                'updated_at' => now(),
            ],, 
        ]);
    }
}
