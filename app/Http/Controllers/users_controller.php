<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;

class users_controller extends Controller
{
    public function Login(Request $request)
    {
        $validate = $request->validate([
            'username' => 'required:exists:Users,username',
            'password' => 'required:exists:Users,password',
        ]);
        $username = $validate['username'];
        $password = $validate['password'];
        $data = Users::where('username', $username)
            ->where('password', $password)->first();
        if ($data) {
            return response()->json(['status' => 1, 'data' => $data]);
        } else {
            return response()->json(['status' => 0, 'data' => 'No data']);
        }
    }
    public function getData(Request $request)
    {
        $data = Users::all();
        if ($data->count() > 0) {
            return response()->json(['status' => 1, 'data' => $data]);
        } else {
            return response()->json(['status' => 0, 'data' => 'No data']);
        }
    }
}
