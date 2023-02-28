<?php

namespace Database\Seeders;

use App\Models\Tianguis;
use Illuminate\Database\Seeder;

class TianguisSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tianguis::factory(125)->create();
    }
}
