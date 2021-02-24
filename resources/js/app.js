/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import {ServerTable, ClientTable, Event} from 'vue-tables-2';
Vue.use(ClientTable);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Componente genérico para el uso de botones en formularios de ventanas modales
 *
 * @author Roldan Vargas <roldandvg@gmail.com>
 */
Vue.component('modal-form-buttons', () => import(
    /* webpackChunkName: "modal-form-buttons" */
    './components/admin/ButtonsFormModalComponent.vue'
));

/**
 * Componente genérico para el uso de listas desplegables con select2 y selects dependientes
 *
 * @author Roldan Vargas <roldandvg@gmail.com>
 */
Vue.component('select2', () => import(
    /* webpackChunkName: "selects" */
    './components/admin/SelectsComponent.vue'
));

/**
 * Componente para listar, crear, actualizar y borrar datos de países
 *
 * @author William Páez <paez.william8@gmail.com>
 */
Vue.component('countries', () => import(
    /* webpackChunkName: "countries" */
    './components/admin/CountriesComponent.vue'
));

/**
 * Componente para listar, crear, actualizar y borrar datos de estados
 *
 * @author William Páez <paez.william8@gmail.com>
 */
Vue.component('estates', () => import(
    /* webpackChunkName: "estates" */
    './components/admin/EstatesComponent.vue'
));

/**
 * Componente para listar, crear, actualizar y borrar datos de municipios
 *
 * @author William Páez <paez.william8@gmail.com>
 */
Vue.component('municipalities', () => import(
    /* webpackChunkName: "municipalities" */
    './components/admin/MunicipalitiesComponent.vue'
));

/**
 * Componente para listar, crear, actualizar y borrar datos de ciudades
 *
 * @author William Páez <paez.william8@gmail.com>
 */
Vue.component('cities', () => import(
    /* webpackChunkName: "cities" */
    './components/admin/CitiesComponent.vue'
));

/**
 * Componente para listar, crear, actualizar y borrar datos de parroquias
 *
 * @author William Páez <paez.william8@gmail.com>
 */
Vue.component('parishes', () => import(
    /* webpackChunkName: "parishes" */
    './components/admin/ParishesComponent.vue'
));

/**
 * Componente para mostrar listado de personas
 *
 * @author William Páez <paez.william8@gmail.com>
 */
Vue.component('person-list', () => import(
    /* webpackChunkName: "person-list" */
    './components/PersonListComponent.vue')
);

/**
 * Componente para registrar o actualizar personas
 *
 * @author William Páez <paez.william8@gmail.com>
 */
Vue.component('person', () => import(
    /* webpackChunkName: "person" */
    './components/PersonComponent.vue')
);

/**
 * Opciones de configuración global para utilizar en todos los componentes vuejs de la aplicación
 *
 * @author William Páez <paez.william8@gmail.com>
 * @param  {object} methods Métodos generales a implementar en CRUDS
 */
Vue.mixin({
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
		 * @author Roldan Vargas <roldandvg@gmail.com>
		 *
		 * @param  {integer} id    ID del Elemento seleccionado para su eliminación
		 * @param  {string}  url   Ruta que ejecuta la acción para eliminar un registro
		 */
		deleteRecord(id, url) {
			const vm = this;
			/** @type {string} URL que atiende la petición de eliminación del registro */
			var url = (url)?url:vm.route_delete;
			/*url = (!url.includes('http://') || !url.includes('http://'))
				  ? `${window.app_url}${(url.startsWith('/'))?'':'/'}${url}` : url;*/

			bootbox.confirm({
				title: "¿Eliminar registro?",
				message: "¿Esta seguro de eliminar este registro?",
				buttons: {
					cancel: {
						label: '<i class="fa fa-times"></i> Cancelar'
					},
					confirm: {
						label: '<i class="fa fa-check"></i> Confirmar'
					}
				},
				callback: function (result) {
					if (result) {
						/** @type {object} Objeto con los datos del registro a eliminar */
						let recordDelete = JSON.parse(JSON.stringify(vm.records.filter((rec) => {
							return rec.id === id;
						})[0]));

						axios.delete(`${url}${url.endsWith('/')?'':'/'}${recordDelete.id}`).then(response => {
							if (typeof(response.data.error) !== "undefined") {
								/** Muestra un mensaje de error si sucede algún evento en la eliminación */
								vm.showMessage('custom', 'Alerta!', 'warning', 'screen-error', response.data.message);
								return false;
							}
							/** @type {array} Arreglo de registros filtrado sin el elemento eliminado */
							vm.records = JSON.parse(JSON.stringify(vm.records.filter((rec) => {
								return rec.id !== id;
							})));
							vm.showMessage('destroy');
						}).catch(error => {
							vm.logs('mixins.js', 498, error, 'deleteRecord');
						});
					}
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
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
