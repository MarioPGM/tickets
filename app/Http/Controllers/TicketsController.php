<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Inertia::render('Catalogs/Tianguis/Index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function jiraPost(Request $request){


        $url = "https://pgmmx.atlassian.net/rest/api/3/issue/";
        $headers = '{
            "content-type":"application/x-www-form-urlencoded"
        }';

        $body = '{
            "fields": {
                "project": {
                    "id": "10058"
                },
                "issuetype": {
                    "id": "10158"
                },
                "summary": "'.$request->name.'",
                "description": {
                    "version": 1,
                    "type": "doc",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Correo: '.$request->correo.'"
                                }
                            ]
                        },
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "'.$request->mensaje.'"
                                }
                            ]
                        }
                    ]
                },
                "labels": [],
                "customfield_10021": []
            },
            "update": {}
        }';



        $ch = curl_init();
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'content-type:application/json', 'Authorization: Basic '.base64_encode('julio.preciado@perspective.com.mx'.':'.'ATATT3xFfGF0MH2XdmeR8QxIkTJi9brNiZOR2NPlTBxASln_ppdAARPT6Jcr5f0aJlrxDxyAoWDOH_WvXZTERHWu2IKrcahjk3Ki_AvqLtAL-Pd4dGyEzt27nsHzNC-OgowbOutZO5AN4fR9ns3S5gOSU09RQWI3z1yW7GTt29OpqHwL5TlrYoI=F17A57F5')));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_ENCODING ,"");
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // For HTTPS
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false); // For HTTPS
        $responseData = curl_exec($ch);
        if(curl_errno($ch)) {
            return curl_error($ch);
        }
        curl_close($ch);

        $a = json_decode($responseData);

        to_route('tickets.index');

    }


    public function create()
    {
        return Inertia::render('Catalogs/Tianguis/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tianguis  $tianguis
     * @return \Illuminate\Http\Response
     */
    public function show()
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tianguis  $tianguis
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tianguis  $tianguis
     * @return \Illuminate\Http\Response
     */
    public function update()
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tianguis  $tianguis
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {


        return to_route('tickets.index');
    }
}
