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

/***/ "./pages/sign-in.js":
/*!**************************!*\
  !*** ./pages/sign-in.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/forms/sign-in-form */ \"./components/forms/sign-in-form.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SignIn() {\n    _s();\n    //states\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [isSigned, setSigned] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    //handlers\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.value\n            };\n        });\n    }\n    async function handleSubmit() {\n        const logUp = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)();\n        const switchSigned = await setSigned(true);\n    }\n    //sign-in\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"], credentials.email, credentials.password).then((userCredential)=>{\n        // Signed in \n        const user = userCredential.user;\n    // ...\n    }).catch((error)=>{\n        const errorCode = error.code;\n        const errorMessage = error.message;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleChange: handleChange,\n                handleSubmit: handleSubmit,\n                credentials: credentials\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    href: \"/\",\n                    children: \"Back home \"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                    lineNumber: 52,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 51,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_s(SignIn, \"Itm8XW+XPJe3p74923D4EgNs8FY=\");\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduLWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNEO0FBQ3JCO0FBQ0M7QUFDVDtBQUViLFNBQVNNLFNBQVM7O0lBRTdCLFFBQVE7SUFDUixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0osK0NBQVFBLENBQUM7UUFDM0NLLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBRUYsTUFBTSxDQUFDQyxVQUFVQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUMsVUFBVTtJQUNWLFNBQVNTLGFBQWFDLEtBQUssRUFBRTtRQUN6Qk4sZUFBZU8sQ0FBQUEsV0FBWTtZQUN2QixPQUFPO2dCQUNQLEdBQUdBLFFBQVE7Z0JBQ1gsQ0FBQ0QsTUFBTUUsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUgsTUFBTUUsTUFBTSxDQUFDRSxLQUFLO1lBQ3ZDO1FBQ0o7SUFDSjtJQUVBLGVBQWVDLGVBQWU7UUFDMUIsTUFBTUMsUUFBUSxNQUFNcEIseUVBQTBCQTtRQUM5QyxNQUFNcUIsZUFBZSxNQUFNVCxVQUFVLElBQUk7SUFDN0M7SUFFQSxTQUFTO0lBQ1RaLHlFQUEwQkEsQ0FBQ0UsdURBQUlBLEVBQUVLLFlBQVlFLEtBQUssRUFBRUYsWUFBWUcsUUFBUSxFQUNuRVksSUFBSSxDQUFDLENBQUNDLGlCQUFtQjtRQUN0QixhQUFhO1FBQ2IsTUFBTUMsT0FBT0QsZUFBZUMsSUFBSTtJQUNoQyxNQUFNO0lBQ1YsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLFFBQVU7UUFDZCxNQUFNQyxZQUFZRCxNQUFNRSxJQUFJO1FBQzVCLE1BQU1DLGVBQWVILE1BQU1JLE9BQU87SUFDdEM7SUFFSixxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDOUIsc0VBQVVBO2dCQUNDWSxjQUFjQTtnQkFDZE0sY0FBY0E7Z0JBQ2RaLGFBQWFBOzs7Ozs7MEJBRWpCLDhEQUFDd0I7MEJBQ0csNEVBQUMxQixrREFBSUE7b0JBQUMyQixNQUFLOzhCQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QyxDQUFDO0dBbER1QjFCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ24taW4uanM/ZTVkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCJcbmltcG9ydCBTaWduSW5Gb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1zL3NpZ24taW4tZm9ybVwiXG5pbXBvcnQgYXV0aCBmcm9tIFwiLi4vZmlyZWJhc2VDbGllbnRcIlxuaW1wb3J0IHtSZWFjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuICAgIFxuICAgIC8vc3RhdGVzXG4gICAgY29uc3QgW2NyZWRlbnRpYWxzLCBzZXRDcmVkZW50aWFsc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGVtYWlsOiBcIlwiLCBcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICB9KVxuXG4gICAgY29uc3QgW2lzU2lnbmVkLCBzZXRTaWduZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICAvL2hhbmRsZXJzXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldENyZWRlbnRpYWxzKHByZXZDcmVkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmV2Q3JlZCxcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAgICAgY29uc3QgbG9nVXAgPSBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCgpXG4gICAgICAgIGNvbnN0IHN3aXRjaFNpZ25lZCA9IGF3YWl0IHNldFNpZ25lZCh0cnVlKVxuICAgIH1cbiAgICBcbiAgICAvL3NpZ24taW5cbiAgICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBjcmVkZW50aWFscy5lbWFpbCwgY3JlZGVudGlhbHMucGFzc3dvcmQpXG4gICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICAgICAgLy8gU2lnbmVkIGluIFxuICAgICAgICAgICAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XG4gICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxTaWduSW5Gb3JtIFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzPXtjcmVkZW50aWFsc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkJhY2sgaG9tZSA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBcbiAgICApXG59Il0sIm5hbWVzIjpbInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiU2lnbkluRm9ybSIsImF1dGgiLCJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIlNpZ25JbiIsImNyZWRlbnRpYWxzIiwic2V0Q3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwiaXNTaWduZWQiLCJzZXRTaWduZWQiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZDcmVkIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwibG9nVXAiLCJzd2l0Y2hTaWduZWQiLCJ0aGVuIiwidXNlckNyZWRlbnRpYWwiLCJ1c2VyIiwiY2F0Y2giLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwic2VjdGlvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sign-in.js\n"));

/***/ })

});