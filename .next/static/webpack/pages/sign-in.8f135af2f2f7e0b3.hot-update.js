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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/forms/sign-in-form */ \"./components/forms/sign-in-form.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./utils.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SignIn() {\n    _s();\n    //states\n    //hook1\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    //derived hook\n    const userEmail = credentials.email;\n    const [isSigned, setSigned] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    // hook \n    const [signInWithEmailAndPassword, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__.useSignInWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    //handlers\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.value\n            };\n        });\n    }\n    async function handleSubmit() {\n        await signIn(credentials.email, credentials.password);\n        await setSigned(true);\n    }\n    //sign-in\n    function signIn(email, password) {\n        signInWithEmailAndPassword(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"], email, password).then((userCredential)=>{\n            // Signed in \n            const user = userCredential.user;\n        // ...\n        }).catch((error)=>{\n            const errorCode = error.code;\n            const errorMessage = error.message;\n        });\n    }\n    //sign out\n    async function signOut() {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_6__.logOut)();\n        await setSigned(false);\n    }\n    //success text\n    const success = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"You have signed in\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signOut,\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, this);\n    const signInForm = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        handleChange: handleChange,\n        handleSubmit: handleSubmit,\n        credentials: credentials,\n        error: error,\n        loading: loading,\n        user: user\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this),\n            user ? success : signInForm\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 95,\n        columnNumber: 9\n    }, this);\n}\n_s(SignIn, \"JQhMUQgXuaqm5ayNKgbwO/lbbw8=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__.useSignInWithEmailAndPassword\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduLWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RTtBQUNoQjtBQUNyQjtBQUVDO0FBQ1Q7QUFDSztBQUNRO0FBQ0E7QUFNMUIsU0FBU1MsU0FBUzs7SUFFN0IsUUFBUTtJQUNSLE9BQU87SUFDUCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7UUFDM0NRLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBQ0EsY0FBYztJQUNkLE1BQU1DLFlBQVlKLFlBQVlFLEtBQUs7SUFFckMsTUFBTSxDQUFDRyxVQUFVQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUMsUUFBUTtJQUVSLE1BQU0sQ0FDRmEsNEJBQ0FDLE1BQ0FDLFNBQ0FDLE1BQ0QsR0FBR3BCLHdGQUE2QkEsQ0FBQ0UsdURBQUlBO0lBR3hDLFVBQVU7SUFDVixTQUFTbUIsYUFBYUMsS0FBSyxFQUFFO1FBQ3pCWCxlQUFlWSxDQUFBQSxXQUFZO1lBQ3ZCLE9BQU87Z0JBQ1AsR0FBR0EsUUFBUTtnQkFDWCxDQUFDRCxNQUFNRSxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFSCxNQUFNRSxNQUFNLENBQUNFLEtBQUs7WUFDdkM7UUFDSjtJQUNKO0lBRUEsZUFBZUMsZUFBZTtRQUMxQixNQUFNQyxPQUFPbEIsWUFBWUUsS0FBSyxFQUFFRixZQUFZRyxRQUFRO1FBQ3BELE1BQU1HLFVBQVUsSUFBSTtJQUN4QjtJQUVBLFNBQVM7SUFDVCxTQUFTWSxPQUFPaEIsS0FBSyxFQUFFQyxRQUFRLEVBQUU7UUFDN0JJLDJCQUEyQmYsdURBQUlBLEVBQUVVLE9BQU9DLFVBQ25DZ0IsSUFBSSxDQUFDLENBQUNDLGlCQUFtQjtZQUN0QixhQUFhO1lBQ2IsTUFBTVosT0FBT1ksZUFBZVosSUFBSTtRQUNoQyxNQUFNO1FBQ1YsR0FDQ2EsS0FBSyxDQUFDLENBQUNYLFFBQVU7WUFDZCxNQUFNWSxZQUFZWixNQUFNYSxJQUFJO1lBQzVCLE1BQU1DLGVBQWVkLE1BQU1lLE9BQU87UUFDdEM7SUFDUjtJQUVBLFVBQVU7SUFDVixlQUFlQyxVQUFVO1FBQ3JCLE1BQU05Qiw4Q0FBTUE7UUFDWixNQUFNVSxVQUFVLEtBQUs7SUFDekI7SUFHQSxjQUFjO0lBQ2QsTUFBTXFCLHdCQUNGLDhEQUFDQzs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFPQyxTQUFTTDswQkFBUzs7Ozs7Ozs7Ozs7O0lBSWxDLE1BQU1NLDJCQUNGLDhEQUFDekMsc0VBQVVBO1FBQ1BvQixjQUFjQTtRQUNkTSxjQUFjQTtRQUNkakIsYUFBYUE7UUFDYlUsT0FBT0E7UUFDUEQsU0FBU0E7UUFDVEQsTUFBTUE7Ozs7OztJQUtkLHFCQUNJLDhEQUFDb0I7OzBCQUNHLDhEQUFDOUIsMERBQU1BOzs7OztZQUNOVSxPQUFPbUIsVUFBVUssVUFBVTs7Ozs7OztBQUt4QyxDQUFDO0dBdkZ1QmpDOztRQW9CZFQsb0ZBQTZCQTs7O0tBcEJmUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduLWluLmpzP2U1ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJ1xuaW1wb3J0IFNpZ25JbkZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybXMvc2lnbi1pbi1mb3JtXCJcbmltcG9ydCBhdXRoIGZyb20gXCIuLi9maXJlYmFzZUNsaWVudFwiXG5cbmltcG9ydCB7UmVhY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBsb2dPdXQgfSBmcm9tIFwiLi4vdXRpbHNcIlxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuICAgIFxuICAgIC8vc3RhdGVzXG4gICAgLy9ob29rMVxuICAgIGNvbnN0IFtjcmVkZW50aWFscywgc2V0Q3JlZGVudGlhbHNdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbWFpbDogXCJcIiwgXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgfSlcbiAgICAgIC8vZGVyaXZlZCBob29rXG4gICAgICBjb25zdCB1c2VyRW1haWwgPSBjcmVkZW50aWFscy5lbWFpbFxuXG4gICAgY29uc3QgW2lzU2lnbmVkLCBzZXRTaWduZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgXG4gICAgLy8gaG9vayBcblxuICAgIGNvbnN0IFtcbiAgICAgICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gICAgICAgIHVzZXIsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIGVycm9yLFxuICAgICAgXSA9IHVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgpO1xuXG5cbiAgICAvL2hhbmRsZXJzXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldENyZWRlbnRpYWxzKHByZXZDcmVkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmV2Q3JlZCxcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAgICAgYXdhaXQgc2lnbkluKGNyZWRlbnRpYWxzLmVtYWlsLCBjcmVkZW50aWFscy5wYXNzd29yZClcbiAgICAgICAgYXdhaXQgc2V0U2lnbmVkKHRydWUpXG4gICAgfVxuICAgIFxuICAgIC8vc2lnbi1pblxuICAgIGZ1bmN0aW9uIHNpZ25JbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKSBcbiAgICAgICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFNpZ25lZCBpbiBcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcbiAgICAgICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgLy9zaWduIG91dFxuICAgIGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXQoKSB7XG4gICAgICAgIGF3YWl0IGxvZ091dCgpXG4gICAgICAgIGF3YWl0IHNldFNpZ25lZChmYWxzZSlcbiAgICB9XG4gICAgXG5cbiAgICAvL3N1Y2Nlc3MgdGV4dFxuICAgIGNvbnN0IHN1Y2Nlc3MgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+WW91IGhhdmUgc2lnbmVkIGluPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2lnbk91dH0+TG9nIG91dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBjb25zdCBzaWduSW5Gb3JtID0gKFxuICAgICAgICA8U2lnbkluRm9ybVxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIGNyZWRlbnRpYWxzPXtjcmVkZW50aWFsc31cbiAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAvPlxuICAgIClcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIHt1c2VyID8gc3VjY2VzcyA6IHNpZ25JbkZvcm19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgXG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsIlNpZ25JbkZvcm0iLCJhdXRoIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJsb2dPdXQiLCJMYXlvdXQiLCJOYXZiYXIiLCJTaWduSW4iLCJjcmVkZW50aWFscyIsInNldENyZWRlbnRpYWxzIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJFbWFpbCIsImlzU2lnbmVkIiwic2V0U2lnbmVkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2Q3JlZCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInNpZ25JbiIsInRoZW4iLCJ1c2VyQ3JlZGVudGlhbCIsImNhdGNoIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJzaWduT3V0Iiwic3VjY2VzcyIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInNpZ25JbkZvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sign-in.js\n"));

/***/ })

});