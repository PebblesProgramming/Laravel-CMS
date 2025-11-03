<?php

namespace App\Http\Controllers;

use App\Services\FirebaseService;

class FirebaseController extends Controller
{
     protected $firestore;

    public function __construct(FirebaseService $firebase)
    {
        // haal de Firestore-database op uit de service
        $this->firestore = $firebase->getDatabase();
    }

    public function test()
    {
        //lees alle documenten uit de 'users' collection
        $documents = $this->firestore->collection('users')->documents();

        $users = [];
        foreach($documents as $doc){
            if($doc->exists()){
                $users [] = [           // Formatting convenience
                    'id'=> $doc->id(),  // Hier pak ik de firestore-document-ID
                    ...$doc->data()     // de daadwerkelijke data van het document
                ];
            }
        }
        return response()->json($users);
    }

    // voeg een nieuwe doc toe
    // public function store(Request $request)
    // {

    // }
}


