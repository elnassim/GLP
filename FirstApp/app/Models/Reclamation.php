<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reclamation extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'sujet',
        'description',
        'status',
        'response',
        'date',
        // Add other fields as necessary
    ];

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }
}