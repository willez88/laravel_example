@extends('layouts.app')

@section('content')
    <person :person_id="{!! (isset($person)) ? $person->id : "null" !!}">
    </person>
@stop
