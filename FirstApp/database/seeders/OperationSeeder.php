<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Operation;

class OperationSeeder extends Seeder
{
    public function run()
    {
        Operation::factory()->count(10)->create();
    }
}
