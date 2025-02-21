const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.sass', 'public/css', [
        //
    ]);

// mix.browserSync('laravel-9.test'); // for use with Laravel valet
mix.browserSync('127.0.0.1:8000'); // for use with php artisan serve