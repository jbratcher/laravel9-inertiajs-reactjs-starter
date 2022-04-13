<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use \App\Models\User;

class DatabaseSeeder extends Seeder
{
    public int $usersToCreate = 50;
    
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // create a default user first
        DB::table('users')->insert([
            'name' => 'admin',
            'username' => 'admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('12345'),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
        ]);

        // create some users
        User::factory($this->usersToCreate)->create();
    }
}
