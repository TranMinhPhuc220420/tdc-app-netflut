<?php

namespace App\Http\Controllers;

use App\Models\Film;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilmController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
  }

  /**
   * Display the specified resource.
   *
   * @param int $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param int $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param \Illuminate\Http\Request $request
   * @param int $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param int $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }

  public function upload(Request $request)
  {
    $responseStatus = array('status' => 'error', 'msg' => 'Not have file film');
    $hasFile =
      $request->has('fileFilm')
      && $request->file('fileFilm') != null
      && $request->has('nameFilmRaw')
      && $request->input('nameFilmRaw') != 'null';

    if ($hasFile) {
      $idByTime = time();
      $nameFilm = $idByTime . '_' . $request->input('nameFilmRaw');
      $uploadedFile = $request->file('fileFilm');
      $filename = $idByTime . '.mp4';

      //Save file film
      Storage::disk('local')->putFileAs(
        'public/video/' . $nameFilm . '/trailer',
        $uploadedFile,
        $filename
      );

      //Save to Mongo Database
      $film = new Film();
      $film->name_film = $request->get('nameFilmReal');
      $film->name_film_raw = $request->get('nameFilmRaw');
      $film->_id = $idByTime;
      $film->save();

      //Set response
      $responseStatus['status'] = 'success';
      $responseStatus['msg'] = 'ok';
    }

    //Print response
    echo json_encode($responseStatus);
  }
}
