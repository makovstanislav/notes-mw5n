"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Note */ \"./components/Note.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var _firebaseClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebaseClient */ \"./firebaseClient.js\");\n/* harmony import */ var _components_Menubar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Menubar */ \"./components/Menubar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { allPostsData  } = param;\n    _s();\n    const [seller, switchSeller] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    function handleChange(event) {\n        setCredentials((prevCred)=>{\n            return {\n                ...prevCred,\n                [event.target.name]: event.target.type === \"checkbox\" ? !credentials.isSeller : event.target.value\n            };\n        });\n        readUserType();\n    }\n    function writeUserData() {\n        const { name , email , password , isSeller  } = credentials;\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_6__.database, \"user\"), {\n            name: name,\n            email: email,\n            password: password,\n            isSeller: isSeller\n        });\n    }\n    writeUserData();\n    function signUp(email, password) {\n        createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{\n            // Signed in \n            const user = userCredential.user;\n        // ...\n        }).catch((error)=>{\n            const errorCode = error.code;\n            const errorMessage = error.message;\n        // ..\n        });\n    }\n    async function handleSubmit() {\n        const logUp = await signUp(credentials.email, credentials.password);\n        const addToDb = await writeUserData();\n    }\n    function readUserType() {\n        const isSellerRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebaseClient__WEBPACK_IMPORTED_MODULE_6__.database, \"user/isSeller\");\n        (0,firebase_database__WEBPACK_IMPORTED_MODULE_5__.onValue)(isSellerRef, (snapshot)=>{\n            const data = snapshot.val();\n            console.log(data);\n            switchSeller(data);\n        });\n    }\n    function logOut() {\n        signOut(auth).then(()=>{\n            // Sign-out successful.\n            setSigned(false);\n            console.log(\"Sign-out successful\");\n        }).catch((error)=>{\n        // An error happened.\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        home: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: _components_layout__WEBPACK_IMPORTED_MODULE_2__.siteTitle\n                }, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default().headingMd),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"[Your Self Introduction]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"(This is a sample website - you’ll be building a site like this on\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/learn\",\n                                children: \"our Next.js tutorial\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            \".)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default().headingMd),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menubar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Type username\",\n                            onChange: handleChange,\n                            name: \"name\",\n                            value: credentials.name\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            placeholder: \"Type email\",\n                            onChange: handleChange,\n                            name: \"email\",\n                            value: credentials.email\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"Type password\",\n                            onChange: handleChange,\n                            name: \"password\",\n                            value: credentials.password\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            id: \"isSeller\",\n                            name: \"isSeller\",\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            for: \"isSeller\",\n                            children: \"Are you a seller?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                            lineNumber: 139,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"\".concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default().headingMd), \" \").concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default().padding1px)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default().headingLg),\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default().list),\n                        children: allPostsData.map((param)=>/*#__PURE__*/ {\n                            let { id , date , title  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default().listItem),\n                                children: [\n                                    title,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                                        lineNumber: 148,\n                                        columnNumber: 15\n                                    }, this),\n                                    id,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                                        lineNumber: 150,\n                                        columnNumber: 15\n                                    }, this),\n                                    date\n                                ]\n                            }, id, true, {\n                                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                                lineNumber: 146,\n                                columnNumber: 13\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this),\n            seller && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Note__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n                lineNumber: 156,\n                columnNumber: 18\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Stan/Desktop/dev/Next-Notes/notes-mw5n/pages/index.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"yvLMs0VvEfFcjHGXIUI48UFUFGo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUM0QjtBQUNMO0FBS2Y7QUFFQTtBQUVlO0FBQ1Y7QUFFQzs7QUFZNUIsU0FBU1ksS0FBSyxLQUFjLEVBQUU7UUFBaEIsRUFBQ0MsYUFBWSxFQUFDLEdBQWQ7O0lBSTNCLE1BQU0sQ0FBQ0MsUUFBUUMsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTdDLFNBQVNVLGFBQWFDLEtBQUssRUFBRTtRQUMzQkMsZUFBZUMsQ0FBQUEsV0FBWTtZQUN6QixPQUFPO2dCQUNMLEdBQUdBLFFBQVE7Z0JBQ1gsQ0FBQ0YsTUFBTUcsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUosTUFBTUcsTUFBTSxDQUFDRSxJQUFJLEtBQUssYUFBYSxDQUFDQyxZQUFZQyxRQUFRLEdBQUdQLE1BQU1HLE1BQU0sQ0FBQ0ssS0FBSztZQUNwRztRQUNGO1FBQ0FDO0lBQ0Y7SUFFQSxTQUFTQyxnQkFBZ0I7UUFDdkIsTUFBTSxFQUFDTixLQUFJLEVBQUVPLE1BQUssRUFBRUMsU0FBUSxFQUFFTCxTQUFRLEVBQUMsR0FBR0Q7UUFDMUNmLHNEQUFHQSxDQUFDRCxzREFBR0EsQ0FBQ0cscURBQVFBLEVBQUUsU0FBUztZQUN6QlcsTUFBTUE7WUFDTk8sT0FBT0E7WUFDUEMsVUFBVUE7WUFDVkwsVUFBVUE7UUFDWjtJQUNGO0lBRUFHO0lBRUEsU0FBU0csT0FBT0YsS0FBSyxFQUFFQyxRQUFRLEVBQUU7UUFDL0JFLCtCQUErQkMsTUFBTUosT0FBT0MsVUFDekNJLElBQUksQ0FBQyxDQUFDQyxpQkFBbUI7WUFDeEIsYUFBYTtZQUNiLE1BQU1DLE9BQU9ELGVBQWVDLElBQUk7UUFDaEMsTUFBTTtRQUNSLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxRQUFVO1lBQ2hCLE1BQU1DLFlBQVlELE1BQU1FLElBQUk7WUFDNUIsTUFBTUMsZUFBZUgsTUFBTUksT0FBTztRQUNsQyxLQUFLO1FBQ1A7SUFDSjtJQUVBLGVBQWVDLGVBQWU7UUFDN0IsTUFBTUMsUUFBUSxNQUFNYixPQUFPUCxZQUFZSyxLQUFLLEVBQUVMLFlBQVlNLFFBQVE7UUFDbEUsTUFBTWUsVUFBVSxNQUFNakI7SUFDdkI7SUFFQSxTQUFTRCxlQUFlO1FBQ3RCLE1BQU1tQixjQUFjdEMsc0RBQUdBLENBQUNHLHFEQUFRQSxFQUFFO1FBQ2xDRCwwREFBT0EsQ0FBQ29DLGFBQWEsQ0FBQ0MsV0FBYTtZQUNqQyxNQUFNQyxPQUFPRCxTQUFTRSxHQUFHO1lBQ3pCQyxRQUFRQyxHQUFHLENBQUNIO1lBQ1poQyxhQUFhZ0M7UUFDZjtJQUNGO0lBRUEsU0FBU0ksU0FBUztRQUNoQkMsUUFBUXBCLE1BQU1DLElBQUksQ0FBQyxJQUFNO1lBQ3ZCLHVCQUF1QjtZQUN2Qm9CLFVBQVUsS0FBSztZQUNmSixRQUFRQyxHQUFHLENBQUM7UUFDZCxHQUFHZCxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtRQUNsQixxQkFBcUI7UUFDdkI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDcEMsMERBQU1BO1FBQUNxRCxJQUFJOzswQkFDViw4REFBQ3RELGtEQUFJQTswQkFDSCw0RUFBQ3VEOzhCQUFPckQseURBQVNBOzs7Ozs7Ozs7OzswQkFFbkIsOERBQUNzRDtnQkFBUUMsV0FBV3RELDJFQUFvQjs7a0NBQ3RDLDhEQUFDd0Q7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7OzRCQUFFOzRCQUNrRTswQ0FDbkUsOERBQUNDO2dDQUFFQyxNQUFLOzBDQUEyQjs7Ozs7OzRCQUF3Qjs7Ozs7Ozs7Ozs7OzswQkFHL0QsOERBQUNMO2dCQUFRQyxXQUFXdEQsMkVBQW9COzBCQUN0Qyw0RUFBQ1EsMkRBQU9BOzs7Ozs7Ozs7OzBCQUVWLDhEQUFDNkM7MEJBQ0MsNEVBQUNNO29CQUFLQyxVQUFVckI7O3NDQUNkLDhEQUFDc0I7NEJBQ0MxQyxNQUFLOzRCQUNMMkMsYUFBWTs0QkFDWkMsVUFBVWxEOzRCQUNWSyxNQUFLOzRCQUNMSSxPQUFPRixZQUFZRixJQUFJOzs7Ozs7c0NBRXpCLDhEQUFDMkM7NEJBQ0MxQyxNQUFLOzRCQUNMMkMsYUFBWTs0QkFDWkMsVUFBVWxEOzRCQUNWSyxNQUFLOzRCQUNMSSxPQUFPRixZQUFZSyxLQUFLOzs7Ozs7c0NBRTFCLDhEQUFDb0M7NEJBQ0MxQyxNQUFLOzRCQUNMMkMsYUFBWTs0QkFDWkMsVUFBVWxEOzRCQUNWSyxNQUFLOzRCQUNMSSxPQUFPRixZQUFZTSxRQUFROzs7Ozs7c0NBRTdCLDhEQUFDbUM7NEJBQ0MxQyxNQUFLOzRCQUNMNkMsSUFBRzs0QkFDSDlDLE1BQUs7NEJBQ0w2QyxVQUFVbEQ7Ozs7OztzQ0FHWiw4REFBQ29EOzRCQUFNQyxLQUFJO3NDQUFXOzs7Ozs7c0NBQ3RCLDhEQUFDQztzQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNkO2dCQUFRQyxXQUFXLEdBQTJCdEQsT0FBeEJBLDJFQUFvQixFQUFDLEtBQXlCLE9BQXRCQSw0RUFBcUI7O2tDQUNsRSw4REFBQ3FFO3dCQUFHZixXQUFXdEQsMkVBQW9CO2tDQUFFOzs7Ozs7a0NBQ3JDLDhEQUFDdUU7d0JBQUdqQixXQUFXdEQsc0VBQWU7a0NBQzNCVSxhQUFhK0QsR0FBRyxDQUFDLHVCQUNoQjtnQ0FEaUIsRUFBRVQsR0FBRSxFQUFFVSxLQUFJLEVBQUV0QixNQUFLLEVBQUU7bUNBQ3BDLDhEQUFDdUI7Z0NBQUdyQixXQUFXdEQsMEVBQW1COztvQ0FDL0JvRDtrREFDRCw4REFBQ3lCOzs7OztvQ0FDQWI7a0RBQ0QsOERBQUNhOzs7OztvQ0FDQUg7OytCQUxzQ1Y7Ozs7O3dCQU1yQzs7Ozs7Ozs7Ozs7O1lBSVRyRCx3QkFBVSw4REFBQ1Ysd0RBQUlBOzs7Ozs7Ozs7OztBQUd0QixDQUFDO0dBcEl1QlE7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XG5cbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gJy4uL2xpYi9wb3N0cyc7XG5cblxuaW1wb3J0IE5vdGUgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RlJ1xuXG5pbXBvcnQge1JlYWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHtyZWYsIHNldCwgb25WYWx1ZSB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiXG5pbXBvcnQge2RhdGFiYXNlfSBmcm9tIFwiLi4vZmlyZWJhc2VDbGllbnRcIlxuXG5pbXBvcnQgTWVudWJhciBmcm9tICcuLi9jb21wb25lbnRzL01lbnViYXInXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsUG9zdHNEYXRhLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2FsbFBvc3RzRGF0YX0pIHtcblxuXG5cbiAgY29uc3QgW3NlbGxlciwgc3dpdGNoU2VsbGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHNldENyZWRlbnRpYWxzKHByZXZDcmVkID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZDcmVkLFxuICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiID8gIWNyZWRlbnRpYWxzLmlzU2VsbGVyIDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfSlcbiAgICByZWFkVXNlclR5cGUoKVxuICB9XG5cbiAgZnVuY3Rpb24gd3JpdGVVc2VyRGF0YSgpIHtcbiAgICBjb25zdCB7bmFtZSwgZW1haWwsIHBhc3N3b3JkLCBpc1NlbGxlcn0gPSBjcmVkZW50aWFsc1xuICAgIHNldChyZWYoZGF0YWJhc2UsIFwidXNlclwiKSwge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIGlzU2VsbGVyOiBpc1NlbGxlclxuICAgIH0pXG4gIH1cbiAgXG4gIHdyaXRlVXNlckRhdGEoKVxuXG4gIGZ1bmN0aW9uIHNpZ25VcChlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XG4gICAgICAgIC8vIFNpZ25lZCBpbiBcbiAgICAgICAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XG4gICAgICAgIC8vIC4uLlxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgLy8gLi5cbiAgICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgY29uc3QgbG9nVXAgPSBhd2FpdCBzaWduVXAoY3JlZGVudGlhbHMuZW1haWwsIGNyZWRlbnRpYWxzLnBhc3N3b3JkKVxuICAgY29uc3QgYWRkVG9EYiA9IGF3YWl0IHdyaXRlVXNlckRhdGEoKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZFVzZXJUeXBlKCkge1xuICAgIGNvbnN0IGlzU2VsbGVyUmVmID0gcmVmKGRhdGFiYXNlLCAndXNlci9pc1NlbGxlcicpXG4gICAgb25WYWx1ZShpc1NlbGxlclJlZiwgKHNuYXBzaG90KSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gc25hcHNob3QudmFsKCk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgc3dpdGNoU2VsbGVyKGRhdGEpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZ091dCgpIHtcbiAgICBzaWduT3V0KGF1dGgpLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cbiAgICAgIHNldFNpZ25lZChmYWxzZSlcbiAgICAgIGNvbnNvbGUubG9nKFwiU2lnbi1vdXQgc3VjY2Vzc2Z1bFwiKVxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgaG9tZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+XG4gICAgICAgIDxwPltZb3VyIFNlbGYgSW50cm9kdWN0aW9uXTwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgKFRoaXMgaXMgYSBzYW1wbGUgd2Vic2l0ZSAtIHlvdeKAmWxsIGJlIGJ1aWxkaW5nIGEgc2l0ZSBsaWtlIHRoaXMgb257JyAnfVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIj5vdXIgTmV4dC5qcyB0dXRvcmlhbDwvYT4uKVxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cbiAgICAgICAgPE1lbnViYXIgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIHVzZXJuYW1lJ1xuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtjcmVkZW50aWFscy5uYW1lfVxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIGVtYWlsJ1xuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17Y3JlZGVudGlhbHMuZW1haWx9XG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgcGFzc3dvcmQnXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtjcmVkZW50aWFscy5wYXNzd29yZH1cbiAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBpZD1cImlzU2VsbGVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJpc1NlbGxlclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgID5cbiAgICAgICAgICA8L2lucHV0PlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJpc1NlbGxlclwiPkFyZSB5b3UgYSBzZWxsZXI/PC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuaGVhZGluZ01kfSAke3V0aWxTdHlsZXMucGFkZGluZzFweH1gfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PkJsb2c8L2gyPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3R9PlxuICAgICAgICAgIHthbGxQb3N0c0RhdGEubWFwKCh7IGlkLCBkYXRlLCB0aXRsZSB9KSA9PiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3RJdGVtfSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge2lkfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge2RhdGV9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAge3NlbGxlciAmJiA8Tm90ZSAvPn1cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGF5b3V0Iiwic2l0ZVRpdGxlIiwidXRpbFN0eWxlcyIsIk5vdGUiLCJSZWFjdCIsInVzZVN0YXRlIiwicmVmIiwic2V0Iiwib25WYWx1ZSIsImRhdGFiYXNlIiwiTWVudWJhciIsIkhvbWUiLCJhbGxQb3N0c0RhdGEiLCJzZWxsZXIiLCJzd2l0Y2hTZWxsZXIiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInNldENyZWRlbnRpYWxzIiwicHJldkNyZWQiLCJ0YXJnZXQiLCJuYW1lIiwidHlwZSIsImNyZWRlbnRpYWxzIiwiaXNTZWxsZXIiLCJ2YWx1ZSIsInJlYWRVc2VyVHlwZSIsIndyaXRlVXNlckRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwic2lnblVwIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiYXV0aCIsInRoZW4iLCJ1c2VyQ3JlZGVudGlhbCIsInVzZXIiLCJjYXRjaCIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJoYW5kbGVTdWJtaXQiLCJsb2dVcCIsImFkZFRvRGIiLCJpc1NlbGxlclJlZiIsInNuYXBzaG90IiwiZGF0YSIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJsb2dPdXQiLCJzaWduT3V0Iiwic2V0U2lnbmVkIiwiaG9tZSIsInRpdGxlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImhlYWRpbmdNZCIsInAiLCJhIiwiaHJlZiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImlkIiwibGFiZWwiLCJmb3IiLCJidXR0b24iLCJwYWRkaW5nMXB4IiwiaDIiLCJoZWFkaW5nTGciLCJ1bCIsImxpc3QiLCJtYXAiLCJkYXRlIiwibGkiLCJsaXN0SXRlbSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});