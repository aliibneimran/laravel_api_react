<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getExample()
    {
        return response()->json(['message' => 'Hello from Laravel Controller!']);
    }

    public function postData(Request $request)
    {
        return response()->json(['received' => $request->all()]);
    }
}
