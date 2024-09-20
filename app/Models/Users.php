<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;
    protected $fillable = [
        'username',
        'password',
        'phone_number',
        'name'
    ];
    protected $hidden = [
        'password',
    ];
    public $timestamps = false;
    protected $table = 'Users';
}
