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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/forms/sign-in-form */ \"./components/forms/sign-in-form.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./utils.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SignIn() {\n    _s();\n    //states\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [isSigned, setSigned] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    //hook\n    const [signInWithEmailAndPassword, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.auth);\n    // sign-in results \n    //handlers\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.value\n            };\n        });\n    }\n    async function handleSubmit() {\n        await signIn(credentials.email, credentials.password);\n        await setSigned(true);\n    }\n    //sign-in\n    function signIn(email, password) {\n        signInWithEmailAndPassword(email, password);\n    }\n    //sign out\n    async function signOut() {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_5__.logOut)();\n        await setSigned(false);\n    }\n    //success text\n    const success = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"You have signed in\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signOut,\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n    const signInForm = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        handleChange: handleChange,\n        handleSubmit: handleSubmit,\n        credentials: credentials,\n        error: error,\n        loading: loading,\n        user: user\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n    /*   if (error) {\n        return(\n            <div>\n                <h1>{error.message}</h1>\n            </div>\n        )\n    } else if (loading) {\n        return(\n            <div>\n                <h1>Loading</h1>\n            </div>\n        )\n    }  else if(user) {\n        return(\n            <div>\n                <h1>{user.user.email} successfully signed in. Thank you! </h1>\n            </div>\n        )\n    }  */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n            lineNumber: 101,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 100,\n        columnNumber: 9\n    }, this);\n} /* if (error) {\n        return(\n            <div>\n                <h1>{error.message}</h1>\n            </div>\n        )\n    } else if (loading) {\n        return(\n            <div>\n                <h1>Loading</h1>\n            </div>\n        )\n    }  else if(user) {\n        return(\n            <div>\n                <h1>{user.user.email} successfully signed-in. Thank you! </h1>\n            </div>\n        )\n    }  */ \n_s(SignIn, \"JQhMUQgXuaqm5ayNKgbwO/lbbw8=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduLWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNqQjtBQUNpQztBQUVwQztBQUNKO0FBQ1E7QUFNMUIsU0FBU08sU0FBUzs7SUFFN0IsUUFBUTtJQUNSLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUMzQ00sT0FBTztRQUNQQyxVQUFVO0lBQ1o7SUFFRixNQUFNLENBQUNDLFVBQVVDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUU1QyxNQUFNO0lBQ04sTUFBTSxDQUNGVSw0QkFDQUMsTUFDQUMsU0FDQUMsTUFDRCxHQUFHZix3RkFBNkJBLENBQUNELGlEQUFJQTtJQUd4QyxtQkFBbUI7SUFFbkIsVUFBVTtJQUNWLFNBQVNpQixhQUFhQyxLQUFLLEVBQUU7UUFDekJWLGVBQWVXLENBQUFBLFdBQVk7WUFDdkIsT0FBTztnQkFDUCxHQUFHQSxRQUFRO2dCQUNYLENBQUNELE1BQU1FLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVILE1BQU1FLE1BQU0sQ0FBQ0UsS0FBSztZQUN2QztRQUNKO0lBQ0o7SUFFQSxlQUFlQyxlQUFlO1FBQzFCLE1BQU1DLE9BQU9qQixZQUFZRSxLQUFLLEVBQUVGLFlBQVlHLFFBQVE7UUFDcEQsTUFBTUUsVUFBVSxJQUFJO0lBQ3hCO0lBRUEsU0FBUztJQUNULFNBQVNZLE9BQU9mLEtBQUssRUFBRUMsUUFBUSxFQUFFO1FBQzdCRywyQkFBMkJKLE9BQU9DO0lBQ3RDO0lBRUEsVUFBVTtJQUNWLGVBQWVlLFVBQVU7UUFDckIsTUFBTXJCLDhDQUFNQTtRQUNaLE1BQU1RLFVBQVUsS0FBSztJQUN6QjtJQUVBLGNBQWM7SUFDZCxNQUFNYyx3QkFDRiw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBT0MsU0FBU0w7MEJBQVM7Ozs7Ozs7Ozs7OztJQUlsQyxNQUFNTSwyQkFDRiw4REFBQ2hDLHNFQUFVQTtRQUNQa0IsY0FBY0E7UUFDZE0sY0FBY0E7UUFDZGhCLGFBQWFBO1FBQ2JTLE9BQU9BO1FBQ1BELFNBQVNBO1FBQ1RELE1BQU1BOzs7Ozs7SUFJaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtCSyxHQUVILHFCQUNJLDhEQUFDYTtrQkFDRyw0RUFBQ3RCLDBEQUFNQTs7Ozs7Ozs7OztBQUtuQixDQUFDLENBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtCTztHQWxIaUJDOztRQWdCZEwsb0ZBQTZCQTs7O0tBaEJmSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduLWluLmpzP2U1ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25JbkZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybXMvc2lnbi1pbi1mb3JtXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2VDbGllbnRcIlxuaW1wb3J0IHsgdXNlU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJ1xuXG5pbXBvcnQge1JlYWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGxvZ091dCB9IGZyb20gXCIuLi91dGlsc1wiXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgICBcbiAgICAvL3N0YXRlc1xuICAgIGNvbnN0IFtjcmVkZW50aWFscywgc2V0Q3JlZGVudGlhbHNdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbWFpbDogXCJcIiwgXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgfSlcblxuICAgIGNvbnN0IFtpc1NpZ25lZCwgc2V0U2lnbmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgLy9ob29rXG4gICAgY29uc3QgW1xuICAgICAgICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgICAgICAgdXNlcixcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgZXJyb3IsXG4gICAgICBdID0gdXNlU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCk7XG5cbiAgICBcbiAgICAvLyBzaWduLWluIHJlc3VsdHMgXG5cbiAgICAvL2hhbmRsZXJzXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldENyZWRlbnRpYWxzKHByZXZDcmVkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmV2Q3JlZCxcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAgICAgYXdhaXQgc2lnbkluKGNyZWRlbnRpYWxzLmVtYWlsLCBjcmVkZW50aWFscy5wYXNzd29yZClcbiAgICAgICAgYXdhaXQgc2V0U2lnbmVkKHRydWUpXG4gICAgfVxuICAgIFxuICAgIC8vc2lnbi1pblxuICAgIGZ1bmN0aW9uIHNpZ25JbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIH1cbiAgICBcbiAgICAvL3NpZ24gb3V0XG4gICAgYXN5bmMgZnVuY3Rpb24gc2lnbk91dCgpIHtcbiAgICAgICAgYXdhaXQgbG9nT3V0KClcbiAgICAgICAgYXdhaXQgc2V0U2lnbmVkKGZhbHNlKVxuICAgIH1cbiAgICBcbiAgICAvL3N1Y2Nlc3MgdGV4dFxuICAgIGNvbnN0IHN1Y2Nlc3MgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+WW91IGhhdmUgc2lnbmVkIGluPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2lnbk91dH0+TG9nIG91dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBjb25zdCBzaWduSW5Gb3JtID0gKFxuICAgICAgICA8U2lnbkluRm9ybVxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIGNyZWRlbnRpYWxzPXtjcmVkZW50aWFsc31cbiAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAvPlxuICAgIClcblxuICAvKiAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT57ZXJyb3IubWVzc2FnZX08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IGVsc2UgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZzwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gIGVsc2UgaWYodXNlcikge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT57dXNlci51c2VyLmVtYWlsfSBzdWNjZXNzZnVsbHkgc2lnbmVkIGluLiBUaGFuayB5b3UhIDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gICovXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgIClcbn1cblxuXG4vKiBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e2Vycm9yLm1lc3NhZ2V9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBlbHNlIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmc8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICBlbHNlIGlmKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e3VzZXIudXNlci5lbWFpbH0gc3VjY2Vzc2Z1bGx5IHNpZ25lZC1pbi4gVGhhbmsgeW91ISA8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICAqLyJdLCJuYW1lcyI6WyJTaWduSW5Gb3JtIiwiYXV0aCIsInVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvZ091dCIsIk5hdmJhciIsIlNpZ25JbiIsImNyZWRlbnRpYWxzIiwic2V0Q3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwiaXNTaWduZWQiLCJzZXRTaWduZWQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZDcmVkIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic2lnbkluIiwic2lnbk91dCIsInN1Y2Nlc3MiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaWduSW5Gb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sign-in.js\n"));

/***/ })

});