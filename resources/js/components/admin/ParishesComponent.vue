<template>
	<div class="text-center">
		<a class="btn-simplex btn-simplex-md btn-simplex-primary" href=""
		   title="Registros de parroquias" data-toggle="tooltip"
		   @click="addRecord('add_parish', 'parishes', $event)">
           <i class="fas fa-eye fa-3x"></i>
		   <span>Parroquias</span>
		</a>
		<div class="modal fade text-left" tabindex="-1" role="dialog" id="add_parish">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h6>
							<i class="fas fa-eye fa-3x"></i>
							Parroquia
						</h6>
					</div>
					<div class="modal-body">
						<div class="alert alert-danger" v-if="errors.length > 0">
							<ul>
								<li v-for="error in errors">{{ error }}</li>
							</ul>
						</div>
                        <div class="row">
                            <div class="col-md-6">
        						<div class="form-group is-required">
                                    <label>País:</label>
									<v-select
										label="text"
										:options="countries"
										:reduce="country => country.id"
										@option:selected="getEstates"
										v-model="record.country_id">
									</v-select>
        							<input type="hidden" v-model="record.id">
        	                    </div>
                            </div>
                            <div class="col-md-6">
        						<div class="form-group is-required">
                                    <label>Estado:</label>
									<v-select
										label="text"
										:options="estates"
										:reduce="estate => estate.id"
										@option:selected="getMunicipalities"
										v-model="record.estate_id">
									</v-select>
        	                    </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
        						<div class="form-group is-required">
                                    <label>Municipio:</label>
									<v-select
										label="text"
										:options="municipalities"
										:reduce="municipality => municipality.id"
										v-model="record.municipality_id">
									</v-select>
        	                    </div>
                            </div>
                            <div class="col-md-6">
        						<div class="form-group is-required">
        							<label for="name">Código:</label>
        							<input type="text" id="code" placeholder="Código"
        								   class="form-control input-sm" v-model="record.code" data-toggle="tooltip"
        								   title="Indique el código (requerido)">
        	                    </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
        						<div class="form-group is-required">
        							<label for="name">Nombre:</label>
        							<input type="text" id="name" placeholder="Nombre"
        								   class="form-control input-sm" v-model="record.name" data-toggle="tooltip"
        								   title="Indique el nombre (requerido)">
        	                    </div>
                            </div>
                        </div>
	                </div>
					<div class="modal-footer">
	                	<div class="form-group">
	                		<modal-form-buttons :saveRoute="'parishes'"></modal-form-buttons>
	                	</div>
	                </div>
	                <div class="modal-body modal-table">
	                	<div class="table-responsive-sm">
							<table class="table table-striped">
								<thead>
									<tr class="text-center">
										<th scope="col">País</th>
										<th scope="col">Estado</th>
										<th scope="col">Municipio</th>
										<th scope="col">Código</th>
										<th scope="col">Nombre</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="record in records">
										<td>{{ record.municipality.estate.country.name }}</td>
										<td>{{ record.municipality.estate.name }}</td>
										<td>{{ record.municipality.name }}</td>
										<td>{{ record.code }}</td>
										<td>{{ record.name }}</td>
										<td class="text-center">
											<button @click="getParish(record.id)"
												class="btn btn-warning btn-xs btn-icon btn-action"
												title="Modificar registro" data-toggle="tooltip" type="button">
												<i class="fas fa-edit"></i>
											</button>
											<button @click="deleteRecord(record.id, 'estates')"
												class="btn btn-danger btn-xs btn-icon btn-action" title="Eliminar registro"
												data-toggle="tooltip" type="button">
												<i class="fas fa-trash"></i>
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
	                </div>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				record: {
					id: '',
					name: '',
                    code: '',
                    country_id: '',
                    estate_id: '',
                    municipality_id: '',
				},
				errors: [],
				records: [],
                countries: [],
                estates: [],
                municipalities: [],
			}
		},
		methods: {
			/**
			 * Método que borra todos los datos del formulario
			 *
			 * @author William Páez <paez.william8@gmail.com>
			 */
			reset() {
				this.record = {
					id: '',
					name: '',
                    code: '',
                    country_id: '',
                    estate_id: '',
                    municipality_id: '',
				};
			},

			/**
			 * Método que obtiene los datos de un registro en específico
			 *
			 * @author William Páez <paez.william8@gmail.com>
			 */
			 getParish(id) {
				const vm = this;
				axios.get(
					`/admin/parishes/${id}`
				).then(response => {
					vm.record = response.data.record;
					vm.record.country_id = response.data.record.municipality.estate.country.id;
					vm.record.estate_id = response.data.record.municipality.estate.id;
					vm.record.municipality_id = response.data.record.municipality.id;
					vm.getCountries();
					vm.getEstates();
					vm.getMunicipalities();
				});
			},
		},
		created() {
			this.getCountries();
            this.getEstates();
            this.getMunicipalities();
		},
	};
</script>
