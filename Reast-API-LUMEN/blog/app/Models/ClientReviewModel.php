<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientReviewModel extends Model
{
    protected $table = 'client_review';
    protected $primaryKey = 'id';
    public $incrementing = true;
    public $keyType = 'int';
    public $timestamp = false;
}
