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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Result; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_frame_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/frame.png */ \"(app-pages-browser)/./public/frame.png\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction Result(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().containerAnswer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Jūs atsakėte teisingai į\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            color: \"#29F206\"\n                        },\n                        children: [\n                            props.result,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    \"klausimus per\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            color: \"#29F206\"\n                        },\n                        children: [\n                            (\"0\" + Math.floor(props.time / 1000 % 60)).slice(-2),\n                            \"s\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            color: \"#29F206\"\n                        },\n                        children: [\n                            (\"0\" + props.time / 10 % 100).slice(-2),\n                            \"ms\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    \"tai yra\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            color: \"#29F206\"\n                        },\n                        children: [\n                            props.result <= 3 ? Math.trunc(props.result / props.time * 10000) : Math.trunc(props.result / props.time * 200000),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    \"taškai\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().zvaigzdute),\n                children: \"Ar žinojai, kad visame psaulyje kiekvieną sekundę nutekinami 63 el.pašto adresai, tu tapai vienu iš jų! \\uD83D\\uDE01\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    props.name,\n                    \" \",\n                    props.email\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    backgroundColor: \"red\",\n                    padding: \"5px 10px\",\n                    borderRadius: \"10px\",\n                    margin: \"5px 0 5px 0\"\n                },\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().zvaigzdute),\n                children: \"Juokauju, tavo el.paštas su mumis saugus!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().zvaigzdute),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _public_frame_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        alt: \"qr code\",\n                        width: 120\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    \"Sužinok daugiau apie\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        style: {\n                            textTransform: \"uppercase\"\n                        },\n                        children: \"kibernetinį saugumą\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    \"mūsų mokymuose!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\results.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Result;\nvar _c;\n$RefreshReg$(_c, \"Result\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVzdWx0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMrQjtBQUNTO0FBQ0Q7QUFDeEIsU0FBU0csT0FBT0MsS0FBSztJQUNsQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV0oseUVBQXNCOzswQkFDcEMsOERBQUNNOztvQkFBRztvQkFDdUI7a0NBQ3pCLDhEQUFDQzt3QkFBS0MsT0FBTzs0QkFBRUMsT0FBTzt3QkFBVTs7NEJBQUlQLE1BQU1RLE1BQU07NEJBQUM7Ozs7Ozs7b0JBQVE7b0JBQWM7a0NBQ3ZFLDhEQUFDSDt3QkFBS0MsT0FBTzs0QkFBRUMsT0FBTzt3QkFBVTs7NEJBQzVCLE9BQU1FLEtBQUtDLEtBQUssQ0FBQyxNQUFPQyxJQUFJLEdBQUcsT0FBUSxHQUFFLEVBQUdDLEtBQUssQ0FBQyxDQUFDOzRCQUFHOzRCQUFFOzs7Ozs7O2tDQUU1RCw4REFBQ1A7d0JBQUtDLE9BQU87NEJBQUVDLE9BQU87d0JBQVU7OzRCQUM1QixPQUFPLE1BQU9JLElBQUksR0FBRyxLQUFNLEdBQUcsRUFBR0MsS0FBSyxDQUFDLENBQUM7NEJBQUc7Ozs7Ozs7b0JBQ3ZDO29CQUFJO29CQUNKO2tDQUNSLDhEQUFDUDt3QkFBS0MsT0FBTzs0QkFBRUMsT0FBTzt3QkFBVTs7NEJBQzdCUCxNQUFNUSxNQUFNLElBQUksSUFDYkMsS0FBS0ksS0FBSyxDQUFDLE1BQU9MLE1BQU0sR0FBR1IsTUFBTVcsSUFBSSxHQUFJLFNBQ3pDRixLQUFLSSxLQUFLLENBQUMsTUFBT0wsTUFBTSxHQUFHUixNQUFNVyxJQUFJLEdBQUk7NEJBQVM7Ozs7Ozs7b0JBQ2pEOzs7Ozs7OzBCQUlULDhEQUFDRztnQkFBRVosV0FBV0osb0VBQWlCOzBCQUFFOzs7Ozs7MEJBSWpDLDhEQUFDRzs7b0JBQ0VELE1BQU1nQixJQUFJO29CQUFDO29CQUFFaEIsTUFBTWlCLEtBQUs7Ozs7Ozs7MEJBRTNCLDhEQUFDSDtnQkFDQ1IsT0FBTztvQkFDTFksaUJBQWlCO29CQUNqQkMsU0FBUztvQkFDVEMsY0FBYztvQkFDZEMsUUFBUTtnQkFDVjtnQkFDQW5CLFdBQVdKLG9FQUFpQjswQkFDN0I7Ozs7OzswQkFHRCw4REFBQ2dCO2dCQUFFWixXQUFXSixvRUFBaUI7O2tDQUM3Qiw4REFBQ0YsbURBQUtBO3dCQUFDMEIsS0FBS3pCLHlEQUFFQTt3QkFBRTBCLEtBQUk7d0JBQVVDLE9BQU87Ozs7OztrQ0FDckMsOERBQUNDOzs7OztvQkFBSztvQkFDZTtrQ0FDckIsOERBQUNDO3dCQUFPcEIsT0FBTzs0QkFBRXFCLGVBQWU7d0JBQVk7a0NBQUc7Ozs7OztvQkFFckM7b0JBQUk7Ozs7Ozs7Ozs7Ozs7QUFLdEI7S0FsRHdCNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZXN1bHRzLmpzP2FjOTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgcXIgZnJvbSBcIi4uLy4uL3B1YmxpYy9mcmFtZS5wbmdcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyQW5zd2VyfT5cclxuICAgICAgPGgxPlxyXG4gICAgICAgIErFq3MgYXRzYWvEl3RlIHRlaXNpbmdhaSDEr3tcIiBcIn1cclxuICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjMjlGMjA2XCIgfX0+e3Byb3BzLnJlc3VsdH0gPC9zcGFuPmtsYXVzaW11cyBwZXJ7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzI5RjIwNlwiIH19PlxyXG4gICAgICAgICAgeyhcIjBcIiArIE1hdGguZmxvb3IoKHByb3BzLnRpbWUgLyAxMDAwKSAlIDYwKSkuc2xpY2UoLTIpfXN7XCIgXCJ9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiMyOUYyMDZcIiB9fT5cclxuICAgICAgICAgIHsoXCIwXCIgKyAoKHByb3BzLnRpbWUgLyAxMCkgJSAxMDApKS5zbGljZSgtMil9bXNcclxuICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgIHRhaSB5cmF7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzI5RjIwNlwiIH19PlxyXG4gICAgICAgICAge3Byb3BzLnJlc3VsdCA8PSAzXHJcbiAgICAgICAgICAgID8gTWF0aC50cnVuYygocHJvcHMucmVzdWx0IC8gcHJvcHMudGltZSkgKiAxMDAwMClcclxuICAgICAgICAgICAgOiBNYXRoLnRydW5jKChwcm9wcy5yZXN1bHQgLyBwcm9wcy50aW1lKSAqIDIwMDAwMCl9e1wiIFwifVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICB0YcWha2FpXHJcbiAgICAgIDwvaDE+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy56dmFpZ3pkdXRlfT5cclxuICAgICAgICBBciDFvmlub2phaSwga2FkIHZpc2FtZSBwc2F1bHlqZSBraWVrdmllbsSFIHNla3VuZMSZIG51dGVraW5hbWkgNjMgZWwucGHFoXRvXHJcbiAgICAgICAgYWRyZXNhaSwgdHUgdGFwYWkgdmllbnUgacWhIGrFsyEg8J+YgVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3Byb3BzLm5hbWV9IHtwcm9wcy5lbWFpbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiNXB4IDEwcHhcIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICBtYXJnaW46IFwiNXB4IDAgNXB4IDBcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnp2YWlnemR1dGV9XHJcbiAgICAgID5cclxuICAgICAgICBKdW9rYXVqdSwgdGF2byBlbC5wYcWhdGFzIHN1IG11bWlzIHNhdWd1cyFcclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy56dmFpZ3pkdXRlfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtxcn0gYWx0PVwicXIgY29kZVwiIHdpZHRoPXsxMjB9PjwvSW1hZ2U+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgU3XFvmlub2sgZGF1Z2lhdSBhcGlle1wiIFwifVxyXG4gICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9fT5cclxuICAgICAgICAgIGtpYmVybmV0aW7EryBzYXVndW3EhVxyXG4gICAgICAgIDwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICBtxatzxbMgbW9reW11b3NlIVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInFyIiwic3R5bGVzIiwiUmVzdWx0IiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXJBbnN3ZXIiLCJoMSIsInNwYW4iLCJzdHlsZSIsImNvbG9yIiwicmVzdWx0IiwiTWF0aCIsImZsb29yIiwidGltZSIsInNsaWNlIiwidHJ1bmMiLCJwIiwienZhaWd6ZHV0ZSIsIm5hbWUiLCJlbWFpbCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImJyIiwic3Ryb25nIiwidGV4dFRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/results.js\n"));

/***/ })

});