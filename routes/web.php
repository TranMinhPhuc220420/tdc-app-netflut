<?php

use App\Http\Controllers\CategoryTypeController;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\TypeFilmController;
use App\Models\CategoryType;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/home', function () {

//  return view('client.home');
});
Route::get('/', function () {
  return view('client.home');
});


Route::prefix('admin')->group(function () {
  /*
   * GET */
  Route::get('/{gadget}', function () {
    return view('admin.home');
  })->where('gadget', '[A-Za-z0-9(\W)]+');;

  Route::get('/', function () {
    return view('admin.home');
  });

  /*
   * POST */
  Route::post('/add-film', [FilmController::class, 'upload']);
  Route::post('/add-type-film', [TypeFilmController::class, 'upload']);
  Route::post('/delete-type-film', [TypeFilmController::class, 'destroy']);
  Route::post('/edit-type-film', [TypeFilmController::class, 'edit']);
});

