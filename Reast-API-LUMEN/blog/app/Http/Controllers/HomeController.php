<?php

namespace App\Http\Controllers;

use App\Models\HomeEtcModel;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    function onSelectHomTitle()
    {
        $result = HomeEtcModel::select('home_title', 'home_subtitle')->get();
        return $result;
    }
    function onSelectTechDescription()
    {
        $result = HomeEtcModel::select('tech_description')->get();
        return $result;
    }
    function onSelectTolalClientProject()
    {
        $result = HomeEtcModel::select('total_project', 'total_client')->get();
        return $result;
    }
    function onSelectVideoHome()
    {
        $result = HomeEtcModel::select('video_descriptin', 'video_url')->get();
        return $result;
    }
}
