<?php

$router->get('/ChartData', ['middleware' => 'auth', 'uses' => 'ChartDataController@onAllSelect']);
$router->get('/ClientReview', ['middleware' => 'auth', 'uses' => 'ClientReviewController@onAllSelect']);
$router->post('/ContactSend', ['middleware' => 'auth', 'uses' => 'ContactController@onContactSend']);

$router->get('/CourseHome', ['middleware' => 'auth', 'uses' => 'CourseController@onSelectFour']);
$router->get('/CourseAll', ['middleware' => 'auth', 'uses' => 'CourseController@onSelectAll']);
$router->get('/CourseDetails/{courseID}', ['middleware' => 'auth', 'uses' => 'CourseController@onSelectDetails']);

$router->get('/Footer', ['middleware' => 'auth', 'uses' => 'FooterController@onSelect']);
$router->get('/Information', ['middleware' => 'auth', 'uses' => 'InformationController@onSelect']);
$router->get('/Service', ['middleware' => 'auth', 'uses' => 'ServiceController@onSelect']);

$router->get('/ProjecteHome', ['middleware' => 'auth', 'uses' => 'ProjectController@onSelectThree']);
$router->get('/ProjectAll', ['middleware' => 'auth', 'uses' => 'ProjectController@onSelectAll']);
$router->get('/ProjectDetails/{projectID}', ['middleware' => 'auth', 'uses' => 'ProjectController@onSelectDetails']);


$router->get('/HomeVideo', ['middleware' => 'auth', 'uses' => 'HomeController@onSelectVideoHome']);
$router->get('/TotalClienProject', ['middleware' => 'auth', 'uses' => 'HomeController@onSelectTolalClientProject']);
$router->get('/TechDescripiton', ['middleware' => 'auth', 'uses' => 'HomeController@onSelectTechDescription']);
$router->get('/HomeTopTitle', ['middleware' => 'auth', 'uses' => 'HomeController@onSelectHomTitle']);
