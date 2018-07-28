<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Person;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Auth;

class PersonController extends Controller
{
    public function index()
    {
        error_log(Auth::user()->id);
        $people = Person::where('user_id', Auth::user()->id)->get();
        return view('people.index', compact('people'));
    }

    public function create()
    {
        $header_person = [
            'route' => 'people.store', 'method' => 'POST', 'role' => 'form', 'class' => 'form',
        ];
        return view('people.create', compact('header_person'));
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'first_name' => 'required|max:100',
            'last_name' => 'required|max:100',
            'identification_card' => 'required|regex:/^[VE][\d]{8}$/u',
            'phone' => 'required|regex:/^\+\d{2}-\d{3}-\d{7}$/u',
            'email' => 'required|max:100'
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
        return view('payroll::show');
    }

    public function edit(Person $person)
    {
        $header_person = [
            'route' => ['people.update', $person], 'method' => 'PUT', 'role' => 'form', 'class' => 'form',
        ];
        return view('people.edit', compact('person','header_person'));
    }

    public function update(Request $request, Person $person)
    {
        $this->validate($request, [
            'first_name' => 'required|max:100',
            'last_name' => 'required|max:100',
            'identification_card' => 'required|regex:/^[VE][\d]{8}$/u',
            'phone' => 'required|regex:/^\+\d{2}-\d{3}-\d{7}$/u',
            'email' => 'required|max:100'
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

    public function destroy(Person $person)
    {
        $person->delete();
        return back();
    }
}
