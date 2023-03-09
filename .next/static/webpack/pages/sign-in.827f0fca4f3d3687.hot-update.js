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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/forms/sign-in-form */ \"./components/forms/sign-in-form.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./utils.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction SignIn() {\n    _s();\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [signInWithEmailAndPassword, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.auth);\n    // router\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (error) {\n            console.log(error.message);\n        } else if (user) {\n            router.push(\"/\") // replace '/dashboard' with your target page\n            ;\n        }\n    }, [\n        user,\n        error\n    ]);\n    //handlers\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.value\n            };\n        });\n    }\n    function handleSubmit() {\n        signInWithEmailAndPassword(credentials.email, credentials.password);\n    }\n    //sign out\n    async function signOut() {\n        await (0,_utils__WEBPACK_IMPORTED_MODULE_6__.logOut)();\n    }\n    //success text\n    const success = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"You have signed in\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signOut,\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this);\n    const signInForm = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_sign_in_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        handleChange: handleChange,\n        handleSubmit: handleSubmit,\n        credentials: credentials,\n        error: error,\n        loading: loading,\n        user: user\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this),\n            signInForm\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-in.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, this);\n}\n_s(SignIn, \"b2qmyrdptDkPD1bHN8wlea+wg7Q=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useSignInWithEmailAndPassword,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduLWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlEO0FBRWpCO0FBQ2lDO0FBQ3pCO0FBRVQ7QUFFTjtBQUNRO0FBRzFCLFNBQVNTLFNBQVM7O0lBRTdCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUMzQ1EsT0FBTztRQUNQQyxVQUFVO0lBQ1o7SUFHRixNQUFNLENBQ0ZDLDRCQUNBQyxNQUNBQyxTQUNBQyxNQUNELEdBQUdmLHdGQUE2QkEsQ0FBQ0QsaURBQUlBO0lBR3hDLFNBQVM7SUFDVCxNQUFNaUIsU0FBU1osc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSVksT0FBTztZQUNQRSxRQUFRQyxHQUFHLENBQUNILE1BQU1JLE9BQU87UUFDN0IsT0FBTyxJQUFJTixNQUFNO1lBQ2JHLE9BQU9JLElBQUksQ0FBQyxLQUFLLDZDQUE2Qzs7UUFDbEUsQ0FBQztJQUNILEdBQUc7UUFBQ1A7UUFBTUU7S0FBTTtJQUlsQixVQUFVO0lBQ1YsU0FBU00sYUFBYUMsS0FBSyxFQUFFO1FBQ3pCYixlQUFlYyxDQUFBQSxXQUFZO1lBQ3ZCLE9BQU87Z0JBQ1AsR0FBR0EsUUFBUTtnQkFDWCxDQUFDRCxNQUFNRSxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFSCxNQUFNRSxNQUFNLENBQUNFLEtBQUs7WUFDdkM7UUFDSjtJQUNKO0lBRUEsU0FBU0MsZUFBZTtRQUNwQmYsMkJBQTJCSixZQUFZRSxLQUFLLEVBQUVGLFlBQVlHLFFBQVE7SUFDdEU7SUFHQSxVQUFVO0lBQ1YsZUFBZWlCLFVBQVU7UUFDckIsTUFBTXZCLDhDQUFNQTtJQUNoQjtJQUVBLGNBQWM7SUFDZCxNQUFNd0Isd0JBQ0YsOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU9DLFNBQVNMOzBCQUFTOzs7Ozs7Ozs7Ozs7SUFJbEMsTUFBTU0sMkJBQ0YsOERBQUNwQyxzRUFBVUE7UUFDUHVCLGNBQWNBO1FBQ2RNLGNBQWNBO1FBQ2RuQixhQUFhQTtRQUNiTyxPQUFPQTtRQUNQRCxTQUFTQTtRQUNURCxNQUFNQTs7Ozs7O0lBSWQscUJBQ0ksOERBQUNpQjs7MEJBQ0csOERBQUN4QiwwREFBTUE7Ozs7O1lBQ040Qjs7Ozs7OztBQUtiLENBQUM7R0E1RXVCM0I7O1FBYWRQLG9GQUE2QkE7UUFJcEJJLGtEQUFTQTs7O0tBakJKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduLWluLmpzP2U1ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25JbkZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybXMvc2lnbi1pbi1mb3JtXCJcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9maXJlYmFzZUNsaWVudFwiXG5pbXBvcnQgeyB1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnXG5pbXBvcnQge1JlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgbG9nT3V0IH0gZnJvbSBcIi4uL3V0aWxzXCJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuICAgIFxuICAgIGNvbnN0IFtjcmVkZW50aWFscywgc2V0Q3JlZGVudGlhbHNdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbWFpbDogXCJcIiwgXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgfSlcblxuXG4gICAgY29uc3QgW1xuICAgICAgICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgICAgICAgdXNlcixcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgZXJyb3IsXG4gICAgICBdID0gdXNlU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCk7XG5cbiAgICBcbiAgICAvLyByb3V0ZXJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpIC8vIHJlcGxhY2UgJy9kYXNoYm9hcmQnIHdpdGggeW91ciB0YXJnZXQgcGFnZVxuICAgICAgICB9IFxuICAgICAgfSwgW3VzZXIsIGVycm9yXSlcblxuXG5cbiAgICAvL2hhbmRsZXJzXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldENyZWRlbnRpYWxzKHByZXZDcmVkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmV2Q3JlZCxcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAgICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoY3JlZGVudGlhbHMuZW1haWwsIGNyZWRlbnRpYWxzLnBhc3N3b3JkKVxuICAgIH1cbiAgICBcbiAgICBcbiAgICAvL3NpZ24gb3V0XG4gICAgYXN5bmMgZnVuY3Rpb24gc2lnbk91dCgpIHtcbiAgICAgICAgYXdhaXQgbG9nT3V0KClcbiAgICB9XG4gICAgXG4gICAgLy9zdWNjZXNzIHRleHRcbiAgICBjb25zdCBzdWNjZXNzID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPllvdSBoYXZlIHNpZ25lZCBpbjwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25PdXR9PkxvZyBvdXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgY29uc3Qgc2lnbkluRm9ybSA9IChcbiAgICAgICAgPFNpZ25JbkZvcm1cbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBjcmVkZW50aWFscz17Y3JlZGVudGlhbHN9XG4gICAgICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgLz5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAge3NpZ25JbkZvcm19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgXG4gICAgKVxufVxuXG5cblxuIl0sIm5hbWVzIjpbIlNpZ25JbkZvcm0iLCJhdXRoIiwidXNlU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwibG9nT3V0IiwiTmF2YmFyIiwiU2lnbkluIiwiY3JlZGVudGlhbHMiLCJzZXRDcmVkZW50aWFscyIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInByZXZDcmVkIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic2lnbk91dCIsInN1Y2Nlc3MiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaWduSW5Gb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sign-in.js\n"));

/***/ })

});