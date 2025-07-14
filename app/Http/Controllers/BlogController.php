<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $posts = Post::with('user')->where('published', true)->latest()->paginate(9);
        return Inertia::render('Blog/Index', compact('posts'));
    }

    public function show($slug)
    {
        $post = Post::with('user')->where('slug', $slug)->firstOrFail();
        return Inertia::render('Blog/Show', compact('post'));
    }
}
