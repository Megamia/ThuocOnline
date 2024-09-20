<?php

use App\Http\Controllers\users_controller;
use Illuminate\Support\Facades\Route;

Route::post('Login', [users_controller::class, 'Login']);
Route::get('getData', [users_controller::class, 'getData']);
