<?php

namespace App\Services;

use Kreait\Firebase\Factory;
use Google\Cloud\Firestore\FirestoreClient;

class FirebaseService
{
    protected FirestoreClient $db;


    public function __construct()
    {
        $factory = (new Factory)
            //Path to service account file
            ->withServiceAccount(storage_path('app/firebase/firebase_credentials.json'));
            //Change This to firebase realtime database path
            // ->withDatabaseUri('https://laravelfirebasedemo-417d7-default-rtdb.firebaseio.com');

            $this->db = $factory->createFirestore()->database();
        // $this->database = $factory->createDatabase();
        // $this->messaging = $factory->createMessaging();
    }

    public function getDatabase(): FirestoreClient
    {
        return $this->db;
    }

}
