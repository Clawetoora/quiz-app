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

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\app\\\\page.js\",\"import\":\"Barlow_Semi_Condensed\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"]}],\"variableName\":\"barlowSemi\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\page.js\\\",\\\"import\\\":\\\"Barlow_Semi_Condensed\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"100\\\",\\\"200\\\",\\\"300\\\",\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\",\\\"800\\\",\\\"900\\\"]}],\\\"variableName\\\":\\\"barlowSemi\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results */ \"(app-pages-browser)/./src/app/results.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ \"(app-pages-browser)/./src/app/timer.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_vcs_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/vcs.png */ \"(app-pages-browser)/./public/vcs.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    var _questions_;\n    _s();\n    const questions = [\n        {\n            id: 1,\n            question: \"Jūsų vardas\"\n        },\n        {\n            id: 2,\n            question: \"Lietuvos ilgiausia upė?\",\n            answer: \"Nemunas\"\n        },\n        {\n            id: 3,\n            question: \"Jūsų pavardė\"\n        },\n        {\n            id: 4,\n            question: \"Lietuvos vienintelis karalius?\",\n            answer: \"Mindaugas\"\n        },\n        {\n            id: 5,\n            question: \"Kokia tai programavimo kalba? J*V*SC*I*T\",\n            answer: \"javascript\"\n        },\n        {\n            id: 6,\n            question: \"Jusu el. pastas\",\n            answer: \"\"\n        }\n    ];\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [answersArray, setAnswersArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showResult, setShowResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [started, setStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        answer.length < 3 ? setDisabled(true) : setDisabled(false);\n    }, [\n        answer\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const keyDownHandler = (event)=>{\n            if (event.key === \"Enter\" && answer.length > 2) {\n                event.preventDefault();\n                handleClick();\n            }\n        };\n        document.addEventListener(\"keydown\", keyDownHandler);\n        return ()=>{\n            document.removeEventListener(\"keydown\", keyDownHandler);\n        };\n    });\n    function getScore(arr) {\n        let score = 0;\n        for(let i = 0; i < arr.length; i++){\n            const userAnswer = arr[i];\n            if (typeof userAnswer === \"string\") {\n                var _questions_i_answer;\n                if (arr[i].toLowerCase() === ((_questions_i_answer = questions[i].answer) === null || _questions_i_answer === void 0 ? void 0 : _questions_i_answer.toLowerCase())) {\n                    score++;\n                }\n            }\n        }\n        if (arr[0].length > 1) {\n            score++;\n        }\n        if (arr[2].length > 1) {\n            score++;\n        }\n        if (arr[5].length > 1) {\n            score++;\n        }\n        return score;\n    }\n    const handleClick = ()=>{\n        if (currentQuestion < questions.length) {\n            setCurrentQuestion(currentQuestion + 1);\n            setAnswersArray([\n                ...answersArray,\n                answer\n            ]);\n            setAnswer(\"\");\n        } else {\n            // console.log(time);\n            const updatedAnswersArray = [\n                ...answersArray,\n                answer\n            ];\n            setAnswersArray(updatedAnswersArray);\n            setScore(getScore(updatedAnswersArray));\n            setShowResult(true);\n            setStarted(false);\n            setAnswer(\"\");\n        }\n    };\n    const handleClickStart = ()=>{\n        setTime(0);\n        setStarted(true);\n    };\n    // console.log(answersArray);\n    const handleChange = (event)=>{\n        setAnswer(event.target.value);\n    };\n    const pull_time = (time)=>{\n        setTime(time);\n    };\n    const handleClickFinishGame = ()=>{\n        setStarted(false);\n        setShowResult(false);\n        setCurrentQuestion(1);\n        setAnswersArray([]);\n    };\n    console.log(answersArray);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: (next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6___default().style),\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().nav),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().img),\n                    src: _public_vcs_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    alt: \"Vcs logo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: started ? (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().timer) : (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().hiddenTimer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    started: started,\n                    func: pull_time\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                children: [\n                    !started && showResult === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().resultsh1),\n                                    children: \"TOP 5 rezultatai\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 126,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 125,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClickStart,\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),\n                                children: \"PRADĖTI ŽAIDIMĄ\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    started && showResult === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().questionNumber),\n                                children: [\n                                    \"Klausimas Nr.\",\n                                    currentQuestion\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().question),\n                                children: (_questions_ = questions[currentQuestion - 1]) === null || _questions_ === void 0 ? void 0 : _questions_.question\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 138,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                style: (next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6___default().style),\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().input),\n                                type: \"text\",\n                                name: \"answer\",\n                                value: answer,\n                                onChange: handleChange,\n                                minLength: 3,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: (next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6___default().style),\n                                className: disabled ? (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().btndisabled) : (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),\n                                onClick: handleClick,\n                                disabled: disabled,\n                                children: \"Kitas klausimas\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 151,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    !started && showResult && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_results__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                email: answersArray[5],\n                                name: answersArray[0],\n                                lastname: answersArray[2],\n                                time: time,\n                                result: score\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 163,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClickFinishGame,\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),\n                                children: \"Baigti žaidimą\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 170,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"jUuybaAijU4BV58y0A+TJrEX1I4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQ3JCWTs7Ozs7OzswQ0FFaEIsOERBQUNrRDtnQ0FBR1YsV0FBV3BELGtFQUFlOzJDQUMzQlEsY0FBQUEsU0FBUyxDQUFDSSxrQkFBa0IsRUFBRSxjQUE5Qkosa0NBQUFBLFlBQWdDRSxRQUFROzs7Ozs7MENBRTNDLDhEQUFDMkQ7Z0NBQ0NsQixPQUFPcEQsd05BQWdCO2dDQUN2QnFELFdBQVdwRCwrREFBWTtnQ0FDdkJzRSxNQUFLO2dDQUNMQyxNQUFLO2dDQUNMMUIsT0FBT2xDO2dDQUNQNkQsVUFBVTdCO2dDQUNWOEIsV0FBVztnQ0FDWEMsUUFBUTs7Ozs7OzBDQUVWLDhEQUFDVjtnQ0FDQ2IsT0FBT3BELHdOQUFnQjtnQ0FDdkJxRCxXQUFXbkMsV0FBV2pCLHFFQUFrQixHQUFHQSw2REFBVTtnQ0FDckRpRSxTQUFTakM7Z0NBQ1RmLFVBQVVBOzBDQUNYOzs7Ozs7OztvQkFLSixDQUFDSSxXQUFXRiw0QkFDWDs7MENBQ0UsOERBQUNoQixnREFBTUE7Z0NBQ0x5RSxPQUFPN0QsWUFBWSxDQUFDLEVBQUU7Z0NBQ3RCd0QsTUFBTXhELFlBQVksQ0FBQyxFQUFFO2dDQUNyQjhELFVBQVU5RCxZQUFZLENBQUMsRUFBRTtnQ0FDekJRLE1BQU1BO2dDQUNOdUQsUUFBUXJEOzs7Ozs7MENBRVYsOERBQUN1QztnQ0FBT0MsU0FBU2xCO2dDQUF1QkssV0FBV3BELDZEQUFVOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEzRTtHQXBLd0JPO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZXN1bHQgZnJvbSBcIi4vcmVzdWx0c1wiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuL3RpbWVyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEJhcmxvd19TZW1pX0NvbmRlbnNlZCB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgdmNzTG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL3Zjcy5wbmdcIjtcbmNvbnN0IGJhcmxvd1NlbWkgPSBCYXJsb3dfU2VtaV9Db25kZW5zZWQoe1xuICBzdWJzZXRzOiBbXCJsYXRpblwiXSxcbiAgd2VpZ2h0OiBbXCIxMDBcIiwgXCIyMDBcIiwgXCIzMDBcIiwgXCI0MDBcIiwgXCI1MDBcIiwgXCI2MDBcIiwgXCI3MDBcIiwgXCI4MDBcIiwgXCI5MDBcIl0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgcXVlc3Rpb25zID0gW1xuICAgIHsgaWQ6IDEsIHF1ZXN0aW9uOiBcIkrFq3PFsyB2YXJkYXNcIiB9LFxuICAgIHsgaWQ6IDIsIHF1ZXN0aW9uOiBcIkxpZXR1dm9zIGlsZ2lhdXNpYSB1cMSXP1wiLCBhbnN3ZXI6IFwiTmVtdW5hc1wiIH0sXG4gICAgeyBpZDogMywgcXVlc3Rpb246IFwiSsWrc8WzIHBhdmFyZMSXXCIgfSxcbiAgICB7IGlkOiA0LCBxdWVzdGlvbjogXCJMaWV0dXZvcyB2aWVuaW50ZWxpcyBrYXJhbGl1cz9cIiwgYW5zd2VyOiBcIk1pbmRhdWdhc1wiIH0sXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICBxdWVzdGlvbjogXCJLb2tpYSB0YWkgcHJvZ3JhbWF2aW1vIGthbGJhPyBKKlYqU0MqSSpUXCIsXG4gICAgICBhbnN3ZXI6IFwiamF2YXNjcmlwdFwiLFxuICAgIH0sXG4gICAgeyBpZDogNiwgcXVlc3Rpb246IFwiSnVzdSBlbC4gcGFzdGFzXCIsIGFuc3dlcjogXCJcIiB9LFxuICBdO1xuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Fuc3dlcnNBcnJheSwgc2V0QW5zd2Vyc0FycmF5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3Nob3dSZXN1bHQsIHNldFNob3dSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3RhcnRlZCwgc2V0U3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYW5zd2VyLmxlbmd0aCA8IDMgPyBzZXREaXNhYmxlZCh0cnVlKSA6IHNldERpc2FibGVkKGZhbHNlKTtcbiAgfSwgW2Fuc3dlcl0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgYW5zd2VyLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBoYW5kbGVDbGljaygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlcik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIpO1xuICAgIH07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGdldFNjb3JlKGFycikge1xuICAgIGxldCBzY29yZSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHVzZXJBbnN3ZXIgPSBhcnJbaV07XG4gICAgICBpZiAodHlwZW9mIHVzZXJBbnN3ZXIgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKGFycltpXS50b0xvd2VyQ2FzZSgpID09PSBxdWVzdGlvbnNbaV0uYW5zd2VyPy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgc2NvcmUrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXJyWzBdLmxlbmd0aCA+IDEpIHtcbiAgICAgIHNjb3JlKys7XG4gICAgfVxuICAgIGlmIChhcnJbMl0ubGVuZ3RoID4gMSkge1xuICAgICAgc2NvcmUrKztcbiAgICB9XG4gICAgaWYgKGFycls1XS5sZW5ndGggPiAxKSB7XG4gICAgICBzY29yZSsrO1xuICAgIH1cbiAgICByZXR1cm4gc2NvcmU7XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFF1ZXN0aW9uIDwgcXVlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uKGN1cnJlbnRRdWVzdGlvbiArIDEpO1xuICAgICAgc2V0QW5zd2Vyc0FycmF5KFsuLi5hbnN3ZXJzQXJyYXksIGFuc3dlcl0pO1xuICAgICAgc2V0QW5zd2VyKFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aW1lKTtcbiAgICAgIGNvbnN0IHVwZGF0ZWRBbnN3ZXJzQXJyYXkgPSBbLi4uYW5zd2Vyc0FycmF5LCBhbnN3ZXJdO1xuICAgICAgc2V0QW5zd2Vyc0FycmF5KHVwZGF0ZWRBbnN3ZXJzQXJyYXkpO1xuICAgICAgc2V0U2NvcmUoZ2V0U2NvcmUodXBkYXRlZEFuc3dlcnNBcnJheSkpO1xuXG4gICAgICBzZXRTaG93UmVzdWx0KHRydWUpO1xuICAgICAgc2V0U3RhcnRlZChmYWxzZSk7XG4gICAgICBzZXRBbnN3ZXIoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrU3RhcnQgPSAoKSA9PiB7XG4gICAgc2V0VGltZSgwKTtcbiAgICBzZXRTdGFydGVkKHRydWUpO1xuICB9O1xuICAvLyBjb25zb2xlLmxvZyhhbnN3ZXJzQXJyYXkpO1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRBbnN3ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBwdWxsX3RpbWUgPSAodGltZSkgPT4ge1xuICAgIHNldFRpbWUodGltZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tGaW5pc2hHYW1lID0gKCkgPT4ge1xuICAgIHNldFN0YXJ0ZWQoZmFsc2UpO1xuICAgIHNldFNob3dSZXN1bHQoZmFsc2UpO1xuICAgIHNldEN1cnJlbnRRdWVzdGlvbigxKTtcbiAgICBzZXRBbnN3ZXJzQXJyYXkoW10pO1xuICB9O1xuICBjb25zb2xlLmxvZyhhbnN3ZXJzQXJyYXkpO1xuICByZXR1cm4gKFxuICAgIDxtYWluIHN0eWxlPXtiYXJsb3dTZW1pLnN0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gc3JjPXt2Y3NMb2dvfSBhbHQ9XCJWY3MgbG9nb1wiIC8+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdGFydGVkID8gc3R5bGVzLnRpbWVyIDogc3R5bGVzLmhpZGRlblRpbWVyfT5cbiAgICAgICAgPFRpbWVyIHN0YXJ0ZWQ9e3N0YXJ0ZWR9IGZ1bmM9e3B1bGxfdGltZX0+PC9UaW1lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICB7IXN0YXJ0ZWQgJiYgc2hvd1Jlc3VsdCA9PT0gZmFsc2UgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0c2gxfT5UT1AgNSByZXp1bHRhdGFpPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja1N0YXJ0fSBjbGFzc05hbWU9e3N0eWxlcy5idG59PlxuICAgICAgICAgICAgICBQUkFExJZUSSDFvUFJRElNxIRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7c3RhcnRlZCAmJiBzaG93UmVzdWx0ID09PSBmYWxzZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uTnVtYmVyfT5cbiAgICAgICAgICAgICAgS2xhdXNpbWFzIE5yLntjdXJyZW50UXVlc3Rpb259XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb259PlxuICAgICAgICAgICAgICB7cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbiAtIDFdPy5xdWVzdGlvbn1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgc3R5bGU9e2Jhcmxvd1NlbWkuc3R5bGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJhbnN3ZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBtaW5MZW5ndGg9ezN9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgc3R5bGU9e2Jhcmxvd1NlbWkuc3R5bGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17ZGlzYWJsZWQgPyBzdHlsZXMuYnRuZGlzYWJsZWQgOiBzdHlsZXMuYnRufVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBLaXRhcyBrbGF1c2ltYXNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7IXN0YXJ0ZWQgJiYgc2hvd1Jlc3VsdCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxSZXN1bHRcbiAgICAgICAgICAgICAgZW1haWw9e2Fuc3dlcnNBcnJheVs1XX1cbiAgICAgICAgICAgICAgbmFtZT17YW5zd2Vyc0FycmF5WzBdfVxuICAgICAgICAgICAgICBsYXN0bmFtZT17YW5zd2Vyc0FycmF5WzJdfVxuICAgICAgICAgICAgICB0aW1lPXt0aW1lfVxuICAgICAgICAgICAgICByZXN1bHQ9e3Njb3JlfVxuICAgICAgICAgICAgPjwvUmVzdWx0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0ZpbmlzaEdhbWV9IGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0+XG4gICAgICAgICAgICAgIEJhaWd0aSDFvmFpZGltxIVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImJhcmxvd1NlbWkiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlc3VsdCIsIlRpbWVyIiwiSW1hZ2UiLCJ2Y3NMb2dvIiwiSG9tZSIsInF1ZXN0aW9ucyIsImlkIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJjdXJyZW50UXVlc3Rpb24iLCJzZXRDdXJyZW50UXVlc3Rpb24iLCJzZXRBbnN3ZXIiLCJhbnN3ZXJzQXJyYXkiLCJzZXRBbnN3ZXJzQXJyYXkiLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwic2hvd1Jlc3VsdCIsInNldFNob3dSZXN1bHQiLCJzdGFydGVkIiwic2V0U3RhcnRlZCIsInRpbWUiLCJzZXRUaW1lIiwic2NvcmUiLCJzZXRTY29yZSIsImxlbmd0aCIsImtleURvd25IYW5kbGVyIiwiZXZlbnQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsaWNrIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldFNjb3JlIiwiYXJyIiwiaSIsInVzZXJBbnN3ZXIiLCJ0b0xvd2VyQ2FzZSIsInVwZGF0ZWRBbnN3ZXJzQXJyYXkiLCJoYW5kbGVDbGlja1N0YXJ0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJwdWxsX3RpbWUiLCJoYW5kbGVDbGlja0ZpbmlzaEdhbWUiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsInN0eWxlIiwiY2xhc3NOYW1lIiwibmF2IiwiaW1nIiwic3JjIiwiYWx0IiwiZGl2IiwidGltZXIiLCJoaWRkZW5UaW1lciIsImZ1bmMiLCJjb250YWluZXIiLCJoMSIsInJlc3VsdHNoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJidG4iLCJwIiwicXVlc3Rpb25OdW1iZXIiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwib25DaGFuZ2UiLCJtaW5MZW5ndGgiLCJyZXF1aXJlZCIsImJ0bmRpc2FibGVkIiwiZW1haWwiLCJsYXN0bmFtZSIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});