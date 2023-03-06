"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sign-up",{

/***/ "./components/forms/sign-up-form.js":
/*!******************************************!*\
  !*** ./components/forms/sign-up-form.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUpForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/formStyles.module.css */ \"./styles/formStyles.module.css\");\n/* harmony import */ var _styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction SignUpForm(param) {\n    let { handleChange , handleSubmit , credentials  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default().signUp),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"container-form\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Create a Virtual Lab account\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    class: \"subtitle\",\n                    children: \"It's fast, easy and free!\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"exampleInputName\",\n                                    class: \"form-label\",\n                                    children: \"First Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 12,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    class: \"form-control\",\n                                    id: \"exampleInputName\",\n                                    onChange: handleChange,\n                                    name: \"name\",\n                                    value: credentials.name,\n                                    placeholder: \"First Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 13,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"exampleInputLastName\",\n                                    class: \"form-label\",\n                                    children: \"Last Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    class: \"form-control\",\n                                    id: \"exampleInputLastName\",\n                                    placeholder: \"Last Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"exampleInputCompany\",\n                                    class: \"form-label\",\n                                    children: \"Company\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    class: \"form-control\",\n                                    id: \"exampleInputCompany\",\n                                    placeholder: \"Company\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"exampleInputEmail\",\n                                    class: \"form-label\",\n                                    children: \"Email address\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    class: \"form-control\",\n                                    id: \"exampleInputEmail\",\n                                    \"aria-describedby\": \"emailHelp\",\n                                    onChange: handleChange,\n                                    name: \"email\",\n                                    value: credentials.email,\n                                    placeholder: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"emailHelp\",\n                                    class: \"form-text\",\n                                    children: \"We'll never share your email with anyone else.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"exampleInputPassword1\",\n                                    class: \"form-label\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    class: \"form-control\",\n                                    id: \"exampleInputPassword1\",\n                                    onChange: handleChange,\n                                    name: \"password\",\n                                    value: credentials.password,\n                                    placeholder: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"mb-3 form-check\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    class: \"form-check-input\",\n                                    id: \"exampleCheck1\",\n                                    name: \"isSeller\",\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    class: \"form-check-label\",\n                                    for: \"exampleCheck1\",\n                                    children: \"Check me out\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"btn-create-account\"]),\n                            children: \"Create account\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"tos\",\n                            children: [\n                                \"By proceeding, you accept our\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: \"#\",\n                                    children: \"Terms of Service\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 25\n                                }, this),\n                                \"\\xa0and\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: \"#\",\n                                    children: \"Privacy Statement\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = SignUpForm;\nvar _c;\n$RefreshReg$(_c, \"SignUpForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL3NpZ24tdXAtZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1RDtBQUNBO0FBRXhDLFNBQVNFLFdBQVcsS0FBeUMsRUFBRTtRQUEzQyxFQUFDQyxhQUFZLEVBQUVDLGFBQVksRUFBRUMsWUFBVyxFQUFDLEdBQXpDO0lBQy9CLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXTix3RUFBcUI7a0JBQ2pDLDRFQUFDSztZQUFJQyxXQUFXUCx3RkFBd0I7OzhCQUNwQyw4REFBQ1E7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7b0JBQUVDLE9BQU07OEJBQVc7Ozs7Ozs4QkFDcEIsOERBQUNDO29CQUFLQyxVQUFVUjs7c0NBQ1osOERBQUNFOzRCQUFJSSxPQUFNOzs4Q0FDUCw4REFBQ0c7b0NBQU1DLEtBQUk7b0NBQW1CSixPQUFNOzhDQUFhOzs7Ozs7OENBQ2pELDhEQUFDSztvQ0FDR0MsTUFBSztvQ0FDTE4sT0FBTTtvQ0FDTk8sSUFBRztvQ0FDSEMsVUFBVWY7b0NBQ1ZnQixNQUFLO29DQUNMQyxPQUFPZixZQUFZYyxJQUFJO29DQUN2QkUsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdwQiw4REFBQ2Y7NEJBQUlJLE9BQU07OzhDQUNQLDhEQUFDRztvQ0FBTUMsS0FBSTtvQ0FBdUJKLE9BQU07OENBQWE7Ozs7Ozs4Q0FDckQsOERBQUNLO29DQUNHQyxNQUFLO29DQUNMTixPQUFNO29DQUNOTyxJQUFHO29DQUNISSxhQUFZOzs7Ozs7Ozs7Ozs7c0NBR3BCLDhEQUFDZjs0QkFBSUksT0FBTTs7OENBQ1AsOERBQUNHO29DQUFNQyxLQUFJO29DQUFzQkosT0FBTTs4Q0FBYTs7Ozs7OzhDQUNwRCw4REFBQ0s7b0NBQ0dDLE1BQUs7b0NBQ0xOLE9BQU07b0NBQ05PLElBQUc7b0NBQ0hJLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHcEIsOERBQUNmOzRCQUFJSSxPQUFNOzs4Q0FDUCw4REFBQ0c7b0NBQU1DLEtBQUk7b0NBQW9CSixPQUFNOzhDQUFhOzs7Ozs7OENBQ2xELDhEQUFDSztvQ0FDR0MsTUFBSztvQ0FDTE4sT0FBTTtvQ0FDTk8sSUFBRztvQ0FDSEssb0JBQWlCO29DQUNqQkosVUFBVWY7b0NBQ1ZnQixNQUFLO29DQUNMQyxPQUFPZixZQUFZa0IsS0FBSztvQ0FDeEJGLGFBQVk7Ozs7Ozs4Q0FFaEIsOERBQUNmO29DQUFJVyxJQUFHO29DQUFZUCxPQUFNOzhDQUFZOzs7Ozs7Ozs7Ozs7c0NBRTFDLDhEQUFDSjs0QkFBSUksT0FBTTs7OENBQ1AsOERBQUNHO29DQUFNQyxLQUFJO29DQUF3QkosT0FBTTs4Q0FBYTs7Ozs7OzhDQUN0RCw4REFBQ0s7b0NBQ0dDLE1BQUs7b0NBQ0xOLE9BQU07b0NBQ05PLElBQUc7b0NBQ0hDLFVBQVVmO29DQUNWZ0IsTUFBSztvQ0FDTEMsT0FBT2YsWUFBWW1CLFFBQVE7b0NBQzNCSCxhQUFZOzs7Ozs7Ozs7Ozs7c0NBR3BCLDhEQUFDZjs0QkFBSUksT0FBTTs7OENBQ1AsOERBQUNLO29DQUNHQyxNQUFLO29DQUNMTixPQUFNO29DQUNOTyxJQUFHO29DQUNIRSxNQUFLO29DQUNMRCxVQUFVZjs7Ozs7OzhDQUVkLDhEQUFDVTtvQ0FBTUgsT0FBTTtvQ0FBbUJJLEtBQUk7OENBQWdCOzs7Ozs7Ozs7Ozs7c0NBRXhELDhEQUFDVzs0QkFDR1QsTUFBSzs0QkFDTFQsV0FBWVAsNEZBQTRCO3NDQUFFOzs7Ozs7c0NBRzlDLDhEQUFDTTs0QkFBSUksT0FBTTs7Z0NBQU07OENBRWIsOERBQUNnQjtvQ0FBRUMsUUFBTztvQ0FBU0MsTUFBSzs4Q0FBSTs7Ozs7O2dDQUFvQjs4Q0FFaEQsOERBQUNGO29DQUFFQyxRQUFPO29DQUFTQyxNQUFLOzhDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wRCxDQUFDO0tBekZ1QjFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybXMvc2lnbi11cC1mb3JtLmpzPzg1YzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZm9ybVN0eWxlcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHN0eWxlc1V0aWxzIGZyb20gJy4uLy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXBGb3JtKHtoYW5kbGVDaGFuZ2UsIGhhbmRsZVN1Ym1pdCwgY3JlZGVudGlhbHN9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1V0aWxzWydzaWduVXAnXX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjb250YWluZXItZm9ybSddfT5cbiAgICAgICAgICAgICAgICA8aDM+Q3JlYXRlIGEgVmlydHVhbCBMYWIgYWNjb3VudDwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZVwiPkl0J3MgZmFzdCwgZWFzeSBhbmQgZnJlZSE8L3A+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dE5hbWVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXROYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NyZWRlbnRpYWxzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0ZpcnN0IE5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRMYXN0TmFtZVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0TGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdMYXN0IE5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRDb21wYW55XCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+Q29tcGFueTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0Q29tcGFueVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0NvbXBhbnknXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRFbWFpbFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGVudGlhbHMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzcz1cImZvcm0tdGV4dFwiPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGVudGlhbHMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zIGZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVDaGVjazFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpc1NlbGxlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZXhhbXBsZUNoZWNrMVwiPkNoZWNrIG1lIG91dDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgc3R5bGVzWydidG4tY3JlYXRlLWFjY291bnQnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQnkgcHJvY2VlZGluZywgeW91IGFjY2VwdCBvdXImbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIjXCI+VGVybXMgb2YgU2VydmljZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO2FuZCZuYnNwOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiI1wiPlByaXZhY3kgU3RhdGVtZW50PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gICAgXG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwic3R5bGVzVXRpbHMiLCJTaWduVXBGb3JtIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiY3JlZGVudGlhbHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInAiLCJjbGFzcyIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiZm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiYXJpYS1kZXNjcmliZWRieSIsImVtYWlsIiwicGFzc3dvcmQiLCJidXR0b24iLCJhIiwidGFyZ2V0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/forms/sign-up-form.js\n"));

/***/ })

});