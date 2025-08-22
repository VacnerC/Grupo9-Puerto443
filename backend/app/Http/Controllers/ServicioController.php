<?php

namespace App\Http\Controllers;

use App\Models\Servicio;
use Illuminate\Http\Request;

class ServicioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Servicio::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // 1. Validar los datos de entrada
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'descripcion' => 'required|string',
            'imagen_url' => 'required|url'
        ]);

        // 2. Crear un nuevo servicio en la base de datos
        $servicio = Servicio::create($validatedData);

        // 3. Devolver una respuesta exitosa
        return response()->json($servicio, 201);
    }

    // Dentro de ServicioController.php

    public function update(Request $request, Servicio $servicio)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'descripcion' => 'required|string',
            'imagen_url' => 'required|url',
        ]);

        $servicio->update($validatedData);

        return response()->json($servicio);
    }

    public function destroy(Servicio $servicio)
    {
        $servicio->delete();

        return response()->json(null, 204);
    }
}
