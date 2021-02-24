<?php

namespace App\Http\Controllers;

use App\Models\Estate;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Validation\Rule;

/**
 * @class EstateController
 * @brief Controlador de estados
 *
 * Clase que gestiona los datos de estados
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class EstateController extends Controller
{
    use ValidatesRequests;

    /**
     * Define la configuración de la clase
     *
     * @author William Páez <paez.william8@gmail.com>
     */
    public function __construct()
    {
        $this->middleware('auth');
        /** Establece permisos de acceso para cada método del controlador */
        $this->middleware('permission:estate.list', ['only' => 'index']);
        $this->middleware('permission:estate.create', ['only' => ['create', 'store']]);
        $this->middleware('permission:estate.show', ['only' => 'show']);
        $this->middleware('permission:estate.edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:estate.delete', ['only' => 'destroy']);
    }

    /**
     * Muestra todos los registros
     *
     * @method index
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return Renderable Json con los registros
     */
    public function index()
    {
        return response()->json(['records' => Estate::all()], 200);
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
     * Valida y guarda un nuevo registro
     *
     * @method store
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @param object Request $request Objeto con información de la petición
     *
     * @return Renderable Json con el objeto guardado
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'max:100'],
            'code' => ['required', 'max:10', 'unique:estates,code'],
            'country_id' => ['required']
        ]);
        $this->validate($request, [
            'name' => Rule::unique('estates')->where(function ($query) use ($request) {
                return $query->where('country_id', $request->country_id)->where('name', $request->name);
            })
        ]);
        $estate = Estate::create([
            'name' => $request->name,
            'code' => $request->code,
            'country_id' => $request->country_id
        ]);
        return response()->json(['record' => $estate, 'message' => 'Success'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Estate  $estate
     * @return \Illuminate\Http\Response
     */
    public function show(Estate $estate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Estate  $estate
     * @return \Illuminate\Http\Response
     */
    public function edit(Estate $estate)
    {
        //
    }

    /**
     * Actualiza un registro existente
     *
     * @method update
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @param object Request $request Objeto con datos de la petición
     * @param integer $id Identificador del registro
     *
     * @return Renderable Json con mensaje de confirmación
     */
    public function update(Request $request, $id)
    {
        $estate = Estate::find($id);
        $this->validate($request, [
            'name' => ['required', 'max:100'],
            'code' => ['required', 'max:10', 'unique:estates,name,'.$estate->id],
            'country_id' => ['required']
        ]);
        $estate->name = $request->name;
        $estate->code = $request->code;
        $estate->country_id = $request->country_id;
        $estate->save();
        return response()->json(['message' => 'Success'], 200);
    }

    /**
     * Elimina un registro
     *
     * @method destroy
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @param integer $id Identificador del registro
     *
     * @return Renderable Json con mensaje de confirmación
     */
    public function destroy($id)
    {
        $estate = Estate::find($id);
        $estate->delete();
        return response()->json(['record' => $estate, 'message' => 'Success'], 200);
    }

    /**
     * Obtiene todos los estados de un país para usar en campos selects
     *
     * @method getEstates
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return Renderable Json con los registros
     */
    public function getEstates($country_id)
    {
        return response()->json(template_choices(Estate::class, 'name', ['country_id' => $country_id], true));
    }
}
