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

/***/ "./components/Layouts.js":
/*!*******************************!*\
  !*** ./components/Layouts.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Layout = (param)=>{\n    let { children, title, footer = true, dark = false } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            // console.log(url);\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done());\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({\n            \"bg-dark\": dark,\n            \"bg-light\": !dark\n        }),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\components\\\\Layouts.js\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py4\",\n                children: [\n                    title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(\"text-center\", {\n                            \"text-light\": dark\n                        }),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\components\\\\Layouts.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\components\\\\Layouts.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, undefined),\n            footer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"\\xa9 Ryan Ray Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\components\\\\Layouts.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"2000 - \",\n                                new Date().getFullYear()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\components\\\\Layouts.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"All Right Reserved\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\components\\\\Layouts.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\components\\\\Layouts.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\components\\\\Layouts.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\isgb_\\\\Documents\\\\Nextjs Portafolio Simple Ejemplo Pr\\xe1ctico de Nextjs\\\\next-simple-portfolio\\\\components\\\\Layouts.js\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDSjtBQUNVO0FBQ047QUFDRTtBQUVwQyxNQUFNSyxTQUFTO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsSUFBSSxFQUFFQyxPQUFPLEtBQUssRUFBQzs7SUFFN0QsTUFBTUMsU0FBU1Isc0RBQVNBO0lBRXhCRixnREFBU0EsQ0FBQztRQUNSLE1BQU1XLG9CQUFvQixDQUFDQztZQUN6QixvQkFBb0I7WUFDcEJULHNEQUFlO1FBQ2pCO1FBRURPLE9BQU9JLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLG9CQUFvQko7UUFFckNELE9BQU9JLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHVCQUF1QixJQUFNWixxREFBYztRQUU1RCxPQUFPO1lBQ05PLE9BQU9JLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLG9CQUFvQk47UUFDdkM7SUFDRCxHQUFHLEVBQUU7SUFHTCxxQkFDQSw4REFBQ087UUFBSUMsV0FBV2YsaURBQVVBLENBQUM7WUFBQyxXQUFZSztZQUFPLFlBQWEsQ0FBQ0E7UUFBSTs7MEJBQy9ELDhEQUFDUiwrQ0FBTUE7Ozs7OzBCQUNQLDhEQUFDbUI7Z0JBQUtELFdBQVU7O29CQUNiWix1QkFDQyw4REFBQ2M7d0JBQUdGLFdBQVdmLGlEQUFVQSxDQUFDLGVBQWM7NEJBQUMsY0FBZUs7d0JBQUk7a0NBQ3ZERjs7Ozs7O29CQUdORDs7Ozs7OztZQUlERSx3QkFDRSw4REFBQ0E7Z0JBQU9XLFdBQVU7MEJBQ2xCLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNFO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOztnQ0FBRTtnQ0FBUSxJQUFJQyxPQUFPQyxXQUFXOzs7Ozs7O3NDQUNqQyw4REFBQ0Y7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2Y7R0E3Q01qQjs7UUFFV0gsa0RBQVNBOzs7S0FGcEJHO0FBK0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0cy5qcz9lMmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgQ2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuICx0aXRsZSwgZm9vdGVyID0gdHJ1ZSwgZGFyayA9IGZhbHNlfSkgPT4ge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuXHJcbiAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuXHJcbiAgIHJldHVybiAoKSA9PiB7XHJcbiAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICB9XHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT17Q2xhc3NuYW1lcyh7J2JnLWRhcmsnIDogZGFyayAsICdiZy1saWdodCcgOiAhZGFya30pfT5cclxuICAgIDxOYXZiYXIgLz5cclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweTRcIj5cclxuICAgICAge3RpdGxlICYmIChcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtDbGFzc25hbWVzKCd0ZXh0LWNlbnRlcicseyd0ZXh0LWxpZ2h0JyA6IGRhcmt9KX0+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICApfVxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L21haW4+XHJcblxyXG4gICAge1xyXG4gICAgICBmb290ZXIgJiYgKFxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LWxpZ2h0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+XHJcbiAgICAgICAgICAgIDxoMT4mY29weTsgUnlhbiBSYXkgUG9ydGZvbGlvPC9oMT5cclxuICAgICAgICAgICAgPHA+MjAwMCAtIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9wPlxyXG4gICAgICAgICAgICA8cD5BbGwgUmlnaHQgUmVzZXJ2ZWQ8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgPC9kaXY+XHJcbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIk5hdmJhciIsInVzZVJvdXRlciIsIk5Qcm9ncmVzcyIsIkNsYXNzbmFtZXMiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwiZm9vdGVyIiwiZGFyayIsInJvdXRlciIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJwIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layouts.js\n"));

/***/ })

});