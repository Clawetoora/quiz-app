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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Result; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Result(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_1___default().containerAnswer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Tu atsakei teisingai i \",\n                    props.result,\n                    \" klausimus per\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            (\"0\" + Math.floor(props.time / 1000 % 60)).slice(-2),\n                            \"s \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            (\"0\" + props.time / 10 % 100).slice(-2),\n                            \"ms\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"bet renginyje apie kibernetinį saugumą atidavei savo duomenis \\uD83D\\uDE01\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    props.name,\n                    \" \",\n                    props.lastname,\n                    \" \",\n                    props.email\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Result;\nvar _c;\n$RefreshReg$(_c, \"Result\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVzdWx0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN1QztBQUN4QixTQUFTQyxPQUFPQyxLQUFLO0lBQ2xDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXSix5RUFBc0I7OzBCQUNwQyw4REFBQ007O29CQUFHO29CQUNzQkosTUFBTUssTUFBTTtvQkFBQztvQkFBZTtrQ0FDcEQsOERBQUNDOzs0QkFBTyxPQUFNQyxLQUFLQyxLQUFLLENBQUMsTUFBT0MsSUFBSSxHQUFHLE9BQVEsR0FBRSxFQUFHQyxLQUFLLENBQUMsQ0FBQzs0QkFBRzs7Ozs7OztrQ0FDOUQsOERBQUNKOzs0QkFBTyxPQUFPLE1BQU9HLElBQUksR0FBRyxLQUFNLEdBQUcsRUFBR0MsS0FBSyxDQUFDLENBQUM7NEJBQUc7Ozs7Ozs7b0JBQVU7Ozs7Ozs7MEJBRS9ELDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDVjs7b0JBQ0VELE1BQU1ZLElBQUk7b0JBQUM7b0JBQUVaLE1BQU1hLFFBQVE7b0JBQUM7b0JBQUViLE1BQU1jLEtBQUs7Ozs7Ozs7Ozs7Ozs7QUFJbEQ7S0Fkd0JmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmVzdWx0cy5qcz9hYzk3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bHQocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJBbnN3ZXJ9PlxyXG4gICAgICA8aDE+XHJcbiAgICAgICAgVHUgYXRzYWtlaSB0ZWlzaW5nYWkgaSB7cHJvcHMucmVzdWx0fSBrbGF1c2ltdXMgcGVye1wiIFwifVxyXG4gICAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKChwcm9wcy50aW1lIC8gMTAwMCkgJSA2MCkpLnNsaWNlKC0yKX1zIDwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57KFwiMFwiICsgKChwcm9wcy50aW1lIC8gMTApICUgMTAwKSkuc2xpY2UoLTIpfW1zPC9zcGFuPntcIiBcIn1cclxuICAgICAgPC9oMT5cclxuICAgICAgPHA+YmV0IHJlbmdpbnlqZSBhcGllIGtpYmVybmV0aW7EryBzYXVndW3EhSBhdGlkYXZlaSBzYXZvIGR1b21lbmlzIPCfmIE8L3A+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3Byb3BzLm5hbWV9IHtwcm9wcy5sYXN0bmFtZX0ge3Byb3BzLmVtYWlsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlc3VsdCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQW5zd2VyIiwiaDEiLCJyZXN1bHQiLCJzcGFuIiwiTWF0aCIsImZsb29yIiwidGltZSIsInNsaWNlIiwicCIsIm5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/results.js\n"));

/***/ })

});