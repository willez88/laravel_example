(self["webpackChunk"] = self["webpackChunk"] || []).push([["estates"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/EstatesComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/EstatesComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      record: {
        id: '',
        name: '',
        code: '',
        country_id: ''
      },
      errors: [],
      records: [],
      countries: [],
      columns: ['country.name', 'name', 'code', 'id']
    };
  },
  methods: {
    /**
     * Método que borra todos los datos del formulario
     *
     * @author William Páez <paez.william8@gmail.com>
     */
    reset: function reset() {
      this.record = {
        id: '',
        name: '',
        code: '',
        country_id: ''
      };
    }
  },
  created: function created() {
    this.table_options.headings = {
      'country.name': 'País',
      'name': 'Nombre',
      'code': 'Código',
      'id': 'Acción'
    };
    this.table_options.sortable = ['country.name', 'name', 'code'];
    this.table_options.filterable = ['country.name', 'name', 'code'];
    this.table_options.columnsClasses = {
      'country.name': 'col-md-4',
      'name': 'col-md-4',
      'code': 'col-md-2',
      'id': 'col-md-2'
    };
    this.getCountries();
  }
});

/***/ }),

/***/ "./resources/js/components/admin/EstatesComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/EstatesComponent.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EstatesComponent_vue_vue_type_template_id_663a33fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EstatesComponent.vue?vue&type=template&id=663a33fe& */ "./resources/js/components/admin/EstatesComponent.vue?vue&type=template&id=663a33fe&");
/* harmony import */ var _EstatesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EstatesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/EstatesComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EstatesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EstatesComponent_vue_vue_type_template_id_663a33fe___WEBPACK_IMPORTED_MODULE_0__.render,
  _EstatesComponent_vue_vue_type_template_id_663a33fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/EstatesComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/EstatesComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/EstatesComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstatesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EstatesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/EstatesComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstatesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/EstatesComponent.vue?vue&type=template&id=663a33fe&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/EstatesComponent.vue?vue&type=template&id=663a33fe& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstatesComponent_vue_vue_type_template_id_663a33fe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstatesComponent_vue_vue_type_template_id_663a33fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstatesComponent_vue_vue_type_template_id_663a33fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EstatesComponent.vue?vue&type=template&id=663a33fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/EstatesComponent.vue?vue&type=template&id=663a33fe&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/EstatesComponent.vue?vue&type=template&id=663a33fe&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/EstatesComponent.vue?vue&type=template&id=663a33fe& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "text-center" }, [
    _c(
      "a",
      {
        staticClass: "btn-simplex btn-simplex-md btn-simplex-primary",
        attrs: {
          href: "",
          title: "Registros de estados",
          "data-toggle": "tooltip"
        },
        on: {
          click: function($event) {
            return _vm.addRecord("add_estate", "estates", $event)
          }
        }
      },
      [
        _c("i", { staticClass: "fas fa-eye fa-3x" }),
        _vm._v(" "),
        _c("span", [_vm._v("Estados")])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade text-left",
        attrs: { tabindex: "-1", role: "dialog", id: "add_estate" }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
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
                    _c(
                      "div",
                      { staticClass: "form-group is-required" },
                      [
                        _c("label", [_vm._v("País:")]),
                        _vm._v(" "),
                        _c("select2", {
                          attrs: { options: _vm.countries },
                          model: {
                            value: _vm.record.country_id,
                            callback: function($$v) {
                              _vm.$set(_vm.record, "country_id", $$v)
                            },
                            expression: "record.country_id"
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
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("div", { staticClass: "form-group is-required" }, [
                      _c("label", { attrs: { for: "name" } }, [
                        _vm._v("Código:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.record.code,
                            expression: "record.code"
                          }
                        ],
                        staticClass: "form-control input-sm",
                        attrs: {
                          type: "text",
                          id: "code",
                          placeholder: "Código",
                          "data-toggle": "tooltip",
                          title: "Indique el código (requerido)"
                        },
                        domProps: { value: _vm.record.code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.record, "code", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("div", { staticClass: "form-group is-required" }, [
                      _c("label", { attrs: { for: "name" } }, [
                        _vm._v("Nombre:")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.record.name,
                            expression: "record.name"
                          }
                        ],
                        staticClass: "form-control input-sm",
                        attrs: {
                          type: "text",
                          id: "name",
                          placeholder: "Nombre",
                          "data-toggle": "tooltip",
                          title: "Indique el nombre (requerido)"
                        },
                        domProps: { value: _vm.record.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.record, "name", $event.target.value)
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
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("modal-form-buttons", {
                      attrs: { saveRoute: "estates" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-body modal-table" },
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
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-warning btn-xs btn-icon btn-action",
                                attrs: {
                                  title: "Modificar registro",
                                  "data-toggle": "tooltip",
                                  type: "button"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.initUpdate(props.row.id, $event)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-edit" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-danger btn-xs btn-icon btn-action",
                                attrs: {
                                  title: "Eliminar registro",
                                  "data-toggle": "tooltip",
                                  type: "button"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteRecord(
                                      props.row.id,
                                      "estates"
                                    )
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-trash" })]
                            )
                          ])
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h6", [
        _c("i", { staticClass: "fas fa-eye fa-3x" }),
        _vm._v("\n\t\t\t\t\t\t\tEstado\n\t\t\t\t\t\t")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);