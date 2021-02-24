<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;

/**
 * @class CountryController
 * @brief Controlador de países
 *
 * Clase que gestiona los datos de países
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class CountryController extends Controller
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
        $this->middleware('permission:country.list', ['only' => 'index']);
        $this->middleware('permission:country.create', ['only' => ['create', 'store']]);
        $this->middleware('permission:country.show', ['only' => 'show']);
        $this->middleware('permission:country.edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:country.delete', ['only' => 'destroy']);
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
        return response()->json(['records' => Country::all()], 200);
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
            'name' => ['required', 'max:100', 'unique:countries,name']
        ]);
        $country = Country::create([
            'name' => $request->name
        ]);
        return response()->json(['record' => $country, 'message' => 'Success'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function show(Country $country)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function edit(Country $country)
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
        $country = Country::find($id);
        $this->validate($request, [
            'name' => ['required', 'max:100', 'unique:countries,name,'.$country->id]
        ]);
        $country->name = $request->name;
        $country->save();
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
        $country = Country::find($id);
        $country->delete();
        return response()->json(['record' => $country, 'message' => 'Success'], 200);
    }

    /**
     * Obtiene todos los registros para usar en campos selects
     *
     * @method getCountries
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return Renderable Json con los registros
     */
    public function getCountries()
    {
        return response()->json(template_choices(Country::class, 'name', [], true));
    }
}
