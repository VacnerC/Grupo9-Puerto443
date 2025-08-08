<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;

Route::apiResource('games', GameController::class);
// Ruta para registrar usuario
Route::post('/register', [AuthController::class, 'register']);

// Ruta para login
Route::post('/login', [AuthController::class, 'login']);

// Rutas protegidas con Sanctum (requieren token)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
});
