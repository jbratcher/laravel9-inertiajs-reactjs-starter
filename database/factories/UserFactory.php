<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{

    public string $first_name;
    public string $last_name;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $this->first_name = $this->faker->firstName();
        $this->last_name = $this->faker->lastName();

        return [
            'first_name' => $this->first_name,
            'last_name' =>  $this->last_name,
            'username' => $this->faker->unique()->username(),
            'email' => $this->faker->unique()->safeEmail(),
            'address' => $this->faker->address(),
            'email_verified_at' => now(),
            'password' => '123456',
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
