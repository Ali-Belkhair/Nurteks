<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Grass;
use App\Models\GrassType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminGrassController extends Controller
{
    public function index()
    {
        $grasses = Grass::with('type')->latest()->paginate(10);
        return Inertia::render('Admin/Grasses/Index', compact('grasses'));
    }

    public function create()
    {
        $types = GrassType::all();
        return Inertia::render('Admin/Grasses/Create', compact('types'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'grass_type_id' => 'required|exists:grass_types,id',
            'name' => 'required|string|max:100',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric',
        ]);

        Grass::create([
            'grass_type_id' => $request->grass_type_id,
            'name' => $request->name,
            'slug' => \Str::slug($request->name),
            'description' => $request->description,
            'price' => $request->price,
        ]);

        return redirect()->route('admin.grasses.index')->with('success', 'Grass created.');
    }

    public function edit(Grass $grass)
    {
        $types = GrassType::all();
        return Inertia::render('Admin/Grasses/Edit', compact('grass', 'types'));
    }

    public function update(Request $request, Grass $grass)
    {
        $request->validate([
            'grass_type_id' => 'required|exists:grass_types,id',
            'name' => 'required|string|max:100',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric',
        ]);

        $grass->update([
            'grass_type_id' => $request->grass_type_id,
            'name' => $request->name,
            'slug' => \Str::slug($request->name),
            'description' => $request->description,
            'price' => $request->price,
        ]);

        return redirect()->route('admin.grasses.index')->with('success', 'Grass updated.');
    }

    public function destroy(Grass $grass)
    {
        $grass->delete();
        return redirect()->route('admin.grasses.index')->with('success', 'Grass deleted.');
    }
}
