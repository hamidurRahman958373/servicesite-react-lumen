<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CotactController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminLoginController;

//Home Page Manage
Route::get('/CountTotal',[HomeController::class,'CountSummery'])->middleware('loginCheck');


//Contact Data Manage............
Route::get('/ContactList',[CotactController::class,'ContactList'])->middleware('loginCheck');
Route::post('/ContactDelete',[CotactController::class,'DeleteData'])->middleware('loginCheck');

//Course Data Manage............
Route::get('/CourseList',[CourseController::class,'CourseList'])->middleware('loginCheck');
Route::post('/CourseDelete',[CourseController::class,'CourseDeleteData'])->middleware('loginCheck');

//Project Data Manage............
Route::get('/ProjectList',[ProjectController::class,'ProjectList'])->middleware('loginCheck');
Route::post('/ProjectDelete',[ProjectController::class,'ProjectDeleteData'])->middleware('loginCheck');

//Service Data Manage............
Route::get('/ServiceList',[ServiceController::class,'ServiceList'])->middleware('loginCheck');
Route::post('/ServiceDelete',[ServiceController::class,'DeleteServiceData'])->middleware('loginCheck');

//Review Data Manage............
Route::get('/ReviewList',[ReviewController::class,'ReviewList'])->middleware('loginCheck');
Route::post('/ReviewDelete',[ReviewController::class,'ReviewDataDelete'])->middleware('loginCheck');
Route::post('/AddReview',[ReviewController::class,'AddReview'])->middleware('loginCheck');

//Admin Login
Route::get('/Login',[AdminLoginController::class,'login']);
Route::get('/Logout',[AdminLoginController::class,'Logout']);
Route::get('/onLogin/{userName}/{password}',[AdminLoginController::class,'onLogin']);


Route::get('/', function () {
    return view('index');
})->middleware('loginCheck');
Route::get('{AnyRoute}', function () {
    return view('index');
})->where('AnyRoute','.*')->middleware('loginCheck');
