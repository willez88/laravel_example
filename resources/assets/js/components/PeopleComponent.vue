<template>
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
                <div class="card-body">
                    <div class="alert alert-danger" v-if="errors.length > 0">
                        <ul>
                            <li v-for="error in errors">{{ error }}</li>
                        </ul>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group is-required">
                                <label>Nombres</label>
                                <input type="text" data-toggle="tooltip"
                                       title="Indique los nombres de la persona (requerido)"
                                       class="form-control input-sm" v-model="fillPeople.first_name">
                            </div>
                            <input type="hidden" v-model="fillPeople.id">
                        </div>
                        <div class="col-md-6">
                            <div class="form-group is-required">
                                <label>Apellidos</label>
                                <input type="text" data-toggle="tooltip"
                                       title="Indique los apellidos de la persona (requerido)"
                                       class="form-control input-sm" v-model="fillPeople.last_name">
                                </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group is-required">
                                <label>Cédula de Identidad</label>
                                <input type="text" data-toggle="tooltip"
                                       title="Indique la cédula de la persona (requerido)"
                                       class="form-control input-sm" v-model="fillPeople.identification_card">
                                <small class="form-text text-muted">
                                    V00000000 ó E00000000
                                </small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group is-required">
                                <label>Teléfono</label>
                                <input type="text" data-toggle="tooltip"
                                       title="Indique el teléfono de la persona (requerido)"
                                       class="form-control input-sm" v-model="fillPeople.phone">
                                <small class="form-text text-muted">
                                    +58-416-0000000
                                </small>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group is-required">
                            <label>Correo Electrónico</label>
                                <input type="text" data-toggle="tooltip"
                                       title="Indique el correo de la persona (requerido)"
                                       class="form-control input-sm" v-model="fillPeople.email">
                            </div>
                        </div>
                    </div>
                    <div class="row"
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
                                    <tr v-for="person in people">
                                        <td> {{ person.first_name }} </td>
                                        <td> {{ person.last_name }}  </td>
                                        <td> {{ person.identification_card }} </td>
                                        <td> {{ person.phone }} </td>
                                        <td> {{ person.email }} </td>
                                        <td>
                                            <div class="d-inline-flex">
                                                <button class="btn btn-warning btn-xs rounded-circle" data-toggle="tooltip" title="Actualizar" v-on:click="initPeople(person)"><i class="far fa-edit"></i></button>
                                                <button class="btn btn-danger btn-xs rounded-circle" data-toggle="tooltip" title="Eliminar" v-on:click="deletePeople(person)"><i class="far fa-trash-alt"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <pre>
                            {{ $data }}
                        </pre>
                    </div>
                </div>
                <div class="card-footer text-right">
                    <button type="button" class="btn btn-warning rounded-circle" data-toggle="tooltip"
                        title="Reiniciar Formulario"><i class="fa fa-eraser" v-on:click="reset"></i></button>
                    <button type="submit" class="btn btn-success rounded-circle" data-toggle="tooltip"
                        title="Guardar registro"><i class="fa fa-save" v-on:click="addPeople"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            this.getPeople();
        },
        data() {
            return {
                people: {
                    'id': '',
                    'first_name': '',
                    'last_name': '',
                    'identification_card': '',
                    'phone': '',
                    'email': ''
                },
                'fillPeople': {'id': '', 'first_name': '','last_name': '', 'identification_card': '', 'phone': '', 'email': ''},
                errors: [],
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            /**
             * Método que obtiene los datos de las personas registradas
             *
             * @author  William Páez <paez.william8@gmail.com>
             */
            getPeople() {
                axios.get('people/list').then(response => {
                    this.people = response.data
                });
            },

            /**
             * Método que guarda los datos de una persona
             *
             * @author  William Páez <paez.william8@gmail.com>
             */
            addPeople() {
                if (this.fillPeople.id) {
                    alert('Actualizar');
    				this.updatePeople();
    			}
                else {
                    alert('Crear');
                    axios.post('people', {
                        first_name: this.fillPeople.first_name,
                        last_name: this.fillPeople.last_name,
                        identification_card: this.fillPeople.identification_card,
                        phone: this.fillPeople.phone,
                        email: this.fillPeople.email
                    }).then(response => {
                        this.getPeople();
                        this.reset();
                        this.errors = [];
                    }).catch(error => {
                        this.errors = [];
    					if (typeof(error.response) !="undefined") {
    						for (var index in error.response.data.errors) {
    							if (error.response.data.errors[index]) {
    								this.errors.push(error.response.data.errors[index][0]);
    							}
    						}
    					}
                    });
                }
            },

            /**
             * Método que actualiza los datos de una persona
             *
             * @author  William Páez <paez.william8@gmail.com>
             */
            updatePeople() {
                axios.patch('people/' + this.fillPeople.id, this.fillPeople
                ).then(response => {
                    alert('Prueba');
                    this.getPeople();
                    this.reset();
                }).catch(error => {
                    this.errors = [];
                    if (typeof(error.response) !="undefined") {
                        for (var index in error.response.data.errors) {
                            if (error.response.data.errors[index]) {
                                this.errors.push(error.response.data.errors[index][0]);
                            }
                        }
                    }
                });
            },

            deletePeople(person) {
    			axios.delete('people/' + person.id).then(response => {
    				this.getPeople();
    			});
    		},

            /**
             * Método que actualiza los campos del formulario los datos de una persona de la lista
             *
             * @author  William Páez <paez.william8@gmail.com>
             */
            initPeople(person) {
                this.fillPeople = person;
            },

            /**
             * Método reinicia los campos del formulario
             *
             * @author  William Páez <paez.william8@gmail.com>
             */
            reset() {
                this.fillPeople = {
                    'id': '',
                    'first_name': '',
                    'last_name': '',
                    'identification_card': '',
                    'phone': '',
                    'email': ''
                }
            }
        }
    }
</script>
