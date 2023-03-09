"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sign-in",{

/***/ "./components/forms/sign-in-form.js":
/*!******************************************!*\
  !*** ./components/forms/sign-in-form.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignInForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/formStyles.module.css */ \"./styles/formStyles.module.css\");\n/* harmony import */ var _styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction SignInForm(param) {\n    let { handleChange , handleSubmit , credentials , user , loading , error  } = param;\n    let status = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    if (error) {\n        if (error.message === \"Firebase: Error (auth/user-not-found).\") {\n            status = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: [\n                    \"status = \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: error.message\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                        lineNumber: 8,\n                        columnNumber: 34\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                lineNumber: 8,\n                columnNumber: 22\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default().signIn),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"container-form\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"subtitle\",\n                    children: \"Sign in with your Virtual Lab account.\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    autoComplete: \"off\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"mb-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                placeholder: \"Email\",\n                                onChange: handleChange,\n                                name: \"email\",\n                                value: credentials.email,\n                                autoComplete: \"off\",\n                                className: \"form-control \".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().input), \" \").concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().email))\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                lineNumber: 19,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                placeholder: \"Password\",\n                                onChange: handleChange,\n                                name: \"password\",\n                                value: credentials.password,\n                                autoComplete: \"off\",\n                                className: \"form-control \".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().input))\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().forgotPassword),\n                            children: \"Forgot password?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonContainer),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"\".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnCreate)),\n                                    children: \"Create account\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"\".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"btn-SignIn\"])),\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().divider)\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().tos)),\n                            children: [\n                                \"By proceeding, you accept our\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: \"#\",\n                                    children: \"Terms of Service\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, this),\n                                \"\\xa0and\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: \"#\",\n                                    children: \"Privacy Statement\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, this),\n                        status\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = SignInForm;\nvar _c;\n$RefreshReg$(_c, \"SignInForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL3NpZ24taW4tZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1RDtBQUNBO0FBRXhDLFNBQVNFLFdBQVcsS0FBK0QsRUFBRTtRQUFqRSxFQUFDQyxhQUFZLEVBQUVDLGFBQVksRUFBRUMsWUFBVyxFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFDLEdBQS9EO0lBQy9CLElBQUlDLHVCQUFTO0lBQ2IsSUFBSUQsT0FBTztRQUNQLElBQUlBLE1BQU1FLE9BQU8sS0FBSywwQ0FBMEM7WUFDNURELHVCQUFTLDhEQUFDRTs7b0JBQUU7a0NBQVMsOERBQUNBO2tDQUFHSCxNQUFNRSxPQUFPOzs7Ozs7Ozs7Ozs7UUFDMUMsQ0FBQztJQUVMLENBQUM7SUFDRCxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBV2Isd0VBQXFCO2tCQUNqQyw0RUFBQ1k7WUFBSUMsV0FBV1osd0ZBQXdCOzs4QkFDcEMsOERBQUNhOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDO29CQUFFRixXQUFVOzhCQUFXOzs7Ozs7OEJBQ3hCLDhEQUFDRztvQkFBS0MsVUFBVWI7b0JBQWNjLGNBQWE7O3NDQUN2Qyw4REFBQ047NEJBQUlPLE9BQU07c0NBQ1AsNEVBQUNDO2dDQUNHQyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaQyxVQUFVcEI7Z0NBQ1ZxQixNQUFLO2dDQUNMQyxPQUFPcEIsWUFBWXFCLEtBQUs7Z0NBQ3hCUixjQUFhO2dDQUNiTCxXQUFXLGdCQUFtQ1osT0FBbkJBLDRFQUFlLEVBQUMsS0FBbUIsT0FBaEJBLDRFQUFlOzs7Ozs7Ozs7OztzQ0FHckUsOERBQUNXO3NDQUNHLDRFQUFDUTtnQ0FDR0MsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsVUFBVXBCO2dDQUNWcUIsTUFBSztnQ0FDTEMsT0FBT3BCLFlBQVlzQixRQUFRO2dDQUMzQlQsY0FBYTtnQ0FDYkwsV0FBVyxnQkFBZ0MsT0FBaEJaLDRFQUFlOzs7Ozs7Ozs7OztzQ0FHbEQsOERBQUNVOzRCQUFFaUIsTUFBSzs0QkFBSWYsV0FBV1oscUZBQXdCO3NDQUFFOzs7Ozs7c0NBQ2pELDhEQUFDVzs0QkFBSUMsV0FBV1osc0ZBQXlCOzs4Q0FDckMsOERBQUM0QjtvQ0FDR1IsTUFBSztvQ0FDTFIsV0FBVyxHQUF1QixPQUFwQlosZ0ZBQW1COzhDQUFJOzs7Ozs7OENBR3pDLDhEQUFDNEI7b0NBQ0dSLE1BQUs7b0NBQ0xSLFdBQVcsR0FBd0IsT0FBckJaLG9GQUFvQjs4Q0FBSTs7Ozs7Ozs7Ozs7O3NDQUk5Qyw4REFBQzZCOzRCQUFHakIsV0FBV1osOEVBQWlCOzs7Ozs7c0NBQ2hDLDhEQUFDVzs0QkFBSUMsV0FBVyxHQUFpQixPQUFkWiwwRUFBYTs7Z0NBQUk7OENBRWhDLDhEQUFDVTtvQ0FBRW9CLFFBQU87b0NBQVNILE1BQUs7OENBQUk7Ozs7OztnQ0FBb0I7OENBRWhELDhEQUFDakI7b0NBQUVvQixRQUFPO29DQUFTSCxNQUFLOzhDQUFJOzs7Ozs7Ozs7Ozs7d0JBRS9CbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQixDQUFDO0tBN0R1QlAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9zaWduLWluLWZvcm0uanM/ZmRhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzVXRpbHMgZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9mb3JtU3R5bGVzLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbkZvcm0oe2hhbmRsZUNoYW5nZSwgaGFuZGxlU3VibWl0LCBjcmVkZW50aWFscywgdXNlciwgbG9hZGluZywgZXJyb3J9KSB7XG4gICAgbGV0IHN0YXR1cyA9IDw+PC8+XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5tZXNzYWdlID09PSAnRmlyZWJhc2U6IEVycm9yIChhdXRoL3VzZXItbm90LWZvdW5kKS4nKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSA8YT5zdGF0dXMgPSA8YT57ZXJyb3IubWVzc2FnZX08L2E+PC9hPlxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzVXRpbHNbJ3NpZ25JbiddfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NvbnRhaW5lci1mb3JtJ119PlxuICAgICAgICAgICAgICAgIDxoMz5TaWduIGluPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlNpZ24gaW4gd2l0aCB5b3VyIFZpcnR1YWwgTGFiIGFjY291bnQuPC9wPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjcmVkZW50aWFscy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3N0eWxlc1snaW5wdXQnXX0gJHtzdHlsZXNbJ2VtYWlsJ119YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGVudGlhbHMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtzdHlsZXNbJ2lucHV0J119YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e3N0eWxlc1snZm9yZ290UGFzc3dvcmQnXX0+Rm9yZ290IHBhc3N3b3JkPzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYnV0dG9uQ29udGFpbmVyJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1snYnRuQ3JlYXRlJ119YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1snYnRuLVNpZ25JbiddfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzWydkaXZpZGVyJ119PjwvaHI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ3RvcyddfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQnkgcHJvY2VlZGluZywgeW91IGFjY2VwdCBvdXImbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIjXCI+VGVybXMgb2YgU2VydmljZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO2FuZCZuYnNwOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiI1wiPlByaXZhY3kgU3RhdGVtZW50PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3N0YXR1c31cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKSBcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXNVdGlscyIsInN0eWxlcyIsIlNpZ25JbkZvcm0iLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJjcmVkZW50aWFscyIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwiYSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImF1dG9Db21wbGV0ZSIsImNsYXNzIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJocmVmIiwiYnV0dG9uIiwiaHIiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/forms/sign-in-form.js\n"));

/***/ })

});