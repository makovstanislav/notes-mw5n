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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignInForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/formStyles.module.css */ \"./styles/formStyles.module.css\");\n/* harmony import */ var _styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction SignInForm(param) {\n    let { handleChange , handleSubmit , credentials , user , loading , error  } = param;\n    let status = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    if (error) {\n        if (error.message === \"Firebase: Error (auth/user-not-found).\") {\n            status = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: \"User with this email does not exists\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                lineNumber: 8,\n                columnNumber: 22\n            }, this);\n        } else if (error.message === \"Firebase: Error (auth/wrong-password).\") {\n            status = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: \"Wrong password\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                lineNumber: 10,\n                columnNumber: 22\n            }, this);\n            console.log(error);\n        } else if (error.message === \"Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).\") {\n            status = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: \"Too many login attempts. Try again later\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                lineNumber: 13,\n                columnNumber: 22\n            }, this);\n        } else {\n            status = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: error.message\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                lineNumber: 16,\n                columnNumber: 22\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default().signIn),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"container-form\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"subtitle\",\n                    children: \"Sign in with your Virtual Lab account.\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    autoComplete: \"off\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"mb-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                placeholder: \"Email\",\n                                onChange: handleChange,\n                                name: \"email\",\n                                value: credentials.email,\n                                autoComplete: \"off\",\n                                className: \"form-control \".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().input), \" \").concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().email))\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                placeholder: \"Password\",\n                                onChange: handleChange,\n                                name: \"password\",\n                                value: credentials.password,\n                                autoComplete: \"off\",\n                                className: \"form-control \".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().input))\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().forgotPassword),\n                            children: \"Forgot password?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, this),\n                        status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().status),\n                            children: status\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 49,\n                            columnNumber: 32\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonContainer),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"\".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnCreate)),\n                                    children: \"Create account\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"\".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"btn-SignIn\"])),\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().divider)\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_2___default().tos)),\n                            children: [\n                                \"By proceeding, you accept our\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: \"#\",\n                                    children: \"Terms of Service\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, this),\n                                \"\\xa0and\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: \"#\",\n                                    children: \"Privacy Statement\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_c = SignInForm;\nvar _c;\n$RefreshReg$(_c, \"SignInForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL3NpZ24taW4tZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1RDtBQUNBO0FBRXhDLFNBQVNFLFdBQVcsS0FBK0QsRUFBRTtRQUFqRSxFQUFDQyxhQUFZLEVBQUVDLGFBQVksRUFBRUMsWUFBVyxFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFDLEdBQS9EO0lBQy9CLElBQUlDLHVCQUFTO0lBQ2IsSUFBSUQsT0FBTztRQUNQLElBQUlBLE1BQU1FLE9BQU8sS0FBSywwQ0FBMEM7WUFDNURELHVCQUFTLDhEQUFDRTswQkFBRTs7Ozs7O1FBQ2hCLE9BQU8sSUFBSUgsTUFBTUUsT0FBTyxLQUFJLDBDQUEwQztZQUNsRUQsdUJBQVMsOERBQUNFOzBCQUFFOzs7Ozs7WUFDWkMsUUFBUUMsR0FBRyxDQUFDTDtRQUNoQixPQUFPLElBQUlBLE1BQU1FLE9BQU8sS0FBRyxxTkFBcU47WUFDNU9ELHVCQUFTLDhEQUFDRTswQkFBRTs7Ozs7O1FBQ2hCLE9BQ0s7WUFDREYsdUJBQVMsOERBQUNFOzBCQUFHSCxNQUFNRSxPQUFPOzs7Ozs7UUFDOUIsQ0FBQztJQUVMLENBQUM7SUFDRCxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBV2Ysd0VBQXFCO2tCQUNqQyw0RUFBQ2M7WUFBSUMsV0FBV2Qsd0ZBQXdCOzs4QkFDcEMsOERBQUNlOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDO29CQUFFRixXQUFVOzhCQUFXOzs7Ozs7OEJBQ3hCLDhEQUFDRztvQkFBS0MsVUFBVWY7b0JBQWNnQixjQUFhOztzQ0FDdkMsOERBQUNOOzRCQUFJTyxPQUFNO3NDQUNQLDRFQUFDQztnQ0FDR0MsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsVUFBVXRCO2dDQUNWdUIsTUFBSztnQ0FDTEMsT0FBT3RCLFlBQVl1QixLQUFLO2dDQUN4QlIsY0FBYTtnQ0FDYkwsV0FBVyxnQkFBbUNkLE9BQW5CQSw0RUFBZSxFQUFDLEtBQW1CLE9BQWhCQSw0RUFBZTs7Ozs7Ozs7Ozs7c0NBR3JFLDhEQUFDYTtzQ0FDRyw0RUFBQ1E7Z0NBQ0dDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLFVBQVV0QjtnQ0FDVnVCLE1BQUs7Z0NBQ0xDLE9BQU90QixZQUFZd0IsUUFBUTtnQ0FDM0JULGNBQWE7Z0NBQ2JMLFdBQVcsZ0JBQWdDLE9BQWhCZCw0RUFBZTs7Ozs7Ozs7Ozs7c0NBR2xELDhEQUFDVTs0QkFBRW1CLE1BQUs7NEJBQUlmLFdBQVdkLHFGQUF3QjtzQ0FBRTs7Ozs7O3dCQUNoRFEsd0JBQVUsOERBQUNLOzRCQUFJQyxXQUFXZCw2RUFBZ0I7c0NBQUdROzs7Ozs7c0NBRzlDLDhEQUFDSzs0QkFBSUMsV0FBV2Qsc0ZBQXlCOzs4Q0FDckMsOERBQUM4QjtvQ0FDR1IsTUFBSztvQ0FDTFIsV0FBVyxHQUF1QixPQUFwQmQsZ0ZBQW1COzhDQUFJOzs7Ozs7OENBR3pDLDhEQUFDOEI7b0NBQ0dSLE1BQUs7b0NBQ0xSLFdBQVcsR0FBd0IsT0FBckJkLG9GQUFvQjs4Q0FBSTs7Ozs7Ozs7Ozs7O3NDQUk5Qyw4REFBQytCOzRCQUFHakIsV0FBV2QsOEVBQWlCOzs7Ozs7c0NBQ2hDLDhEQUFDYTs0QkFBSUMsV0FBVyxHQUFpQixPQUFkZCwwRUFBYTs7Z0NBQUk7OENBRWhDLDhEQUFDVTtvQ0FBRXNCLFFBQU87b0NBQVNILE1BQUs7OENBQUk7Ozs7OztnQ0FBb0I7OENBRWhELDhEQUFDbkI7b0NBQUVzQixRQUFPO29DQUFTSCxNQUFLOzhDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwRCxDQUFDO0tBekV1QjVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybXMvc2lnbi1pbi1mb3JtLmpzP2ZkYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlc1V0aWxzIGZyb20gJy4uLy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZm9ybVN0eWxlcy5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5Gb3JtKHtoYW5kbGVDaGFuZ2UsIGhhbmRsZVN1Ym1pdCwgY3JlZGVudGlhbHMsIHVzZXIsIGxvYWRpbmcsIGVycm9yfSkge1xuICAgIGxldCBzdGF0dXMgPSA8PjwvPlxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSA9PT0gJ0ZpcmViYXNlOiBFcnJvciAoYXV0aC91c2VyLW5vdC1mb3VuZCkuJykge1xuICAgICAgICAgICAgc3RhdHVzID0gPGE+VXNlciB3aXRoIHRoaXMgZW1haWwgZG9lcyBub3QgZXhpc3RzPC9hPlxuICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm1lc3NhZ2U9PT0gJ0ZpcmViYXNlOiBFcnJvciAoYXV0aC93cm9uZy1wYXNzd29yZCkuJykge1xuICAgICAgICAgICAgc3RhdHVzID0gPGE+V3JvbmcgcGFzc3dvcmQ8L2E+XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfSBlbHNlIGlmIChlcnJvci5tZXNzYWdlPT09J0ZpcmViYXNlOiBBY2Nlc3MgdG8gdGhpcyBhY2NvdW50IGhhcyBiZWVuIHRlbXBvcmFyaWx5IGRpc2FibGVkIGR1ZSB0byBtYW55IGZhaWxlZCBsb2dpbiBhdHRlbXB0cy4gWW91IGNhbiBpbW1lZGlhdGVseSByZXN0b3JlIGl0IGJ5IHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkIG9yIHlvdSBjYW4gdHJ5IGFnYWluIGxhdGVyLiAoYXV0aC90b28tbWFueS1yZXF1ZXN0cykuJykge1xuICAgICAgICAgICAgc3RhdHVzID0gPGE+VG9vIG1hbnkgbG9naW4gYXR0ZW1wdHMuIFRyeSBhZ2FpbiBsYXRlcjwvYT5cbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGF0dXMgPSA8YT57ZXJyb3IubWVzc2FnZX08L2E+XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNVdGlsc1snc2lnbkluJ119PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY29udGFpbmVyLWZvcm0nXX0+XG4gICAgICAgICAgICAgICAgPGgzPlNpZ24gaW48L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+U2lnbiBpbiB3aXRoIHlvdXIgVmlydHVhbCBMYWIgYWNjb3VudC48L3A+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NyZWRlbnRpYWxzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7c3R5bGVzWydpbnB1dCddfSAke3N0eWxlc1snZW1haWwnXX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjcmVkZW50aWFscy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3N0eWxlc1snaW5wdXQnXX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17c3R5bGVzWydmb3Jnb3RQYXNzd29yZCddfT5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPlxuICAgICAgICAgICAgICAgICAgICB7c3RhdHVzICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3N0YXR1cyddfT57c3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydidXR0b25Db250YWluZXInXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzWydidG5DcmVhdGUnXX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzWydidG4tU2lnbkluJ119YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXNbJ2RpdmlkZXInXX0+PC9ocj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlc1sndG9zJ119YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBCeSBwcm9jZWVkaW5nLCB5b3UgYWNjZXB0IG91ciZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiNcIj5UZXJtcyBvZiBTZXJ2aWNlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7YW5kJm5ic3A7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIjXCI+UHJpdmFjeSBTdGF0ZW1lbnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICkgXG59XG4iXSwibmFtZXMiOlsic3R5bGVzVXRpbHMiLCJzdHlsZXMiLCJTaWduSW5Gb3JtIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiY3JlZGVudGlhbHMiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwic3RhdHVzIiwibWVzc2FnZSIsImEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiYXV0b0NvbXBsZXRlIiwiY2xhc3MiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwiZW1haWwiLCJwYXNzd29yZCIsImhyZWYiLCJidXR0b24iLCJociIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/forms/sign-in-form.js\n"));

/***/ })

});