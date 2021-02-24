const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
/** Copia el archivo bootbox a la carpeta public */
mix.copy('node_modules/bootbox/dist/bootbox.min.js', 'public/js/bootbox.min.js');

mix.js([
        'resources/js/app.js',
        'node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js'
    ], 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
