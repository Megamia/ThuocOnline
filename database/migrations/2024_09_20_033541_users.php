<?php

use App\Models\Users;
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
        Schema::create('Users', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('password');
            $table->string('phone_number');
            $table->string('name');
            $table->timestamps();
        });

        $data = [
            [
                'username' => 'admin',
                'password' => '123',
                'phone_number' => '123457890',
                'name' => 'ADMIN',
            ],
            [
                'username' => 'user1',
                'password' => 'user123',
                'phone_number' => '1111111',
                'name' => 'USER',
            ],
        ];

        foreach ($data as $item) {
            $users = new Users();
            $users->username = $item['username'];
            $users->password = $item['password'];
            $users->phone_number = $item['phone_number'];
            $users->name = $item['name'];
            $users->save();
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('Users');
    }
};
