<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\GrassType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GrassTypeController extends Controller
{
    public function index()
    {
        $types = GrassType::latest()->paginate(10);
        return Inertia::render('Admin/GrassTypes/Index', compact('types'));
    }

    public function create()
    {
        return Inertia::render('Admin/GrassTypes/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string',
        ]);

        GrassType::create([
            'name' => $request->name,
            'slug' => \Str::slug($request->name),
            'description' => $request->description,
        ]);

        return redirect()->route('admin.grass-types.index')->with('success', 'Grass type created.');
    }

    public function edit(GrassType $grassType)
    {
        return Inertia::render('Admin/GrassTypes/Edit', compact('grassType'));
    }

    public function update(Request $request, GrassType $grassType)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string',
        ]);

        $grassType->update([
            'name' => $request->name,
            'slug' => \Str::slug($request->name),
            'description' => $request->description,
        ]);

        return redirect()->route('admin.grass-types.index')->with('success', 'Grass type updated.');
    }

    public function destroy(GrassType $grassType)
    {
        $grassType->delete();
        return redirect()->route('admin.grass-types.index')->with('success', 'Grass type deleted.');
    }
}