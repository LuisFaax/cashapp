<?php

use App\Http\Livewire\Customers;
use App\Http\Livewire\Rates;
use App\Http\Livewire\Users;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// route('customers')
// url('customers')

Route::get('customers', Customers::class)->name('customers');
Route::get('rates', Rates::class)->name('rates');
Route::get('users', Users::class)->name('users');


Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__ . '/auth.php';
