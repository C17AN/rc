"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[category]",{

/***/ "./src/pages/[category]/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/[category]/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_DetailModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/DetailModal */ \"./src/components/DetailModal/index.tsx\");\n/* harmony import */ var _constants_AWS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants/AWS */ \"./src/constants/AWS.ts\");\n/* harmony import */ var _constants_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/Category */ \"./src/constants/Category.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DEFAULT_CATEGORY = _constants_Category__WEBPACK_IMPORTED_MODULE_3__.CATEGORY_LIST[0].value;\nconst params = {\n    Bucket: _constants_AWS__WEBPACK_IMPORTED_MODULE_2__.awsconfig.bucketName\n};\nconst ResourceListPage = (props)=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [detailModalOpen, setDetailModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const selectedCategory = _constants_Category__WEBPACK_IMPORTED_MODULE_3__.CATEGORY_LIST.find((category)=>category.value === (router.query.category || DEFAULT_CATEGORY));\n    const [resourceList, setResourceList] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        _constants_AWS__WEBPACK_IMPORTED_MODULE_2__.s3.listObjects(params, (err, data)=>{\n            if (err) {\n                console.error(err);\n            } else {\n                setResourceList(()=>[\n                        ...data.Contents\n                    ]);\n            }\n        });\n    }, []);\n    // fetch resources from s3\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pb-4 border-b-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-4xl font-extrabold text-gray-700 border-slate-200 mb-2\",\n                        children: selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.name\n                    }, void 0, false, {\n                        fileName: \"/Users/chanmin/rc/src/pages/[category]/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-gray-400\",\n                        children: \"SKP에서 사용하는 아이콘, 에셋들이 모여 있어요.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chanmin/rc/src/pages/[category]/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chanmin/rc/src/pages/[category]/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid grid-cols-5 gap-8 py-4 max-h-[60vh] overflow-y-scroll\",\n                children: resourceList.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>setDetailModalOpen(true),\n                        className: \"flex flex-col items-center hover:bg-gray-100 py-4 transition-colors rounded-lg cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-32 mb-2\",\n                                src: \"https://skp-resource-center.s3.ap-northeast-2.amazonaws.com/\".concat(encodeURIComponent(item.Key)),\n                                alt: item.Key\n                            }, void 0, false, {\n                                fileName: \"/Users/chanmin/rc/src/pages/[category]/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex-wrap text-xs text-gray-700\",\n                                children: item.Key\n                            }, void 0, false, {\n                                fileName: \"/Users/chanmin/rc/src/pages/[category]/index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, item.Key, true, {\n                        fileName: \"/Users/chanmin/rc/src/pages/[category]/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/chanmin/rc/src/pages/[category]/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            detailModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DetailModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                open: detailModalOpen\n            }, void 0, false, {\n                fileName: \"/Users/chanmin/rc/src/pages/[category]/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 27\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chanmin/rc/src/pages/[category]/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ResourceListPage, \"+j4tszBw+qSQd3GI5Zif3ZbY/XE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ResourceListPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResourceListPage);\nvar _c;\n$RefreshReg$(_c, \"ResourceListPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW2NhdGVnb3J5XS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0g7QUFDSztBQUNiO0FBQ1c7QUFJbkQsTUFBTVEsbUJBQW1CTCx1RUFBc0I7QUFDL0MsTUFBTU8sU0FBUztJQUNiQyxRQUFRVixnRUFBb0I7QUFDOUI7QUFFQSxNQUFNWSxtQkFBbUIsQ0FBQ0MsUUFBaUI7O0lBQ3pDLE1BQU1DLFNBQVNYLHNEQUFTQTtJQUN4QixNQUFNLENBQUNZLGlCQUFpQkMsbUJBQW1CLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUQsTUFBTVcsbUJBQW1CZixtRUFBa0IsQ0FDekMsQ0FBQ2lCLFdBQWFBLFNBQVNYLEtBQUssS0FBTU0sQ0FBQUEsT0FBT00sS0FBSyxDQUFDRCxRQUFRLElBQUlaLGdCQUFlO0lBRzVFLE1BQU0sQ0FBQ2MsY0FBY0MsZ0JBQWdCLEdBQUdoQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5ERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RKLDBEQUFjLENBQUNRLFFBQVEsQ0FBQ2UsS0FBS0MsT0FBUztZQUNwQyxJQUFJRCxLQUFLO2dCQUNQRSxRQUFRQyxLQUFLLENBQUNIO1lBQ2hCLE9BQU87Z0JBQ0xGLGdCQUFnQixJQUFNOzJCQUFJRyxLQUFLRyxRQUFRO3FCQUFDO1lBQzFDLENBQUM7UUFDSDtJQUNGLEdBQUcsRUFBRTtJQUVMLDBCQUEwQjtJQUUxQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQ1hiLDZCQUFBQSw4QkFBQUEsS0FBQUEsSUFBQUEsaUJBQWtCZSxJQUFJOzs7Ozs7a0NBRXpCLDhEQUFDQzt3QkFBRUgsV0FBVTtrQ0FBd0I7Ozs7Ozs7Ozs7OzswQkFJdkMsOERBQUNJO2dCQUFHSixXQUFVOzBCQUNYVCxhQUFhYyxHQUFHLENBQUMsQ0FBQ0MscUJBQ2pCLDhEQUFDQzt3QkFFQ0MsU0FBUyxJQUFNdEIsbUJBQW1CLElBQUk7d0JBQ3RDYyxXQUFVOzswQ0FFViw4REFBQ1M7Z0NBQ0NULFdBQVU7Z0NBQ1ZVLEtBQUssK0RBRUgsT0FGa0VDLG1CQUNsRUwsS0FBS00sR0FBRztnQ0FFVkMsS0FBS1AsS0FBS00sR0FBRzs7Ozs7OzBDQUVmLDhEQUFDRTtnQ0FBS2QsV0FBVTswQ0FBbUNNLEtBQUtNLEdBQUc7Ozs7Ozs7dUJBWHRETixLQUFLTSxHQUFHOzs7Ozs7Ozs7O1lBZWxCM0IsaUNBQW1CLDhEQUFDaEIsK0RBQVdBO2dCQUFDOEMsTUFBTTlCOzs7Ozs7Ozs7Ozs7QUFHN0M7R0FwRE1IOztRQUNXVCxrREFBU0E7OztLQURwQlM7QUFzRE4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW2NhdGVnb3J5XS9pbmRleC50c3g/YzljMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGV0YWlsTW9kYWwgZnJvbSBcIkAvY29tcG9uZW50cy9EZXRhaWxNb2RhbFwiO1xuaW1wb3J0IHsgYXdzY29uZmlnLCBzMyB9IGZyb20gXCJAL2NvbnN0YW50cy9BV1NcIjtcbmltcG9ydCB7IENBVEVHT1JZX0xJU1QgfSBmcm9tIFwiQC9jb25zdGFudHMvQ2F0ZWdvcnlcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBQcm9wcyA9IHt9O1xuXG5jb25zdCBERUZBVUxUX0NBVEVHT1JZID0gQ0FURUdPUllfTElTVFswXS52YWx1ZTtcbmNvbnN0IHBhcmFtcyA9IHtcbiAgQnVja2V0OiBhd3Njb25maWcuYnVja2V0TmFtZSxcbn07XG5cbmNvbnN0IFJlc291cmNlTGlzdFBhZ2UgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZGV0YWlsTW9kYWxPcGVuLCBzZXREZXRhaWxNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzZWxlY3RlZENhdGVnb3J5ID0gQ0FURUdPUllfTElTVC5maW5kKFxuICAgIChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkudmFsdWUgPT09IChyb3V0ZXIucXVlcnkuY2F0ZWdvcnkgfHwgREVGQVVMVF9DQVRFR09SWSlcbiAgKTtcblxuICBjb25zdCBbcmVzb3VyY2VMaXN0LCBzZXRSZXNvdXJjZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgczMubGlzdE9iamVjdHMocGFyYW1zLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFJlc291cmNlTGlzdCgoKSA9PiBbLi4uZGF0YS5Db250ZW50c10pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gZmV0Y2ggcmVzb3VyY2VzIGZyb20gczNcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC04XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTQgYm9yZGVyLWItMlwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTcwMCBib3JkZXItc2xhdGUtMjAwIG1iLTJcIj5cbiAgICAgICAgICB7c2VsZWN0ZWRDYXRlZ29yeT8ubmFtZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgU0tQ7JeQ7IScIOyCrOyaqe2VmOuKlCDslYTsnbTsvZgsIOyXkOyFi+uTpOydtCDrqqjsl6wg7J6I7Ja07JqULlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01IGdhcC04IHB5LTQgbWF4LWgtWzYwdmhdIG92ZXJmbG93LXktc2Nyb2xsXCI+XG4gICAgICAgIHtyZXNvdXJjZUxpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBrZXk9e2l0ZW0uS2V5fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGV0YWlsTW9kYWxPcGVuKHRydWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JheS0xMDAgcHktNCB0cmFuc2l0aW9uLWNvbG9ycyByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMzIgbWItMlwiXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vc2twLXJlc291cmNlLWNlbnRlci5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tLyR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIGl0ZW0uS2V5XG4gICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgICAgYWx0PXtpdGVtLktleX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4LXdyYXAgdGV4dC14cyB0ZXh0LWdyYXktNzAwXCI+e2l0ZW0uS2V5fTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICB7ZGV0YWlsTW9kYWxPcGVuICYmIDxEZXRhaWxNb2RhbCBvcGVuPXtkZXRhaWxNb2RhbE9wZW59IC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VMaXN0UGFnZTtcbiJdLCJuYW1lcyI6WyJEZXRhaWxNb2RhbCIsImF3c2NvbmZpZyIsInMzIiwiQ0FURUdPUllfTElTVCIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJERUZBVUxUX0NBVEVHT1JZIiwidmFsdWUiLCJwYXJhbXMiLCJCdWNrZXQiLCJidWNrZXROYW1lIiwiUmVzb3VyY2VMaXN0UGFnZSIsInByb3BzIiwicm91dGVyIiwiZGV0YWlsTW9kYWxPcGVuIiwic2V0RGV0YWlsTW9kYWxPcGVuIiwic2VsZWN0ZWRDYXRlZ29yeSIsImZpbmQiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicmVzb3VyY2VMaXN0Iiwic2V0UmVzb3VyY2VMaXN0IiwibGlzdE9iamVjdHMiLCJlcnIiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwiQ29udGVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm5hbWUiLCJwIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiS2V5IiwiYWx0Iiwic3BhbiIsIm9wZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[category]/index.tsx\n"));

/***/ })

});