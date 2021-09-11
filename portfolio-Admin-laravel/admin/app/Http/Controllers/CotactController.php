<?php

namespace App\Http\Controllers;
use App\Models\ContactTableModel;
use Illuminate\Http\Request;

class CotactController extends Controller
{
    function ContactList(){
        $result=ContactTableModel::all();
        return $result;
    }
function DeleteData(Request  $req){
        $id = $req->input('id');
        $result = ContactTableModel::where('id','=',$id)->delete();
        return $result;
}

}
