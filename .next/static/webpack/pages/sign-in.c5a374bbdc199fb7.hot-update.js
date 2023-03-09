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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/forms/sign-in-form */ \"./components/forms/sign-in-form.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./utils.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SignIn() {\n    _s();\n    //states\n    //hook1\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    //derived hook\n    const userEmail = credentials.email;\n    const [isSigned, setSigned] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    // hook \n    const [signInWithEmailAndPassword, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.auth);\n    //handlers\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.value\n            };\n        });\n    }\n    async function handleSubmit() {\n        await signIn(credentials.email, credentials.password);\n        await setSigned(true);\n    }\n    //sign-in\n    function signIn(email, password) {\n        signInWithEmailAndPassword(email, password);\n    }\n    //sign out\n    async function signOut() {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_6__.logOut)();\n        await setSigned(false);\n    }\n    //success text\n    const success = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"You have signed in\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signOut,\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this);\n    const signInForm = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        handleChange: handleChange,\n        handleSubmit: handleSubmit,\n        credentials: credentials,\n        error: error,\n        loading: loading,\n        user: user\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 90,\n                columnNumber: 25\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"error.message\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 91,\n                columnNumber: 15\n            }, this),\n            user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"user.user.email\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 92,\n                columnNumber: 14\n            }, this),\n            user ? success : signInForm\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, this);\n} /* if (error) {\n        return(\n            <div>\n                <h1>{error.message}</h1>\n            </div>\n        )\n    } else if (loading) {\n        return(\n            <div>\n                <h1>Loading</h1>\n            </div>\n        )\n    }  else if(user) {\n        return(\n            <div>\n                <h1>{user.user.email} successfully signed-in. Thank you! </h1>\n            </div>\n        )\n    }  */ \n_s(SignIn, \"JQhMUQgXuaqm5ayNKgbwO/lbbw8=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduLWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNqQjtBQUNpQztBQUVwQztBQUNUO0FBQ0s7QUFDUTtBQUNBO0FBTTFCLFNBQVNTLFNBQVM7O0lBRTdCLFFBQVE7SUFDUixPQUFPO0lBQ1AsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO1FBQzNDUSxPQUFPO1FBQ1BDLFVBQVU7SUFDWjtJQUVGLGNBQWM7SUFDZCxNQUFNQyxZQUFZSixZQUFZRSxLQUFLO0lBRW5DLE1BQU0sQ0FBQ0csVUFBVUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVDLFFBQVE7SUFFUixNQUFNLENBQ0ZhLDRCQUNBQyxNQUNBQyxTQUNBQyxNQUNELEdBQUdsQix3RkFBNkJBLENBQUNELGlEQUFJQTtJQUd4QyxVQUFVO0lBQ1YsU0FBU29CLGFBQWFDLEtBQUssRUFBRTtRQUN6QlgsZUFBZVksQ0FBQUEsV0FBWTtZQUN2QixPQUFPO2dCQUNQLEdBQUdBLFFBQVE7Z0JBQ1gsQ0FBQ0QsTUFBTUUsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUgsTUFBTUUsTUFBTSxDQUFDRSxLQUFLO1lBQ3ZDO1FBQ0o7SUFDSjtJQUVBLGVBQWVDLGVBQWU7UUFDMUIsTUFBTUMsT0FBT2xCLFlBQVlFLEtBQUssRUFBRUYsWUFBWUcsUUFBUTtRQUNwRCxNQUFNRyxVQUFVLElBQUk7SUFDeEI7SUFFQSxTQUFTO0lBQ1QsU0FBU1ksT0FBT2hCLEtBQUssRUFBRUMsUUFBUSxFQUFFO1FBQzdCSSwyQkFBMkJMLE9BQU9DO0lBQ3RDO0lBRUEsVUFBVTtJQUNWLGVBQWVnQixVQUFVO1FBQ3JCLE1BQU12Qiw4Q0FBTUE7UUFDWixNQUFNVSxVQUFVLEtBQUs7SUFDekI7SUFHQSxjQUFjO0lBQ2QsTUFBTWMsd0JBQ0YsOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU9DLFNBQVNMOzBCQUFTOzs7Ozs7Ozs7Ozs7SUFJbEMsTUFBTU0sMkJBQ0YsOERBQUNuQyxzRUFBVUE7UUFDUHFCLGNBQWNBO1FBQ2RNLGNBQWNBO1FBQ2RqQixhQUFhQTtRQUNiVSxPQUFPQTtRQUNQRCxTQUFTQTtRQUNURCxNQUFNQTs7Ozs7O0lBTWQscUJBQ0ksOERBQUNhOzswQkFDRyw4REFBQ3ZCLDBEQUFNQTs7Ozs7WUFDTlcseUJBQVcsOERBQUNpQjswQkFBRzs7Ozs7O1lBQ3ZCaEIsdUJBQVMsOERBQUNnQjswQkFBRzs7Ozs7O1lBQ2JsQixzQkFBUSw4REFBQ2tCOzBCQUFHOzs7Ozs7WUFDSmxCLE9BQU9ZLFVBQVVLLFVBQVU7Ozs7Ozs7QUFNeEMsQ0FBQyxDQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQk87R0F6R2lCMUI7O1FBcUJkUCxvRkFBNkJBOzs7S0FyQmZPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ24taW4uanM/ZTVkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lnbkluRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3Jtcy9zaWduLWluLWZvcm1cIlxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZUNsaWVudFwiXG5pbXBvcnQgeyB1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnXG5cbmltcG9ydCB7UmVhY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBsb2dPdXQgfSBmcm9tIFwiLi4vdXRpbHNcIlxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuICAgIFxuICAgIC8vc3RhdGVzXG4gICAgLy9ob29rMVxuICAgIGNvbnN0IFtjcmVkZW50aWFscywgc2V0Q3JlZGVudGlhbHNdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbWFpbDogXCJcIiwgXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgfSlcblxuICAgIC8vZGVyaXZlZCBob29rXG4gICAgY29uc3QgdXNlckVtYWlsID0gY3JlZGVudGlhbHMuZW1haWxcblxuICAgIGNvbnN0IFtpc1NpZ25lZCwgc2V0U2lnbmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIFxuICAgIC8vIGhvb2sgXG5cbiAgICBjb25zdCBbXG4gICAgICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICAgICAgICB1c2VyLFxuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBlcnJvcixcbiAgICAgIF0gPSB1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoKTtcblxuXG4gICAgLy9oYW5kbGVyc1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRDcmVkZW50aWFscyhwcmV2Q3JlZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucHJldkNyZWQsXG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgIGF3YWl0IHNpZ25JbihjcmVkZW50aWFscy5lbWFpbCwgY3JlZGVudGlhbHMucGFzc3dvcmQpXG4gICAgICAgIGF3YWl0IHNldFNpZ25lZCh0cnVlKVxuICAgIH1cbiAgICBcbiAgICAvL3NpZ24taW5cbiAgICBmdW5jdGlvbiBzaWduSW4oZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICB9XG4gICAgXG4gICAgLy9zaWduIG91dFxuICAgIGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXQoKSB7XG4gICAgICAgIGF3YWl0IGxvZ091dCgpXG4gICAgICAgIGF3YWl0IHNldFNpZ25lZChmYWxzZSlcbiAgICB9XG4gICAgXG5cbiAgICAvL3N1Y2Nlc3MgdGV4dFxuICAgIGNvbnN0IHN1Y2Nlc3MgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+WW91IGhhdmUgc2lnbmVkIGluPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2lnbk91dH0+TG9nIG91dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBjb25zdCBzaWduSW5Gb3JtID0gKFxuICAgICAgICA8U2lnbkluRm9ybVxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIGNyZWRlbnRpYWxzPXtjcmVkZW50aWFsc31cbiAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAvPlxuICAgIClcblxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmIDxoMz5Mb2FkaW5nPC9oMz59XG4gICAge2Vycm9yICYmIDxoMz5lcnJvci5tZXNzYWdlPC9oMz59XG4gICAge3VzZXIgJiYgPGgzPnVzZXIudXNlci5lbWFpbDwvaDM+fVxuICAgICAgICAgICAge3VzZXIgPyBzdWNjZXNzIDogc2lnbkluRm9ybX1cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgIClcbn1cblxuXG4vKiBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e2Vycm9yLm1lc3NhZ2V9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBlbHNlIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmc8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICBlbHNlIGlmKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e3VzZXIudXNlci5lbWFpbH0gc3VjY2Vzc2Z1bGx5IHNpZ25lZC1pbi4gVGhhbmsgeW91ISA8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICAqLyJdLCJuYW1lcyI6WyJTaWduSW5Gb3JtIiwiYXV0aCIsInVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJsb2dPdXQiLCJMYXlvdXQiLCJOYXZiYXIiLCJTaWduSW4iLCJjcmVkZW50aWFscyIsInNldENyZWRlbnRpYWxzIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJFbWFpbCIsImlzU2lnbmVkIiwic2V0U2lnbmVkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2Q3JlZCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInNpZ25JbiIsInNpZ25PdXQiLCJzdWNjZXNzIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwic2lnbkluRm9ybSIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sign-in.js\n"));

/***/ })

});