<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\BlogController;

use App\Http\Controllers\Admin\{
    PostController,
    GrassTypeController,
    GrassController,
    ContactMessageController,
    UserController,
    DashboardController
};

/////////////////////////////////////
//////////    Public routes   ///////
/////////////////////////////////////

Route::get('/', [HomeController::class, 'home'])->name('home');

//about page
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

//Contact form routes
Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');
Route::post('/contact', [ContactFormController::class, 'submit'])->name('contact.submit');

// Blog routes
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}', [BlogController::class, 'show'])->name('blog.show');






/////////////////////////////////////
//////////    Admin routes    ///////
/////////////////////////////////////

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    // Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('posts', PostController::class);
    Route::resource('grass-types', GrassTypeController::class);
    Route::resource('grasses', GrassController::class);
    Route::resource('messages', ContactMessageController::class)->only(['index', 'show', 'destroy']);
    Route::resource('users', UserController::class)->only(['index', 'create', 'store', 'destroy']);
});

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });


// require __DIR__.'/auth.php';