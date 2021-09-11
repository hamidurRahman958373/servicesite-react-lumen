<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactTableModel;

use function Symfony\Component\Translation\t;

class ContactController extends Controller
{
    function onContactSend(Request $req)
    {

        $contactArray = json_decode($req->getContent(), true);

        $name = $contactArray['name'];
        $email = $contactArray['email'];
        $message = $contactArray['message'];


        $result = ContactTableModel::insert(["name" => $name, "email" => $email, "message" => $message]);

        if ($result == true) {
            return 'your message send!!! ';
        } else {
            return 0;
        }
    }
}
