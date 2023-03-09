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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/forms/sign-in-form */ \"./components/forms/sign-in-form.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./utils.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SignIn() {\n    _s();\n    //states\n    //hook1\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    //derived hook\n    const userEmail = credentials.email;\n    const [isSigned, setSigned] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    // hook \n    const [signInWithEmailAndPassword, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__.useSignInWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    //handlers\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.value\n            };\n        });\n    }\n    async function handleSubmit() {\n        await signIn(credentials.email, credentials.password);\n        await setSigned(true);\n    }\n    //sign-in\n    function signIn(email, password) {\n        signInWithEmailAndPassword(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"], email, password).then((userCredential)=>{}).catch((error)=>{\n            const errorCode = error.code;\n            const errorMessage = error.message;\n        });\n    }\n    //sign out\n    async function signOut() {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_6__.logOut)();\n        await setSigned(false);\n    }\n    //success text\n    const success = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"You have signed in\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signOut,\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, this);\n    const signInForm = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        handleChange: handleChange,\n        handleSubmit: handleSubmit,\n        credentials: credentials,\n        error: error,\n        loading: loading,\n        user: user\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, this);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: error.message\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 95,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n            lineNumber: 94,\n            columnNumber: 13\n        }, this);\n    } else if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 101,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n            lineNumber: 100,\n            columnNumber: 13\n        }, this);\n    } else if (user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    user.user.email,\n                    \" successfully registered. Thank you! \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 107,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n            lineNumber: 106,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, this),\n            user ? success : signInForm\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 113,\n        columnNumber: 9\n    }, this);\n}\n_s(SignIn, \"JQhMUQgXuaqm5ayNKgbwO/lbbw8=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__.useSignInWithEmailAndPassword\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduLWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RTtBQUNoQjtBQUNyQjtBQUVDO0FBQ1Q7QUFDSztBQUNRO0FBQ0E7QUFNMUIsU0FBU1MsU0FBUzs7SUFFN0IsUUFBUTtJQUNSLE9BQU87SUFDUCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7UUFDM0NRLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBRUEsY0FBYztJQUNkLE1BQU1DLFlBQVlKLFlBQVlFLEtBQUs7SUFFckMsTUFBTSxDQUFDRyxVQUFVQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUMsUUFBUTtJQUVSLE1BQU0sQ0FDRmEsNEJBQ0FDLE1BQ0FDLFNBQ0FDLE1BQ0QsR0FBR3BCLHdGQUE2QkEsQ0FBQ0UsdURBQUlBO0lBR3hDLFVBQVU7SUFDVixTQUFTbUIsYUFBYUMsS0FBSyxFQUFFO1FBQ3pCWCxlQUFlWSxDQUFBQSxXQUFZO1lBQ3ZCLE9BQU87Z0JBQ1AsR0FBR0EsUUFBUTtnQkFDWCxDQUFDRCxNQUFNRSxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFSCxNQUFNRSxNQUFNLENBQUNFLEtBQUs7WUFDdkM7UUFDSjtJQUNKO0lBRUEsZUFBZUMsZUFBZTtRQUMxQixNQUFNQyxPQUFPbEIsWUFBWUUsS0FBSyxFQUFFRixZQUFZRyxRQUFRO1FBQ3BELE1BQU1HLFVBQVUsSUFBSTtJQUN4QjtJQUVBLFNBQVM7SUFDVCxTQUFTWSxPQUFPaEIsS0FBSyxFQUFFQyxRQUFRLEVBQUU7UUFDN0JJLDJCQUEyQmYsdURBQUlBLEVBQUVVLE9BQU9DLFVBQ25DZ0IsSUFBSSxDQUFDLENBQUNDLGlCQUFtQixDQUUxQixHQUNDQyxLQUFLLENBQUMsQ0FBQ1gsUUFBVTtZQUNkLE1BQU1ZLFlBQVlaLE1BQU1hLElBQUk7WUFDNUIsTUFBTUMsZUFBZWQsTUFBTWUsT0FBTztRQUN0QztJQUNSO0lBRUEsVUFBVTtJQUNWLGVBQWVDLFVBQVU7UUFDckIsTUFBTTlCLDhDQUFNQTtRQUNaLE1BQU1VLFVBQVUsS0FBSztJQUN6QjtJQUdBLGNBQWM7SUFDZCxNQUFNcUIsd0JBQ0YsOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU9DLFNBQVNMOzBCQUFTOzs7Ozs7Ozs7Ozs7SUFJbEMsTUFBTU0sMkJBQ0YsOERBQUN6QyxzRUFBVUE7UUFDUG9CLGNBQWNBO1FBQ2RNLGNBQWNBO1FBQ2RqQixhQUFhQTtRQUNiVSxPQUFPQTtRQUNQRCxTQUFTQTtRQUNURCxNQUFNQTs7Ozs7O0lBSWQsSUFBSUUsT0FBTztRQUNQLHFCQUNJLDhEQUFDa0I7c0JBQ0csNEVBQUNDOzBCQUFJbkIsTUFBTWUsT0FBTzs7Ozs7Ozs7Ozs7SUFHOUIsT0FBTyxJQUFJaEIsU0FBUztRQUNoQixxQkFDSSw4REFBQ21CO3NCQUNHLDRFQUFDQzswQkFBRzs7Ozs7Ozs7Ozs7SUFHaEIsT0FBUSxJQUFHckIsTUFBTTtRQUNiLHFCQUNJLDhEQUFDb0I7c0JBQ0csNEVBQUNDOztvQkFBSXJCLEtBQUtBLElBQUksQ0FBQ04sS0FBSztvQkFBQzs7Ozs7Ozs7Ozs7O0lBR2pDLENBQUM7SUFFRCxxQkFDSSw4REFBQzBCOzswQkFDRyw4REFBQzlCLDBEQUFNQTs7Ozs7WUFDTlUsT0FBT21CLFVBQVVLLFVBQVU7Ozs7Ozs7QUFLeEMsQ0FBQztHQXpHdUJqQzs7UUFxQmRULG9GQUE2QkE7OztLQXJCZlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbi1pbi5qcz9lNWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCdcbmltcG9ydCBTaWduSW5Gb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1zL3NpZ24taW4tZm9ybVwiXG5pbXBvcnQgYXV0aCBmcm9tIFwiLi4vZmlyZWJhc2VDbGllbnRcIlxuXG5pbXBvcnQge1JlYWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgbG9nT3V0IH0gZnJvbSBcIi4uL3V0aWxzXCJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgICBcbiAgICAvL3N0YXRlc1xuICAgIC8vaG9vazFcbiAgICBjb25zdCBbY3JlZGVudGlhbHMsIHNldENyZWRlbnRpYWxzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZW1haWw6IFwiXCIsIFxuICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgIH0pXG4gICAgICBcbiAgICAgIC8vZGVyaXZlZCBob29rXG4gICAgICBjb25zdCB1c2VyRW1haWwgPSBjcmVkZW50aWFscy5lbWFpbFxuXG4gICAgY29uc3QgW2lzU2lnbmVkLCBzZXRTaWduZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgXG4gICAgLy8gaG9vayBcblxuICAgIGNvbnN0IFtcbiAgICAgICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gICAgICAgIHVzZXIsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIGVycm9yLFxuICAgICAgXSA9IHVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgpO1xuXG5cbiAgICAvL2hhbmRsZXJzXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldENyZWRlbnRpYWxzKHByZXZDcmVkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmV2Q3JlZCxcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAgICAgYXdhaXQgc2lnbkluKGNyZWRlbnRpYWxzLmVtYWlsLCBjcmVkZW50aWFscy5wYXNzd29yZClcbiAgICAgICAgYXdhaXQgc2V0U2lnbmVkKHRydWUpXG4gICAgfVxuICAgIFxuICAgIC8vc2lnbi1pblxuICAgIGZ1bmN0aW9uIHNpZ25JbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKSBcbiAgICAgICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICAvL3NpZ24gb3V0XG4gICAgYXN5bmMgZnVuY3Rpb24gc2lnbk91dCgpIHtcbiAgICAgICAgYXdhaXQgbG9nT3V0KClcbiAgICAgICAgYXdhaXQgc2V0U2lnbmVkKGZhbHNlKVxuICAgIH1cbiAgICBcblxuICAgIC8vc3VjY2VzcyB0ZXh0XG4gICAgY29uc3Qgc3VjY2VzcyA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5Zb3UgaGF2ZSBzaWduZWQgaW48L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduT3V0fT5Mb2cgb3V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGNvbnN0IHNpZ25JbkZvcm0gPSAoXG4gICAgICAgIDxTaWduSW5Gb3JtXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgY3JlZGVudGlhbHM9e2NyZWRlbnRpYWxzfVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgIC8+XG4gICAgKVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPntlcnJvci5tZXNzYWdlfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gZWxzZSBpZiAobG9hZGluZykge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSAgZWxzZSBpZih1c2VyKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPnt1c2VyLnVzZXIuZW1haWx9IHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkLiBUaGFuayB5b3UhIDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAge3VzZXIgPyBzdWNjZXNzIDogc2lnbkluRm9ybX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICBcbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiU2lnbkluRm9ybSIsImF1dGgiLCJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsImxvZ091dCIsIkxheW91dCIsIk5hdmJhciIsIlNpZ25JbiIsImNyZWRlbnRpYWxzIiwic2V0Q3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlckVtYWlsIiwiaXNTaWduZWQiLCJzZXRTaWduZWQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZDcmVkIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic2lnbkluIiwidGhlbiIsInVzZXJDcmVkZW50aWFsIiwiY2F0Y2giLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInNpZ25PdXQiLCJzdWNjZXNzIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwic2lnbkluRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sign-in.js\n"));

/***/ })

});