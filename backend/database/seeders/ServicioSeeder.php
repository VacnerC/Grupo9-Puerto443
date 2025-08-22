<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServicioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('servicios')->insert([
            
            [
                'nombre' => 'Fortnite',
                'imagen_url' => 'URL_DE_IMAGEN_DE_FORTNITE',
                'descripcion' => 'V-Bucks y Pases de Batalla',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'League of Legends',
                'imagen_url' => 'URL_DE_IMAGEN_DE_LOL',
                'descripcion' => 'RP y Pases de Evento',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Valorant',
                'imagen_url' => 'URL_DE_IMAGEN_DE_VALORANT',
                'descripcion' => 'Points y Bundles',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Genshin Impact',
                'imagen_url' => 'URL_DE_IMAGEN_DE_GENSHIN',
                'descripcion' => 'Genesis Crystals',
                'created_at' => now(),
                'updated_at' => now(),
            ],
           
            [
                'nombre' => 'Minecraft',
                'imagen_url' => 'URL_DE_IMAGEN_DE_MINECRAFT',
                'descripcion' => 'Minecoins y Realms',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Call of Duty: Warzone',
                'imagen_url' => 'URL_DE_IMAGEN_DE_WARZONE',
                'descripcion' => 'Puntos CoD y Paquetes',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Roblox',
                'imagen_url' => 'URL_DE_IMAGEN_DE_ROBLOX',
                'descripcion' => 'Robux y Membresía',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Free Fire',
                'imagen_url' => 'URL_DE_IMAGEN_DE_FREEFIRE',
                'descripcion' => 'Diamantes y Pases',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'PUBG Mobile',
                'imagen_url' => 'URL_DE_IMAGEN_DE_PUBG',
                'descripcion' => 'UC y Pases de Royale',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}