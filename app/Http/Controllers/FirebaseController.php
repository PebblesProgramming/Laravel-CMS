<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\FirebaseService;
use Kreait\Firebase\Contract\Firestore;

class FirebaseController extends Controller
{
     protected $firestore;

    public function __construct(FirebaseService $firebase)
    {
        // haal de Firestore-database op uit de service
        $this->firestore = $firebase->getDatabase()->database();
    }

    public function test()
    {
        //lees alle documenten uit de 'users' collection
        $documents = $this->firestore->collection('users')->documents();

        $users = [];
        foreach($documents as $doc){
            if($doc->exists()){
                $users = array_merge(['id' => $doc->id()], $doc->data());
            }
        }
        return response()->json($users);
    }

    // voeg een nieuwe doc toe
    // public function store(Request $request)
    // {

    // }
}


