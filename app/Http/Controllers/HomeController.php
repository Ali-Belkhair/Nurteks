<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ArtificialGrass;
use App\Models\BlogPost;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     */

    public function home()
    {
        return Inertia::render('Welcome', [
            // 'artificialGrasses' => ArtificialGrass::latest()->take(6)->get(),
            // 'blogPosts' => BlogPost::where('published', true)->latest()->take(3)->get(),
        ]);
    }
}
