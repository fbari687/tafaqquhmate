<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => "Fathul Bari",
            'username' => "fbariadmin",
            'email' => "fbari687@gmail.com",
            'password' => bcrypt("bari123"),
            'role_id' => 1
        ]);

        User::create([
            'name' => "Fathul Bari",
            'username' => "fbariaja",
            'email' => "fathul.bari.tik24@stu.pnj.ac.id",
            'password' => bcrypt('bari123'),
            'role_id' => 2,
        ]);

        User::create([
            'name' => "Rasya Diandra Putra",
            'username' => "rasyadps",
            'email' => "rasya.diandra.putra.tik24@stu.pnj.ac.id",
            'password' => bcrypt('rasya123'),
            'role_id' => 3,
        ]);
    }
}
