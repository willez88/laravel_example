<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['prefix' => 'admin'], function () {
    Route::resource(
        'settings',
        App\Http\Controllers\SettingController::class,
        ['except' => ['create','store','edit','update','show','destroy']]
    );

    Route::resource(
        'countries',
        App\Http\Controllers\CountryController::class,
        ['except' => ['create','show', 'edit']]
    );
    Route::get('get-countries', [App\Http\Controllers\CountryController::class, 'getCountries']);

    Route::resource(
        'estates',
        App\Http\Controllers\EstateController::class,
        ['except' => ['create','show', 'edit']]
    );
    Route::get('get-estates/{country_id}', [App\Http\Controllers\EstateController::class, 'getEstates']);

    Route::resource(
        'municipalities',
        App\Http\Controllers\MunicipalityController::class,
        ['except' => ['create','show', 'edit']]
    );
    Route::get(
        'get-municipalities/{estate_id}',
        [App\Http\Controllers\MunicipalityController::class,
        'getMunicipalities']
    );

    Route::resource(
        'cities',
        App\Http\Controllers\CityController::class,
        ['except' => ['create','show', 'edit']]
    );

    Route::resource(
        'parishes',
        App\Http\Controllers\ParishController::class,
        ['except' => ['create','show', 'edit']]
    );
    Route::get(
        'get-parishes/{municipality_id}',
        [App\Http\Controllers\ParishController::class,
        'getParishes']
    );
});

Route::resource('people', App\Http\Controllers\PersonController::class);
Route::get('people/show/vue-list', [App\Http\Controllers\PersonController::class, 'vueList']);
