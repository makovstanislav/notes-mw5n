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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/forms/sign-in-form */ \"./components/forms/sign-in-form.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./utils.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SignIn() {\n    _s();\n    //states\n    //hook1\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    //derived hook\n    const userEmail = credentials.email;\n    const [isSigned, setSigned] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    // hook \n    const [signInWithEmailAndPassword, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.auth);\n    //handlers\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.value\n            };\n        });\n    }\n    async function handleSubmit() {\n        await signIn(credentials.email, credentials.password);\n        await setSigned(true);\n    }\n    //sign-in\n    function signIn(email, password) {\n        signInWithEmailAndPassword(email, password);\n    }\n    //sign out\n    async function signOut() {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_6__.logOut)();\n        await setSigned(false);\n    }\n    //success text\n    const success = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"You have signed in\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signOut,\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this);\n    const signInForm = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        handleChange: handleChange,\n        handleSubmit: handleSubmit,\n        credentials: credentials,\n        error: error,\n        loading: loading,\n        user: user\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this),\n            user ? success : signInForm,\n            user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"user.user.email\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 91,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, this);\n} /* if (error) {\n        return(\n            <div>\n                <h1>{error.message}</h1>\n            </div>\n        )\n    } else if (loading) {\n        return(\n            <div>\n                <h1>Loading</h1>\n            </div>\n        )\n    }  else if(user) {\n        return(\n            <div>\n                <h1>{user.user.email} successfully signed-in. Thank you! </h1>\n            </div>\n        )\n    }  */ \n_s(SignIn, \"JQhMUQgXuaqm5ayNKgbwO/lbbw8=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduLWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNqQjtBQUNpQztBQUVwQztBQUNUO0FBQ0s7QUFDUTtBQUNBO0FBTTFCLFNBQVNTLFNBQVM7O0lBRTdCLFFBQVE7SUFDUixPQUFPO0lBQ1AsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO1FBQzNDUSxPQUFPO1FBQ1BDLFVBQVU7SUFDWjtJQUVGLGNBQWM7SUFDZCxNQUFNQyxZQUFZSixZQUFZRSxLQUFLO0lBRW5DLE1BQU0sQ0FBQ0csVUFBVUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVDLFFBQVE7SUFFUixNQUFNLENBQ0ZhLDRCQUNBQyxNQUNBQyxTQUNBQyxNQUNELEdBQUdsQix3RkFBNkJBLENBQUNELGlEQUFJQTtJQUd4QyxVQUFVO0lBQ1YsU0FBU29CLGFBQWFDLEtBQUssRUFBRTtRQUN6QlgsZUFBZVksQ0FBQUEsV0FBWTtZQUN2QixPQUFPO2dCQUNQLEdBQUdBLFFBQVE7Z0JBQ1gsQ0FBQ0QsTUFBTUUsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUgsTUFBTUUsTUFBTSxDQUFDRSxLQUFLO1lBQ3ZDO1FBQ0o7SUFDSjtJQUVBLGVBQWVDLGVBQWU7UUFDMUIsTUFBTUMsT0FBT2xCLFlBQVlFLEtBQUssRUFBRUYsWUFBWUcsUUFBUTtRQUNwRCxNQUFNRyxVQUFVLElBQUk7SUFDeEI7SUFFQSxTQUFTO0lBQ1QsU0FBU1ksT0FBT2hCLEtBQUssRUFBRUMsUUFBUSxFQUFFO1FBQzdCSSwyQkFBMkJMLE9BQU9DO0lBQ3RDO0lBRUEsVUFBVTtJQUNWLGVBQWVnQixVQUFVO1FBQ3JCLE1BQU12Qiw4Q0FBTUE7UUFDWixNQUFNVSxVQUFVLEtBQUs7SUFDekI7SUFHQSxjQUFjO0lBQ2QsTUFBTWMsd0JBQ0YsOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU9DLFNBQVNMOzBCQUFTOzs7Ozs7Ozs7Ozs7SUFJbEMsTUFBTU0sMkJBQ0YsOERBQUNuQyxzRUFBVUE7UUFDUHFCLGNBQWNBO1FBQ2RNLGNBQWNBO1FBQ2RqQixhQUFhQTtRQUNiVSxPQUFPQTtRQUNQRCxTQUFTQTtRQUNURCxNQUFNQTs7Ozs7O0lBTWQscUJBQ0ksOERBQUNhOzswQkFDRyw4REFBQ3ZCLDBEQUFNQTs7Ozs7WUFDTlUsT0FBT1ksVUFBVUssVUFBVTtZQUMzQmpCLHNCQUFRLDhEQUFDYzswQkFBRzs7Ozs7Ozs7Ozs7O0FBS3pCLENBQUMsQ0FHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Ba0JPO0dBdEdpQnZCOztRQXFCZFAsb0ZBQTZCQTs7O0tBckJmTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduLWluLmpzP2U1ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25JbkZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybXMvc2lnbi1pbi1mb3JtXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2VDbGllbnRcIlxuaW1wb3J0IHsgdXNlU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJ1xuXG5pbXBvcnQge1JlYWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgbG9nT3V0IH0gZnJvbSBcIi4uL3V0aWxzXCJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgICBcbiAgICAvL3N0YXRlc1xuICAgIC8vaG9vazFcbiAgICBjb25zdCBbY3JlZGVudGlhbHMsIHNldENyZWRlbnRpYWxzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZW1haWw6IFwiXCIsIFxuICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgIH0pXG5cbiAgICAvL2Rlcml2ZWQgaG9va1xuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGNyZWRlbnRpYWxzLmVtYWlsXG5cbiAgICBjb25zdCBbaXNTaWduZWQsIHNldFNpZ25lZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBcbiAgICAvLyBob29rIFxuXG4gICAgY29uc3QgW1xuICAgICAgICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgICAgICAgdXNlcixcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgZXJyb3IsXG4gICAgICBdID0gdXNlU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCk7XG5cblxuICAgIC8vaGFuZGxlcnNcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgc2V0Q3JlZGVudGlhbHMocHJldkNyZWQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnByZXZDcmVkLFxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgICAgICBhd2FpdCBzaWduSW4oY3JlZGVudGlhbHMuZW1haWwsIGNyZWRlbnRpYWxzLnBhc3N3b3JkKVxuICAgICAgICBhd2FpdCBzZXRTaWduZWQodHJ1ZSlcbiAgICB9XG4gICAgXG4gICAgLy9zaWduLWluXG4gICAgZnVuY3Rpb24gc2lnbkluKGVtYWlsLCBwYXNzd29yZCkge1xuICAgICAgICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgfVxuICAgIFxuICAgIC8vc2lnbiBvdXRcbiAgICBhc3luYyBmdW5jdGlvbiBzaWduT3V0KCkge1xuICAgICAgICBhd2FpdCBsb2dPdXQoKVxuICAgICAgICBhd2FpdCBzZXRTaWduZWQoZmFsc2UpXG4gICAgfVxuICAgIFxuXG4gICAgLy9zdWNjZXNzIHRleHRcbiAgICBjb25zdCBzdWNjZXNzID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPllvdSBoYXZlIHNpZ25lZCBpbjwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25PdXR9PkxvZyBvdXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgY29uc3Qgc2lnbkluRm9ybSA9IChcbiAgICAgICAgPFNpZ25JbkZvcm1cbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBjcmVkZW50aWFscz17Y3JlZGVudGlhbHN9XG4gICAgICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgLz5cbiAgICApXG5cbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICB7dXNlciA/IHN1Y2Nlc3MgOiBzaWduSW5Gb3JtfVxuICAgICAgICAgICAge3VzZXIgJiYgPGgxPnVzZXIudXNlci5lbWFpbDwvaDE+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgIClcbn1cblxuXG4vKiBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e2Vycm9yLm1lc3NhZ2V9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBlbHNlIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmc8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICBlbHNlIGlmKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e3VzZXIudXNlci5lbWFpbH0gc3VjY2Vzc2Z1bGx5IHNpZ25lZC1pbi4gVGhhbmsgeW91ISA8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICAqLyJdLCJuYW1lcyI6WyJTaWduSW5Gb3JtIiwiYXV0aCIsInVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJsb2dPdXQiLCJMYXlvdXQiLCJOYXZiYXIiLCJTaWduSW4iLCJjcmVkZW50aWFscyIsInNldENyZWRlbnRpYWxzIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJFbWFpbCIsImlzU2lnbmVkIiwic2V0U2lnbmVkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2Q3JlZCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInNpZ25JbiIsInNpZ25PdXQiLCJzdWNjZXNzIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwic2lnbkluRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sign-in.js\n"));

/***/ })

});