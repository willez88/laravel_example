<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::prefix('admin')->group(function () {
    Route::resource(
        'settings',
        App\Http\Controllers\SettingController::class,
        ['except' => ['create', 'store', 'edit', 'update', 'show', 'destroy']]
    );

    Route::resource(
        'countries',
        App\Http\Controllers\CountryController::class,
        ['except' => ['create', 'edit']]
    );
    Route::get('get-countries', [App\Http\Controllers\CountryController::class, 'getCountries']);

    Route::resource(
        'estates',
        App\Http\Controllers\EstateController::class,
        ['except' => ['create', 'edit']]
    );
    Route::get('get-estates/{country_id}', [App\Http\Controllers\EstateController::class, 'getEstates']);

    Route::resource(
        'municipalities',
        App\Http\Controllers\MunicipalityController::class,
        ['except' => ['create', 'edit']]
    );
    Route::get(
        'get-municipalities/{estate_id}',
        [App\Http\Controllers\MunicipalityController::class,
        'getMunicipalities']
    );

    Route::resource(
        'cities',
        App\Http\Controllers\CityController::class,
        ['except' => ['create', 'edit']]
    );

    Route::resource(
        'parishes',
        App\Http\Controllers\ParishController::class,
        ['except' => ['create', 'edit']]
    );
    Route::get(
        'get-parishes/{municipality_id}',
        [App\Http\Controllers\ParishController::class,
        'getParishes']
    );
});

Route::resource('people', App\Http\Controllers\PersonController::class);
Route::get('people/show/vue-list', [App\Http\Controllers\PersonController::class, 'vueList']);
