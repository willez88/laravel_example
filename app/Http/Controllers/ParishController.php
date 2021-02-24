<?php

namespace App\Http\Controllers;

use App\Models\Parish;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Validation\Rule;

/**
 * @class ParishController
 * @brief Controlador de parroquias
 *
 * Clase que gestiona los datos de parroquias
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class ParishController extends Controller
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
        $this->middleware('permission:parish.list', ['only' => 'index']);
        $this->middleware('permission:parish.create', ['only' => ['create', 'store']]);
        $this->middleware('permission:parish.show', ['only' => 'show']);
        $this->middleware('permission:parish.edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:parish.delete', ['only' => 'destroy']);
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
        return response()->json(['records' => Parish::all()], 200);
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
            'code' => ['required', 'max:10', 'unique:parishes,code'],
            'municipality_id' => ['required']
        ]);
        $this->validate($request, [
            'name' => Rule::unique('parishes')->where(function ($query) use ($request) {
                return $query->where('municipality_id', $request->municipality_id)->where('name', $request->name);
            })
        ]);
        $parish = Parish::create([
            'name' => $request->name,
            'code' => $request->code,
            'municipality_id' => $request->municipality_id
        ]);
        return response()->json(['record' => $parish, 'message' => 'Success'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Parish  $parish
     * @return \Illuminate\Http\Response
     */
    public function show(Parish $parish)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Parish  $parish
     * @return \Illuminate\Http\Response
     */
    public function edit(Parish $parish)
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
        $parish = Parish::find($id);
        $this->validate($request, [
            'name' => ['required', 'max:100'],
            'code' => ['required', 'max:10', 'unique:parishes,code,'.$parish->id],
            'municipality_id' => ['required']
        ]);
        $parish->name = $request->name;
        $parish->code = $request->code;
        $parish->municipality_id = $request->municipality_id;
        $parish->save();
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
        $parish = Parish::find($id);
        $parish->delete();
        return response()->json(['record' => $parish, 'message' => 'Success'], 200);
    }

    /**
     * Obtiene todas las parroquias de un municipio para usar en campos selects
     *
     * @method getParishes
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return Renderable Json con los registros
     */
    public function getParishes($municipality_id)
    {
        return response()->json(template_choices(Parish::class, 'name', ['municipality_id' => $municipality_id], true));
    }
}
