<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Person;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Auth;

/**
 * @class PersonController
 * @brief Controlador de personas
 *
 * Clase que gestiona las personas
 *
 * @author William Páez (paez.william8 at gmail.com)
 * @copyright <a href='http://www.gnu.org/licenses/gpl-3.0.html'>GNU Public License versión 3 (GPLv3)</a>
 */
class PersonController extends Controller
{
    /**
     * Muesta todos los registros de las personas
     *
     * @author William Páez (paez.william8 at gmail.com)
     * @return [<b>View</b>] vista con la lista de las personas
     */
    public function index()
    {
        //error_log(Auth::user()->id);
        $people = Person::where('user_id', Auth::user()->id)->get();
        return view('people.index', compact('people'));
    }

    /**
     * Muesta el formulario de registro para crear nuevas personas
     *
     * @author William Páez (paez.william8 at gmail.com)
     * @return [<b>View</b>] vista con el formulario de registro
     */
    public function create()
    {
        $header_person = [
            'route' => 'people.store', 'method' => 'POST', 'role' => 'form', 'class' => 'form',
        ];
        return view('people.create', compact('header_person'));
    }

    /**
     * Guarda una nueva persona en la base base de datos
     *
     * @author William Páez (paez.william8 at gmail.com)
     * @param [<b>Illuminate::Http::Request</b>] $request datos de la petición
     * @return [<b>Route</b>] ruta hacia la vista de listar personas
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'first_name' => 'required|max:100',
            'last_name' => 'required|max:100',
            'identification_card' => 'required|regex:/^[VE][\d]{8}$/u',
            'phone' => 'required|regex:/^\+\d{2}-\d{3}-\d{7}$/u',
            'email' => 'required|string|email|max:100'
        ]);
        $person = new Person;
        $person->first_name  = $request->first_name;
        $person->last_name = $request->last_name;
        $person->identification_card = $request->identification_card;
        $person->phone = $request->phone;
        $person->email = $request->email;
        $person->user_id = $request->invisible;
        $person->save();
        return redirect()->route('people.index');
    }

    public function show()
    {

    }

    /**
     * Muesta el formulario de actualización de una persona
     *
     * @author William Páez (paez.william8 at gmail.com)
     * @param [<b>App::Person</b>] $person datos de la persona
     * @return [<b>View</b>] vista con el formulario de actualización junto con la cabecera de configuración
     */
    public function edit(Person $person)
    {
        $header_person = [
            'route' => ['people.update', $person], 'method' => 'PUT', 'role' => 'form', 'class' => 'form',
        ];
        return view('people.edit', compact('person','header_person'));
    }

    /**
     * Actualiza los datos de una persona en la base de datos
     *
     * @author William Páez (paez.william8 at gmail.com)
     * @param [<b>Illuminate::Http::Request</b>] $request datos de la petición
     * @param [<b>App::Person</b>] $person datos de la persona
     * @return [<b>Route</b>] ruta hacia la vista de listar personas
     */
    public function update(Request $request, Person $person)
    {
        $this->validate($request, [
            'first_name' => 'required|max:100',
            'last_name' => 'required|max:100',
            'identification_card' => 'required|regex:/^[VE][\d]{8}$/u',
            'phone' => 'required|regex:/^\+\d{2}-\d{3}-\d{7}$/u',
            'email' => 'required|string|email|max:100'
        ]);
        $person->first_name  = $request->first_name;
        $person->last_name = $request->last_name;
        $person->identification_card = $request->identification_card;
        $person->phone = $request->phone;
        $person->email = $request->email;
        $person->user_id = $request->invisible;
        $person->save();
        return redirect()->route('people.index');
    }

    /**
     * Elimina los datos de una persona
     *
     * @author William Páez (wpaez at cenditel.gob.ve)
     * @param [<b>App::Person</b>] $person datos de la persona
     * @return [<b>Route</<b>] ruta hacia la vista de listar personas
     */
    public function destroy(Person $person)
    {
        $person->delete();
        return back()->with('info', 'Fue eliminado exitosamente');
    }
}
