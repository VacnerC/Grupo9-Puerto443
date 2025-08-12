<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('games', function (Blueprint $table) {
        $table->id(); // Identificador único
        $table->string('name'); // Nombre del juego
        $table->text('description')->nullable(); // Descripción opcional
        $table->string('image_url')->nullable(); // URL de imagen opcional
        $table->timestamps(); // created_at y updated_at
        });

        //modelo para crear
        /**-
         * 
        "name": "xxxxx",
        "description": "juego de xxxxxx",
        "image_url": "https://ejemplo.com/fifa.jpg"
        
        */


        //modelo para crear usuarios
        /**-
         * 
        {
        "name": "Juan",
        "email": "juan@example.com",
        "password": "12345678",
        "password_confirmation": "12345678"
        }
        */

        //modelo para ver usuarios con tokens-metodo POST-user
        /**-
         * 
        "email": "edy@example.com",
        "password": "12345678"
        */

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('games');
    }
};
