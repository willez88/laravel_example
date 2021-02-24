<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header"><h4>Registrar Personas</h4></div>

                    <div class="card-body">
                        <div class="alert alert-danger" v-if="errors.length > 0">
    						<ul>
    							<li v-for="error in errors">{{ error }}</li>
    						</ul>
    					</div>
                        <div class="row">
    						<div class="col-md-4">
    							<div class="form-group is-required">
                                    <label for="first_name">Nombres:</label>
        							<input type="text" id="first_name" placeholder="Nombres"
        								   class="form-control input-sm" v-model="record.first_name" data-toggle="tooltip"
        								   title="Indique los nombres (requerido)">
    								<input type="hidden" v-model="record.id">
    							</div>
    						</div>
    						<div class="col-md-4">
    							<div class="form-group is-required">
                                    <label for="last_name">Apellidos:</label>
        							<input type="text" id="last_name" placeholder="Apellidos"
        								   class="form-control input-sm" v-model="record.last_name" data-toggle="tooltip"
        								   title="Indique los apellidos (requerido)">
    							</div>
    						</div>
    						<div class="col-md-4">
    							<div class="form-group is-required">
                                    <label for="email">Correo Electrónico:</label>
        							<input type="email" id="email" placeholder="Correo Electrónico"
        								   class="form-control input-sm" v-model="record.email" data-toggle="tooltip"
        								   title="Indique el correo electrónico (requerido)">
    							</div>
    						</div>
    					</div>
                        <div class="row">
    						<div class="col-md-4">
    							<div class="form-group is-required">
                                    <label for="id_number">Cédula de Identidad:</label>
        							<input type="text" id="id_number" placeholder="Cédula de Identidad"
        								   class="form-control input-sm" v-model="record.id_number" data-toggle="tooltip"
        								   title="Indique la cédula de identidad (requerido)">
                                    <small class="form-text text-muted">
                                        V00000000 ó E00000000
                                    </small>
    							</div>
    						</div>
    						<div class="col-md-4">
    							<div class="form-group is-required">
                                    <label for="phone">Teléfono:</label>
        							<input type="text" id="phone" placeholder="Teléfono"
        								   class="form-control input-sm" v-model="record.phone" data-toggle="tooltip"
        								   title="Indique el número telefónico (requerido)">
                                    <small class="form-text text-muted">
                                        +58-416-0000000
                                    </small>
    							</div>
    						</div>
    						<div class="col-md-4">
    							<div class="form-group is-required">
                                    <label>País:</label>
									<select2 :options="countries" @input="getEstates"
                                        v-model="record.country_id">
                                    </select2>
    							</div>
    						</div>
    					</div>
                        <div class="row">
    						<div class="col-md-4">
    							<div class="form-group is-required">
                                    <label>Estado:</label>
									<select2 :options="estates" @input="getMunicipalities"
                                        v-model="record.estate_id">
                                    </select2>
    							</div>
    						</div>
    						<div class="col-md-4">
    							<div class="form-group is-required">
                                    <label>Municipio:</label>
									<select2 :options="municipalities" @input="getParishes"
                                        v-model="record.municipality_id">
                                    </select2>
    							</div>
    						</div>
    						<div class="col-md-4">
    							<div class="form-group is-required">
                                    <label>Parroquia:</label>
									<select2 :options="parishes"
                                        v-model="record.parish_id">
                                    </select2>
    							</div>
    						</div>
    					</div>
                        <div class="row">
    						<div class="col-md-4">
    							<div class="form-group is-required">
                                    <label for="address">Dirección:</label>
        							<input type="text" id="address" placeholder="Dirección"
        								   class="form-control input-sm" v-model="record.address" data-toggle="tooltip"
        								   title="Indique la dirección (requerido)">
    							</div>
    						</div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default btn-icon btn-round" data-toggle="tooltip" type="button"
    						title="Borrar datos del formulario" @click="reset"><i class="fas fa-eraser"></i>
    					</button>
    					<button type="button" class="btn btn-warning btn-icon btn-round" data-toggle="tooltip"
    							title="Cancelar y regresar" @click="redirectBack(route_list)">
    						<i class="fas fa-ban"></i>
    					</button>
    	                <button type="button" @click="createRecord('/people')"
    	                	class="btn btn-success btn-icon btn-round">
    	                	<i class="fas fa-save"></i>
    		            </button>
	                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
			person_id: Number,
		},
        data() {
			return {
				record: {
					id: '',
					first_name: '',
                    last_name: '',
                    email: '',
                    id_number: '',
                    phone: '',
                    address: '',
                    country_id: '',
                    estate_id: '',
                    municipality_id: '',
                    parish_id: '',
				},
				errors: [],
                countries: [],
                estates: [],
                municipalities: [],
                parishes: [],
			}
		},
        methods: {
            /**
			 * Método que obtiene los datos de un registro en específico
			 *
			 * @author William Páez <paez.william8@gmail.com>
			 */
            getPerson() {
				axios.get(
					`/people/${this.person_id}`
				).then(response => {
					this.record = response.data.record;
				});
			},

            /**
			 * Método que borra todos los datos del formulario
			 *
			 * @author William Páez <paez.william8@gmail.com>
			 */
			reset() {
				this.record = {
					id: '',
					first_name: '',
                    last_name: '',
                    email: '',
                    id_number: '',
                    phone: '',
                    address: '',
                    parish: '',
				};
			},
        },
        created() {
            this.getCountries();
            this.getEstates();
            this.getMunicipalities();
            this.getParishes();
		},
		mounted() {
			if(this.person_id) {
				this.getPerson();
			}
		},
    }
</script>
