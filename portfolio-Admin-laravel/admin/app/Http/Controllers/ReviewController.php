<?php

namespace App\Http\Controllers;
use App\Models\ClientReviewModel;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    function ReviewList(){
        $result = ClientReviewModel::all();
        return $result;
    }
    function ReviewDataDelete(Request $req){
        $id = $req->input('id');


        $result = ClientReviewModel::where('id','=',$id)->delete();
        return $result;
    }
    function AddReview(Request $request){
        $title=  $request->input('title');
        $des=  $request->input('des');
        $PhotoPath=$request->file('photo')->store('public');
        $PhotoName=explode("/",$PhotoPath)[1];

        $PhotoURL="/storage/".$PhotoName;
        $result= ClientReviewModel::insert(['client_img'=> $PhotoURL,'client_title'=>$title,'client_description'=>$des]);
        return $result;


    }

}
