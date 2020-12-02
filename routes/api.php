<?php

use App\Http\Controllers\TypeFilmController;
use App\Models\Film;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Raju\Streamer\Helpers\VideoStream;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});

Route::get('/video/{id_video}', function ($id_video) {
  $stream = new VideoStream(Storage::path('public/video/' . $id_video . '/trailer/' . explode('_', $id_video)[0] . '.mp4'));
  return response()->stream(function () use ($stream) {
    $stream->start();
  });
});

Route::get('/image/{id_image}', function ($id_image) {
  return response()->file(Storage::path('public/image/' . $id_image . '.jpg'));
});

Route::get('get/video/all', function () {
  $data = Film::all();
  echo json_encode($data);
});

Route::prefix('type-film')->group(function () {
  Route::get('/get/all', [TypeFilmController::class, 'getAll']);
});

