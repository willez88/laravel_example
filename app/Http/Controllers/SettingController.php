<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/**
 * @class SettingController
 * @brief Controlador de configuración general del sistema
 *
 * Clase que gestiona información general del sistema
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class SettingController extends Controller
{
    /**
     * Define la configuración de la clase
     *
     * @author William Páez <paez.william8@gmail.com>
     */
    public function __construct()
    {
        $this->middleware('auth');
        /** Establece permisos de acceso para cada método del controlador */
        $this->middleware('permission:setting.list', ['only' => 'index']);
        $this->middleware('permission:setting.create', ['only' => ['create', 'store']]);
        $this->middleware('permission:setting.show', ['only' => 'show']);
        $this->middleware('permission:setting.edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:setting.delete', ['only' => 'destroy']);
    }

    /**
     * Muestra página de configuración
     *
     * @method index
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return Renderable Muestra la plantilla
     */
    public function index()
    {
        return view('admin.settings');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
