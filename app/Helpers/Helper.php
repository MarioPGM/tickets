<?php

namespace App\Helpers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class Helper
{
    public static function createHandler($request)
    {
        $request->request->add(['created_by' => Auth::user()->name, 'updated_by' => Auth::user()->name]);

        return $request->all();
    }

    public static function updateHandler($request)
    {
        $request->request->add(['updated_by' => Auth::user()->name,'updated_at' => Carbon::now()]);

        return $request->all();
    }
}
