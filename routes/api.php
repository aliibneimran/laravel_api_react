<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/example', function () {
//     return response()->json(['message' => 'Hello from Laravel!']);
// });
// Route::post('/data', function (Request $request) {
//     // Process the request data here
//     return response()->json(['received' => $request->all()]);
// });

Route::get('/example', [ApiController::class, 'getExample']);
// Route::post('/data', [ApiController::class, 'postData']);
Route::group(['middleware' => 'cors'], function () {
    Route::post('/data', [ApiController::class, 'postData']);
});
