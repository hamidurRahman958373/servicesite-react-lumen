<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class ExampleController extends Controller
{
    function testCon()
    {
        $dbname = DB::Connection()->select("SELECT * FROM tests");
        return $dbname;
    }
}
