@extends('layouts.app')

@section('content')
	<div class="row justify-content-center">
		<div class="col-10">
			<div class="card">
				<div class="card-header">
					<h6 class="card-title">Personas</h6>
					<div class="card-btns">
						<a href="#" class="card-minimize btn btn-card-action btn-round" title="Minimizar"
						   data-toggle="tooltip">
							<i class="now-ui-icons arrows-1_minimal-up"></i>
						</a>
					</div>
				</div>
				<div class="card-body">
					<a href="{{ route('people.create') }}" class='btn btn-success btn-round'>Registrar</a>
					<div class="table-responsive">
					<table class="table table-hover table-striped">
						<thead>
							<tr>
								<th>Nombres</th>
								<th>Apellidos</th>
								<th>Cédula de Identidad</th>
								<th>Teléfono</th>
								<th>Correo Electrónico</th>
								<th width="10%">Acciones</th>
							</tr>
						</thead>
						<tbody>
							@foreach($people as $person)
								<tr>
									<td> {{ $person->first_name }} </td>
									<td> {{ $person->last_name }} </td>
									<td> {{ $person->identification_card }} </td>
									<td> {{ $person->phone }} </td>
									<td> {{ $person->email }} </td>
									<td>
										<div class="d-inline-flex">
											<a href="{{ route('people.edit', $person) }}" class="btn btn-warning btn-xs rounded-circle" data-toggle="tooltip" title="Actualizar"><i class="far fa-edit"></i></a>
											{!! Form::open(['route' => ['people.destroy', $person], 'method' => 'DELETE']) !!}
												<button class="btn btn-danger btn-xs rounded-circle"><i class="far fa-trash-alt"></i></button>
											{!! Form::close() !!}
										</div>
									</td>
								</tr>
							@endforeach
						</tbody>
					</table>
					</div>
				</div>
			</div>
		</div>
	</div>
@stop
