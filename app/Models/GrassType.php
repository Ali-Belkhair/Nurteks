<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GrassType extends Model
{
    protected $fillable = ['name', 'slug', 'description'];

    public function grasses()
    {
        return $this->hasMany(Grass::class);
    }
}
