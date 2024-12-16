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
                'name' => 'Admin One',
                'email' => 'admin1@example.com',
                'password' => 'password123', 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Admin Two',
                'email' => 'admin2@example.com',
                'password' => 'password123', // Another default admin
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Super Admin',
                'email' => 'superadmin@example.com',
                'password' =>'superpassword', // Stronger password for super admin
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
