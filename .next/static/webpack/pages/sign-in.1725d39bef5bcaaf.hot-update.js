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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/forms/sign-in-form */ \"./components/forms/sign-in-form.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./utils.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction SignIn() {\n    _s();\n    //states\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    //hook\n    const [signInWithEmailAndPassword, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useSignInWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.auth);\n    // router\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isSigned, setIsSigned] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (isSigned) {\n            router.push(\"/\") // replace '/dashboard' with your target page\n            ;\n        }\n    }, [\n        isSigned\n    ]);\n    function setUser() {\n        if (user) {\n            setIsSigned(true);\n        }\n    }\n    //handlers\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.value\n            };\n        });\n    }\n    async function handleSubmit() {\n        await signInWithEmailAndPassword(credentials.email, credentials.password);\n        const gjhk = await setIsSigned(true);\n        const ghjkhkl = await console.log(isSigned);\n    }\n    //sign out\n    async function signOut() {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_6__.logOut)();\n    }\n    //success text\n    const success = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"You have signed in\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signOut,\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, this);\n    const signInForm = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        handleChange: handleChange,\n        handleSubmit: handleSubmit,\n        credentials: credentials,\n        error: error,\n        loading: loading,\n        user: user\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 98,\n                columnNumber: 13\n            }, this),\n            signInForm\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 97,\n        columnNumber: 9\n    }, this);\n}\n_s(SignIn, \"1gW/Y3K+IaPKavZ5Pm9qPL4Ll/g=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useSignInWithEmailAndPassword,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduLWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ2xCO0FBRUM7QUFDaUM7QUFFekI7QUFDZjtBQUNRO0FBTTFCLFNBQVNTLFNBQVM7O0lBRTdCLFFBQVE7SUFDUixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7UUFDM0NPLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBR0YsTUFBTTtJQUNOLE1BQU0sQ0FDRkMsNEJBQ0FDLE1BQ0FDLFNBQ0FDLE1BQ0QsR0FBR2Qsd0ZBQTZCQSxDQUFDRCxpREFBSUE7SUFHeEMsU0FBUztJQUNULE1BQU1nQixTQUFTakIsc0RBQVNBO0lBRXhCLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQUMsS0FBSztJQUc5Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUlhLFVBQVU7WUFDWkQsT0FBT0csSUFBSSxDQUFDLEtBQUssNkNBQTZDOztRQUNoRSxDQUFDO0lBQ0gsR0FBRztRQUFDRjtLQUFTO0lBR2YsU0FBU0csVUFBVTtRQUNmLElBQUlQLE1BQU07WUFDTkssWUFBWSxJQUFJO1FBQ3BCLENBQUM7SUFDTDtJQUVBLFVBQVU7SUFDVixTQUFTRyxhQUFhQyxLQUFLLEVBQUU7UUFDekJiLGVBQWVjLENBQUFBLFdBQVk7WUFDdkIsT0FBTztnQkFDUCxHQUFHQSxRQUFRO2dCQUNYLENBQUNELE1BQU1FLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVILE1BQU1FLE1BQU0sQ0FBQ0UsS0FBSztZQUN2QztRQUNKO0lBQ0o7SUFFQSxlQUFlQyxlQUFlO1FBQzFCLE1BQU1mLDJCQUEyQkosWUFBWUUsS0FBSyxFQUFFRixZQUFZRyxRQUFRO1FBQ3hFLE1BQU1pQixPQUFPLE1BQU1WLFlBQVksSUFBSTtRQUNuQyxNQUFNVyxVQUFVLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ2Q7SUFDdEM7SUFHQSxVQUFVO0lBQ1YsZUFBZWUsVUFBVTtRQUNyQixNQUFNM0IsOENBQU1BO0lBQ2hCO0lBRUEsY0FBYztJQUNkLE1BQU00Qix3QkFDRiw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBT0MsU0FBU0w7MEJBQVM7Ozs7Ozs7Ozs7OztJQUlsQyxNQUFNTSwyQkFDRiw4REFBQ3hDLHNFQUFVQTtRQUNQdUIsY0FBY0E7UUFDZE0sY0FBY0E7UUFDZG5CLGFBQWFBO1FBQ2JPLE9BQU9BO1FBQ1BELFNBQVNBO1FBQ1RELE1BQU1BOzs7Ozs7SUFPZCxxQkFDSSw4REFBQ3FCOzswQkFDRyw4REFBQzVCLDBEQUFNQTs7Ozs7WUFDTmdDOzs7Ozs7O0FBS2IsQ0FBQztHQXpGdUIvQjs7UUFlZE4sb0ZBQTZCQTtRQUlwQkYsa0RBQVNBOzs7S0FuQkpRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ24taW4uanM/ZTVkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lnbkluRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3Jtcy9zaWduLWluLWZvcm1cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2VDbGllbnRcIlxuaW1wb3J0IHsgdXNlU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJ1xuXG5pbXBvcnQge1JlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbG9nT3V0IH0gZnJvbSBcIi4uL3V0aWxzXCJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuICAgIFxuICAgIC8vc3RhdGVzXG4gICAgY29uc3QgW2NyZWRlbnRpYWxzLCBzZXRDcmVkZW50aWFsc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGVtYWlsOiBcIlwiLCBcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICB9KVxuXG5cbiAgICAvL2hvb2tcbiAgICBjb25zdCBbXG4gICAgICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICAgICAgICB1c2VyLFxuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBlcnJvcixcbiAgICAgIF0gPSB1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoKTtcblxuICAgIFxuICAgIC8vIHJvdXRlclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBbaXNTaWduZWQsIHNldElzU2lnbmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzU2lnbmVkKSB7XG4gICAgICAgICAgcm91dGVyLnB1c2goJy8nKSAvLyByZXBsYWNlICcvZGFzaGJvYXJkJyB3aXRoIHlvdXIgdGFyZ2V0IHBhZ2VcbiAgICAgICAgfVxuICAgICAgfSwgW2lzU2lnbmVkXSlcblxuICAgIFxuICAgIGZ1bmN0aW9uIHNldFVzZXIoKSB7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICBzZXRJc1NpZ25lZCh0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9oYW5kbGVyc1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRDcmVkZW50aWFscyhwcmV2Q3JlZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucHJldkNyZWQsXG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgIGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGNyZWRlbnRpYWxzLmVtYWlsLCBjcmVkZW50aWFscy5wYXNzd29yZClcbiAgICAgICAgY29uc3QgZ2poayA9IGF3YWl0IHNldElzU2lnbmVkKHRydWUpXG4gICAgICAgIGNvbnN0IGdoamtoa2wgPSBhd2FpdCBjb25zb2xlLmxvZyhpc1NpZ25lZClcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLy9zaWduIG91dFxuICAgIGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXQoKSB7XG4gICAgICAgIGF3YWl0IGxvZ091dCgpXG4gICAgfVxuICAgIFxuICAgIC8vc3VjY2VzcyB0ZXh0XG4gICAgY29uc3Qgc3VjY2VzcyA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5Zb3UgaGF2ZSBzaWduZWQgaW48L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduT3V0fT5Mb2cgb3V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGNvbnN0IHNpZ25JbkZvcm0gPSAoXG4gICAgICAgIDxTaWduSW5Gb3JtXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgY3JlZGVudGlhbHM9e2NyZWRlbnRpYWxzfVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgIC8+XG4gICAgKVxuICAgIFxuICAgIFxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIHtzaWduSW5Gb3JtfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgIClcbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJTaWduSW5Gb3JtIiwidXNlUm91dGVyIiwiYXV0aCIsInVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImxvZ091dCIsIk5hdmJhciIsIlNpZ25JbiIsImNyZWRlbnRpYWxzIiwic2V0Q3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwicm91dGVyIiwiaXNTaWduZWQiLCJzZXRJc1NpZ25lZCIsInB1c2giLCJzZXRVc2VyIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2Q3JlZCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImdqaGsiLCJnaGpraGtsIiwiY29uc29sZSIsImxvZyIsInNpZ25PdXQiLCJzdWNjZXNzIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwic2lnbkluRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sign-in.js\n"));

/***/ })

});