"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/components/AnimateText.js":
/*!***************************************!*\
  !*** ./src/components/AnimateText.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst quote = {\n    initial: {\n        opacity: 0\n    },\n    animate: {\n        opacity: 1,\n        transition: {\n            delay: 0.5,\n            staggerChildren: 0.08\n        }\n    }\n};\nconst singleWord = {\n    initial: {\n        opacity: 0,\n        y: 50\n    },\n    animate: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1\n        }\n    }\n};\nconst AnimateText = (param)=>{\n    let { text , className  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-auto py-2 mx-auto items-center justify center text-center overflow-hiddden \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {\n            className: \" inline-block w-full text-dark font-bold capitalize text-8xl \".concat(className),\n            variants: quote,\n            initial: \"initial\",\n            animate: \"animate\",\n            children: text.split(\" \").map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    className: \"inline-block\",\n                    variants: singleWord,\n                    children: [\n                        word,\n                        \"\\xa0\"\n                    ]\n                }, word + \"-\" + index, true, {\n                    fileName: \"/Users/mishdgr8/Web Development/nextProject/NextPortfolio/src/components/AnimateText.js\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/mishdgr8/Web Development/nextProject/NextPortfolio/src/components/AnimateText.js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mishdgr8/Web Development/nextProject/NextPortfolio/src/components/AnimateText.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AnimateText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimateText);\nvar _c;\n$RefreshReg$(_c, \"AnimateText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlVGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ2E7QUFFdkMsTUFBTUUsUUFBUTtJQUNaQyxTQUFTO1FBQ1BDLFNBQVM7SUFDWDtJQUNBQyxTQUFTO1FBQ1BELFNBQVM7UUFDVEUsWUFBWTtZQUNWQyxPQUFPO1lBQ1BDLGlCQUFpQjtRQUNuQjtJQUNGO0FBQ0Y7QUFFQSxNQUFNQyxhQUFhO0lBQ2pCTixTQUFTO1FBQ1BDLFNBQVM7UUFDVE0sR0FBRztJQUNMO0lBQ0FMLFNBQVM7UUFDUEQsU0FBUztRQUNUTSxHQUFHO1FBQ0hKLFlBQVk7WUFDVkssVUFBVTtRQUNaO0lBQ0Y7QUFDRjtBQUVBLE1BQU1DLGNBQWMsU0FBeUI7UUFBeEIsRUFBRUMsS0FBSSxFQUFFQyxVQUFTLEVBQUU7SUFDdEMscUJBQ0UsOERBQUNDO1FBQ0NELFdBQVU7a0JBR1YsNEVBQUNiLG9EQUFTO1lBQ1JhLFdBQVcsZ0VBQTBFLE9BQVZBO1lBQzNFRyxVQUFVZjtZQUNWQyxTQUFRO1lBQ1JFLFNBQVE7c0JBRVBRLEtBQUtLLEtBQUssQ0FBQyxLQUFLQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQzFCLDhEQUFDcEIsc0RBQVc7b0JBRVZhLFdBQVU7b0JBQ1ZHLFVBQVVSOzt3QkFFVFc7d0JBQUs7O21CQUpEQSxPQUFPLE1BQU1DOzs7Ozs7Ozs7Ozs7Ozs7QUFVOUI7S0F4Qk1UO0FBMEJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVUZXh0LmpzP2I5YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgcXVvdGUgPSB7XG4gIGluaXRpYWw6IHtcbiAgICBvcGFjaXR5OiAwLFxuICB9LFxuICBhbmltYXRlOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkZWxheTogMC41LFxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjA4LFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBzaW5nbGVXb3JkID0ge1xuICBpbml0aWFsOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB5OiA1MCxcbiAgfSxcbiAgYW5pbWF0ZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgeTogMCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMSxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgQW5pbWF0ZVRleHQgPSAoeyB0ZXh0LCBjbGFzc05hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInctYXV0byBweS0yIG14LWF1dG8gaXRlbXMtY2VudGVyIGp1c3RpZnkgY2VudGVyIHRleHQtY2VudGVyXG4gICAgb3ZlcmZsb3ctaGlkZGRlbiBcIlxuICAgID5cbiAgICAgIDxtb3Rpb24uaDFcbiAgICAgICAgY2xhc3NOYW1lPXtgIGlubGluZS1ibG9jayB3LWZ1bGwgdGV4dC1kYXJrIGZvbnQtYm9sZCBjYXBpdGFsaXplIHRleHQtOHhsICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHZhcmlhbnRzPXtxdW90ZX1cbiAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICA+XG4gICAgICAgIHt0ZXh0LnNwbGl0KFwiIFwiKS5tYXAoKHdvcmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICBrZXk9e3dvcmQgKyBcIi1cIiArIGluZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtzaW5nbGVXb3JkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt3b3JkfSZuYnNwO1xuICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICkpfVxuICAgICAgPC9tb3Rpb24uaDE+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlVGV4dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsInF1b3RlIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5Iiwic3RhZ2dlckNoaWxkcmVuIiwic2luZ2xlV29yZCIsInkiLCJkdXJhdGlvbiIsIkFuaW1hdGVUZXh0IiwidGV4dCIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwidmFyaWFudHMiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJpbmRleCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AnimateText.js\n"));

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimateText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimateText */ \"./src/components/AnimateText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst About = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Head, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Abiut Me | My Work\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mishdgr8/Web Development/nextProject/NextPortfolio/src/pages/about.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"Description\",\n                        content: \"description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mishdgr8/Web Development/nextProject/NextPortfolio/src/pages/about.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mishdgr8/Web Development/nextProject/NextPortfolio/src/pages/about.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimateText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: \"Passion Fuels Productivity\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mishdgr8/Web Development/nextProject/NextPortfolio/src/pages/about.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mishdgr8/Web Development/nextProject/NextPortfolio/src/pages/about.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mishdgr8/Web Development/nextProject/NextPortfolio/src/pages/about.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"about\"\n            }, void 0, false, {\n                fileName: \"/Users/mishdgr8/Web Development/nextProject/NextPortfolio/src/pages/about.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDVjtBQUNmO0FBRTFCLE1BQU1HLFFBQVEsSUFBTTtJQUNsQixxQkFDRTs7MEJBQ0UsOERBQUNDOztrQ0FDQyw4REFBQ0M7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFbkMsOERBQUNDOzBCQUNDLDRFQUFDUiwwREFBTUE7OEJBQ0wsNEVBQUNELCtEQUFXQTt3QkFBQ1UsTUFBSzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdEIsOERBQUNDOzBCQUFJOzs7Ozs7OztBQUdYO0tBZk1SO0FBaUJOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hYm91dC5qcz9mZDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRlVGV4dCBmcm9tIFwiQC9jb21wb25lbnRzL0FuaW1hdGVUZXh0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFiaXV0IE1lIHwgTXkgV29yazwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJEZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJkZXNjcmlwdGlvblwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8QW5pbWF0ZVRleHQgdGV4dD1cIlBhc3Npb24gRnVlbHMgUHJvZHVjdGl2aXR5XCIgLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L21haW4+XG4gICAgICA8ZGl2PmFib3V0PC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJuYW1lcyI6WyJBbmltYXRlVGV4dCIsIkxheW91dCIsIlJlYWN0IiwiQWJvdXQiLCJIZWFkIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwidGV4dCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});