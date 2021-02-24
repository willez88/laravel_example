<template>
    <div>
        <v-client-table :columns="columns" :data="records" :options="table_options">
    		<div slot="id" slot-scope="props" class="text-center">
    			<button @click="showInfo(props.row.id)" v-if="route_show"
        				class="btn btn-info btn-xs btn-icon btn-action btn-tooltip"
        				title="Ver registro" data-toggle="tooltip" data-placement="bottom" type="button">
        			<i class="fas fa-eye"></i>
        		</button>
    			<button @click="editForm(props.row.id)" v-if="!props.row.assigned"
        				class="btn btn-warning btn-xs btn-icon btn-action btn-tooltip"
        				title="Modificar registro" data-toggle="tooltip" data-placement="bottom" type="button">
        			<i class="fas fa-edit"></i>
        		</button>
        		<button @click="deleteRecord(props.index, '')"
    					class="btn btn-danger btn-xs btn-icon btn-action btn-tooltip"
    					title="Eliminar registro" data-toggle="tooltip" data-placement="bottom"
    					type="button">
    				<i class="fas fa-trash"></i>
    			</button>
    		</div>
    	</v-client-table>
        <div class="modal fade" tabindex="-1" role="dialog" id="show_person">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6>
                            <i class="fas fa-eye fa-3x"></i>
                            Información Detallada de Personas
                        </h6>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Nombres</label>
                                    <input type="text" data-toggle="tooltip" class="form-control input-sm"
                                        disabled="true" v-model="record.first_name">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Apellidos</label>
                                    <input type="text" data-toggle="tooltip" class="form-control input-sm"
                                        disabled="true" v-model="record.last_name">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Correo Electrónico</label>
                                    <input type="text" data-toggle="tooltip" class="form-control input-sm"
                                        disabled="true" v-model="record.email">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Cédula de Identidad</label>
                                    <input type="text" data-toggle="tooltip" class="form-control input-sm"
                                        disabled="true" v-model="record.id_number">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Teléfono</label>
                                    <input type="text" data-toggle="tooltip" class="form-control input-sm"
                                        disabled="true" v-model="record.phone">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>País</label>
                                    <input type="text" data-toggle="tooltip" class="form-control input-sm"
                                        disabled="true" id="country">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Estado</label>
                                    <input type="text" data-toggle="tooltip" class="form-control input-sm"
                                        disabled="true" id="estate">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Municipio</label>
                                    <input type="text" data-toggle="tooltip" class="form-control input-sm"
                                        disabled="true" id="municipality">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Parroquia</label>
                                    <input type="text" data-toggle="tooltip" class="form-control input-sm"
                                        disabled="true" id="parish">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Dirección</label>
                                    <input type="text" data-toggle="tooltip" class="form-control input-sm"
                                        disabled="true" v-model="record.address">
                                </div>
                            </div>
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
				records: [],
                record: [],
				columns: ['first_name', 'last_name', 'email', 'id'],
			}
		},

        created() {
			this.table_options.headings = {
                'first_name': 'Nombres',
                'last_name': 'Apellidos',
				'email': 'Correo Electrónico',
				'id': 'Acción',
			};
            this.table_options.sortable = ['first_name', 'last_name'];
			this.table_options.filterable = ['first_name', 'last_name'];
            this.table_options.columnsClasses = {
				'first_name': 'col-md-4',
                'last_name': 'col-md-4',
                'email': 'col-md-2',
				'id': 'col-md-2',
			};
		},

		mounted() {
			this.initRecords(this.route_list, '');
		},

        methods: {
            reset() {

            },

            /**
			 * Método que obtiene los datos de un registro en específico para mostrarlo en un modal
			 *
			 * @author William Páez <paez.william8@gmail.com>
			 */
            showInfo(id) {
                axios.get(`/people/${id}`).then(response => {
					this.record = response.data.record;
                    $('#country').val(this.record.parish.municipality.estate.country.name);
                    $('#estate').val(this.record.parish.municipality.estate.name);
                    $('#municipality').val(this.record.parish.municipality.name);
                    $('#parish').val(this.record.parish.name);
				});
                $('#show_person').modal('show');
            }
        }
    };
</script>
