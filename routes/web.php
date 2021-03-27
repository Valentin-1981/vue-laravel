<?php

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

Route::get('/', function () {
    return view('welcome');
});

//Route::get('/start', function () {
//    return view('start');
//});
Route::get('/start', 'StartController@index');

Route::get('/start/get-json', 'StartController@getJson');

Route::get('/start/data-chart', 'StartController@chartData');

Route::get('/start/data-chart-pie', 'StartController@chartDataPie');

Route::get('/start/random-chart', 'StartController@chartRandom');

Route::get('/start/socket-chart', 'StartController@newEvent');

Route::get('/start/send-message', 'StartController@sendMessage');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


