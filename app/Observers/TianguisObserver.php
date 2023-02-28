<?php

namespace App\Observers;

use App\Models\Tianguis;

class TianguisObserver
{
    /**
     * Handle the Tianguis "created" event.
     *
     * @param  \App\Models\Tianguis  $tianguis
     * @return void
     */
    public function created(Tianguis $tianguis)
    {

    }

    /**
     * Handle the Tianguis "updated" event.
     *
     * @param  \App\Models\Tianguis  $tianguis
     * @return void
     */
    public function updated(Tianguis $tianguis)
    {
        //
    }

    /**
     * Handle the Tianguis "deleted" event.
     *
     * @param  \App\Models\Tianguis  $tianguis
     * @return void
     */
    public function deleted(Tianguis $tianguis)
    {
        //
    }

    /**
     * Handle the Tianguis "restored" event.
     *
     * @param  \App\Models\Tianguis  $tianguis
     * @return void
     */
    public function restored(Tianguis $tianguis)
    {
        //
    }

    /**
     * Handle the Tianguis "force deleted" event.
     *
     * @param  \App\Models\Tianguis  $tianguis
     * @return void
     */
    public function forceDeleted(Tianguis $tianguis)
    {
        //
    }
}
