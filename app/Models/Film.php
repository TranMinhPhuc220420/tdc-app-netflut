<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Film extends Eloquent
{
  use HasFactory;
  protected $connection = 'mongodb';
  protected $collection = 'films';

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name_film'
  ];
}
