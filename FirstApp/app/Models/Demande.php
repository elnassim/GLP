<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Demande extends Model
{
    
    protected $fillable = [
        'email', 'apogee', 'cin', 'document', 'autres',
    ];
}