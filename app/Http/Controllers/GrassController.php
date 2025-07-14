<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Grass;
use App\Models\GrassType;
use Inertia\Inertia;

class GrassController extends Controller
{
    public function index()
    {
        $types = GrassType::with('grasses')->get();
        return Inertia::render('Grass/Index', compact('types'));
    }

    public function show($slug)
    {
        $grass = Grass::with('type')->where('slug', $slug)->firstOrFail();
        return Inertia::render('Grass/Show', compact('grass'));
    }
}
