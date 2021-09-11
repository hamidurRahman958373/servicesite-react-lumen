<?php

namespace App\Http\Controllers;
use  App\Models\CourseTableModel;
use  App\Models\ProjectModel;
use  App\Models\ServiceModel;
use  App\Models\ClientReviewModel;
use  App\Models\ContactTableModel;


use Illuminate\Http\Request;

class HomeController extends Controller
{
function CountSummery(){
       $project= ProjectModel::count();
       $Course= CourseTableModel::count();
       $Service= ServiceModel::count();
       $Review= ClientReviewModel::count();
       $Contact= ContactTableModel::count();

       $totalCount = array('project'=>$project,'Course'=>$Course,'Service'=>$Service,'Review'=>$Review,'Contact'=>$Contact);
       return json_encode($totalCount);
    }
}
