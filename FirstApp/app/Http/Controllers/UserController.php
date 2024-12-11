<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function register(Request $request){
        $incomingFields = $request->validate([
            'name' => 'required|string', 'email' => 'required|string', 'password' => 'required|string'
        ]) ;
        return " hello from our controllers register";
    }
}
