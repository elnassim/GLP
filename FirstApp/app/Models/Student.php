<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    // Define the table name if it doesn't follow Laravel's naming convention
    protected $table = 'students';

    // Define fillable attributes for mass assignment
    protected $fillable = [
        'name',
        'email',
        'apogee',
        'cin',
    ];
}