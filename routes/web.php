<?php

use App\Http\Controllers\FilmController;
use App\Models\Film;
use Illuminate\Support\Facades\DB;
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

Route::post('/admin/add-film', [FilmController::class, 'upload']);

Route::get('/admin', function () {
  return view('admin.home');
});
