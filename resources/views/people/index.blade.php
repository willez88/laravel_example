@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>Personas</h4>
                    <div class="text-end">
                        @include('buttons.previous', ['route' => url()->previous()])
                        @include('buttons.new', ['route' => route('people.create')])
                    </div>
                </div>
                <div class="card-body">
                    <person-list
                        route_list="{{ url('people/show/vue-list') }}"
                        route_delete="{{ url('people') }}"
                        route_edit="{{ url('people/{id}/edit') }}"
                        route_show="{{ url('people/{id}') }}">
					</person-list>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
