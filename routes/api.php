<?php

use App\Models\Users;
use Illuminate\Support\Facades\Route;

Route::post('Login', [Users::class, 'Login']);
