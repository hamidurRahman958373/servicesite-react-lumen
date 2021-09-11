<?php

namespace App\Http\Controllers;

use App\Models\InformationModel;
use Illuminate\Http\Request;

class InformationController extends Controller
{
    function onSelect()
    {
        $result = InformationModel::all();
        return $result;
    }
}
