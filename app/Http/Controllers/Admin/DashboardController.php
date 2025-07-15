<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Post;
use App\Models\Grass;
use App\Models\GrassType;
use App\Models\ContactMessage;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'admins' => User::where('role', 'admin')->count(),
            'posts' => Post::count(),
            'grasses' => Grass::count(),
            'grassTypes' => GrassType::count(),
            'messages' => ContactMessage::count(),
        ];

        return Inertia::render('Admin/Dashboard', compact('stats'));
    }
}
