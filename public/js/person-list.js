(self["webpackChunk"] = self["webpackChunk"] || []).push([["person-list"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonListComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonListComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      records: [],
      record: [],
      columns: ['first_name', 'last_name', 'email', 'id']
    };
  },
  created: function created() {
    this.table_options.headings = {
      'first_name': 'Nombres',
      'last_name': 'Apellidos',
      'email': 'Correo Electrónico',
      'id': 'Acción'
    };
    this.table_options.sortable = ['first_name', 'last_name'];
    this.table_options.filterable = ['first_name', 'last_name'];
    this.table_options.columnsClasses = {
      'first_name': 'col-md-4',
      'last_name': 'col-md-4',
      'email': 'col-md-2',
      'id': 'col-md-2'
    };
  },
  mounted: function mounted() {
    this.initRecords(this.route_list, '');
  },
  methods: {
    reset: function reset() {},

    /**
    * Método que obtiene los datos de un registro en específico para mostrarlo en un modal
    *
    * @author William Páez <paez.william8@gmail.com>
    */
    showInfo: function showInfo(id) {
      var _this = this;

      axios.get("/people/".concat(id)).then(function (response) {
        _this.record = response.data.record;
        $('#country').val(_this.record.parish.municipality.estate.country.name);
        $('#estate').val(_this.record.parish.municipality.estate.name);
        $('#municipality').val(_this.record.parish.municipality.name);
        $('#parish').val(_this.record.parish.name);
      });
      $('#show_person').modal('show');
    }
  }
});

/***/ }),

/***/ "./resources/js/components/PersonListComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/PersonListComponent.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PersonListComponent_vue_vue_type_template_id_223484e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonListComponent.vue?vue&type=template&id=223484e2& */ "./resources/js/components/PersonListComponent.vue?vue&type=template&id=223484e2&");
/* harmony import */ var _PersonListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonListComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/PersonListComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PersonListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PersonListComponent_vue_vue_type_template_id_223484e2___WEBPACK_IMPORTED_MODULE_0__.render,
  _PersonListComponent_vue_vue_type_template_id_223484e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PersonListComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PersonListComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/PersonListComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonListComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonListComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/PersonListComponent.vue?vue&type=template&id=223484e2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/PersonListComponent.vue?vue&type=template&id=223484e2& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonListComponent_vue_vue_type_template_id_223484e2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonListComponent_vue_vue_type_template_id_223484e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonListComponent_vue_vue_type_template_id_223484e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonListComponent.vue?vue&type=template&id=223484e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonListComponent.vue?vue&type=template&id=223484e2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonListComponent.vue?vue&type=template&id=223484e2&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PersonListComponent.vue?vue&type=template&id=223484e2& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("v-client-table", {
        attrs: {
          columns: _vm.columns,
          data: _vm.records,
          options: _vm.table_options
        },
        scopedSlots: _vm._u([
          {
            key: "id",
            fn: function(props) {
              return _c("div", { staticClass: "text-center" }, [
                _vm.route_show
                  ? _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-info btn-xs btn-icon btn-action btn-tooltip",
                        attrs: {
                          title: "Ver registro",
                          "data-toggle": "tooltip",
                          "data-placement": "bottom",
                          type: "button"
                        },
                        on: {
                          click: function($event) {
                            return _vm.showInfo(props.row.id)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-eye" })]
                    )
                  : _vm._e(),
                _vm._v(" "),
                !props.row.assigned
                  ? _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-warning btn-xs btn-icon btn-action btn-tooltip",
                        attrs: {
                          title: "Modificar registro",
                          "data-toggle": "tooltip",
                          "data-placement": "bottom",
                          type: "button"
                        },
                        on: {
                          click: function($event) {
                            return _vm.editForm(props.row.id)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-edit" })]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-danger btn-xs btn-icon btn-action btn-tooltip",
                    attrs: {
                      title: "Eliminar registro",
                      "data-toggle": "tooltip",
                      "data-placement": "bottom",
                      type: "button"
                    },
                    on: {
                      click: function($event) {
                        return _vm.deleteRecord(props.index, "")
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-trash" })]
                )
              ])
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: { tabindex: "-1", role: "dialog", id: "show_person" }
        },
        [
          _c(
            "div",
            {
              staticClass: "modal-dialog modal-lg",
              attrs: { role: "document" }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Nombres")]),
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
                            "data-toggle": "tooltip",
                            disabled: "true"
                          },
                          domProps: { value: _vm.record.first_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.record,
                                "first_name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Apellidos")]),
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
                            "data-toggle": "tooltip",
                            disabled: "true"
                          },
                          domProps: { value: _vm.record.last_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.record,
                                "last_name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Correo Electrónico")]),
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
                            type: "text",
                            "data-toggle": "tooltip",
                            disabled: "true"
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
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Cédula de Identidad")]),
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
                            "data-toggle": "tooltip",
                            disabled: "true"
                          },
                          domProps: { value: _vm.record.id_number },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.record,
                                "id_number",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Teléfono")]),
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
                            "data-toggle": "tooltip",
                            disabled: "true"
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
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(1)
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Dirección")]),
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
                            "data-toggle": "tooltip",
                            disabled: "true"
                          },
                          domProps: { value: _vm.record.address },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.record,
                                "address",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h6", [
        _c("i", { staticClass: "fas fa-eye fa-3x" }),
        _vm._v(
          "\n                        Información Detallada de Personas\n                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", [_vm._v("País")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control input-sm",
          attrs: {
            type: "text",
            "data-toggle": "tooltip",
            disabled: "true",
            id: "country"
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("Estado")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control input-sm",
            attrs: {
              type: "text",
              "data-toggle": "tooltip",
              disabled: "true",
              id: "estate"
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("Municipio")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control input-sm",
            attrs: {
              type: "text",
              "data-toggle": "tooltip",
              disabled: "true",
              id: "municipality"
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("Parroquia")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control input-sm",
            attrs: {
              type: "text",
              "data-toggle": "tooltip",
              disabled: "true",
              id: "parish"
            }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);