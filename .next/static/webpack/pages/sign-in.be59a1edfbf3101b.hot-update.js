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

/***/ "./firebaseClient.js":
/*!***************************!*\
  !*** ./firebaseClient.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": function() { return /* binding */ auth; },\n/* harmony export */   \"database\": function() { return /* binding */ database; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n// Import the functions you need from the SDKs you need\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBNjhv-5V8nucso5joSr7uNb9qloCGgQpY\",\n    authDomain: \"notes-m5wn.firebaseapp.com\",\n    projectId: \"notes-m5wn\",\n    storageBucket: \"notes-m5wn.appspot.com\",\n    messagingSenderId: \"606792853705\",\n    appId: \"1:606792853705:web:e22fb0d76e40700d22c518\",\n    measurementId: \"G-CRXHRRS24Q\",\n    databaseURL: \"https://notes-m5wn-default-rtdb.europe-west1.firebasedatabase.app/\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n// Initialize Realtime Database \nconst database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)(app);\n// Initialize Firebase Authentication and get a reference to the service\nconst auth = getAuth(app);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZUNsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsdURBQXVEO0FBQ1Y7QUFDRztBQUdoRCw0REFBNEQ7QUFDNUQsaUVBQWlFO0FBRWpFLHdDQUF3QztBQUN4QyxtRUFBbUU7QUFDbkUsTUFBTUUsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0lBQ2ZDLGFBQWE7QUFDZjtBQUVBLHNCQUFzQjtBQUN0QixNQUFNQyxNQUFNWCwyREFBYUEsQ0FBQ0U7QUFFMUIsZ0NBQWdDO0FBQ2hDLE1BQU1VLFdBQVdYLDhEQUFXQSxDQUFDVTtBQUU3Qix3RUFBd0U7QUFDeEUsTUFBTUUsT0FBT0MsUUFBUUg7QUFFRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9maXJlYmFzZUNsaWVudC5qcz8xNjYwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXREYXRhYmFzZSB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xuXG5cbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lCTmpodi01VjhudWNzbzVqb1NyN3VOYjlxbG9DR2dRcFlcIixcbiAgYXV0aERvbWFpbjogXCJub3Rlcy1tNXduLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwibm90ZXMtbTV3blwiLFxuICBzdG9yYWdlQnVja2V0OiBcIm5vdGVzLW01d24uYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjA2NzkyODUzNzA1XCIsXG4gIGFwcElkOiBcIjE6NjA2NzkyODUzNzA1OndlYjplMjJmYjBkNzZlNDA3MDBkMjJjNTE4XCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1DUlhIUlJTMjRRXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbm90ZXMtbTV3bi1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL1wiXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuLy8gSW5pdGlhbGl6ZSBSZWFsdGltZSBEYXRhYmFzZSBcbmNvbnN0IGRhdGFiYXNlID0gZ2V0RGF0YWJhc2UoYXBwKVxuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlIEF1dGhlbnRpY2F0aW9uIGFuZCBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIHNlcnZpY2VcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG5cbmV4cG9ydCB7ZGF0YWJhc2UsIGF1dGh9XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldERhdGFiYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZGF0YWJhc2VVUkwiLCJhcHAiLCJkYXRhYmFzZSIsImF1dGgiLCJnZXRBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebaseClient.js\n"));

/***/ })

});