<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Actor extends Eloquent
{
  use HasFactory;
  protected $connection = 'mongodb';
  protected $collection = 'actors';

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'full_name'
  ];
}
