<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Validation\Rule;

/**
 * @class CityController
 * @brief Controlador de ciudades
 *
 * Clase que gestiona los datos de ciudades
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class CityController extends Controller
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
        $this->middleware('permission:city.list', ['only' => 'index']);
        $this->middleware('permission:city.create', ['only' => ['create', 'store']]);
        $this->middleware('permission:city.show', ['only' => 'show']);
        $this->middleware('permission:city.edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:city.delete', ['only' => 'destroy']);
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
        return response()->json(['records' => City::all()], 200);
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
            'code' => ['required', 'max:10', 'unique:cities,code'],
            'estate_id' => ['required']
        ]);
        $this->validate($request, [
            'name' => Rule::unique('cities')->where(function ($query) use ($request) {
                return $query->where('estate_id', $request->estate_id)->where('name', $request->name);
            })
        ]);
        $city = City::create([
            'name' => $request->name,
            'code' => $request->code,
            'estate_id' => $request->estate_id
        ]);
        return response()->json(['record' => $city, 'message' => 'Success'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\City  $city
     * @return \Illuminate\Http\Response
     */
    public function show(City $city)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\City  $city
     * @return \Illuminate\Http\Response
     */
    public function edit(City $city)
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
        $city = City::find($id);
        $this->validate($request, [
            'name' => ['required', 'max:100'],
            'code' => ['required', 'max:10', 'unique:cities,code,'.$city->id],
            'estate_id' => ['required']
        ]);
        $city->name = $request->name;
        $city->code = $request->code;
        $city->estate_id = $request->estate_id;
        $city->save();
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
        $city = City::find($id);
        $city->delete();
        return response()->json(['record' => $city, 'message' => 'Success'], 200);
    }
}
