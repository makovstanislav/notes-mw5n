"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sign-up",{

/***/ "./pages/sign-up.js":
/*!**************************!*\
  !*** ./pages/sign-up.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_forms_sign_up_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/forms/sign-up-form */ \"./components/forms/sign-up-form.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SignUp() {\n    _s();\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        isSeller: false\n    });\n    const [isSigned, setSigned] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [seller, switchSeller] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    /*  function handleChange(event) {\n        setCredentials(prevCred => {\n            return {\n            ...prevCred,\n            [event.target.name]: event.target.type === \"checkbox\" ? !credentials.isSeller : event.target.value\n            }\n        })\n        readUserType()\n    } */ async function handleSubmit() {\n        const logUp = await signUp(credentials.email, credentials.password);\n        const addToDb = await writeUserData();\n    }\n    function writeUserData() {\n        const { name , email , password , isSeller  } = credentials;\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.database, \"user\"), {\n            name: name,\n            email: email,\n            password: password,\n            isSeller: isSeller\n        });\n    }\n    function signUp(email, password) {\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.auth, email, password).then((userCredential)=>{\n            // Signed in \n            const user = userCredential.user;\n            // ...\n            setSigned(true);\n            console.log(userCredential.user);\n        }).catch((error)=>{\n            const errorCode = error.code;\n            const errorMessage = error.message;\n        // ..\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    href: \"/\",\n                    children: \"Back home\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            isSigned === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_sign_up_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                handleChange: handleChange,\n                handleSubmit: handleSubmit,\n                credentials: credentials\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                lineNumber: 70,\n                columnNumber: 34\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, this);\n}\n_s(SignUp, \"vqnih7OeYI7c6OTIhCQ7ERy+2/k=\");\n_c = SignUp;\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduLXVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDc0Q7QUFDekM7QUFDRTtBQUN4QjtBQUM2QjtBQUkxQyxTQUFTWSxTQUFTOztJQUU3QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7UUFDM0NjLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFVBQVUsS0FBSztJQUNqQjtJQUVGLE1BQU0sQ0FBQ0MsVUFBVUMsVUFBVSxHQUFHbkIsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNLENBQUNvQixRQUFRQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTlDOzs7Ozs7OztNQVFHLEdBRUYsZUFBZXNCLGVBQWU7UUFDMUIsTUFBTUMsUUFBUSxNQUFNQyxPQUFPWixZQUFZRyxLQUFLLEVBQUVILFlBQVlJLFFBQVE7UUFDbEUsTUFBTVMsVUFBVSxNQUFNQztJQUMxQjtJQUVBLFNBQVNBLGdCQUFnQjtRQUNyQixNQUFNLEVBQUNaLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUVDLFNBQVEsRUFBQyxHQUFHTDtRQUMxQ0wsc0RBQUdBLENBQUNELHNEQUFHQSxDQUFDRCxxREFBUUEsRUFBRSxTQUFTO1lBQ3pCUyxNQUFNQTtZQUNOQyxPQUFPQTtZQUNQQyxVQUFVQTtZQUNWQyxVQUFVQTtRQUNaO0lBQ0Y7SUFJRixTQUFTTyxPQUFPVCxLQUFLLEVBQUVDLFFBQVEsRUFBRTtRQUM3QmYsNkVBQThCQSxDQUFDRyxpREFBSUEsRUFBRVcsT0FBT0MsVUFDdkNXLElBQUksQ0FBQyxDQUFDQyxpQkFBbUI7WUFDdEIsYUFBYTtZQUNiLE1BQU1DLE9BQU9ELGVBQWVDLElBQUk7WUFDaEMsTUFBTTtZQUNOVixVQUFVLElBQUk7WUFDZFcsUUFBUUMsR0FBRyxDQUFDSCxlQUFlQyxJQUFJO1FBQ25DLEdBQ0NHLEtBQUssQ0FBQyxDQUFDQyxRQUFVO1lBQ2QsTUFBTUMsWUFBWUQsTUFBTUUsSUFBSTtZQUM1QixNQUFNQyxlQUFlSCxNQUFNSSxPQUFPO1FBQ2xDLEtBQUs7UUFDVDtJQUNSO0lBRUEscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0E7MEJBQ0csNEVBQUM3QixrREFBSUE7b0JBQUM4QixNQUFLOzhCQUFJOzs7Ozs7Ozs7OztZQUVsQnJCLGFBQVcsS0FBSyxrQkFBSSw4REFBQ1Isc0VBQVVBO2dCQUM1QjhCLGNBQWNBO2dCQUNkbEIsY0FBY0E7Z0JBQ2RWLGFBQWFBOzs7Ozs7Ozs7Ozs7QUFPN0IsQ0FBQztHQXRFdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ24tdXAuanM/NWFkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbk91dCwgR29vZ2xlQXV0aFByb3ZpZGVyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIlxuaW1wb3J0IHsgYXV0aCwgZGF0YWJhc2UgfSBmcm9tICcuLi9maXJlYmFzZUNsaWVudCdcbmltcG9ydCB7cmVmLCBzZXQsIG9uVmFsdWUgfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3Jtcy9zaWduLXVwLWZvcm1cIlxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwKCkge1xuXG4gICAgY29uc3QgW2NyZWRlbnRpYWxzLCBzZXRDcmVkZW50aWFsc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGVtYWlsOiBcIlwiLCBcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgIGlzU2VsbGVyOiBmYWxzZVxuICAgICAgfSlcblxuICAgIGNvbnN0IFtpc1NpZ25lZCwgc2V0U2lnbmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtzZWxsZXIsIHN3aXRjaFNlbGxlcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgLyogIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBzZXRDcmVkZW50aWFscyhwcmV2Q3JlZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucHJldkNyZWQsXG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiID8gIWNyZWRlbnRpYWxzLmlzU2VsbGVyIDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJlYWRVc2VyVHlwZSgpXG4gICAgfSAqL1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgICAgICBjb25zdCBsb2dVcCA9IGF3YWl0IHNpZ25VcChjcmVkZW50aWFscy5lbWFpbCwgY3JlZGVudGlhbHMucGFzc3dvcmQpXG4gICAgICAgIGNvbnN0IGFkZFRvRGIgPSBhd2FpdCB3cml0ZVVzZXJEYXRhKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3cml0ZVVzZXJEYXRhKCkge1xuICAgICAgICBjb25zdCB7bmFtZSwgZW1haWwsIHBhc3N3b3JkLCBpc1NlbGxlcn0gPSBjcmVkZW50aWFsc1xuICAgICAgICBzZXQocmVmKGRhdGFiYXNlLCBcInVzZXJcIiksIHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgaXNTZWxsZXI6IGlzU2VsbGVyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgXG4gICBcblxuICAgIGZ1bmN0aW9uIHNpZ25VcChlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFNpZ25lZCBpbiBcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcbiAgICAgICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgICAgICAgICBzZXRTaWduZWQodHJ1ZSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyQ3JlZGVudGlhbC51c2VyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgLy8gLi5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkJhY2sgaG9tZTwvTGluaz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIHtpc1NpZ25lZD09PWZhbHNlICYmIDxTaWduVXBGb3JtXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM9e2NyZWRlbnRpYWxzfVxuICAgICAgICAgICAgIC8+fVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIFxuICAgIClcbiAgICBcblxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImF1dGgiLCJkYXRhYmFzZSIsInJlZiIsInNldCIsIm9uVmFsdWUiLCJMaW5rIiwiU2lnblVwRm9ybSIsIlNpZ25VcCIsImNyZWRlbnRpYWxzIiwic2V0Q3JlZGVudGlhbHMiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImlzU2VsbGVyIiwiaXNTaWduZWQiLCJzZXRTaWduZWQiLCJzZWxsZXIiLCJzd2l0Y2hTZWxsZXIiLCJoYW5kbGVTdWJtaXQiLCJsb2dVcCIsInNpZ25VcCIsImFkZFRvRGIiLCJ3cml0ZVVzZXJEYXRhIiwidGhlbiIsInVzZXJDcmVkZW50aWFsIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJzZWN0aW9uIiwiaHJlZiIsImhhbmRsZUNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sign-up.js\n"));

/***/ })

});