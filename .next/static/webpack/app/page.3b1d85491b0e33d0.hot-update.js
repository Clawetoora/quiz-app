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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\app\\\\page.js\",\"import\":\"Barlow_Semi_Condensed\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"]}],\"variableName\":\"barlowSemi\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\page.js\\\",\\\"import\\\":\\\"Barlow_Semi_Condensed\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"100\\\",\\\"200\\\",\\\"300\\\",\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\",\\\"800\\\",\\\"900\\\"]}],\\\"variableName\\\":\\\"barlowSemi\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results */ \"(app-pages-browser)/./src/app/results.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ \"(app-pages-browser)/./src/app/timer.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_vcs_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/vcs.png */ \"(app-pages-browser)/./public/vcs.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    var _questions_;\n    _s();\n    const questions = [\n        {\n            id: 1,\n            question: \"Jūsų vardas\"\n        },\n        {\n            id: 2,\n            question: \"Lietuvos ilgiausia upė?\",\n            answer: \"Nemunas\"\n        },\n        {\n            id: 3,\n            question: \"Jūsų pavardė\"\n        },\n        {\n            id: 4,\n            question: \"Lietuvos vienintelis karalius?\",\n            answer: \"Mindaugas\"\n        },\n        {\n            id: 5,\n            question: \"Kokia tai programavimo kalba? J*V*SC*I*T\",\n            answer: \"javascript\"\n        },\n        {\n            id: 6,\n            question: \"Jusu el. pastas\",\n            answer: \"\"\n        }\n    ];\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [answersArray, setAnswersArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showResult, setShowResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [started, setStarted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        answer.length < 3 ? setDisabled(true) : setDisabled(false);\n    }, [\n        answer\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const keyDownHandler = (event)=>{\n            if (event.key === \"Enter\" && answer.length > 2) {\n                event.preventDefault();\n                handleClick();\n            }\n        };\n        document.addEventListener(\"keydown\", keyDownHandler);\n        return ()=>{\n            document.removeEventListener(\"keydown\", keyDownHandler);\n        };\n    });\n    function getScore(arr) {\n        let score = 0;\n        for(let i = 0; i < arr.length; i++){\n            const userAnswer = arr[i];\n            if (typeof userAnswer === \"string\") {\n                var _questions_i_answer;\n                if (arr[i].toLowerCase() === ((_questions_i_answer = questions[i].answer) === null || _questions_i_answer === void 0 ? void 0 : _questions_i_answer.toLowerCase())) {\n                    score++;\n                }\n            }\n        }\n        if (arr[0].length > 1) {\n            score++;\n        }\n        if (arr[2].length > 1) {\n            score++;\n        }\n        if (arr[5].length > 1) {\n            score++;\n        }\n        return score;\n    }\n    const handleClick = ()=>{\n        if (currentQuestion < questions.length) {\n            setCurrentQuestion(currentQuestion + 1);\n            setAnswersArray([\n                ...answersArray,\n                answer\n            ]);\n            setAnswer(\"\");\n        } else {\n            console.log(time);\n            const updatedAnswersArray = [\n                ...answersArray,\n                answer,\n                time\n            ];\n            setAnswersArray(updatedAnswersArray);\n            setScore(getScore(updatedAnswersArray));\n            setShowResult(true);\n            setStarted(false);\n            setAnswer(\"\");\n        }\n    };\n    const handleClickStart = ()=>{\n        setTime(0);\n        setStarted(true);\n    };\n    // console.log(answersArray);\n    const handleChange = (event)=>{\n        setAnswer(event.target.value);\n    };\n    const pull_time = (time)=>{\n        setTime(time);\n    };\n    const handleClickFinishGame = ()=>{\n        setStarted(false);\n        setShowResult(false);\n        setCurrentQuestion(1);\n        setAnswersArray([]);\n    };\n    console.log(answersArray);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: (next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6___default().style),\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().nav),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().img),\n                    src: _public_vcs_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    alt: \"Vcs logo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: started ? (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().timer) : (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().hiddenTimer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    started: started,\n                    func: pull_time,\n                    showResult: showResult\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                children: [\n                    !started && showResult === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().resultsh1),\n                                    children: \"TOP 5 rezultatai\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClickStart,\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),\n                                children: \"PRADĖTI ŽAIDIMĄ\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    started && showResult === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().questionNumber),\n                                children: [\n                                    \"Klausimas Nr.\",\n                                    currentQuestion\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().question),\n                                children: (_questions_ = questions[currentQuestion - 1]) === null || _questions_ === void 0 ? void 0 : _questions_.question\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 142,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                style: (next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6___default().style),\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().input),\n                                type: \"text\",\n                                name: \"answer\",\n                                value: answer,\n                                onChange: handleChange,\n                                minLength: 3,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 145,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: (next_font_google_target_css_path_src_app_page_js_import_Barlow_Semi_Condensed_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variableName_barlowSemi___WEBPACK_IMPORTED_MODULE_6___default().style),\n                                className: disabled ? (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().btndisabled) : (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),\n                                onClick: handleClick,\n                                disabled: disabled,\n                                children: \"Kitas klausimas\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 155,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    !started && showResult && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_results__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                email: answersArray[5],\n                                name: answersArray[0],\n                                lastname: answersArray[2],\n                                time: time,\n                                result: score\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 167,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleClickFinishGame,\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn),\n                                children: \"Baigti žaidimą\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 174,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\REACTQUIZ\\\\quiz-app\\\\src\\\\app\\\\page.js\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"jUuybaAijU4BV58y0A+TJrEX1I4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDZ0Q7Z0NBQUVmLFdBQVdwRCx3RUFBcUI7O29DQUFFO29DQUNyQlk7Ozs7Ozs7MENBRWhCLDhEQUFDa0Q7Z0NBQUdWLFdBQVdwRCxrRUFBZTsyQ0FDM0JRLGNBQUFBLFNBQVMsQ0FBQ0ksa0JBQWtCLEVBQUUsY0FBOUJKLGtDQUFBQSxZQUFnQ0UsUUFBUTs7Ozs7OzBDQUUzQyw4REFBQzJEO2dDQUNDbEIsT0FBT3BELHdOQUFnQjtnQ0FDdkJxRCxXQUFXcEQsK0RBQVk7Z0NBQ3ZCc0UsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTHhCLE9BQU9wQztnQ0FDUDZELFVBQVUzQjtnQ0FDVjRCLFdBQVc7Z0NBQ1hDLFFBQVE7Ozs7OzswQ0FFViw4REFBQ1Y7Z0NBQ0NiLE9BQU9wRCx3TkFBZ0I7Z0NBQ3ZCcUQsV0FBV25DLFdBQVdqQixxRUFBa0IsR0FBR0EsNkRBQVU7Z0NBQ3JEaUUsU0FBU2pDO2dDQUNUZixVQUFVQTswQ0FDWDs7Ozs7Ozs7b0JBS0osQ0FBQ0ksV0FBV0YsNEJBQ1g7OzBDQUNFLDhEQUFDaEIsZ0RBQU1BO2dDQUNMeUUsT0FBTzdELFlBQVksQ0FBQyxFQUFFO2dDQUN0QndELE1BQU14RCxZQUFZLENBQUMsRUFBRTtnQ0FDckI4RCxVQUFVOUQsWUFBWSxDQUFDLEVBQUU7Z0NBQ3pCUSxNQUFNQTtnQ0FDTnVELFFBQVFyRDs7Ozs7OzBDQUVWLDhEQUFDdUM7Z0NBQU9DLFNBQVNoQjtnQ0FBdUJHLFdBQVdwRCw2REFBVTswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRM0U7R0F4S3dCTztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVzdWx0IGZyb20gXCIuL3Jlc3VsdHNcIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBCYXJsb3dfU2VtaV9Db25kZW5zZWQgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHZjc0xvZ28gZnJvbSBcIi4uLy4uL3B1YmxpYy92Y3MucG5nXCI7XG5jb25zdCBiYXJsb3dTZW1pID0gQmFybG93X1NlbWlfQ29uZGVuc2VkKHtcbiAgc3Vic2V0czogW1wibGF0aW5cIl0sXG4gIHdlaWdodDogW1wiMTAwXCIsIFwiMjAwXCIsIFwiMzAwXCIsIFwiNDAwXCIsIFwiNTAwXCIsIFwiNjAwXCIsIFwiNzAwXCIsIFwiODAwXCIsIFwiOTAwXCJdLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHF1ZXN0aW9ucyA9IFtcbiAgICB7IGlkOiAxLCBxdWVzdGlvbjogXCJKxatzxbMgdmFyZGFzXCIgfSxcbiAgICB7IGlkOiAyLCBxdWVzdGlvbjogXCJMaWV0dXZvcyBpbGdpYXVzaWEgdXDElz9cIiwgYW5zd2VyOiBcIk5lbXVuYXNcIiB9LFxuICAgIHsgaWQ6IDMsIHF1ZXN0aW9uOiBcIkrFq3PFsyBwYXZhcmTEl1wiIH0sXG4gICAgeyBpZDogNCwgcXVlc3Rpb246IFwiTGlldHV2b3MgdmllbmludGVsaXMga2FyYWxpdXM/XCIsIGFuc3dlcjogXCJNaW5kYXVnYXNcIiB9LFxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgcXVlc3Rpb246IFwiS29raWEgdGFpIHByb2dyYW1hdmltbyBrYWxiYT8gSipWKlNDKkkqVFwiLFxuICAgICAgYW5zd2VyOiBcImphdmFzY3JpcHRcIixcbiAgICB9LFxuICAgIHsgaWQ6IDYsIHF1ZXN0aW9uOiBcIkp1c3UgZWwuIHBhc3Rhc1wiLCBhbnN3ZXI6IFwiXCIgfSxcbiAgXTtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthbnN3ZXJzQXJyYXksIHNldEFuc3dlcnNBcnJheV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzaG93UmVzdWx0LCBzZXRTaG93UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXJ0ZWQsIHNldFN0YXJ0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFuc3dlci5sZW5ndGggPCAzID8gc2V0RGlzYWJsZWQodHJ1ZSkgOiBzZXREaXNhYmxlZChmYWxzZSk7XG4gIH0sIFthbnN3ZXJdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBrZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIGFuc3dlci5sZW5ndGggPiAyKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaGFuZGxlQ2xpY2soKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyKTtcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiBnZXRTY29yZShhcnIpIHtcbiAgICBsZXQgc2NvcmUgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB1c2VyQW5zd2VyID0gYXJyW2ldO1xuICAgICAgaWYgKHR5cGVvZiB1c2VyQW5zd2VyID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChhcnJbaV0udG9Mb3dlckNhc2UoKSA9PT0gcXVlc3Rpb25zW2ldLmFuc3dlcj8udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIHNjb3JlKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFyclswXS5sZW5ndGggPiAxKSB7XG4gICAgICBzY29yZSsrO1xuICAgIH1cbiAgICBpZiAoYXJyWzJdLmxlbmd0aCA+IDEpIHtcbiAgICAgIHNjb3JlKys7XG4gICAgfVxuICAgIGlmIChhcnJbNV0ubGVuZ3RoID4gMSkge1xuICAgICAgc2NvcmUrKztcbiAgICB9XG4gICAgcmV0dXJuIHNjb3JlO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRRdWVzdGlvbiA8IHF1ZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHNldEN1cnJlbnRRdWVzdGlvbihjdXJyZW50UXVlc3Rpb24gKyAxKTtcbiAgICAgIHNldEFuc3dlcnNBcnJheShbLi4uYW5zd2Vyc0FycmF5LCBhbnN3ZXJdKTtcbiAgICAgIHNldEFuc3dlcihcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2codGltZSk7XG4gICAgICBjb25zdCB1cGRhdGVkQW5zd2Vyc0FycmF5ID0gWy4uLmFuc3dlcnNBcnJheSwgYW5zd2VyLCB0aW1lXTtcbiAgICAgIHNldEFuc3dlcnNBcnJheSh1cGRhdGVkQW5zd2Vyc0FycmF5KTtcbiAgICAgIHNldFNjb3JlKGdldFNjb3JlKHVwZGF0ZWRBbnN3ZXJzQXJyYXkpKTtcblxuICAgICAgc2V0U2hvd1Jlc3VsdCh0cnVlKTtcbiAgICAgIHNldFN0YXJ0ZWQoZmFsc2UpO1xuICAgICAgc2V0QW5zd2VyKFwiXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGlja1N0YXJ0ID0gKCkgPT4ge1xuICAgIHNldFRpbWUoMCk7XG4gICAgc2V0U3RhcnRlZCh0cnVlKTtcbiAgfTtcbiAgLy8gY29uc29sZS5sb2coYW5zd2Vyc0FycmF5KTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QW5zd2VyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgcHVsbF90aW1lID0gKHRpbWUpID0+IHtcbiAgICBzZXRUaW1lKHRpbWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrRmluaXNoR2FtZSA9ICgpID0+IHtcbiAgICBzZXRTdGFydGVkKGZhbHNlKTtcbiAgICBzZXRTaG93UmVzdWx0KGZhbHNlKTtcbiAgICBzZXRDdXJyZW50UXVlc3Rpb24oMSk7XG4gICAgc2V0QW5zd2Vyc0FycmF5KFtdKTtcbiAgfTtcbiAgY29uc29sZS5sb2coYW5zd2Vyc0FycmF5KTtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17YmFybG93U2VtaS5zdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IHNyYz17dmNzTG9nb30gYWx0PVwiVmNzIGxvZ29cIiAvPlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3RhcnRlZCA/IHN0eWxlcy50aW1lciA6IHN0eWxlcy5oaWRkZW5UaW1lcn0+XG4gICAgICAgIDxUaW1lclxuICAgICAgICAgIHN0YXJ0ZWQ9e3N0YXJ0ZWR9XG4gICAgICAgICAgZnVuYz17cHVsbF90aW1lfVxuICAgICAgICAgIHNob3dSZXN1bHQ9e3Nob3dSZXN1bHR9XG4gICAgICAgID48L1RpbWVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIHshc3RhcnRlZCAmJiBzaG93UmVzdWx0ID09PSBmYWxzZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHRzaDF9PlRPUCA1IHJlenVsdGF0YWk8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU3RhcnR9IGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0+XG4gICAgICAgICAgICAgIFBSQUTEllRJIMW9QUlESU3EhFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzdGFydGVkICYmIHNob3dSZXN1bHQgPT09IGZhbHNlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25OdW1iZXJ9PlxuICAgICAgICAgICAgICBLbGF1c2ltYXMgTnIue2N1cnJlbnRRdWVzdGlvbn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbn0+XG4gICAgICAgICAgICAgIHtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uIC0gMV0/LnF1ZXN0aW9ufVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBzdHlsZT17YmFybG93U2VtaS5zdHlsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImFuc3dlclwiXG4gICAgICAgICAgICAgIHZhbHVlPXthbnN3ZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG1pbkxlbmd0aD17M31cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBzdHlsZT17YmFybG93U2VtaS5zdHlsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtkaXNhYmxlZCA/IHN0eWxlcy5idG5kaXNhYmxlZCA6IHN0eWxlcy5idG59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEtpdGFzIGtsYXVzaW1hc1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHshc3RhcnRlZCAmJiBzaG93UmVzdWx0ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFJlc3VsdFxuICAgICAgICAgICAgICBlbWFpbD17YW5zd2Vyc0FycmF5WzVdfVxuICAgICAgICAgICAgICBuYW1lPXthbnN3ZXJzQXJyYXlbMF19XG4gICAgICAgICAgICAgIGxhc3RuYW1lPXthbnN3ZXJzQXJyYXlbMl19XG4gICAgICAgICAgICAgIHRpbWU9e3RpbWV9XG4gICAgICAgICAgICAgIHJlc3VsdD17c2NvcmV9XG4gICAgICAgICAgICA+PC9SZXN1bHQ+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrRmluaXNoR2FtZX0gY2xhc3NOYW1lPXtzdHlsZXMuYnRufT5cbiAgICAgICAgICAgICAgQmFpZ3RpIMW+YWlkaW3EhVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiYmFybG93U2VtaSIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVzdWx0IiwiVGltZXIiLCJJbWFnZSIsInZjc0xvZ28iLCJIb21lIiwicXVlc3Rpb25zIiwiaWQiLCJxdWVzdGlvbiIsImFuc3dlciIsImN1cnJlbnRRdWVzdGlvbiIsInNldEN1cnJlbnRRdWVzdGlvbiIsInNldEFuc3dlciIsImFuc3dlcnNBcnJheSIsInNldEFuc3dlcnNBcnJheSIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJzaG93UmVzdWx0Iiwic2V0U2hvd1Jlc3VsdCIsInN0YXJ0ZWQiLCJzZXRTdGFydGVkIiwidGltZSIsInNldFRpbWUiLCJzY29yZSIsInNldFNjb3JlIiwibGVuZ3RoIiwia2V5RG93bkhhbmRsZXIiLCJldmVudCIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xpY2siLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0U2NvcmUiLCJhcnIiLCJpIiwidXNlckFuc3dlciIsInRvTG93ZXJDYXNlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZWRBbnN3ZXJzQXJyYXkiLCJoYW5kbGVDbGlja1N0YXJ0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJwdWxsX3RpbWUiLCJoYW5kbGVDbGlja0ZpbmlzaEdhbWUiLCJtYWluIiwic3R5bGUiLCJjbGFzc05hbWUiLCJuYXYiLCJpbWciLCJzcmMiLCJhbHQiLCJkaXYiLCJ0aW1lciIsImhpZGRlblRpbWVyIiwiZnVuYyIsImNvbnRhaW5lciIsImgxIiwicmVzdWx0c2gxIiwiYnV0dG9uIiwib25DbGljayIsImJ0biIsInAiLCJxdWVzdGlvbk51bWJlciIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJvbkNoYW5nZSIsIm1pbkxlbmd0aCIsInJlcXVpcmVkIiwiYnRuZGlzYWJsZWQiLCJlbWFpbCIsImxhc3RuYW1lIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});