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

/***/ "(app-pages-browser)/./src/app/timer.js":
/*!**************************!*\
  !*** ./src/app/timer.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Stopwatch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Stopwatch(props) {\n    _s();\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // const [running, setRunning] = useState(props.started);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let interval;\n        if (props.started) {\n            interval = setInterval(()=>{\n                setTime((prevTime)=>prevTime + 10);\n            }, 10);\n        } else if (!props.started) {\n            props.func(time);\n            setTime(0);\n            clearInterval(interval);\n        }\n        return ()=>clearInterval(interval);\n    }, [\n        props.started\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"stopwatch\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"numbers\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        (\"0\" + Math.floor(time / 60000 % 60)).slice(-2),\n                        \":\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\timer.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        (\"0\" + Math.floor(time / 1000 % 60)).slice(-2),\n                        \":\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\timer.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: (\"0\" + time / 10 % 100).slice(-2)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\timer.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\timer.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\timer.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Stopwatch, \"5hWQWrdOaoNaY+yZN4rUVWF/ZFM=\");\n_c = Stopwatch;\nvar _c;\n$RefreshReg$(_c, \"Stopwatch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGltZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTRDO0FBRTdCLFNBQVNFLFVBQVVDLEtBQUs7O0lBQ3JDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNqQyx5REFBeUQ7SUFDekRELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU07UUFDSixJQUFJSCxNQUFNSSxPQUFPLEVBQUU7WUFDakJELFdBQVdFLFlBQVk7Z0JBQ3JCSCxRQUFRLENBQUNJLFdBQWFBLFdBQVc7WUFDbkMsR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDTixNQUFNSSxPQUFPLEVBQUU7WUFDekJKLE1BQU1PLElBQUksQ0FBQ047WUFDWEMsUUFBUTtZQUNSTSxjQUFjTDtRQUNoQjtRQUNBLE9BQU8sSUFBTUssY0FBY0w7SUFDN0IsR0FBRztRQUFDSCxNQUFNSSxPQUFPO0tBQUM7SUFDbEIscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQzs7d0JBQU8sT0FBTUMsS0FBS0MsS0FBSyxDQUFDLE9BQVEsUUFBUyxHQUFFLEVBQUdDLEtBQUssQ0FBQyxDQUFDO3dCQUFHOzs7Ozs7OzhCQUN6RCw4REFBQ0g7O3dCQUFPLE9BQU1DLEtBQUtDLEtBQUssQ0FBQyxPQUFRLE9BQVEsR0FBRSxFQUFHQyxLQUFLLENBQUMsQ0FBQzt3QkFBRzs7Ozs7Ozs4QkFDeEQsOERBQUNIOzhCQUFNLENBQUMsTUFBTyxPQUFRLEtBQU0sR0FBRyxFQUFHRyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEQ7R0F6QndCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3RpbWVyLmpzP2IzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdG9wd2F0Y2gocHJvcHMpIHtcclxuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAvLyBjb25zdCBbcnVubmluZywgc2V0UnVubmluZ10gPSB1c2VTdGF0ZShwcm9wcy5zdGFydGVkKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGludGVydmFsO1xyXG4gICAgaWYgKHByb3BzLnN0YXJ0ZWQpIHtcclxuICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZSgocHJldlRpbWUpID0+IHByZXZUaW1lICsgMTApO1xyXG4gICAgICB9LCAxMCk7XHJcbiAgICB9IGVsc2UgaWYgKCFwcm9wcy5zdGFydGVkKSB7XHJcbiAgICAgIHByb3BzLmZ1bmModGltZSk7XHJcbiAgICAgIHNldFRpbWUoMCk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtwcm9wcy5zdGFydGVkXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcHdhdGNoXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyc1wiPlxyXG4gICAgICAgIDxzcGFuPnsoXCIwXCIgKyBNYXRoLmZsb29yKCh0aW1lIC8gNjAwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57KFwiMFwiICsgTWF0aC5mbG9vcigodGltZSAvIDEwMDApICUgNjApKS5zbGljZSgtMil9Ojwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57KFwiMFwiICsgKCh0aW1lIC8gMTApICUgMTAwKSkuc2xpY2UoLTIpfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0b3B3YXRjaCIsInByb3BzIiwidGltZSIsInNldFRpbWUiLCJpbnRlcnZhbCIsInN0YXJ0ZWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiZnVuYyIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiTWF0aCIsImZsb29yIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/timer.js\n"));

/***/ })

});