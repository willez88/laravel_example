(self["webpackChunk"] = self["webpackChunk"] || []).push([["person"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    person_id: Number
  },
  data: function data() {
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
        parish_id: ''
      },
      errors: [],
      countries: [],
      estates: [],
      municipalities: [],
      parishes: []
    };
  },
  methods: {
    /**
    * Método que obtiene los datos de un registro en específico
    *
    * @author William Páez <paez.william8@gmail.com>
    */
    getPerson: function getPerson() {
      var _this = this;

      axios.get("/people/".concat(this.person_id)).then(function (response) {
        _this.record = response.data.record;
      });
    },

    /**
    * Método que borra todos los datos del formulario
    *
    * @author William Páez <paez.william8@gmail.com>
    */
    reset: function reset() {
      this.record = {
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        id_number: '',
        phone: '',
        address: '',
        parish: ''
      };
    }
  },
  created: function created() {
    this.getCountries();
    this.getEstates();
    this.getMunicipalities();
    this.getParishes();
  },
  mounted: function mounted() {
    if (this.person_id) {
      this.getPerson();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/PersonComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/PersonComponent.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PersonComponent_vue_vue_type_template_id_107dc98d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonComponent.vue?vue&type=template&id=107dc98d& */ "./resources/js/components/PersonComponent.vue?vue&type=template&id=107dc98d&");
/* harmony import */ var _PersonComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/PersonComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PersonComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PersonComponent_vue_vue_type_template_id_107dc98d___WEBPACK_IMPORTED_MODULE_0__.render,
  _PersonComponent_vue_vue_type_template_id_107dc98d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PersonComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PersonComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/PersonComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/PersonComponent.vue?vue&type=template&id=107dc98d&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/PersonComponent.vue?vue&type=template&id=107dc98d& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonComponent_vue_vue_type_template_id_107dc98d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonComponent_vue_vue_type_template_id_107dc98d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonComponent_vue_vue_type_template_id_107dc98d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonComponent.vue?vue&type=template&id=107dc98d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonComponent.vue?vue&type=template&id=107dc98d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonComponent.vue?vue&type=template&id=107dc98d&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonComponent.vue?vue&type=template&id=107dc98d& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _vm.errors.length > 0
              ? _c("div", { staticClass: "alert alert-danger" }, [
                  _c(
                    "ul",
                    _vm._l(_vm.errors, function(error) {
                      return _c("li", [_vm._v(_vm._s(error))])
                    }),
                    0
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group is-required" }, [
                  _c("label", { attrs: { for: "first_name" } }, [
                    _vm._v("Nombres:")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.record.first_name,
                        expression: "record.first_name"
                      }
                    ],
                    staticClass: "form-control input-sm",
                    attrs: {
                      type: "text",
                      id: "first_name",
                      placeholder: "Nombres",
                      "data-toggle": "tooltip",
                      title: "Indique los nombres (requerido)"
                    },
                    domProps: { value: _vm.record.first_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.record, "first_name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.record.id,
                        expression: "record.id"
                      }
                    ],
                    attrs: { type: "hidden" },
                    domProps: { value: _vm.record.id },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.record, "id", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group is-required" }, [
                  _c("label", { attrs: { for: "last_name" } }, [
                    _vm._v("Apellidos:")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.record.last_name,
                        expression: "record.last_name"
                      }
                    ],
                    staticClass: "form-control input-sm",
                    attrs: {
                      type: "text",
                      id: "last_name",
                      placeholder: "Apellidos",
                      "data-toggle": "tooltip",
                      title: "Indique los apellidos (requerido)"
                    },
                    domProps: { value: _vm.record.last_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.record, "last_name", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group is-required" }, [
                  _c("label", { attrs: { for: "email" } }, [
                    _vm._v("Correo Electrónico:")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.record.email,
                        expression: "record.email"
                      }
                    ],
                    staticClass: "form-control input-sm",
                    attrs: {
                      type: "email",
                      id: "email",
                      placeholder: "Correo Electrónico",
                      "data-toggle": "tooltip",
                      title: "Indique el correo electrónico (requerido)"
                    },
                    domProps: { value: _vm.record.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.record, "email", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group is-required" }, [
                  _c("label", { attrs: { for: "id_number" } }, [
                    _vm._v("Cédula de Identidad:")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.record.id_number,
                        expression: "record.id_number"
                      }
                    ],
                    staticClass: "form-control input-sm",
                    attrs: {
                      type: "text",
                      id: "id_number",
                      placeholder: "Cédula de Identidad",
                      "data-toggle": "tooltip",
                      title: "Indique la cédula de identidad (requerido)"
                    },
                    domProps: { value: _vm.record.id_number },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.record, "id_number", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "form-text text-muted" }, [
                    _vm._v(
                      "\n                                        V00000000 ó E00000000\n                                    "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group is-required" }, [
                  _c("label", { attrs: { for: "phone" } }, [
                    _vm._v("Teléfono:")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.record.phone,
                        expression: "record.phone"
                      }
                    ],
                    staticClass: "form-control input-sm",
                    attrs: {
                      type: "text",
                      id: "phone",
                      placeholder: "Teléfono",
                      "data-toggle": "tooltip",
                      title: "Indique el número telefónico (requerido)"
                    },
                    domProps: { value: _vm.record.phone },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.record, "phone", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "form-text text-muted" }, [
                    _vm._v(
                      "\n                                        +58-416-0000000\n                                    "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group is-required" },
                  [
                    _c("label", [_vm._v("País:")]),
                    _vm._v(" "),
                    _c("select2", {
                      attrs: { options: _vm.countries },
                      on: { input: _vm.getEstates },
                      model: {
                        value: _vm.record.country_id,
                        callback: function($$v) {
                          _vm.$set(_vm.record, "country_id", $$v)
                        },
                        expression: "record.country_id"
                      }
                    })
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group is-required" },
                  [
                    _c("label", [_vm._v("Estado:")]),
                    _vm._v(" "),
                    _c("select2", {
                      attrs: { options: _vm.estates },
                      on: { input: _vm.getMunicipalities },
                      model: {
                        value: _vm.record.estate_id,
                        callback: function($$v) {
                          _vm.$set(_vm.record, "estate_id", $$v)
                        },
                        expression: "record.estate_id"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group is-required" },
                  [
                    _c("label", [_vm._v("Municipio:")]),
                    _vm._v(" "),
                    _c("select2", {
                      attrs: { options: _vm.municipalities },
                      on: { input: _vm.getParishes },
                      model: {
                        value: _vm.record.municipality_id,
                        callback: function($$v) {
                          _vm.$set(_vm.record, "municipality_id", $$v)
                        },
                        expression: "record.municipality_id"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group is-required" },
                  [
                    _c("label", [_vm._v("Parroquia:")]),
                    _vm._v(" "),
                    _c("select2", {
                      attrs: { options: _vm.parishes },
                      model: {
                        value: _vm.record.parish_id,
                        callback: function($$v) {
                          _vm.$set(_vm.record, "parish_id", $$v)
                        },
                        expression: "record.parish_id"
                      }
                    })
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c("div", { staticClass: "form-group is-required" }, [
                  _c("label", { attrs: { for: "address" } }, [
                    _vm._v("Dirección:")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.record.address,
                        expression: "record.address"
                      }
                    ],
                    staticClass: "form-control input-sm",
                    attrs: {
                      type: "text",
                      id: "address",
                      placeholder: "Dirección",
                      "data-toggle": "tooltip",
                      title: "Indique la dirección (requerido)"
                    },
                    domProps: { value: _vm.record.address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.record, "address", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-default btn-icon btn-round",
                attrs: {
                  "data-toggle": "tooltip",
                  type: "button",
                  title: "Borrar datos del formulario"
                },
                on: { click: _vm.reset }
              },
              [_c("i", { staticClass: "fas fa-eraser" })]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-warning btn-icon btn-round",
                attrs: {
                  type: "button",
                  "data-toggle": "tooltip",
                  title: "Cancelar y regresar"
                },
                on: {
                  click: function($event) {
                    return _vm.redirectBack(_vm.route_list)
                  }
                }
              },
              [_c("i", { staticClass: "fas fa-ban" })]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success btn-icon btn-round",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.createRecord("/people")
                  }
                }
              },
              [_c("i", { staticClass: "fas fa-save" })]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Registrar Personas")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);