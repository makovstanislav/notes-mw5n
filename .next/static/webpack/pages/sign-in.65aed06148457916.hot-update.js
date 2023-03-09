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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignInForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/formStyles.module.css */ \"./styles/formStyles.module.css\");\n/* harmony import */ var _styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction SignInForm(param) {\n    let { handleChange , handleSubmit , credentials , user , loading , error  } = param;\n    let status = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_1___default().status)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n        lineNumber: 5,\n        columnNumber: 18\n    }, this);\n    if (error) {\n        if (error.message === \"Firebase: Error (auth/user-not-found).\") {\n            status = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: \"User with this email does not exists\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                lineNumber: 8,\n                columnNumber: 22\n            }, this);\n        } else if (error.message === \"Firebase: Error (auth/wrong-password).\") {\n            status = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: \"Wrong password\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                lineNumber: 10,\n                columnNumber: 22\n            }, this);\n            console.log(error);\n        } else if (error.message === \"Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).\") {\n            status = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: \"Too many login attempts. Try again later\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                lineNumber: 13,\n                columnNumber: 22\n            }, this);\n        } else {\n            status = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: error.message\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                lineNumber: 16,\n                columnNumber: 22\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default().signIn),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"container-form\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"subtitle\",\n                    children: \"Sign in with your Virtual Lab account.\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    autoComplete: \"off\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"mb-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                placeholder: \"Email\",\n                                onChange: handleChange,\n                                name: \"email\",\n                                value: credentials.email,\n                                autoComplete: \"off\",\n                                className: \"form-control \".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_1___default().input), \" \").concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_1___default().email))\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                placeholder: \"Password\",\n                                onChange: handleChange,\n                                name: \"password\",\n                                value: credentials.password,\n                                autoComplete: \"off\",\n                                className: \"form-control \".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_1___default().input))\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_1___default().forgotPassword),\n                            children: \"Forgot password?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_1___default().buttonContainer),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"\".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_1___default().btnCreate)),\n                                    children: \"Create account\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"\".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"btn-SignIn\"])),\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                            className: (_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_1___default().divider)\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_formStyles_module_css__WEBPACK_IMPORTED_MODULE_1___default().tos)),\n                            children: [\n                                \"By proceeding, you accept our\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: \"#\",\n                                    children: \"Terms of Service\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, this),\n                                \"\\xa0and\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: \"#\",\n                                    children: \"Privacy Statement\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this),\n                        status\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/components/forms/sign-in-form.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_c = SignInForm;\nvar _c;\n$RefreshReg$(_c, \"SignInForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL3NpZ24taW4tZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1RDtBQUNBO0FBRXhDLFNBQVNFLFdBQVcsS0FBK0QsRUFBRTtRQUFqRSxFQUFDQyxhQUFZLEVBQUVDLGFBQVksRUFBRUMsWUFBVyxFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFDLEdBQS9EO0lBQy9CLElBQUlDLHVCQUFTLDhEQUFDQztRQUFJQyxXQUFXViw2RUFBZ0I7Ozs7OztJQUM3QyxJQUFJTyxPQUFPO1FBQ1AsSUFBSUEsTUFBTUksT0FBTyxLQUFLLDBDQUEwQztZQUM1REgsdUJBQVMsOERBQUNJOzBCQUFFOzs7Ozs7UUFDaEIsT0FBTyxJQUFJTCxNQUFNSSxPQUFPLEtBQUksMENBQTBDO1lBQ2xFSCx1QkFBUyw4REFBQ0k7MEJBQUU7Ozs7OztZQUNaQyxRQUFRQyxHQUFHLENBQUNQO1FBQ2hCLE9BQU8sSUFBSUEsTUFBTUksT0FBTyxLQUFHLHFOQUFxTjtZQUM1T0gsdUJBQVMsOERBQUNJOzBCQUFFOzs7Ozs7UUFDaEIsT0FDSztZQUNESix1QkFBUyw4REFBQ0k7MEJBQUdMLE1BQU1JLE9BQU87Ozs7OztRQUM5QixDQUFDO0lBRUwsQ0FBQztJQUNELHFCQUNJLDhEQUFDRjtRQUFJQyxXQUFXWCx3RUFBcUI7a0JBQ2pDLDRFQUFDVTtZQUFJQyxXQUFXVix3RkFBd0I7OzhCQUNwQyw4REFBQ2U7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7b0JBQUVOLFdBQVU7OEJBQVc7Ozs7Ozs4QkFDeEIsOERBQUNPO29CQUFLQyxVQUFVZjtvQkFBY2dCLGNBQWE7O3NDQUN2Qyw4REFBQ1Y7NEJBQUlXLE9BQU07c0NBQ1AsNEVBQUNDO2dDQUNHQyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaQyxVQUFVdEI7Z0NBQ1Z1QixNQUFLO2dDQUNMQyxPQUFPdEIsWUFBWXVCLEtBQUs7Z0NBQ3hCUixjQUFhO2dDQUNiVCxXQUFXLGdCQUFtQ1YsT0FBbkJBLDRFQUFlLEVBQUMsS0FBbUIsT0FBaEJBLDRFQUFlOzs7Ozs7Ozs7OztzQ0FHckUsOERBQUNTO3NDQUNHLDRFQUFDWTtnQ0FDR0MsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsVUFBVXRCO2dDQUNWdUIsTUFBSztnQ0FDTEMsT0FBT3RCLFlBQVl3QixRQUFRO2dDQUMzQlQsY0FBYTtnQ0FDYlQsV0FBVyxnQkFBZ0MsT0FBaEJWLDRFQUFlOzs7Ozs7Ozs7OztzQ0FHbEQsOERBQUNZOzRCQUFFaUIsTUFBSzs0QkFBSW5CLFdBQVdWLHFGQUF3QjtzQ0FBRTs7Ozs7O3NDQUNqRCw4REFBQ1M7NEJBQUlDLFdBQVdWLHNGQUF5Qjs7OENBQ3JDLDhEQUFDOEI7b0NBQ0dSLE1BQUs7b0NBQ0xaLFdBQVcsR0FBdUIsT0FBcEJWLGdGQUFtQjs4Q0FBSTs7Ozs7OzhDQUd6Qyw4REFBQzhCO29DQUNHUixNQUFLO29DQUNMWixXQUFXLEdBQXdCLE9BQXJCVixvRkFBb0I7OENBQUk7Ozs7Ozs7Ozs7OztzQ0FJOUMsOERBQUMrQjs0QkFBR3JCLFdBQVdWLDhFQUFpQjs7Ozs7O3NDQUNoQyw4REFBQ1M7NEJBQUlDLFdBQVcsR0FBaUIsT0FBZFYsMEVBQWE7O2dDQUFJOzhDQUVoQyw4REFBQ1k7b0NBQUVvQixRQUFPO29DQUFTSCxNQUFLOzhDQUFJOzs7Ozs7Z0NBQW9COzhDQUVoRCw4REFBQ2pCO29DQUFFb0IsUUFBTztvQ0FBU0gsTUFBSzs4Q0FBSTs7Ozs7Ozs7Ozs7O3dCQUUvQnJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckIsQ0FBQztLQXJFdUJQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybXMvc2lnbi1pbi1mb3JtLmpzP2ZkYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlc1V0aWxzIGZyb20gJy4uLy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZm9ybVN0eWxlcy5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW5Gb3JtKHtoYW5kbGVDaGFuZ2UsIGhhbmRsZVN1Ym1pdCwgY3JlZGVudGlhbHMsIHVzZXIsIGxvYWRpbmcsIGVycm9yfSkge1xuICAgIGxldCBzdGF0dXMgPSA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydzdGF0dXMnXX0+PC9kaXY+XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5tZXNzYWdlID09PSAnRmlyZWJhc2U6IEVycm9yIChhdXRoL3VzZXItbm90LWZvdW5kKS4nKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSA8YT5Vc2VyIHdpdGggdGhpcyBlbWFpbCBkb2VzIG5vdCBleGlzdHM8L2E+XG4gICAgICAgIH0gZWxzZSBpZiAoZXJyb3IubWVzc2FnZT09PSAnRmlyZWJhc2U6IEVycm9yIChhdXRoL3dyb25nLXBhc3N3b3JkKS4nKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSA8YT5Xcm9uZyBwYXNzd29yZDwvYT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm1lc3NhZ2U9PT0nRmlyZWJhc2U6IEFjY2VzcyB0byB0aGlzIGFjY291bnQgaGFzIGJlZW4gdGVtcG9yYXJpbHkgZGlzYWJsZWQgZHVlIHRvIG1hbnkgZmFpbGVkIGxvZ2luIGF0dGVtcHRzLiBZb3UgY2FuIGltbWVkaWF0ZWx5IHJlc3RvcmUgaXQgYnkgcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQgb3IgeW91IGNhbiB0cnkgYWdhaW4gbGF0ZXIuIChhdXRoL3Rvby1tYW55LXJlcXVlc3RzKS4nKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSA8YT5Ub28gbWFueSBsb2dpbiBhdHRlbXB0cy4gVHJ5IGFnYWluIGxhdGVyPC9hPlxuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXR1cyA9IDxhPntlcnJvci5tZXNzYWdlfTwvYT5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1V0aWxzWydzaWduSW4nXX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjb250YWluZXItZm9ybSddfT5cbiAgICAgICAgICAgICAgICA8aDM+U2lnbiBpbjwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5TaWduIGluIHdpdGggeW91ciBWaXJ0dWFsIExhYiBhY2NvdW50LjwvcD5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGVudGlhbHMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtzdHlsZXNbJ2lucHV0J119ICR7c3R5bGVzWydlbWFpbCddfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NyZWRlbnRpYWxzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7c3R5bGVzWydpbnB1dCddfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtzdHlsZXNbJ2ZvcmdvdFBhc3N3b3JkJ119PkZvcmdvdCBwYXNzd29yZD88L2E+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2J1dHRvbkNvbnRhaW5lciddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2J0bkNyZWF0ZSddfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2J0bi1TaWduSW4nXX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e3N0eWxlc1snZGl2aWRlciddfT48L2hyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzWyd0b3MnXX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJ5IHByb2NlZWRpbmcsIHlvdSBhY2NlcHQgb3VyJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiI1wiPlRlcm1zIG9mIFNlcnZpY2U8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDthbmQmbmJzcDsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiNcIj5Qcml2YWN5IFN0YXRlbWVudDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0dXN9XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICkgXG59XG4iXSwibmFtZXMiOlsic3R5bGVzVXRpbHMiLCJzdHlsZXMiLCJTaWduSW5Gb3JtIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiY3JlZGVudGlhbHMiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWVzc2FnZSIsImEiLCJjb25zb2xlIiwibG9nIiwiaDMiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiYXV0b0NvbXBsZXRlIiwiY2xhc3MiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwiZW1haWwiLCJwYXNzd29yZCIsImhyZWYiLCJidXR0b24iLCJociIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/forms/sign-in-form.js\n"));

/***/ })

});