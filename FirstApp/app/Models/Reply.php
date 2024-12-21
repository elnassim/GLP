<?php
// FirstApp/app/Models/Reply.php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    use HasFactory;

    protected $fillable = [
        'reclamation_id',
        'admin_id',
        'reply',
    ];

    public function reclamation()
    {
        return $this->belongsTo(Reclamation::class);
    }

    public function admin()
    {
        return $this->belongsTo(Administrator::class);
    }
}