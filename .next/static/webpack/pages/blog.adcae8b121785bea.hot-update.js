"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layouts */ \"./components/Layouts.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n\n\n\nconst PostCard = (param)=>{\n    let { post } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-md-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post.imageURL,\n                        alt: \"\",\n                        className: \"card-img-top\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n                        lineNumber: 8,\n                        columnNumber: 10\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n                    lineNumber: 7,\n                    columnNumber: 8\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n                            lineNumber: 11,\n                            columnNumber: 10\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: post.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n                            lineNumber: 12,\n                            columnNumber: 10\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                            href: \"/post?title=\".concat(post.title),\n                            className: \"btn btn-light\",\n                            children: \"Read\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n                            lineNumber: 13,\n                            columnNumber: 10\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n                    lineNumber: 10,\n                    columnNumber: 8\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n            lineNumber: 6,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n        lineNumber: 5,\n        columnNumber: 4\n    }, undefined);\n};\n_c = PostCard;\nconst Blog = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        title: \"My Blog\",\n        dark: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _profile__WEBPACK_IMPORTED_MODULE_2__.posts.map((post, i)=>{\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostCard, {\n                    post: post\n                }, i, false, {\n                    fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\pages\\\\blog.js\",\n        lineNumber: 23,\n        columnNumber: 4\n    }, undefined);\n_c1 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c, _c1;\n$RefreshReg$(_c, \"PostCard\");\n$RefreshReg$(_c1, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNYO0FBRWhDLE1BQU1FLFdBQVc7UUFBQyxFQUFFQyxJQUFJLEVBQUU7eUJBQ3ZCLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFJQyxLQUFLSixLQUFLSyxRQUFRO3dCQUFFQyxLQUFJO3dCQUFHSixXQUFVOzs7Ozs7Ozs7Ozs4QkFFNUMsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0s7c0NBQUlQLEtBQUtRLEtBQUs7Ozs7OztzQ0FDZiw4REFBQ0M7c0NBQUdULEtBQUtVLE9BQU87Ozs7OztzQ0FDaEIsOERBQUNDOzRCQUFLQyxNQUFNLGVBQTBCLE9BQVhaLEtBQUtRLEtBQUs7NEJBQUlOLFdBQVU7c0NBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FUdEVIO0FBa0JOLE1BQU1jLE9BQU8sa0JBQ1YsOERBQUNoQiwyREFBTUE7UUFBQ2lCLFFBQVE7UUFBT04sT0FBTTtRQUFVTyxJQUFJO2tCQUN4Qyw0RUFBQ2Q7WUFBSUMsV0FBVTtzQkFFWkosMkNBQUtBLENBQUNrQixHQUFHLENBQUMsQ0FBQ2hCLE1BQUtpQjs4QkFDYiw4REFBQ2xCO29CQUFpQkMsTUFBTUE7bUJBQVRpQjs7Ozs7WUFDbEI7Ozs7Ozs7Ozs7O01BTkhKO0FBWU4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz9jYmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0c1wiO1xyXG5pbXBvcnQge3Bvc3RzfSBmcm9tIFwiLi4vcHJvZmlsZVwiXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4gKFxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93XCI+XHJcbiAgICAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlVVJMfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiAvPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XHJcbiAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPlxyXG4gICAgICAgICAgIFJlYWRcclxuICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gKTtcclxuXHJcblxyXG5jb25zdCBCbG9nID0gKCkgPT4gKFxyXG4gICA8TGF5b3V0IGZvb3Rlcj17ZmFsc2V9IHRpdGxlPVwiTXkgQmxvZ1wiIGRhcms+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIHtcclxuICAgICAgICAgcG9zdHMubWFwKChwb3N0LGkpID0+IHtcclxuICAgICAgICAgICAgPFBvc3RDYXJkIGtleT17aX0gcG9zdD17cG9zdH0vPlxyXG4gICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICA8L0xheW91dD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwb3N0cyIsIlBvc3RDYXJkIiwicG9zdCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlVVJMIiwiYWx0IiwiaDEiLCJ0aXRsZSIsInAiLCJjb250ZW50IiwiTGluayIsImhyZWYiLCJCbG9nIiwiZm9vdGVyIiwiZGFyayIsIm1hcCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n"));

/***/ })

});