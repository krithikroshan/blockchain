"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Common/Wallet.js":
/*!*************************************!*\
  !*** ./components/Common/Wallet.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token.service */ \"./components/services/token.service.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethers_helpers_GetTokenBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethers_helpers/GetTokenBalance */ \"./components/ethers_helpers/GetTokenBalance.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/roshan/Dev/blockchain/frontend-next/components/Common/Wallet.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // import { useSearchParams } from \"react-router-dom\";\n\n\n\n // import { NIIFI } from \"./ethers_helpers/TokenDetails\";\n// import \"./WalletCard.css\";\n\n\n\nvar WalletCardEthers = function WalletCardEthers(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      errorMessage = _useState[0],\n      setErrorMessage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      defaultAccount = _useState2[0],\n      setDefaultAccount = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      userBalance = _useState3[0],\n      setUserBalance = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      ERC20Balance = _useState4[0],\n      setERC20Balance = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Connect Wallet\"),\n      connButtonText = _useState5[0],\n      setConnButtonText = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      provider = _useState6[0],\n      setProvider = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      name = _useState7[0],\n      setName = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      authenticated = _useState8[0],\n      setAuthenticated = _useState8[1]; //   const [searchParams, setSearchParams] = useSearchParams();\n\n\n  var referral_code = searchParams.get(\"referral_code\");\n\n  var connectWalletHandler = function connectWalletHandler() {\n    if (window.ethereum && defaultAccount == null) {\n      // set ethers provider\n      setProvider(new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(window.ethereum)); // connect to metamask\n\n      window.ethereum.request({\n        method: \"eth_requestAccounts\"\n      }).then(function (result) {\n        setConnButtonText(\"Wallet Connected\");\n        setDefaultAccount(result[0]);\n      })[\"catch\"](function (error) {\n        setErrorMessage(error.message);\n      });\n    } else if (!window.ethereum) {\n      console.log(\"Need to install MetaMask\");\n      setErrorMessage(\"Please install MetaMask browser extension to interact\");\n    }\n  };\n\n  var loginHandler = /*#__PURE__*/function () {\n    var _ref = (0,_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var url;\n      return _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (window.ethereum && window.ethereum.isMetaMask) {\n                if (referral_code) {\n                  url = \"http://localhost:8000/users/auth/connect?wallet_address=\" + defaultAccount + \"&referral_code=\" + referral_code;\n                } else {\n                  url = \"http://localhost:8000/users/auth/connect?wallet_address=\" + defaultAccount;\n                }\n\n                axios__WEBPACK_IMPORTED_MODULE_4___default().get(url).then(function (res) {\n                  console.log(\"MetaMask Here!\");\n                  var signer = provider.getSigner();\n                  signer.signMessage(res.data).then(function (signature) {\n                    axios__WEBPACK_IMPORTED_MODULE_4___default().post(\"http://localhost:8000/users/auth/login\", {\n                      wallet_address: defaultAccount,\n                      signature: signature\n                    }).then(function (res) {\n                      console.log(res.data);\n                      setName(res.data.first_name + \" \" + res.data.last_name);\n                      _services_token_service__WEBPACK_IMPORTED_MODULE_3__.default.setUser(res.data);\n                    })[\"catch\"](function (err) {\n                      return console.log(err);\n                    });\n                  });\n                });\n              } else {\n                console.log(\"Need to install MetaMask\");\n                setErrorMessage(\"Please install MetaMask browser extension to interact\");\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loginHandler() {\n      return _ref.apply(this, arguments);\n    };\n  }(); //   const getAuthenticatedData = () => {\n  //     api.get(\"/users/me\").then((res) => {\n  //       console.log(res.data);\n  //       setAuthenticated(true);\n  //     });\n  //   };\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (defaultAccount) {\n      provider.getBalance(defaultAccount).then(function (balanceResult) {\n        setUserBalance(ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.formatEther(balanceResult));\n      });\n      var options = {\n        address: defaultAccount,\n        provider: provider\n      };\n      (0,_ethers_helpers_GetTokenBalance__WEBPACK_IMPORTED_MODULE_5__.getERC20TokenBalance)(options).then(function (res) {\n        setERC20Balance(res);\n      })[\"catch\"](function (err) {\n        console.log(\"ERC20 Balance error: \", err);\n      });\n    }\n  }, [defaultAccount]);\n  return (\n    /*#__PURE__*/\n    // <div className=\"walletCard\">\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Nav.Link, {\n      onClick: connectWalletHandler,\n      children: \"Connect Wallet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 5\n    }, _this) //   <button onClick={loginHandler}>login</button>\n    //   <button onClick={getAuthenticatedData}>authenticate</button>\n    // </div>\n\n  );\n};\n\n_s(WalletCardEthers, \"ZEGFKI2sF2uCJYQbkBjUBOtJlbw=\");\n\n_c = WalletCardEthers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WalletCardEthers);\n\nvar _c;\n\n$RefreshReg$(_c, \"WalletCardEthers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CN0MsY0FBcEIsRUFBb0N3QixJQUFwQyxDQUF5QyxVQUFDc0IsYUFBRCxFQUFtQjtBQUMxRDNDLFFBQUFBLGNBQWMsQ0FBQ1gsNERBQUEsQ0FBeUJzRCxhQUF6QixDQUFELENBQWQ7QUFDRCxPQUZEO0FBR0EsVUFBTUcsT0FBTyxHQUFHO0FBQ2RDLFFBQUFBLE9BQU8sRUFBRWxELGNBREs7QUFFZFEsUUFBQUEsUUFBUSxFQUFFQTtBQUZJLE9BQWhCO0FBSUFiLE1BQUFBLHFGQUFvQixDQUFDc0QsT0FBRCxDQUFwQixDQUNHekIsSUFESCxDQUNRLFVBQUNTLEdBQUQsRUFBUztBQUNiNUIsUUFBQUEsZUFBZSxDQUFDNEIsR0FBRCxDQUFmO0FBQ0QsT0FISCxXQUlTLFVBQUNXLEdBQUQsRUFBUztBQUNkaEIsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNlLEdBQXJDO0FBQ0QsT0FOSDtBQU9EO0FBQ0YsR0FqQlEsRUFpQk4sQ0FBQzVDLGNBQUQsQ0FqQk0sQ0FBVDtBQW1CQTtBQUFBO0FBQ0U7QUFDQSxrRUFBQyxHQUFELENBQUssSUFBTDtBQUFVLGFBQU8sRUFBRWlCLG9CQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLENBR0U7QUFDQTtBQUNBOztBQUxGO0FBT0QsQ0F2R0Q7O0dBQU1yQjs7S0FBQUE7QUF5R04sK0RBQWVBLGdCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tbW9uL1dhbGxldC5qcz9lNDYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG4vLyBpbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFRva2VuU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvdG9rZW4uc2VydmljZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZ2V0RVJDMjBUb2tlbkJhbGFuY2UgfSBmcm9tIFwiLi4vZXRoZXJzX2hlbHBlcnMvR2V0VG9rZW5CYWxhbmNlXCI7XG4vLyBpbXBvcnQgeyBOSUlGSSB9IGZyb20gXCIuL2V0aGVyc19oZWxwZXJzL1Rva2VuRGV0YWlsc1wiO1xuLy8gaW1wb3J0IFwiLi9XYWxsZXRDYXJkLmNzc1wiO1xuXG5jb25zdCBXYWxsZXRDYXJkRXRoZXJzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2RlZmF1bHRBY2NvdW50LCBzZXREZWZhdWx0QWNjb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXJCYWxhbmNlLCBzZXRVc2VyQmFsYW5jZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW0VSQzIwQmFsYW5jZSwgc2V0RVJDMjBCYWxhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29ubkJ1dHRvblRleHQsIHNldENvbm5CdXR0b25UZXh0XSA9IHVzZVN0YXRlKFwiQ29ubmVjdCBXYWxsZXRcIik7XG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYXV0aGVudGljYXRlZCwgc2V0QXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbi8vICAgY29uc3QgW3NlYXJjaFBhcmFtcywgc2V0U2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCByZWZlcnJhbF9jb2RlID0gc2VhcmNoUGFyYW1zLmdldChcInJlZmVycmFsX2NvZGVcIik7XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSAmJiBkZWZhdWx0QWNjb3VudCA9PSBudWxsKSB7XG4gICAgICAvLyBzZXQgZXRoZXJzIHByb3ZpZGVyXG4gICAgICBzZXRQcm92aWRlcihuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKSk7XG5cbiAgICAgIC8vIGNvbm5lY3QgdG8gbWV0YW1hc2tcbiAgICAgIHdpbmRvdy5ldGhlcmV1bVxuICAgICAgICAucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHNldENvbm5CdXR0b25UZXh0KFwiV2FsbGV0IENvbm5lY3RlZFwiKTtcbiAgICAgICAgICBzZXREZWZhdWx0QWNjb3VudChyZXN1bHRbMF0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCF3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTmVlZCB0byBpbnN0YWxsIE1ldGFNYXNrXCIpO1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiUGxlYXNlIGluc3RhbGwgTWV0YU1hc2sgYnJvd3NlciBleHRlbnNpb24gdG8gaW50ZXJhY3RcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvZ2luSGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAod2luZG93LmV0aGVyZXVtICYmIHdpbmRvdy5ldGhlcmV1bS5pc01ldGFNYXNrKSB7XG4gICAgICBpZiAocmVmZXJyYWxfY29kZSkge1xuICAgICAgICB2YXIgdXJsID1cbiAgICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC91c2Vycy9hdXRoL2Nvbm5lY3Q/d2FsbGV0X2FkZHJlc3M9XCIgK1xuICAgICAgICAgIGRlZmF1bHRBY2NvdW50ICtcbiAgICAgICAgICBcIiZyZWZlcnJhbF9jb2RlPVwiICtcbiAgICAgICAgICByZWZlcnJhbF9jb2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHVybCA9XG4gICAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvdXNlcnMvYXV0aC9jb25uZWN0P3dhbGxldF9hZGRyZXNzPVwiICtcbiAgICAgICAgICBkZWZhdWx0QWNjb3VudDtcbiAgICAgIH1cbiAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1ldGFNYXNrIEhlcmUhXCIpO1xuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgc2lnbmVyLnNpZ25NZXNzYWdlKHJlcy5kYXRhKS50aGVuKChzaWduYXR1cmUpID0+IHtcbiAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvdXNlcnMvYXV0aC9sb2dpblwiLCB7XG4gICAgICAgICAgICAgIHdhbGxldF9hZGRyZXNzOiBkZWZhdWx0QWNjb3VudCxcbiAgICAgICAgICAgICAgc2lnbmF0dXJlOiBzaWduYXR1cmUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgICAgICAgIHNldE5hbWUocmVzLmRhdGEuZmlyc3RfbmFtZSArIFwiIFwiICsgcmVzLmRhdGEubGFzdF9uYW1lKTtcbiAgICAgICAgICAgICAgVG9rZW5TZXJ2aWNlLnNldFVzZXIocmVzLmRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJOZWVkIHRvIGluc3RhbGwgTWV0YU1hc2tcIik7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFzayBicm93c2VyIGV4dGVuc2lvbiB0byBpbnRlcmFjdFwiKTtcbiAgICB9XG4gIH07XG5cbi8vICAgY29uc3QgZ2V0QXV0aGVudGljYXRlZERhdGEgPSAoKSA9PiB7XG4vLyAgICAgYXBpLmdldChcIi91c2Vycy9tZVwiKS50aGVuKChyZXMpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbi8vICAgICAgIHNldEF1dGhlbnRpY2F0ZWQodHJ1ZSk7XG4vLyAgICAgfSk7XG4vLyAgIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGVmYXVsdEFjY291bnQpIHtcbiAgICAgIHByb3ZpZGVyLmdldEJhbGFuY2UoZGVmYXVsdEFjY291bnQpLnRoZW4oKGJhbGFuY2VSZXN1bHQpID0+IHtcbiAgICAgICAgc2V0VXNlckJhbGFuY2UoZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGJhbGFuY2VSZXN1bHQpKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgYWRkcmVzczogZGVmYXVsdEFjY291bnQsXG4gICAgICAgIHByb3ZpZGVyOiBwcm92aWRlcixcbiAgICAgIH07XG4gICAgICBnZXRFUkMyMFRva2VuQmFsYW5jZShvcHRpb25zKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgc2V0RVJDMjBCYWxhbmNlKHJlcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFUkMyMCBCYWxhbmNlIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbZGVmYXVsdEFjY291bnRdKTtcblxuICByZXR1cm4gKFxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0Q2FyZFwiPlxuICAgIDxOYXYuTGluayBvbkNsaWNrPXtjb25uZWN0V2FsbGV0SGFuZGxlcn0+Q29ubmVjdCBXYWxsZXQ8L05hdi5MaW5rPlxuICAgIC8vICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dpbkhhbmRsZXJ9PmxvZ2luPC9idXR0b24+XG4gICAgLy8gICA8YnV0dG9uIG9uQ2xpY2s9e2dldEF1dGhlbnRpY2F0ZWREYXRhfT5hdXRoZW50aWNhdGU8L2J1dHRvbj5cbiAgICAvLyA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldENhcmRFdGhlcnM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsIlRva2VuU2VydmljZSIsImF4aW9zIiwiZ2V0RVJDMjBUb2tlbkJhbGFuY2UiLCJXYWxsZXRDYXJkRXRoZXJzIiwicHJvcHMiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJkZWZhdWx0QWNjb3VudCIsInNldERlZmF1bHRBY2NvdW50IiwidXNlckJhbGFuY2UiLCJzZXRVc2VyQmFsYW5jZSIsIkVSQzIwQmFsYW5jZSIsInNldEVSQzIwQmFsYW5jZSIsImNvbm5CdXR0b25UZXh0Iiwic2V0Q29ubkJ1dHRvblRleHQiLCJwcm92aWRlciIsInNldFByb3ZpZGVyIiwibmFtZSIsInNldE5hbWUiLCJhdXRoZW50aWNhdGVkIiwic2V0QXV0aGVudGljYXRlZCIsInJlZmVycmFsX2NvZGUiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJjb25uZWN0V2FsbGV0SGFuZGxlciIsIndpbmRvdyIsImV0aGVyZXVtIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwicmVxdWVzdCIsIm1ldGhvZCIsInRoZW4iLCJyZXN1bHQiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibG9naW5IYW5kbGVyIiwiaXNNZXRhTWFzayIsInVybCIsInJlcyIsInNpZ25lciIsImdldFNpZ25lciIsInNpZ25NZXNzYWdlIiwiZGF0YSIsInNpZ25hdHVyZSIsInBvc3QiLCJ3YWxsZXRfYWRkcmVzcyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJzZXRVc2VyIiwiZXJyIiwiZ2V0QmFsYW5jZSIsImJhbGFuY2VSZXN1bHQiLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwib3B0aW9ucyIsImFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Common/Wallet.js\n");

/***/ })

});