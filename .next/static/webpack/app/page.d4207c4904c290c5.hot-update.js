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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\app\\\\page.js\",\"import\":\"Barlow_Semi_Condensed\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"]}],\"variableName\":\"barlowSemi\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\page.js\\\",\\\"import\\\":\\\"Barlow_Semi_Condensed\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"100\\\",\\\"200\\\",\\\"300\\\",\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\",\\\"800\\\",\\\"900\\\"]}],\\\"variableName\\\":\\\"barlowSemi\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results */ \"(app-pages-browser)/./src/app/results.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ \"(app-pages-browser)/./src/app/timer.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_vcs_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/vcs.png */ \"(app-pages-browser)/./public/vcs.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    var _questions_;\n    _s();\n    const questions = [\n        {\n            id: 1,\n            question: \"Jūsų vardas\"\n        },\n        {\n            id: 2,\n            question: \"Lietuvos ilgiausia upė?\",\n            answer: \"Nemunas\"\n        },\n        {\n            id: 3,\n            question: \"Jūsų pavardė\"\n        },\n        {\n            id: 4,\n            question: \"Lietuvos vienintelis karalius?\",\n            answer: \"Mindaugas\"\n        },\n        {\n            id: 5,\n            question: \"Kokia tai programavimo kalba? J*V*SC*I*T\",\n            answer: \"javascript\"\n        },\n        {\n            id: 6,\n            question: \"Jusu el. pastas\",\n            answer: \"\"\n        }\n    ];\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [answersArray, setAnswersArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showResult, setShowResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [started, setStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        answer.length < 3 ? setDisabled(true) : setDisabled(false);\n    }, [\n        answer\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const keyDownHandler = (event)=>{\n            if (event.key === \"Enter\" && answer.length > 2) {\n                event.preventDefault();\n                handleClick();\n            }\n        };\n        document.addEventListener(\"keydown\", keyDownHandler);\n        return ()=>{\n            document.removeEventListener(\"keydown\", keyDownHandler);\n        };\n    });\n    function getScore(arr) {\n        let score = 0;\n        for(let i = 0; i < arr.length; i++){\n            const userAnswer = arr[i];\n            if (typeof userAnswer === \"string\") {\n                var _questions_i_answer;\n                if (arr[i].toLowerCase() === ((_questions_i_answer = questions[i].answer) === null || _questions_i_answer === void 0 ? void 0 : _questions_i_answer.toLowerCase())) {\n                    score++;\n                }\n            }\n        }\n        if (arr[0].length > 1) {\n            score++;\n        }\n        if (arr[2].length > 1) {\n            score++;\n        }\n        if (arr[5].length > 1) {\n            score++;\n        }\n        return score;\n    }\n    const handleClick = ()=>{\n        if (currentQuestion < questions.length) {\n            setCurrentQuestion(currentQuestion + 1);\n            setAnswersArray([\n                ...answersArray,\n                answer\n            ]);\n            setAnswer(\"\");\n        } else {\n            console.log(time);\n            const updatedAnswersArray = [\n                ...answersArray,\n                answer,\n                time\n            ];\n            setAnswersArray(updatedAnswersArray);\n            setScore(getScore(updatedAnswersArray));\n            setShowResult(true);\n            setStarted(false);\n            setAnswer(\"\");\n        }\n    };\n    const handleClickStart = ()=>{\n        setTime(0);\n        setStarted(true);\n    };\n    // console.log(answersArray);\n    const handleChange = (event)=>{\n        setAnswer(event.target.value);\n    };\n    const pull_time = (time)=>{\n        setTime(time, ()=>{\n            handleClick();\n        });\n    };\n    const handleClickFinishGame = ()=>{\n        setStarted(false);\n        setShowResult(false);\n        setCurrentQuestion(1);\n        setAnswersArray([]);\n    };\n    console.log(answersArray);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: (next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6___default().style),\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().nav),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().img),\n                    src: _public_vcs_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    alt: \"Vcs logo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: started ? (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().timer) : (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().hiddenTimer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    started: started,\n                    func: pull_time\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                children: [\n                    !started && showResult === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().resultsh1),\n                                    children: \"TOP 5 rezultatai\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClickStart,\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),\n                                children: \"PRADĖTI ŽAIDIMĄ\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    started && showResult === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().questionNumber),\n                                children: [\n                                    \"Klausimas Nr.\",\n                                    currentQuestion\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().question),\n                                children: (_questions_ = questions[currentQuestion - 1]) === null || _questions_ === void 0 ? void 0 : _questions_.question\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 140,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                style: (next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6___default().style),\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().input),\n                                type: \"text\",\n                                name: \"answer\",\n                                value: answer,\n                                onChange: handleChange,\n                                minLength: 3,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 143,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: (next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6___default().style),\n                                className: disabled ? (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().btndisabled) : (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),\n                                onClick: handleClick,\n                                disabled: disabled,\n                                children: \"Kitas klausimas\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 153,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    !started && showResult && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_results__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                email: answersArray[5],\n                                name: answersArray[0],\n                                lastname: answersArray[2],\n                                time: time,\n                                result: score\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 165,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClickFinishGame,\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),\n                                children: \"Baigti žaidimą\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 172,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"jUuybaAijU4BV58y0A+TJrEX1I4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSw4REFBQ2dEO2dDQUFFZixXQUFXcEQsd0VBQXFCOztvQ0FBRTtvQ0FDckJZOzs7Ozs7OzBDQUVoQiw4REFBQ2tEO2dDQUFHVixXQUFXcEQsa0VBQWU7MkNBQzNCUSxjQUFBQSxTQUFTLENBQUNJLGtCQUFrQixFQUFFLGNBQTlCSixrQ0FBQUEsWUFBZ0NFLFFBQVE7Ozs7OzswQ0FFM0MsOERBQUMyRDtnQ0FDQ2xCLE9BQU9wRCx3TkFBZ0I7Z0NBQ3ZCcUQsV0FBV3BELCtEQUFZO2dDQUN2QnNFLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0x4QixPQUFPcEM7Z0NBQ1A2RCxVQUFVM0I7Z0NBQ1Y0QixXQUFXO2dDQUNYQyxRQUFROzs7Ozs7MENBRVYsOERBQUNWO2dDQUNDYixPQUFPcEQsd05BQWdCO2dDQUN2QnFELFdBQVduQyxXQUFXakIscUVBQWtCLEdBQUdBLDZEQUFVO2dDQUNyRGlFLFNBQVNqQztnQ0FDVGYsVUFBVUE7MENBQ1g7Ozs7Ozs7O29CQUtKLENBQUNJLFdBQVdGLDRCQUNYOzswQ0FDRSw4REFBQ2hCLGdEQUFNQTtnQ0FDTHlFLE9BQU83RCxZQUFZLENBQUMsRUFBRTtnQ0FDdEJ3RCxNQUFNeEQsWUFBWSxDQUFDLEVBQUU7Z0NBQ3JCOEQsVUFBVTlELFlBQVksQ0FBQyxFQUFFO2dDQUN6QlEsTUFBTUE7Z0NBQ051RCxRQUFRckQ7Ozs7OzswQ0FFViw4REFBQ3VDO2dDQUFPQyxTQUFTaEI7Z0NBQXVCRyxXQUFXcEQsNkRBQVU7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTNFO0dBdEt3Qk87S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlc3VsdCBmcm9tIFwiLi9yZXN1bHRzXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vdGltZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQmFybG93X1NlbWlfQ29uZGVuc2VkIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCB2Y3NMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvdmNzLnBuZ1wiO1xuY29uc3QgYmFybG93U2VtaSA9IEJhcmxvd19TZW1pX0NvbmRlbnNlZCh7XG4gIHN1YnNldHM6IFtcImxhdGluXCJdLFxuICB3ZWlnaHQ6IFtcIjEwMFwiLCBcIjIwMFwiLCBcIjMwMFwiLCBcIjQwMFwiLCBcIjUwMFwiLCBcIjYwMFwiLCBcIjcwMFwiLCBcIjgwMFwiLCBcIjkwMFwiXSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBxdWVzdGlvbnMgPSBbXG4gICAgeyBpZDogMSwgcXVlc3Rpb246IFwiSsWrc8WzIHZhcmRhc1wiIH0sXG4gICAgeyBpZDogMiwgcXVlc3Rpb246IFwiTGlldHV2b3MgaWxnaWF1c2lhIHVwxJc/XCIsIGFuc3dlcjogXCJOZW11bmFzXCIgfSxcbiAgICB7IGlkOiAzLCBxdWVzdGlvbjogXCJKxatzxbMgcGF2YXJkxJdcIiB9LFxuICAgIHsgaWQ6IDQsIHF1ZXN0aW9uOiBcIkxpZXR1dm9zIHZpZW5pbnRlbGlzIGthcmFsaXVzP1wiLCBhbnN3ZXI6IFwiTWluZGF1Z2FzXCIgfSxcbiAgICB7XG4gICAgICBpZDogNSxcbiAgICAgIHF1ZXN0aW9uOiBcIktva2lhIHRhaSBwcm9ncmFtYXZpbW8ga2FsYmE/IEoqVipTQypJKlRcIixcbiAgICAgIGFuc3dlcjogXCJqYXZhc2NyaXB0XCIsXG4gICAgfSxcbiAgICB7IGlkOiA2LCBxdWVzdGlvbjogXCJKdXN1IGVsLiBwYXN0YXNcIiwgYW5zd2VyOiBcIlwiIH0sXG4gIF07XG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb24sIHNldEN1cnJlbnRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYW5zd2Vyc0FycmF5LCBzZXRBbnN3ZXJzQXJyYXldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2hvd1Jlc3VsdCwgc2V0U2hvd1Jlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGFydGVkLCBzZXRTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhbnN3ZXIubGVuZ3RoIDwgMyA/IHNldERpc2FibGVkKHRydWUpIDogc2V0RGlzYWJsZWQoZmFsc2UpO1xuICB9LCBbYW5zd2VyXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJiBhbnN3ZXIubGVuZ3RoID4gMikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGhhbmRsZUNsaWNrKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlcik7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0U2NvcmUoYXJyKSB7XG4gICAgbGV0IHNjb3JlID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdXNlckFuc3dlciA9IGFycltpXTtcbiAgICAgIGlmICh0eXBlb2YgdXNlckFuc3dlciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoYXJyW2ldLnRvTG93ZXJDYXNlKCkgPT09IHF1ZXN0aW9uc1tpXS5hbnN3ZXI/LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICBzY29yZSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcnJbMF0ubGVuZ3RoID4gMSkge1xuICAgICAgc2NvcmUrKztcbiAgICB9XG4gICAgaWYgKGFyclsyXS5sZW5ndGggPiAxKSB7XG4gICAgICBzY29yZSsrO1xuICAgIH1cbiAgICBpZiAoYXJyWzVdLmxlbmd0aCA+IDEpIHtcbiAgICAgIHNjb3JlKys7XG4gICAgfVxuICAgIHJldHVybiBzY29yZTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50UXVlc3Rpb24gPCBxdWVzdGlvbnMubGVuZ3RoKSB7XG4gICAgICBzZXRDdXJyZW50UXVlc3Rpb24oY3VycmVudFF1ZXN0aW9uICsgMSk7XG4gICAgICBzZXRBbnN3ZXJzQXJyYXkoWy4uLmFuc3dlcnNBcnJheSwgYW5zd2VyXSk7XG4gICAgICBzZXRBbnN3ZXIoXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKHRpbWUpO1xuICAgICAgY29uc3QgdXBkYXRlZEFuc3dlcnNBcnJheSA9IFsuLi5hbnN3ZXJzQXJyYXksIGFuc3dlciwgdGltZV07XG4gICAgICBzZXRBbnN3ZXJzQXJyYXkodXBkYXRlZEFuc3dlcnNBcnJheSk7XG4gICAgICBzZXRTY29yZShnZXRTY29yZSh1cGRhdGVkQW5zd2Vyc0FycmF5KSk7XG5cbiAgICAgIHNldFNob3dSZXN1bHQodHJ1ZSk7XG4gICAgICBzZXRTdGFydGVkKGZhbHNlKTtcbiAgICAgIHNldEFuc3dlcihcIlwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tTdGFydCA9ICgpID0+IHtcbiAgICBzZXRUaW1lKDApO1xuICAgIHNldFN0YXJ0ZWQodHJ1ZSk7XG4gIH07XG4gIC8vIGNvbnNvbGUubG9nKGFuc3dlcnNBcnJheSk7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldEFuc3dlcihldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IHB1bGxfdGltZSA9ICh0aW1lKSA9PiB7XG4gICAgc2V0VGltZSh0aW1lLCAoKSA9PiB7XG4gICAgICBoYW5kbGVDbGljaygpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrRmluaXNoR2FtZSA9ICgpID0+IHtcbiAgICBzZXRTdGFydGVkKGZhbHNlKTtcbiAgICBzZXRTaG93UmVzdWx0KGZhbHNlKTtcbiAgICBzZXRDdXJyZW50UXVlc3Rpb24oMSk7XG4gICAgc2V0QW5zd2Vyc0FycmF5KFtdKTtcbiAgfTtcbiAgY29uc29sZS5sb2coYW5zd2Vyc0FycmF5KTtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17YmFybG93U2VtaS5zdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IHNyYz17dmNzTG9nb30gYWx0PVwiVmNzIGxvZ29cIiAvPlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3RhcnRlZCA/IHN0eWxlcy50aW1lciA6IHN0eWxlcy5oaWRkZW5UaW1lcn0+XG4gICAgICAgIDxUaW1lciBzdGFydGVkPXtzdGFydGVkfSBmdW5jPXtwdWxsX3RpbWV9PjwvVGltZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgeyFzdGFydGVkICYmIHNob3dSZXN1bHQgPT09IGZhbHNlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdHNoMX0+VE9QIDUgcmV6dWx0YXRhaTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tTdGFydH0gY2xhc3NOYW1lPXtzdHlsZXMuYnRufT5cbiAgICAgICAgICAgICAgUFJBRMSWVEkgxb1BSURJTcSEXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge3N0YXJ0ZWQgJiYgc2hvd1Jlc3VsdCA9PT0gZmFsc2UgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbk51bWJlcn0+XG4gICAgICAgICAgICAgIEtsYXVzaW1hcyBOci57Y3VycmVudFF1ZXN0aW9ufVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9ufT5cbiAgICAgICAgICAgICAge3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb24gLSAxXT8ucXVlc3Rpb259XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHN0eWxlPXtiYXJsb3dTZW1pLnN0eWxlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYW5zd2VyXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgbWluTGVuZ3RoPXszfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHN0eWxlPXtiYXJsb3dTZW1pLnN0eWxlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Rpc2FibGVkID8gc3R5bGVzLmJ0bmRpc2FibGVkIDogc3R5bGVzLmJ0bn1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgS2l0YXMga2xhdXNpbWFzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFzdGFydGVkICYmIHNob3dSZXN1bHQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8UmVzdWx0XG4gICAgICAgICAgICAgIGVtYWlsPXthbnN3ZXJzQXJyYXlbNV19XG4gICAgICAgICAgICAgIG5hbWU9e2Fuc3dlcnNBcnJheVswXX1cbiAgICAgICAgICAgICAgbGFzdG5hbWU9e2Fuc3dlcnNBcnJheVsyXX1cbiAgICAgICAgICAgICAgdGltZT17dGltZX1cbiAgICAgICAgICAgICAgcmVzdWx0PXtzY29yZX1cbiAgICAgICAgICAgID48L1Jlc3VsdD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tGaW5pc2hHYW1lfSBjbGFzc05hbWU9e3N0eWxlcy5idG59PlxuICAgICAgICAgICAgICBCYWlndGkgxb5haWRpbcSFXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJiYXJsb3dTZW1pIiwic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZXN1bHQiLCJUaW1lciIsIkltYWdlIiwidmNzTG9nbyIsIkhvbWUiLCJxdWVzdGlvbnMiLCJpZCIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwic2V0QW5zd2VyIiwiYW5zd2Vyc0FycmF5Iiwic2V0QW5zd2Vyc0FycmF5IiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsInNob3dSZXN1bHQiLCJzZXRTaG93UmVzdWx0Iiwic3RhcnRlZCIsInNldFN0YXJ0ZWQiLCJ0aW1lIiwic2V0VGltZSIsInNjb3JlIiwic2V0U2NvcmUiLCJsZW5ndGgiLCJrZXlEb3duSGFuZGxlciIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbGljayIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRTY29yZSIsImFyciIsImkiLCJ1c2VyQW5zd2VyIiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlZEFuc3dlcnNBcnJheSIsImhhbmRsZUNsaWNrU3RhcnQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1bGxfdGltZSIsImhhbmRsZUNsaWNrRmluaXNoR2FtZSIsIm1haW4iLCJzdHlsZSIsImNsYXNzTmFtZSIsIm5hdiIsImltZyIsInNyYyIsImFsdCIsImRpdiIsInRpbWVyIiwiaGlkZGVuVGltZXIiLCJmdW5jIiwiY29udGFpbmVyIiwiaDEiLCJyZXN1bHRzaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiYnRuIiwicCIsInF1ZXN0aW9uTnVtYmVyIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIiwibWluTGVuZ3RoIiwicmVxdWlyZWQiLCJidG5kaXNhYmxlZCIsImVtYWlsIiwibGFzdG5hbWUiLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});