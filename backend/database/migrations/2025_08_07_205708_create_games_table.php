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

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('games');
    }
};
