<template>
	<div class="text-center">
		<a class="btn-simplex btn-simplex-md btn-simplex-primary" href=""
		   title="Registros de países" data-toggle="tooltip"
		   @click="addRecord('add_country', 'countries', $event)">
           <i class="fas fa-eye fa-3x"></i>
		   <span>Países</span>
		</a>
		<div class="modal fade text-left" tabindex="-1" role="dialog" id="add_country">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h6>
							<i class="fas fa-eye fa-3x"></i>
							País
						</h6>
					</div>
					<div class="modal-body">
						<div class="alert alert-danger" v-if="errors.length > 0">
							<ul>
								<li v-for="error in errors">{{ error }}</li>
							</ul>
						</div>
                        <div class="row">
                            <div class="col-md-12">
        						<div class="form-group is-required">
        							<label for="name">Nombre:</label>
        							<input type="text" id="name" placeholder="Nombre"
        								   class="form-control input-sm" v-model="record.name" data-toggle="tooltip"
        								   title="Indique el nombre (requerido)">
        							<input type="hidden" v-model="record.id">
        	                    </div>
                            </div>
                        </div>
	                </div>
					<div class="modal-footer">
	                	<div class="form-group">
	                		<modal-form-buttons :saveRoute="'countries'"></modal-form-buttons>
	                	</div>
	                </div>
	                <div class="modal-body modal-table">
	                	<v-client-table :columns="columns" :data="records" :options="table_options">
	                		<div slot="id" slot-scope="props" class="text-center">
	                			<button @click="initUpdate(props.row.id, $event)"
		                				class="btn btn-warning btn-xs btn-icon btn-action"
		                				title="Modificar registro" data-toggle="tooltip" type="button">
		                			<i class="fas fa-edit"></i>
		                		</button>
		                		<button @click="deleteRecord(props.row.id, 'countries')"
										class="btn btn-danger btn-xs btn-icon btn-action"
										title="Eliminar registro" data-toggle="tooltip"
										type="button">
									<i class="fas fa-trash"></i>
								</button>
	                		</div>
	                	</v-client-table>
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
				},
				errors: [],
				records: [],
				columns: ['name', 'id'],
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
				};
			},
		},
		created() {
			this.table_options.headings = {
				name: 'Nombre',
				id: 'Acción',
			};
			this.table_options.sortable = ['name'];
			this.table_options.filterable = ['name'];
			this.table_options.columnsClasses = {
				name: 'col-md-10',
				id: 'col-md-2',
			};
		},
	};
</script>
