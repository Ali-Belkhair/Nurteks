<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
     protected $fillable = [
        'user_id', 'title', 'slug', 'excerpt', 'content', 'image', 'published'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
