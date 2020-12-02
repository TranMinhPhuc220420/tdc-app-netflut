<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class TypeFilm extends Eloquent
{
  use HasFactory;

  protected $connection = 'mongodb';
  protected $collection = 'type_films';

  protected $fillable = [
    '_id', 'name'
  ];
}
