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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/forms/sign-in-form */ \"./components/forms/sign-in-form.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./utils.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction SignIn() {\n    _s();\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [signInWithEmailAndPassword, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.auth);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (error) {\n            console.log(error.message);\n        } else if (user) {\n            router.push(\"/\") // replace '/dashboard' with your target page\n            ;\n        }\n    }, [\n        user,\n        error\n    ]);\n    //handlers\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.value\n            };\n        });\n    }\n    function handleSubmit() {\n        signInWithEmailAndPassword(credentials.email, credentials.password);\n    }\n    //sign out\n    async function signOut() {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_6__.logOut)();\n    }\n    //success text\n    const success = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"You have signed in\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signOut,\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n    const signInForm = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        handleChange: handleChange,\n        handleSubmit: handleSubmit,\n        credentials: credentials,\n        error: error,\n        loading: loading,\n        user: user\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            signInForm\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 80,\n        columnNumber: 9\n    }, this);\n}\n_s(SignIn, \"b2qmyrdptDkPD1bHN8wlea+wg7Q=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduLWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlEO0FBRWpCO0FBQ2lDO0FBQ3pCO0FBRVQ7QUFFTjtBQUNRO0FBRzFCLFNBQVNTLFNBQVM7O0lBRTdCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUMzQ1EsT0FBTztRQUNQQyxVQUFVO0lBQ1o7SUFFRixNQUFNLENBQ0ZDLDRCQUNBQyxNQUNBQyxTQUNBQyxNQUNELEdBQUdmLHdGQUE2QkEsQ0FBQ0QsaURBQUlBO0lBRXhDLE1BQU1pQixTQUFTWixzREFBU0E7SUFHeEJELGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFJWSxPQUFPO1lBQ1BFLFFBQVFDLEdBQUcsQ0FBQ0gsTUFBTUksT0FBTztRQUM3QixPQUFPLElBQUlOLE1BQU07WUFDYkcsT0FBT0ksSUFBSSxDQUFDLEtBQUssNkNBQTZDOztRQUNsRSxDQUFDO0lBQ0gsR0FBRztRQUFDUDtRQUFNRTtLQUFNO0lBSWxCLFVBQVU7SUFDVixTQUFTTSxhQUFhQyxLQUFLLEVBQUU7UUFDekJiLGVBQWVjLENBQUFBLFdBQVk7WUFDdkIsT0FBTztnQkFDUCxHQUFHQSxRQUFRO2dCQUNYLENBQUNELE1BQU1FLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVILE1BQU1FLE1BQU0sQ0FBQ0UsS0FBSztZQUN2QztRQUNKO0lBQ0o7SUFFQSxTQUFTQyxlQUFlO1FBQ3BCZiwyQkFBMkJKLFlBQVlFLEtBQUssRUFBRUYsWUFBWUcsUUFBUTtJQUN0RTtJQUdBLFVBQVU7SUFDVixlQUFlaUIsVUFBVTtRQUNyQixNQUFNdkIsOENBQU1BO0lBQ2hCO0lBRUEsY0FBYztJQUNkLE1BQU13Qix3QkFDRiw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBT0MsU0FBU0w7MEJBQVM7Ozs7Ozs7Ozs7OztJQUlsQyxNQUFNTSwyQkFDRiw4REFBQ3BDLHNFQUFVQTtRQUNQdUIsY0FBY0E7UUFDZE0sY0FBY0E7UUFDZG5CLGFBQWFBO1FBQ2JPLE9BQU9BO1FBQ1BELFNBQVNBO1FBQ1RELE1BQU1BOzs7Ozs7SUFJZCxxQkFDSSw4REFBQ2lCOzswQkFDRyw4REFBQ3hCLDBEQUFNQTs7Ozs7WUFDTjRCOzs7Ozs7O0FBS2IsQ0FBQztHQTFFdUIzQjs7UUFZZFAsb0ZBQTZCQTtRQUVwQkksa0RBQVNBOzs7S0FkSkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbi1pbi5qcz9lNWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWduSW5Gb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1zL3NpZ24taW4tZm9ybVwiXG5cbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2VDbGllbnRcIlxuaW1wb3J0IHsgdXNlU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJ1xuaW1wb3J0IHtSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IGxvZ091dCB9IGZyb20gXCIuLi91dGlsc1wiXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgICBcbiAgICBjb25zdCBbY3JlZGVudGlhbHMsIHNldENyZWRlbnRpYWxzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZW1haWw6IFwiXCIsIFxuICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgIH0pXG5cbiAgICBjb25zdCBbXG4gICAgICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICAgICAgICB1c2VyLFxuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBlcnJvcixcbiAgICAgIF0gPSB1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoKTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH0gZWxzZSBpZiAodXNlcikge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKSAvLyByZXBsYWNlICcvZGFzaGJvYXJkJyB3aXRoIHlvdXIgdGFyZ2V0IHBhZ2VcbiAgICAgICAgfSBcbiAgICAgIH0sIFt1c2VyLCBlcnJvcl0pXG5cblxuXG4gICAgLy9oYW5kbGVyc1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRDcmVkZW50aWFscyhwcmV2Q3JlZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucHJldkNyZWQsXG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGNyZWRlbnRpYWxzLmVtYWlsLCBjcmVkZW50aWFscy5wYXNzd29yZClcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLy9zaWduIG91dFxuICAgIGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXQoKSB7XG4gICAgICAgIGF3YWl0IGxvZ091dCgpXG4gICAgfVxuICAgIFxuICAgIC8vc3VjY2VzcyB0ZXh0XG4gICAgY29uc3Qgc3VjY2VzcyA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5Zb3UgaGF2ZSBzaWduZWQgaW48L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduT3V0fT5Mb2cgb3V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGNvbnN0IHNpZ25JbkZvcm0gPSAoXG4gICAgICAgIDxTaWduSW5Gb3JtXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgY3JlZGVudGlhbHM9e2NyZWRlbnRpYWxzfVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgIC8+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIHtzaWduSW5Gb3JtfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgIClcbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJTaWduSW5Gb3JtIiwiYXV0aCIsInVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImxvZ091dCIsIk5hdmJhciIsIlNpZ25JbiIsImNyZWRlbnRpYWxzIiwic2V0Q3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJwdXNoIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2Q3JlZCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInNpZ25PdXQiLCJzdWNjZXNzIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwic2lnbkluRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sign-in.js\n"));

/***/ })

});