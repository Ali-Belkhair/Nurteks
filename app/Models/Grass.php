<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grass extends Model
{
     protected $fillable = [
        'grass_type_id', 'name', 'slug', 'description', 'image', 'price'
    ];

    public function type()
    {
        return $this->belongsTo(GrassType::class, 'grass_type_id');
    }
}
