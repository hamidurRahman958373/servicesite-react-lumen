<?php

namespace App\Http\Controllers;
use App\Models\AdminLoginModel;
use Illuminate\Http\Request;

class AdminLoginController extends Controller
{
    function login(){
        return view('login');
    }

    function onLogin(Request $request){
        $userName=$request->userName;
        $password=$request->password;


        $Count = AdminLoginModel::where('admin_name', $userName)->where('admin_password', $password)->count();
        if ($Count ==1){
            $request->session()->put('userNameKey',$userName);
            return '1';
        }else{
            return '0';
        }
    }


    function Logout(Request $request){
        $request->session()->flash('userNameKey');
        return redirect('/Login');
    }
}
