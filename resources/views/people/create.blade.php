@extends('layouts.app')

@section('content')
<div class="row justify-content-center">
	<div class="col-10">
		<div class="card">
			<div class="card-header">
				<h6 class="card-title">Registrar Persona</h6>
				<div class="card-btns">
					<a href="#" class="card-minimize btn btn-card-action btn-round" title="Minimizar"
					   data-toggle="tooltip">
    					<i class="now-ui-icons arrows-1_minimal-up"></i>
    				</a>
				</div>
			</div>
			@include('people.partials.errors')
			{!! Form::open($header_person) !!}
				<div class="card-body">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group {{ $errors->has('first_name') ? ' has-error' : '' }} is-required">
								{!! Form::label('first_name', 'Nombres', []) !!}
								{!! Form::text('first_name','',
									[
										'class' => 'form-control input-sm',
										'data-toggle' => 'tooltip',
										'title' => 'Indique el nombre de la persona'
									]
								) !!}
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group{{ $errors->has('last_name') ? ' has-error' : '' }} is-required">
								{!! Form::label('last_name', 'Apellidos', []) !!}
								{!! Form::text('last_name','',
									[
										'class' => 'form-control input-sm',
										'data-toggle' => 'tooltip',
										'title' => 'Indique los apellidos de la persona'
									]
								) !!}
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-md-6">
							<div class="form-group {{ $errors->has('identification_card') ? ' has-error' : '' }} is-required">
								{!! Form::label('identification_card', 'Cédula de Identidad', []) !!}
								{!! Form::text('identification_card','',
									[
										'class' => 'form-control input-sm',
										'data-toggle' => 'tooltip',
										'title' => 'Indique la cédula de identidad'
									]
								) !!}
								<small class="form-text text-muted">
									V00000000 ó E00000000
								</small>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group{{ $errors->has('phone') ? ' has-error' : '' }} is-required">
								{!! Form::label('phone', 'Teléfono', []) !!}
								{!! Form::text('phone','',
									[
										'class' => 'form-control input-sm',
										'data-toggle' => 'tooltip',
										'title' => 'Indique el teléfono'
									]
								) !!}
								<small class="form-text text-muted">
									+58-416-0000000
								</small>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-md-6">
							<div class="form-group {{ $errors->has('email') ? ' has-error' : '' }} is-required">
								{!! Form::label('email', 'Correo Electrónico', []) !!}
								{!! Form::text('email','',
									[
										'class' => 'form-control input-sm',
										'data-toggle' => 'tooltip',
										'title' => 'Indique el correo electrónico'
									]
								) !!}
							</div>
						</div>
					</div>
					{!! Form::hidden('invisible', Auth::user()->id) !!}
				</div>
				<div class="card-footer text-right">
					{!! Form::button('<i class="fa fa-eraser"></i>', [
						'class' => 'btn btn-default rounded-circle', 'data-toggle' => 'tooltip', 'type' => 'reset',
						'title' => 'Borrar datos del formulario',
					]) !!}
					{!! Form::button('<i class="fa fa-ban"></i>', [
						'class' => 'btn btn-warning rounded-circle', 'data-toggle' => 'tooltip', 'type' => 'button',
						'title' => 'Cancelar y regresar', 'onclick' => 'window.location.href="' . url()->previous() . '"',
					]) !!}
					{!! Form::button('<i class="fa fa-save"></i>', [
						'class' => 'btn btn-success rounded-circle', 'data-toggle' => 'tooltip',
						'title' => 'Guardar registro', 'type' => 'submit'
					]) !!}
				</div>
			{!! Form::close() !!}
		</div>
	</div>
</div>
@stop
