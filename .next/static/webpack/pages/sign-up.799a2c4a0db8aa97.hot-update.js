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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUpForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/formStyles.module.css */ \"./styles/formStyles.module.css\");\n/* harmony import */ var _styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction SignUpForm(param) {\n    let { handleChange , handleSubmit , credentials  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default().signUp),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"container-form\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Create a Virtual Lab account\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    class: \"subtitle\",\n                    children: \"It's fast, easy and free!\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"exampleInputEmail\",\n                                    class: \"form-label\",\n                                    children: \"Email address\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 13,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    class: \"form-control\",\n                                    id: \"exampleInputEmail\",\n                                    \"aria-describedby\": \"emailHelp\",\n                                    onChange: handleChange,\n                                    name: \"email\",\n                                    value: credentials.email,\n                                    placeholder: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"emailHelp\",\n                                    class: \"form-text\",\n                                    children: \"We'll never share your email with anyone else.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                            lineNumber: 12,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"exampleInputPassword1\",\n                                    class: \"form-label\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        className: \"form-control ${styles['input']}\",\n                                        id: \"exampleInputPassword1\",\n                                        onChange: handleChange,\n                                        name: \"password\",\n                                        value: credentials.password,\n                                        placeholder: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary btn-lg \".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"btn-create-account\"])),\n                            children: \"Create account\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"tos\",\n                            children: [\n                                \"By proceeding, you accept our\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: \"#\",\n                                    children: \"Terms of Service\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, this),\n                                \"\\xa0and\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: \"#\",\n                                    children: \"Privacy Statement\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Already a member?\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/sign-in\",\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-up-form.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = SignUpForm;\nvar _c;\n$RefreshReg$(_c, \"SignUpForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL3NpZ24tdXAtZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1RDtBQUNBO0FBRXhDLFNBQVNFLFdBQVcsS0FBeUMsRUFBRTtRQUEzQyxFQUFDQyxhQUFZLEVBQUVDLGFBQVksRUFBRUMsWUFBVyxFQUFDLEdBQXpDO0lBQy9CLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXTix3RUFBcUI7a0JBQ2pDLDRFQUFDSztZQUFJQyxXQUFXUCx3RkFBd0I7OzhCQUNwQyw4REFBQ1E7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7b0JBQUVDLE9BQU07OEJBQVc7Ozs7Ozs4QkFDcEIsOERBQUNDO29CQUFLQyxVQUFVUjs7c0NBRVosOERBQUNFOzRCQUFJSSxPQUFNOzs4Q0FDUCw4REFBQ0c7b0NBQU1DLEtBQUk7b0NBQW9CSixPQUFNOzhDQUFhOzs7Ozs7OENBQ2xELDhEQUFDSztvQ0FDR0MsTUFBSztvQ0FDTE4sT0FBTTtvQ0FDTk8sSUFBRztvQ0FDSEMsb0JBQWlCO29DQUNqQkMsVUFBVWhCO29DQUNWaUIsTUFBSztvQ0FDTEMsT0FBT2hCLFlBQVlpQixLQUFLO29DQUN4QkMsYUFBWTs7Ozs7OzhDQUVoQiw4REFBQ2pCO29DQUFJVyxJQUFHO29DQUFZUCxPQUFNOzhDQUFZOzs7Ozs7Ozs7Ozs7c0NBRTFDLDhEQUFDSjs0QkFBSUksT0FBTTs7OENBQ1AsOERBQUNHO29DQUFNQyxLQUFJO29DQUF3QkosT0FBTTs4Q0FBYTs7Ozs7OzhDQUN0RCw4REFBQ0o7OENBQ0csNEVBQUNTO3dDQUNHQyxNQUFLO3dDQUNMVCxXQUFXO3dDQUNYVSxJQUFHO3dDQUNIRSxVQUFVaEI7d0NBQ1ZpQixNQUFLO3dDQUNMQyxPQUFPaEIsWUFBWW1CLFFBQVE7d0NBQzNCRCxhQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJeEIsOERBQUNFOzRCQUNHVCxNQUFLOzRCQUNMVCxXQUFXLDBCQUF1RCxPQUE3QlAsNEZBQTRCO3NDQUFJOzs7Ozs7c0NBR3pFLDhEQUFDTTs0QkFBSUksT0FBTTs7Z0NBQU07OENBRWIsOERBQUNnQjtvQ0FBRUMsUUFBTztvQ0FBU0MsTUFBSzs4Q0FBSTs7Ozs7O2dDQUFvQjs4Q0FFaEQsOERBQUNGO29DQUFFQyxRQUFPO29DQUFTQyxNQUFLOzhDQUFJOzs7Ozs7Ozs7Ozs7c0NBRWhDLDhEQUFDdEI7O2dDQUFJOzhDQUVELDhEQUFDb0I7b0NBQUVFLE1BQUs7OENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzNDLENBQUM7S0F4RHVCMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9zaWduLXVwLWZvcm0uanM/ODVjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9mb3JtU3R5bGVzLm1vZHVsZS5jc3MnXG5pbXBvcnQgc3R5bGVzVXRpbHMgZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcEZvcm0oe2hhbmRsZUNoYW5nZSwgaGFuZGxlU3VibWl0LCBjcmVkZW50aWFsc30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzVXRpbHNbJ3NpZ25VcCddfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NvbnRhaW5lci1mb3JtJ119PlxuICAgICAgICAgICAgICAgIDxoMz5DcmVhdGUgYSBWaXJ0dWFsIExhYiBhY2NvdW50PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1YnRpdGxlXCI+SXQncyBmYXN0LCBlYXN5IGFuZCBmcmVlITwvcD5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0IH0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0RW1haWxcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0RW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NyZWRlbnRpYWxzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxIZWxwXCIgY2xhc3M9XCJmb3JtLXRleHRcIj5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsIHdpdGggYW55b25lIGVsc2UuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCAke3N0eWxlc1snaW5wdXQnXX1cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGVudGlhbHMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyAke3N0eWxlc1snYnRuLWNyZWF0ZS1hY2NvdW50J119YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQnkgcHJvY2VlZGluZywgeW91IGFjY2VwdCBvdXImbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIjXCI+VGVybXMgb2YgU2VydmljZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO2FuZCZuYnNwOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiI1wiPlByaXZhY3kgU3RhdGVtZW50PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFscmVhZHkgYSBtZW1iZXI/Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NpZ24taW5cIj5TaWduIGluPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIFxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInN0eWxlc1V0aWxzIiwiU2lnblVwRm9ybSIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsImNyZWRlbnRpYWxzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwiY2xhc3MiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImZvciIsImlucHV0IiwidHlwZSIsImlkIiwiYXJpYS1kZXNjcmliZWRieSIsIm9uQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwiZW1haWwiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYnV0dG9uIiwiYSIsInRhcmdldCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/forms/sign-up-form.js\n"));

/***/ })

});