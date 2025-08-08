<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;


class GameController extends Controller
{
    //
    // 🟢 Mostrar todos los juegos
    public function index()
    {
        return Game::all();
    }

    // 🟡 Crear un nuevo juego
    public function store(Request $request)
    {
        $game = Game::create($request->all());
        return response()->json($game, 201);
    }

    // 🔵 Mostrar un juego específico
    public function show($id)
    {
        return Game::findOrFail($id);
    }

    // 🟠 Actualizar un juego
    public function update(Request $request, $id)
    {
        $game = Game::findOrFail($id);
        $game->update($request->all());
        return response()->json($game, 200);
    }

    // 🔴 Eliminar un juego
    public function destroy($id)
    {
        Game::destroy($id);
        return response()->json(null, 204);
    }

}
