<?php

namespace App\Http\Controllers;

use App\Models\ProjectModel;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    function onSelectThree()
    {
        $result = ProjectModel::limit(3)->get();
        return $result;
    }
    function onSelectAll()
    {
        $result = ProjectModel::all();
        return $result;
    }
    function onSelectDetails($projectID)
    {
        $id = $projectID;
        $result = ProjectModel::where(['id' => $id])->get();
        return $result;
    }
}
