<?php

namespace App\Http\Controllers;

use App\Models\Municipality;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Validation\Rule;

/**
 * @class MunicipalityController
 * @brief Controlador de municipios
 *
 * Clase que gestiona los datos de municipios
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class MunicipalityController extends Controller
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
        $this->middleware('permission:municipality.list', ['only' => 'index']);
        $this->middleware('permission:municipality.create', ['only' => ['create', 'store']]);
        $this->middleware('permission:municipality.show', ['only' => 'show']);
        $this->middleware('permission:municipality.edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:municipality.delete', ['only' => 'destroy']);
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
        return response()->json(['records' => Municipality::all()], 200);
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
            'code' => ['required', 'max:10', 'unique:municipalities,code'],
            'estate_id' => ['required']
        ]);
        $this->validate($request, [
            'name' => Rule::unique('municipalities')->where(function ($query) use ($request) {
                return $query->where('estate_id', $request->estate_id)->where('name', $request->name);
            })
        ]);
        $municipality = Municipality::create([
            'name' => $request->name,
            'code' => $request->code,
            'estate_id' => $request->estate_id
        ]);
        return response()->json(['record' => $municipality, 'message' => 'Success'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Municipality  $municipality
     * @return \Illuminate\Http\Response
     */
    public function show(Municipality $municipality)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Municipality  $municipality
     * @return \Illuminate\Http\Response
     */
    public function edit(Municipality $municipality)
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
        $municipality = Municipality::find($id);
        $this->validate($request, [
            'name' => ['required', 'max:100'],
            'code' => ['required', 'max:10', 'unique:municipalities,code,'.$municipality->id],
            'estate_id' => ['required']
        ]);
        $municipality->name = $request->name;
        $municipality->code = $request->code;
        $municipality->estate_id = $request->estate_id;
        $municipality->save();
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
        $municipality = Municipality::find($id);
        $municipality->delete();
        return response()->json(['record' => $municipality, 'message' => 'Success'], 200);
    }

    /**
     * Obtiene todos los municipios de un estado para usar en campos selects
     *
     * @method getMunicipalities
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return Renderable Json con los registros
     */
    public function getMunicipalities($estate_id)
    {
        return response()->json(template_choices(Municipality::class, 'name', ['estate_id' => $estate_id], true));
    }
}
