"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/results.js":
/*!****************************!*\
  !*** ./src/app/results.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Result; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Result(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().containerAnswer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Jūs atsakėte teisingai į \",\n                    props.result,\n                    \" klausimus per\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            (\"0\" + Math.floor(props.time / 1000 % 60)).slice(-2),\n                            \"s \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            (\"0\" + props.time / 10 % 100).slice(-2),\n                            \"ms\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this),\n                    \" tai yra\",\n                    \" \",\n                    props.result <= 3 ? Math.trunc(props.result / props.time * 10000) : Math.trunc(props.result / props.time * 200000),\n                    \" \",\n                    \"taškai\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().zvaigzdute),\n                children: [\n                    \"Ar žinojai, kad visame psaulyje kiekvieną sekundę nutekinami 63 el.pašto adresai, tu tapai vienu iš jų! \\uD83D\\uDE01\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    \"Juokaujam, tavo el.paštas su mumis saugus\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    props.name,\n                    \" \",\n                    props.email\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Result;\nvar _c;\n$RefreshReg$(_c, \"Result\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVzdWx0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN1QztBQUN4QixTQUFTQyxPQUFPQyxLQUFLO0lBQ2xDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXSix5RUFBc0I7OzBCQUNwQyw4REFBQ007O29CQUFHO29CQUN3QkosTUFBTUssTUFBTTtvQkFBQztvQkFBZTtrQ0FDdEQsOERBQUNDOzs0QkFBTyxPQUFNQyxLQUFLQyxLQUFLLENBQUMsTUFBT0MsSUFBSSxHQUFHLE9BQVEsR0FBRSxFQUFHQyxLQUFLLENBQUMsQ0FBQzs0QkFBRzs7Ozs7OztrQ0FDOUQsOERBQUNKOzs0QkFBTyxPQUFPLE1BQU9HLElBQUksR0FBRyxLQUFNLEdBQUcsRUFBR0MsS0FBSyxDQUFDLENBQUM7NEJBQUc7Ozs7Ozs7b0JBQVM7b0JBQVM7b0JBQ3BFVixNQUFNSyxNQUFNLElBQUksSUFDYkUsS0FBS0ksS0FBSyxDQUFDLE1BQU9OLE1BQU0sR0FBR0wsTUFBTVMsSUFBSSxHQUFJLFNBQ3pDRixLQUFLSSxLQUFLLENBQUMsTUFBT04sTUFBTSxHQUFHTCxNQUFNUyxJQUFJLEdBQUk7b0JBQVM7b0JBQUk7Ozs7Ozs7MEJBSTVELDhEQUFDRztnQkFBRVYsV0FBV0osb0VBQWlCOztvQkFBRTtrQ0FHL0IsOERBQUNnQjs7Ozs7b0JBQUs7Ozs7Ozs7MEJBR1IsOERBQUNiOztvQkFDRUQsTUFBTWUsSUFBSTtvQkFBQztvQkFBRWYsTUFBTWdCLEtBQUs7Ozs7Ozs7Ozs7Ozs7QUFJakM7S0F4QndCakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZXN1bHRzLmpzP2FjOTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lckFuc3dlcn0+XHJcbiAgICAgIDxoMT5cclxuICAgICAgICBKxatzIGF0c2FrxJd0ZSB0ZWlzaW5nYWkgxK8ge3Byb3BzLnJlc3VsdH0ga2xhdXNpbXVzIHBlcntcIiBcIn1cclxuICAgICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigocHJvcHMudGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMil9cyA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+eyhcIjBcIiArICgocHJvcHMudGltZSAvIDEwKSAlIDEwMCkpLnNsaWNlKC0yKX1tczwvc3Bhbj4gdGFpIHlyYXtcIiBcIn1cclxuICAgICAgICB7cHJvcHMucmVzdWx0IDw9IDNcclxuICAgICAgICAgID8gTWF0aC50cnVuYygocHJvcHMucmVzdWx0IC8gcHJvcHMudGltZSkgKiAxMDAwMClcclxuICAgICAgICAgIDogTWF0aC50cnVuYygocHJvcHMucmVzdWx0IC8gcHJvcHMudGltZSkgKiAyMDAwMDApfXtcIiBcIn1cclxuICAgICAgICB0YcWha2FpXHJcbiAgICAgIDwvaDE+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy56dmFpZ3pkdXRlfT5cclxuICAgICAgICBBciDFvmlub2phaSwga2FkIHZpc2FtZSBwc2F1bHlqZSBraWVrdmllbsSFIHNla3VuZMSZIG51dGVraW5hbWkgNjMgZWwucGHFoXRvXHJcbiAgICAgICAgYWRyZXNhaSwgdHUgdGFwYWkgdmllbnUgacWhIGrFsyEg8J+YgVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIEp1b2thdWphbSwgdGF2byBlbC5wYcWhdGFzIHN1IG11bWlzIHNhdWd1c1xyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3Byb3BzLm5hbWV9IHtwcm9wcy5lbWFpbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZXN1bHQiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lckFuc3dlciIsImgxIiwicmVzdWx0Iiwic3BhbiIsIk1hdGgiLCJmbG9vciIsInRpbWUiLCJzbGljZSIsInRydW5jIiwicCIsInp2YWlnemR1dGUiLCJiciIsIm5hbWUiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/results.js\n"));

/***/ })

});