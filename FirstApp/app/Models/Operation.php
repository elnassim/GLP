<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Operation extends Model
{
    protected $fillable = [
        'status',
        'description',
        'date',
        'autres',
    ];
}
