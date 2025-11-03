<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\FirebaseController;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');


Route::get('/users', [FirebaseController::class, 'test']);
