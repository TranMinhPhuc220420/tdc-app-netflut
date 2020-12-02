<?php

namespace App\Http\Controllers;

use App\Models\TypeFilm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TypeFilmController extends Controller
{
  public function upload(Request $request)
  {
    $typeFilm = new TypeFilm();

    $typeFilm->_id = time();
    $typeFilm->name = $request->get('name');
    $typeFilm->save();

    echo json_encode(array('status' => 'ok'));
  }

  public function getAll()
  {
    echo json_encode(array('result' => TypeFilm::all()));
  }

  public function destroy(Request $request)
  {
    $typeFilm = DB::collection('type_films')->where('_id', $request->get('id'));

    if ($typeFilm) {
      $typeFilm->delete();
      echo json_encode(array('result' => array('status' => 'ok')));
    } else {
      echo json_encode(array('result' => array('status' => 'failed')));
    }

  }

  public function edit(Request $request){
    $typeFilm = TypeFilm::where('_id', $request->get('id'))->first();
    $typeFilm->name = $request->get('nameChange');
    $typeFilm->save();

    echo json_encode(array('result' => array('status' => 'ok')));

  }
}
