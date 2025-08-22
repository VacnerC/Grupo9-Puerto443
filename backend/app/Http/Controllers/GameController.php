<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;

class GameController extends Controller
{
    /**
     * 🟢 Listar todos los juegos
     */
    public function index()
    {
        return response()->json(Game::all(), 200);
    }

    /**
     * 🟡 Crear un nuevo juego
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
            'image_url'   => 'nullable|url',
        ]);

        $game = Game::create($validated);

        return response()->json([
            'message' => 'Juego registrado con éxito',
            'data'    => $game
        ], 201);
    }

    /**
     * 🔵 Mostrar un juego específico
     */
    public function show($id)
    {
        $game = Game::find($id);

        if (!$game) {
            return response()->json(['message' => 'Juego no encontrado'], 404);
        }

        return response()->json($game, 200);
    }

    /**
     * 🟠 Actualizar un juego
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name'        => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'image_url'   => 'nullable|url',
        ]);

        $game = Game::find($id);

        if (!$game) {
            return response()->json(['message' => 'Juego no encontrado'], 404);
        }

        $game->update($validated);

        return response()->json([
            'message' => 'Juego actualizado con éxito',
            'data'    => $game
        ], 200);
    }

    /**
     * 🔴 Eliminar un juego
     */
    public function destroy($id)
    {
        $game = Game::find($id);

        if (!$game) {
            return response()->json(['message' => 'Juego no encontrado'], 404);
        }

        $game->delete();

        return response()->json(['message' => 'Juego eliminado con éxito'], 200);
    }
}