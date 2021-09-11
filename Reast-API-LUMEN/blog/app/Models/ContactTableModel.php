<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactTableModel extends Model
{
    protected $table = 'contact_table';
    protected $primaryKey = 'id';
    public $incrementing = true;
    public $keyType = 'int';
    public $timestamp = false;
}
