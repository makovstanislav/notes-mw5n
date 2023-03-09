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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/forms/sign-in-form */ \"./components/forms/sign-in-form.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./utils.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SignIn() {\n    _s();\n    //states\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [isSigned, setSigned] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    //hook\n    const [signInWithEmailAndPassword, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.auth);\n    // sign-in results \n    //handlers\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.value\n            };\n        });\n    }\n    function handleSubmit() {\n        signIn(credentials.email, credentials.password);\n    }\n    //sign-in\n    function signIn(email, password) {\n        signInWithEmailAndPassword(email, password);\n    }\n    //sign out\n    async function signOut() {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_5__.logOut)();\n        await setSigned(false);\n    }\n    //success text\n    const success = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"You have signed in\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signOut,\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n    const signInForm = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        handleChange: handleChange,\n        handleSubmit: handleSubmit,\n        credentials: credentials,\n        error: error,\n        loading: loading,\n        user: user\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this);\n    /*   if (error) {\n        return(\n            <div>\n                <h1>{error.message}</h1>\n            </div>\n        )\n    } else if (loading) {\n        return(\n            <div>\n                <h1>Loading</h1>\n            </div>\n        )\n    }  else if(user) {\n        return(\n            <div>\n                <h1>{user.user.email} successfully signed in. Thank you! </h1>\n            </div>\n        )\n    }  */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: error.message\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 102,\n                columnNumber: 14\n            }, this),\n            signInForm\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 100,\n        columnNumber: 9\n    }, this);\n} /* if (error) {\n        return(\n            <div>\n                <h1>{error.message}</h1>\n            </div>\n        )\n    } else if (loading) {\n        return(\n            <div>\n                <h1>Loading</h1>\n            </div>\n        )\n    }  else if(user) {\n        return(\n            <div>\n                <h1>{user.user.email} successfully signed-in. Thank you! </h1>\n            </div>\n        )\n    }  */ \n_s(SignIn, \"JQhMUQgXuaqm5ayNKgbwO/lbbw8=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduLWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNqQjtBQUNpQztBQUVwQztBQUNKO0FBQ1E7QUFNMUIsU0FBU08sU0FBUzs7SUFFN0IsUUFBUTtJQUNSLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUMzQ00sT0FBTztRQUNQQyxVQUFVO0lBQ1o7SUFFRixNQUFNLENBQUNDLFVBQVVDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUU1QyxNQUFNO0lBQ04sTUFBTSxDQUNGVSw0QkFDQUMsTUFDQUMsU0FDQUMsTUFDRCxHQUFHZix3RkFBNkJBLENBQUNELGlEQUFJQTtJQUd4QyxtQkFBbUI7SUFFbkIsVUFBVTtJQUNWLFNBQVNpQixhQUFhQyxLQUFLLEVBQUU7UUFDekJWLGVBQWVXLENBQUFBLFdBQVk7WUFDdkIsT0FBTztnQkFDUCxHQUFHQSxRQUFRO2dCQUNYLENBQUNELE1BQU1FLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVILE1BQU1FLE1BQU0sQ0FBQ0UsS0FBSztZQUN2QztRQUNKO0lBQ0o7SUFFQSxTQUFTQyxlQUFlO1FBQ25CQyxPQUFPakIsWUFBWUUsS0FBSyxFQUFFRixZQUFZRyxRQUFRO0lBQ25EO0lBRUEsU0FBUztJQUNULFNBQVNjLE9BQU9mLEtBQUssRUFBRUMsUUFBUSxFQUFFO1FBQzdCRywyQkFBMkJKLE9BQU9DO0lBQ3RDO0lBRUEsVUFBVTtJQUNWLGVBQWVlLFVBQVU7UUFDckIsTUFBTXJCLDhDQUFNQTtRQUNaLE1BQU1RLFVBQVUsS0FBSztJQUN6QjtJQUVBLGNBQWM7SUFDZCxNQUFNYyx3QkFDRiw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBT0MsU0FBU0w7MEJBQVM7Ozs7Ozs7Ozs7OztJQUlsQyxNQUFNTSwyQkFDRiw4REFBQ2hDLHNFQUFVQTtRQUNQa0IsY0FBY0E7UUFDZE0sY0FBY0E7UUFDZGhCLGFBQWFBO1FBQ2JTLE9BQU9BO1FBQ1BELFNBQVNBO1FBQ1RELE1BQU1BOzs7Ozs7SUFLaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtCSyxHQUVILHFCQUNJLDhEQUFDYTs7MEJBQ0csOERBQUN0QiwwREFBTUE7Ozs7OzBCQUNOLDhEQUFDc0I7MEJBQUtYLE1BQU1nQixPQUFPOzs7Ozs7WUFDbkJEOzs7Ozs7O0FBS2IsQ0FBQyxDQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQk87R0FwSGlCekI7O1FBZ0JkTCxvRkFBNkJBOzs7S0FoQmZLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ24taW4uanM/ZTVkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lnbkluRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3Jtcy9zaWduLWluLWZvcm1cIlxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZUNsaWVudFwiXG5pbXBvcnQgeyB1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnXG5cbmltcG9ydCB7UmVhY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbG9nT3V0IH0gZnJvbSBcIi4uL3V0aWxzXCJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuICAgIFxuICAgIC8vc3RhdGVzXG4gICAgY29uc3QgW2NyZWRlbnRpYWxzLCBzZXRDcmVkZW50aWFsc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGVtYWlsOiBcIlwiLCBcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICB9KVxuXG4gICAgY29uc3QgW2lzU2lnbmVkLCBzZXRTaWduZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICAvL2hvb2tcbiAgICBjb25zdCBbXG4gICAgICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICAgICAgICB1c2VyLFxuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBlcnJvcixcbiAgICAgIF0gPSB1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoKTtcblxuICAgIFxuICAgIC8vIHNpZ24taW4gcmVzdWx0cyBcblxuICAgIC8vaGFuZGxlcnNcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgc2V0Q3JlZGVudGlhbHMocHJldkNyZWQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnByZXZDcmVkLFxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgICAgICAgc2lnbkluKGNyZWRlbnRpYWxzLmVtYWlsLCBjcmVkZW50aWFscy5wYXNzd29yZClcbiAgICB9XG4gICAgXG4gICAgLy9zaWduLWluXG4gICAgZnVuY3Rpb24gc2lnbkluKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgfVxuICAgIFxuICAgIC8vc2lnbiBvdXRcbiAgICBhc3luYyBmdW5jdGlvbiBzaWduT3V0KCkge1xuICAgICAgICBhd2FpdCBsb2dPdXQoKVxuICAgICAgICBhd2FpdCBzZXRTaWduZWQoZmFsc2UpXG4gICAgfVxuICAgIFxuICAgIC8vc3VjY2VzcyB0ZXh0XG4gICAgY29uc3Qgc3VjY2VzcyA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5Zb3UgaGF2ZSBzaWduZWQgaW48L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduT3V0fT5Mb2cgb3V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGNvbnN0IHNpZ25JbkZvcm0gPSAoXG4gICAgICAgIDxTaWduSW5Gb3JtXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgY3JlZGVudGlhbHM9e2NyZWRlbnRpYWxzfVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgIC8+XG4gICAgKVxuXG5cbiAgLyogICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e2Vycm9yLm1lc3NhZ2V9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBlbHNlIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmc8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICBlbHNlIGlmKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e3VzZXIudXNlci5lbWFpbH0gc3VjY2Vzc2Z1bGx5IHNpZ25lZCBpbi4gVGhhbmsgeW91ISA8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICAqL1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIHs8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2Pn1cbiAgICAgICAgICAgIHtzaWduSW5Gb3JtfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgIClcbn1cblxuXG4vKiBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e2Vycm9yLm1lc3NhZ2V9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBlbHNlIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmc8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICBlbHNlIGlmKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e3VzZXIudXNlci5lbWFpbH0gc3VjY2Vzc2Z1bGx5IHNpZ25lZC1pbi4gVGhhbmsgeW91ISA8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICAqLyJdLCJuYW1lcyI6WyJTaWduSW5Gb3JtIiwiYXV0aCIsInVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvZ091dCIsIk5hdmJhciIsIlNpZ25JbiIsImNyZWRlbnRpYWxzIiwic2V0Q3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwiaXNTaWduZWQiLCJzZXRTaWduZWQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZDcmVkIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic2lnbkluIiwic2lnbk91dCIsInN1Y2Nlc3MiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaWduSW5Gb3JtIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sign-in.js\n"));

/***/ })

});