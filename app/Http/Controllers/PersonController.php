<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;

/**
 * @class PersonController
 * @brief Controlador de personas
 *
 * Clase que gestiona los datos de personas
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class PersonController extends Controller
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
        $this->middleware('permission:person.list', ['only' => ['index', 'vueList']]);
        $this->middleware('permission:person.create', ['only' => ['create', 'store']]);
        $this->middleware('permission:person.show', ['only' => 'show']);
        $this->middleware('permission:person.edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:person.delete', ['only' => 'destroy']);
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
        return view('people.index');
    }

    /**
     * Muestra el formulario de registro
     *
     * @method create
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return Renderable Vista con el formulario
     */
    public function create()
    {
        return view('people.create-edit');
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
            'first_name' => ['required', 'max:100'],
            'last_name' => ['required', 'max:100'],
            'email' => ['required', 'string', 'email', 'max:100', 'unique:people,email'],
            'id_number' => ['required', 'max:9', 'regex:/^[VE][\d]{8}$/u', 'unique:people,id_number'],
            'phone' => ['required', 'max:15', 'regex:/^\+\d{2}-\d{3}-\d{7}$/u'],
            'address' => ['required'],
            'parish_id' => ['required']
        ]);
        $person = Person::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'id_number' => $request->id_number,
            'phone' => $request->phone,
            'address' => $request->address,
            'parish_id' => $request->parish_id,
            'user_id' => auth()->user()->id
        ]);
        return response()->json(['record' => $person, 'message' => 'Success'], 200);
    }

    /**
     * Muestra los datos de un registro en específico
     *
     * @method show
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @param integer $id Identificador del registro
     *
     * @return Renderable Json con el objeto
     */
    public function show($id)
    {
        $person = Person::where('id', $id)->with(['parish', 'user'])->first();
        return response()->json(['record' => $person], 200);
    }

    /**
     * Muestra el formulario de actualización
     *
     * @method edit
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @param integer $id Identificador del registro
     *
     * @return Renderable Vista con el formulario y el objeto a actualizar
     */
    public function edit($id)
    {
        $person = Person::where('id', $id)->with([
            'user' => function ($query) {
                $query->where('id', auth()->user()->id);
            }, 'parish',
        ])->first();
        if (!$person->user) {
            abort(403, 'El usuario no tiene los permisos para entrar a esta página.');
        }
        return view('people.create-edit', compact('person'));
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
        $person = Person::where('id', $id)->with([
            'user' => function ($query) {
                $query->where('id', auth()->user()->id);
            }, 'parish',
        ])->first();
        if (!$person->user) {
            abort(403, 'El usuario no tiene los permisos para entrar a esta página.');
        }
        $this->validate($request, [
            'first_name' => ['required', 'max:100'],
            'last_name' => ['required', 'max:100'],
            'email' => ['required', 'string', 'email', 'max:100', 'unique:people,email,'.$person->id],
            'id_number' => ['required', 'max:9', 'regex:/^[VE][\d]{8}$/u', 'unique:people,id_number,'.$person->id],
            'phone' => ['required', 'max:15', 'regex:/^\+\d{2}-\d{3}-\d{7}$/u'],
            'address' => ['required'],
            'parish_id' => ['required'],
            'user_id' => ['required']
        ]);
        $person->first_name = $request->first_name;
        $person->last_name = $request->last_name;
        $person->email = $request->email;
        $person->id_number = $request->id_number;
        $person->phone = $request->phone;
        $person->address = $request->address;
        $person->parish_id = $request->parish_id;
        $person->save();
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
        $person = Person::where('id', $id)->with([
            'user' => function ($query) {
                $query->where('id', auth()->user()->id);
            }, 'parish',
        ])->first();
        if (!$person->user) {
            abort(403, 'El usuario no tiene los permisos para entrar a esta página.');
        }
        $person->delete();
        return response()->json(['record' => $person, 'message' => 'Success'], 200);
    }

    /**
     * Muestra los datos para usarlos en vue
     *
     * @method vueList
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return Renderable Json con los datos
     */
    public function vueList()
    {
        return response()->json(['records' => Person::where(
            'user_id',
            auth()->user()->id
        )->with(['parish', 'user'])->get()], 200);
    }
}
