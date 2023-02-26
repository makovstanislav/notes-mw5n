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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SignUp() {\n    _s();\n    const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\",\n        isSeller: false\n    });\n    const [isSigned, setSigned] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [seller, switchSeller] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.type === \"checkbox\" ? !credentials.isSeller : event.target.value\n            };\n        });\n        readUserType();\n    }\n    async function handleSubmit() {\n        const logUp = await signUp(credentials.email, credentials.password);\n        const addToDb = await writeUserData();\n    }\n    function writeUserData() {\n        const { name , email , password , isSeller  } = credentials;\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.database, \"user\"), {\n            name: name,\n            email: email,\n            password: password,\n            isSeller: isSeller\n        });\n    }\n    function readUserType() {\n        const isSellerRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.database, \"user/isSeller\");\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.onValue)(isSellerRef, (snapshot)=>{\n            const data = snapshot.val();\n            console.log(data);\n            switchSeller(data);\n        });\n    }\n    function signUp(email, password) {\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_firebaseClient__WEBPACK_IMPORTED_MODULE_3__.auth, email, password).then((userCredential)=>{\n            // Signed in \n            const user = userCredential.user;\n        // ...\n        }).catch((error)=>{\n            const errorCode = error.code;\n            const errorMessage = error.message;\n        // ..\n        });\n    }\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Type username\",\n                    onChange: handleChange,\n                    name: \"name\",\n                    value: credentials.name\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    placeholder: \"Type email\",\n                    onChange: handleChange,\n                    name: \"email\",\n                    value: credentials.email\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Type password\",\n                    onChange: handleChange,\n                    name: \"password\",\n                    value: credentials.password\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    id: \"isSeller\",\n                    name: \"isSeller\",\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    for: \"isSeller\",\n                    children: \"Are you a seller?\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n                    lineNumber: 100,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n            lineNumber: 70,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/sign-up.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(SignUp, \"vqnih7OeYI7c6OTIhCQ7ERy+2/k=\");\n_c = SignUp;\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbi11cC5qcz81YWQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25PdXQsIEdvb2dsZUF1dGhQcm92aWRlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZUNsaWVudCdcbmltcG9ydCB7cmVmLCBzZXQsIG9uVmFsdWUgfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIlxuaW1wb3J0IHtkYXRhYmFzZX0gZnJvbSBcIi4uL2ZpcmViYXNlQ2xpZW50XCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XG5cbiAgICBjb25zdCBbY3JlZGVudGlhbHMsIHNldENyZWRlbnRpYWxzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgZW1haWw6IFwiXCIsIFxuICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgaXNTZWxsZXI6IGZhbHNlXG4gICAgICB9KVxuXG4gICAgY29uc3QgW2lzU2lnbmVkLCBzZXRTaWduZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3NlbGxlciwgc3dpdGNoU2VsbGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHNldENyZWRlbnRpYWxzKHByZXZDcmVkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmV2Q3JlZCxcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCIgPyAhY3JlZGVudGlhbHMuaXNTZWxsZXIgOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmVhZFVzZXJUeXBlKClcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgIGNvbnN0IGxvZ1VwID0gYXdhaXQgc2lnblVwKGNyZWRlbnRpYWxzLmVtYWlsLCBjcmVkZW50aWFscy5wYXNzd29yZClcbiAgICAgICAgY29uc3QgYWRkVG9EYiA9IGF3YWl0IHdyaXRlVXNlckRhdGEoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdyaXRlVXNlckRhdGEoKSB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGlzU2VsbGVyfSA9IGNyZWRlbnRpYWxzXG4gICAgICAgIHNldChyZWYoZGF0YWJhc2UsIFwidXNlclwiKSwge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgICBpc1NlbGxlcjogaXNTZWxsZXJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZWFkVXNlclR5cGUoKSB7XG4gICAgY29uc3QgaXNTZWxsZXJSZWYgPSByZWYoZGF0YWJhc2UsICd1c2VyL2lzU2VsbGVyJylcbiAgICBvblZhbHVlKGlzU2VsbGVyUmVmLCAoc25hcHNob3QpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBzd2l0Y2hTZWxsZXIoZGF0YSlcbiAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNpZ25VcChlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICAgICAgLy8gU2lnbmVkIGluIFxuICAgICAgICAgICAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XG4gICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIC8vIC4uXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSB1c2VybmFtZSdcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17Y3JlZGVudGlhbHMubmFtZX1cbiAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSBlbWFpbCdcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2NyZWRlbnRpYWxzLmVtYWlsfVxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIHBhc3N3b3JkJ1xuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17Y3JlZGVudGlhbHMucGFzc3dvcmR9XG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJpc1NlbGxlclwiXG4gICAgICAgICAgICBuYW1lPVwiaXNTZWxsZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiaXNTZWxsZXJcIj5BcmUgeW91IGEgc2VsbGVyPzwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cblxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImF1dGgiLCJyZWYiLCJzZXQiLCJvblZhbHVlIiwiZGF0YWJhc2UiLCJTaWduVXAiLCJjcmVkZW50aWFscyIsInNldENyZWRlbnRpYWxzIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJpc1NlbGxlciIsImlzU2lnbmVkIiwic2V0U2lnbmVkIiwic2VsbGVyIiwic3dpdGNoU2VsbGVyIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2Q3JlZCIsInRhcmdldCIsInR5cGUiLCJ2YWx1ZSIsInJlYWRVc2VyVHlwZSIsImhhbmRsZVN1Ym1pdCIsImxvZ1VwIiwic2lnblVwIiwiYWRkVG9EYiIsIndyaXRlVXNlckRhdGEiLCJpc1NlbGxlclJlZiIsInNuYXBzaG90IiwiZGF0YSIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwidXNlckNyZWRlbnRpYWwiLCJ1c2VyIiwiY2F0Y2giLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwic2VjdGlvbiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImlkIiwibGFiZWwiLCJmb3IiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sign-up.js\n"));

/***/ })

});