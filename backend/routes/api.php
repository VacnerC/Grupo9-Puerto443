<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\ServicioController;

// Rutas de autenticación (no protegidas)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Rutas públicas de lectura
Route::get('/leaderboard', [GameController::class, 'leaderboard']);
Route::get('/servicios', [ServicioController::class, 'index']);
Route::apiResource('games', GameController::class)->only(['index', 'show']);

// Rutas protegidas con Sanctum (requieren token)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);

    // Rutas protegidas para juegos
    Route::apiResource('games', GameController::class)->only(['store', 'update', 'destroy']);

    // NUEVA RUTA: Ruta protegida para agregar servicios
    Route::post('/servicios', [ServicioController::class, 'store']);
    Route::apiResource('servicios', ServicioController::class)->only(['store', 'update', 'destroy']);

    // Ruta para obtener la lista de usuarios (protegida por seguridad)
    Route::get('/users', [AuthController::class, 'users']);
});