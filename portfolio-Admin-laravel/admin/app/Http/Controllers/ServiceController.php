<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiceModel;

class ServiceController extends Controller
{
   function ServiceList(){
       $result = ServiceModel::all();
       return $result;
   }
   function DeleteServiceData(Request  $req){
       $id = $req->input('id');
       $result = ServiceModel::where('id','=',$id)->delete();
       return $result;
   }
}
