<?php

namespace App\Http\Controllers;

use App\Models\CourseTableModel;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    function CourseList(){
        $result=CourseTableModel::all();
        return $result;
    }
    function CourseDeleteData(Request  $req){
        $id = $req->input('id');
        $result = CourseTableModel::where('id','=',$id)->delete();
        return $result;
    }
}
