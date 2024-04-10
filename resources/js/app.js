/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import '../sass/app.scss';
import '../css/app.css';

import vSelect from 'vue-select';
import swal from 'sweetalert';

import { createApp } from 'vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Componente genérico para el uso de botones en formularios de ventanas modales
 *
 * @author William Páez <paez.william8@gmail.com>
 */
import ButtonsFormModalComponent from './components/admin/ButtonsFormModalComponent.vue';
app.component('modal-form-buttons', ButtonsFormModalComponent);

/**
 * Componente genérico para el uso de listas desplegables con select2 y selects dependientes
 *
 * @author William Páez <paez.william8@gmail.com>
 */
app.component('v-select', vSelect);

/**
 * Componente para listar, crear, actualizar y borrar datos de países
 *
 * @author William Páez <paez.william8@gmail.com>
 */
import CountriesComponent from './components/admin/CountriesComponent.vue';
app.component('countries', CountriesComponent);

/**
 * Componente para listar, crear, actualizar y borrar datos de estados
 *
 * @author William Páez <paez.william8@gmail.com>
 */
import EstatesComponent from './components/admin/EstatesComponent.vue';
app.component('estates', EstatesComponent);

/**
 * Componente para listar, crear, actualizar y borrar datos de municipios
 *
 * @author William Páez <paez.william8@gmail.com>
 */
import MunicipalitiesComponent from './components/admin/MunicipalitiesComponent.vue';
app.component('municipalities', MunicipalitiesComponent);

/**
 * Componente para listar, crear, actualizar y borrar datos de ciudades
 *
 * @author William Páez <paez.william8@gmail.com>
 */
import CitiesComponent from './components/admin/CitiesComponent.vue';
app.component('cities', CitiesComponent);

/**
 * Componente para listar, crear, actualizar y borrar datos de parroquias
 *
 * @author William Páez <paez.william8@gmail.com>
 */
import ParishesComponent from './components/admin/ParishesComponent.vue';
app.component('parishes', ParishesComponent);

/**
 * Componente para mostrar listado de personas
 *
 * @author William Páez <paez.william8@gmail.com>
 */
import PersonListComponent from './components/PersonListComponent.vue';
app.component('person-list', PersonListComponent);

/**
 * Componente para registrar o actualizar personas
 *
 * @author William Páez <paez.william8@gmail.com>
 */
 import PersonComponent from './components/PersonComponent.vue';
 app.component('person', PersonComponent);

 /**
 * Opciones de configuración global para utilizar en todos los componentes vuejs de la aplicación
 *
 * @author William Páez <paez.william8@gmail.com>
 * @param  {object} methods Métodos generales a implementar en CRUDS
 */
app.mixin({
    data() {
        return {
            /**
			 * Opciones generales a implementar en tablas
			 * @type {JSON}
			 */
			table_options: {
				pagination: { edge: true },
				//filterByColumn: true,
				highlightMatches: true,
				texts: {
					filter: "Buscar:",
					filterBy: 'Buscar por {column}',
					//count:'Página {page}',
					count: ' ',
					first: 'PRIMERO',
					last: 'ÚLTIMO',
					limit: 'Registros',
					//page: 'Página:',
					noResults: 'No existen registros',
				},
				sortIcon: {
					is: 'fa-sort cursor-pointer',
					base: 'fa',
					up: 'fa-sort-up cursor-pointer',
					down: 'fa-sort-down cursor-pointer'
				},
			},
        }
    },
    props: {
		route_list: {
			type: String,
			required: false,
			default: ''
		},
		route_create: {
			type: String,
			required: false,
			default: ''
		},
		route_edit: {
			type: String,
			required: false,
			default: ''
		},
		route_update: {
			type: String,
			required: false,
			default: ''
		},
		route_delete: {
			type: String,
			required: false,
			default: ''
		},
		route_show: {
			type: String,
			required: false,
			default: ''
		},
	},
    methods: {
        /**
		 * Inicializa todos los campos de formularios a un valor vacío
		 *
		 * @author Roldan Vargas <roldandvg@gmail.com>
		 */
		clearForm() {
			let vm = this;
			if (typeof(vm.record) !== "undefined") {
				for (var index in vm.record) {
					vm.record[index] = '';
				}
			}
		},

		/**
		 * Inicializa los registros base del formulario
		 *
		 * @author Roldan Vargas <roldandvg@gmail.com>
		 *
		 * @param {string}  url       Ruta que obtiene los datos a ser mostrado en listados
		 * @param {string}  modal_id  Identificador del modal a mostrar con la información solicitada
         */
		initRecords(url, modal_id) {
			this.errors = [];
			this.reset();
			const vm = this;
			/*url = (!url.includes('http://') || !url.includes('http://'))
				  ? `${window.app_url}${(url.startsWith('/'))?'':'/'}${url}` : url;*/
			axios.get(url).then(response => {
				if (typeof(response.data.records) !== "undefined") {
					vm.records = response.data.records;
				}
				if ($("#" + modal_id).length) {
					$("#" + modal_id).modal('show');
				}
			}).catch(error => {
				if (typeof(error.response) !== "undefined") {
					if (error.response.status == 403) {
						vm.showMessage(
							'custom', 'Acceso Denegado', 'danger', 'screen-error', error.response.data.message
						);
					}
					else {
						vm.logs('resources/js/all.js', 343, error, 'initRecords');
					}
				}
			});
		},

		/**
		 * Método que obtiene los registros a mostrar
		 *
		 * @author Roldan Vargas <roldandvg@gmail.com>
		 *
		 * @param {string} url Ruta que obtiene todos los registros solicitados
		 */
		readRecords(url) {
			const vm = this;
			vm.loading = true;
			/*url = (!url.includes('http://') || !url.includes('http://'))
				  ? `${window.app_url}${(url.startsWith('/'))?'':'/'}${url}` : url;*/

			axios.get(url).then(response => {
				if (typeof(response.data.records) !== "undefined") {
					vm.records = response.data.records;
				}
				vm.loading = false;
			}).catch(error => {
				vm.logs('mixins.js', 285, error, 'readRecords');
			});
		},

		/**
		 * Método que permite mostrar una ventana emergente con la información registrada
		 * y la nueva a registrar
		 *
		 * @author Roldan Vargas <roldandvg@gmail.com>
		 *
		 * @param {string} modal_id Identificador de la ventana modal
		 * @param {string} url      Ruta para acceder a los datos solicitados
		 * @param {object} event    Objeto que gestiona los eventos
		 */
		async addRecord(modal_id, url, event) {
			event.preventDefault();
            this.loading = true;
            await this.initRecords(url, modal_id);
            this.loading = false;
		},

		/**
		 * Método que permite crear o actualizar un registro
		 *
		 * @author Roldan Vargas <roldandvg@gmail.com>
		 *
		 * @param  {string} url    Ruta de la acción a ejecutar para la creación o actualización de datos
		 * @param  {string} list   Condición para establecer si se cargan datos en un listado de tabla.
		 *                         El valor por defecto es verdadero.
		 * @param  {string} reset  Condición que evalúa si se inicializan datos del formulario.
		 *                         El valor por defecto es verdadero.
		 */
		createRecord(url, list = true, reset = true) {
			const vm = this;
			/*url = (!url.includes('http://') || !url.includes('http://'))
				  ? `${window.app_url}${(url.startsWith('/'))?'':'/'}${url}` : url;*/

			if (vm.record.id) {
				vm.updateRecord(url);
			}
			else {
				vm.loading = true;
				var fields = {};
				for (var index in vm.record) {
					fields[index] = vm.record[index];
				}
				axios.post(url, fields).then(response => {
					if (typeof(response.data.redirect) !== "undefined") {
						location.href = response.data.redirect;
					}
					else {
						vm.errors = [];
						if (reset) {
							vm.reset();
						}
						if (list) {
							vm.readRecords(url);
						}
						vm.loading = false;
						vm.showMessage('store');
					}

				}).catch(error => {
					vm.errors = [];

					if (typeof(error.response) !="undefined") {
						for (var index in error.response.data.errors) {
							if (error.response.data.errors[index]) {
								vm.errors.push(error.response.data.errors[index][0]);
							}
						}
					}
					vm.loading = false;
				});
			}

		},

		/**
		 * Redirecciona al formulario de actualización de datos
		 *
		 * @author Roldan Vargas <roldandvg@gmail.com>
		 *
		 * @param  {integer} id Identificador del registro a actualizar
		 */
		editForm(id) {
			location.href = (this.route_edit.indexOf("{id}") >= 0)
							? this.route_edit.replace("{id}", id)
							: this.route_edit + '/' + id;
		},

		/**
		 * Método que carga el formulario con los datos a modificar
		 *
		 * @author Roldan Vargas <roldandvg@gmail.com>
		 *
		 * @param  {integer} index Identificador del registro a ser modificado
		 * @param {object} event   Objeto que gestiona los eventos
		 */
		initUpdate(id, event) {
			let vm = this;
			vm.errors = [];

			let recordEdit = JSON.parse(JSON.stringify(vm.records.filter((rec) => {
				return rec.id === id;
			})[0])) || vm.reset();

			vm.record = recordEdit;

			/**
			 * Recorre todos los campos para determinar si existe un elemento booleano para, posteriormente,
			 * seleccionarlo en el formulario en el caso de que se encuentre activado en BD
			 */
			$.each(vm.record, function(el, value) {
				if ($("input[name=" + el + "]").hasClass('bootstrap-switch')) {
					/** verifica los elementos bootstrap-switch para seleccionar el que corresponda según los registros del sistema */
					$("input[name=" + el + "]").each(function() {
						if ($(this).val() === value) {
							$(this).bootstrapSwitch('state', value, true)
						}

					});
				}
				if (value === true || value === false) {
					$("input[name=" + el + "].bootstrap-switch").bootstrapSwitch('state', value, true);
				}
				/*if (el.substring(el.length - 3, el.length) === "_id") {
					$("#" + el + ".select2").val(value);
				}*/
			});

			event.preventDefault();
		},
		/**
		 * Método que permite actualizar información
		 *
		 * @author Roldan Vargas <roldandvg@gmail.com>
		 *
		 * @param  {string} url Ruta de la acción que modificará los datos
		 */
		updateRecord(url) {
			const vm = this;
			vm.loading = true;
			var fields = {};
			/*url = (!url.includes('http://') || !url.includes('http://'))
				  ? `${window.app_url}${(url.startsWith('/'))?'':'/'}${url}` : url;*/

			for (var index in vm.record) {
				fields[index] = vm.record[index];
			}
			axios.patch(`${url}${(url.endsWith('/'))?'':'/'}${vm.record.id}`, fields).then(response => {
				if (typeof(response.data.redirect) !== "undefined") {
					location.href = response.data.redirect;
				}
				else {
					vm.readRecords(url);
					vm.reset();
					vm.loading = false;
					vm.showMessage('update');
				}

			}).catch(error => {
				vm.errors = [];

				if (typeof(error.response) !="undefined") {
					for (var index in error.response.data.errors) {
						if (error.response.data.errors[index]) {
							vm.errors.push(error.response.data.errors[index][0]);
						}
					}
				}
				vm.loading = false;
			});
		},

		/**
		 * Método que muestra datos de un registro seleccionado
		 *
		 * @author Roldan Vargas <roldandvg@gmail.com>
		 *
		 * @param  {integer} id Identificador del registro a mostrar
		 */
		showRecord(id) {
			if (typeof(this.route_show) !== "undefined" && this.route_show) {
				if (this.route_show.indexOf("{id}") >= 0) {
					location.href = this.route_show.replace("{id}", id);
				}
				else {
					location.href = this.route_show + '/' + id;
				}
			}
		},

		/**
		 * Método para la eliminación de registros
		 *
		 * @author William Páez <paez.william8@gmail.com>
		 *
		 * @param  {integer} id    ID del Elemento seleccionado para su eliminación
		 * @param  {string}  url   Ruta que ejecuta la acción para eliminar un registro
		 */
		deleteRecord(id, url) {
			const vm = this;
			swal("Good job!", "You clicked the button!", "success");
			/** @type {string} URL que atiende la petición de eliminación del registro */
			var url = (url)?url:vm.route_delete;
			/*url = (!url.includes('http://') || !url.includes('http://'))
				  ? `${window.app_url}${(url.startsWith('/'))?'':'/'}${url}` : url;*/

			swal({
				title: "¿Está seguro?",
				text: "Una vez borrado, ud no podra recuperar este dato!",
				icon: "warning",
				buttons: true,
				dangerMode: true,
			}).then((willDelete) => {
				if (willDelete) {
					/** @type {object} Objeto con los datos del registro a eliminar */
					let recordDelete = JSON.parse(JSON.stringify(vm.records.filter((rec) => {
						return rec.id === id;
					})[0]));

					axios.delete(`${url}${url.endsWith('/')?'':'/'}${id}`).then(response => {
						if (typeof(response.data.error) !== "undefined") {
							/** Muestra un mensaje de error si sucede algún evento en la eliminación */
							vm.showMessage('custom', 'Alerta!', 'warning', 'screen-error', response.data.message);
							return false;
						}
						/** @type {array} Arreglo de registros filtrado sin el elemento eliminado */
						vm.records = JSON.parse(JSON.stringify(vm.records.filter((rec) => {
							return rec.id !== id;
						})));
					}).catch(error => {
						console.error('Error eliminando dato')
						// vm.logs('mixins.js', 498, error, 'deleteRecord');
					});
					swal("El dato ha sido eliminado!", {
						icon: "success",
					});
				} else {
					swal("Se canceló la operación!");
				}
			});
		},

        /**
		 * Redirecciona a una url esecífica si fue suministrada
		 *
		 * @author Roldan Vargas <roldandvg@gmail.com>
		 *
		 * @param  {string} url URL a redireccionar.
		 */
		redirectBack(url) {
			location.href = url;
		},

        /**
		 * Método que obtiene los países registrados
		 *
		 * @author William Páez <paez.william8@gmail.com>
		 */
		getCountries() {
			const vm = this;
			axios.get('/admin/get-countries').then(response => {
				vm.countries = response.data;
			});
		},

        /**
		 * Obtiene los estados del país seleccionado
		 *
		 * @author William Páez <paez.william8@gmail.com>
		 */
		getEstates() {
			const vm = this;
			vm.estates = [];
			if (vm.record.country_id) {
				axios.get(`/admin/get-estates/${vm.record.country_id}`).then(response => {
					vm.estates = response.data;
				});
			}
		},

        /**
		 * Obtiene los municipios del estado seleccionado
		 *
		 * @author William Páez <paez.william8@gmail.com>
		 */
		getMunicipalities() {
			const vm = this;
			vm.municipalities = [];
			if (vm.record.estate_id) {
				axios.get(`/admin/get-municipalities/${vm.record.estate_id}`).then(response => {
					vm.municipalities = response.data;
				});
			}
		},

        /**
		 * Obtiene las parroquias del municipio seleccionado
		 *
		 * @author William Páez <paez.william8@gmail.com>
		 */
		getParishes() {
			const vm = this;
			vm.parishes = [];
			if (vm.record.municipality_id) {
				axios.get(`/admin/get-parishes/${vm.record.municipality_id}`).then(response => {
					vm.parishes = response.data;
				});
			}
		},
    }
});

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
