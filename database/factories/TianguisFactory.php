<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TianguisFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $weekday = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

        return [
            'name' => fake()->word(1),
            'weekday' => $weekday[rand(0,6)],
            'created_by' => fake()->name(),
            'updated_by' => fake()->name()
        ];
    }
}
