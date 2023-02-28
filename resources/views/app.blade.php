<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="cmyk">

<head base={{ asset('assets') }}>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name= "version" version="{{ env('APP_VERSION', '1.0.0') }}">

    <title inertia>{{ env('APP_SHORT_NAME', 'Tickets PGM') }}</title>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    <input id="previous" type="hidden" value={{ url()->previous() }}>
    @inertia
</body>

</html>
