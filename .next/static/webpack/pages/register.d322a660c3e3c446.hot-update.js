"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/services/auth.js":
/*!******************************!*\
  !*** ./src/services/auth.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\nvar _s = $RefreshSig$();\n\n\nconst apiUrl = \"http://localhost:3000/\";\nconst register = async (email, password)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(apiUrl + \"register\", {\n        email,\n        password\n    });\n};\nconst login = async (email, password)=>{\n    _s();\n    const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_1__.useCookies)([\n        \"user\"\n    ]);\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(apiUrl + \"login\", {\n        email,\n        password\n    }).then((response)=>{\n        if (response.data.token) {\n            setCookie(\"user\", JSON.stringify(response.data), {\n                path: \"/\",\n                maxAge: 3600,\n                sameSite: true\n            });\n        }\n        return response.data;\n    });\n};\n_s(login, \"sOKreorGX5rgZrExKJF8mI+pHmM=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_1__.useCookies\n    ];\n});\nconst logout = ()=>{\n    localStorage.removeItem(\"user\");\n};\nconst getCurrentUser = ()=>{\n    return JSON.parse(localStorage.getItem(\"user\"));\n};\nconst AuthService = {\n    register,\n    login,\n    logout,\n    getCurrentUser\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthService);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQTBCO0FBQ2dCO0FBQzFDLE1BQU1FLFNBQVNDLHdCQUErQjtBQUU5QyxNQUFNRyxXQUFXLE9BQU9DLE9BQU9DLFdBQWE7SUFDMUMsT0FBT1Isa0RBQVUsQ0FBQ0UsU0FBUyxZQUFZO1FBQ3JDSztRQUNBQztJQUNGO0FBQ0Y7QUFFQSxNQUFNRSxRQUFRLE9BQU9ILE9BQU9DLFdBQWE7O0lBQ3ZDLE1BQU0sQ0FBQ0csU0FBU0MsVUFBVSxHQUFHWCx3REFBVUEsQ0FBQztRQUFDO0tBQU87SUFFaEQsT0FBT0Qsa0RBQ0EsQ0FBQ0UsU0FBUyxTQUFTO1FBQ3RCSztRQUNBQztJQUNGLEdBQ0NLLElBQUksQ0FBQyxDQUFDQyxXQUFhO1FBQ2xCLElBQUlBLFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxFQUFFO1lBQ3ZCSixVQUFVLFFBQVFLLEtBQUtDLFNBQVMsQ0FBQ0osU0FBU0MsSUFBSSxHQUFHO2dCQUMvQ0ksTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsVUFBVSxJQUFJO1lBQ2hCO1FBQ0YsQ0FBQztRQUVELE9BQU9QLFNBQVNDLElBQUk7SUFDdEI7QUFDSjtHQW5CTUw7O1FBQ3lCVCxvREFBVUE7OztBQW9CekMsTUFBTXFCLFNBQVMsSUFBTTtJQUNuQkMsYUFBYUMsVUFBVSxDQUFDO0FBQzFCO0FBRUEsTUFBTUMsaUJBQWlCLElBQU07SUFDM0IsT0FBT1IsS0FBS1MsS0FBSyxDQUFDSCxhQUFhSSxPQUFPLENBQUM7QUFDekM7QUFFQSxNQUFNQyxjQUFjO0lBQ2xCdEI7SUFDQUk7SUFDQVk7SUFDQUc7QUFDRjtBQUVBLCtEQUFlRyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlcy9hdXRoLmpzP2RlNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcbmNvbnN0IGFwaVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkw7XG5cbmNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICByZXR1cm4gYXhpb3MucG9zdChhcGlVcmwgKyBcInJlZ2lzdGVyXCIsIHtcbiAgICBlbWFpbCxcbiAgICBwYXNzd29yZCxcbiAgfSk7XG59O1xuXG5jb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFtcInVzZXJcIl0pO1xuXG4gIHJldHVybiBheGlvc1xuICAgIC5wb3N0KGFwaVVybCArIFwibG9naW5cIiwge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEudG9rZW4pIHtcbiAgICAgICAgc2V0Q29va2llKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSwge1xuICAgICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICAgIG1heEFnZTogMzYwMCwgLy8gRXhwaXJlcyBhZnRlciAxaHJcbiAgICAgICAgICBzYW1lU2l0ZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0pO1xufTtcblxuY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG59O1xuXG5jb25zdCBnZXRDdXJyZW50VXNlciA9ICgpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbn07XG5cbmNvbnN0IEF1dGhTZXJ2aWNlID0ge1xuICByZWdpc3RlcixcbiAgbG9naW4sXG4gIGxvZ291dCxcbiAgZ2V0Q3VycmVudFVzZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoU2VydmljZTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZUNvb2tpZXMiLCJhcGlVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInJlZ2lzdGVyIiwiZW1haWwiLCJwYXNzd29yZCIsInBvc3QiLCJsb2dpbiIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwidG9rZW4iLCJKU09OIiwic3RyaW5naWZ5IiwicGF0aCIsIm1heEFnZSIsInNhbWVTaXRlIiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImdldEN1cnJlbnRVc2VyIiwicGFyc2UiLCJnZXRJdGVtIiwiQXV0aFNlcnZpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/auth.js\n"));

/***/ })

});