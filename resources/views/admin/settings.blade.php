@extends('layouts.app')

@section('content')
    <!-- Row -->
    <div class="row justify-content-center">
        <div class="col-8">
            <div class="card">
                <div class="card-header border-0">
                    <h6>Gestión de Usuarios</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="card shadow-lg bg-white rounded h-100">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <a href="#" title="Registros de Usuarios">
                                                <i class="mdi mdi-48px mdi-account-multiple-plus text-info"></i>
                                                <h6 class="card-subtitle font-weight-bold">Usuarios</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Column -->
                        <!-- Column -->
                        <div class="col-md-2">
                            <div class="card shadow-lg bg-white rounded h-100">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <a href="#" title="Registros de Roles y Permisos">
                                                <i class="mdi mdi-48px mdi-account-convert text-info"></i>
                                                <h6 class="card-subtitle font-weight-bold">Roles / Permisos</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Column -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="row justify-content-center">
        <div class="col-8">
            <div class="card">
                <div class="card-header border-0">
                    <h6>Registros Generales</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="card shadow-lg bg-white rounded h-100">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <countries></countries>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Column -->
                        <!-- Column -->
                        <div class="col-md-2">
                            <div class="card shadow-lg bg-white rounded h-100">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <estates></estates>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Column -->
                        <!-- Column -->
                        <div class="col-md-2">
                            <div class="card shadow-lg bg-white rounded h-100">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <municipalities></municipalities>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Column -->
                        <!-- Column -->
                        <div class="col-md-2">
                            <div class="card shadow-lg bg-white rounded h-100">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <cities></cities>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Column -->
                        <!-- Column -->
                        <div class="col-md-2">
                            <div class="card shadow-lg bg-white rounded h-100">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <parishes></parishes>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Column -->
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
