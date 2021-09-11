<?php

namespace App\Http\Controllers;

use App\Models\FooterTableModel;
use Illuminate\Http\Request;

class FooterController extends Controller
{
    function onSelect()
    {
        $result = FooterTableModel::all();
        return $result;
    }
}
