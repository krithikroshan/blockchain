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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token.service */ \"./components/services/token.service.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethers_helpers_GetTokenBalance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethers_helpers/GetTokenBalance */ \"./components/ethers_helpers/GetTokenBalance.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/roshan/Dev/blockchain/frontend-next/components/Common/Wallet.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // import { useSearchParams } from \"react-router-dom\";\n\n\n\n // import { NIIFI } from \"./ethers_helpers/TokenDetails\";\n// import \"./WalletCard.css\";\n\n\n\nvar WalletCardEthers = function WalletCardEthers(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      errorMessage = _useState[0],\n      setErrorMessage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      defaultAccount = _useState2[0],\n      setDefaultAccount = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      userBalance = _useState3[0],\n      setUserBalance = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      ERC20Balance = _useState4[0],\n      setERC20Balance = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Connect Wallet\"),\n      connButtonText = _useState5[0],\n      setConnButtonText = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      provider = _useState6[0],\n      setProvider = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      name = _useState7[0],\n      setName = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      authenticated = _useState8[0],\n      setAuthenticated = _useState8[1];\n\n  var connectWalletHandler = function connectWalletHandler() {\n    if (window.ethereum && defaultAccount == null) {\n      // set ethers provider\n      setProvider(new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(window.ethereum)); // connect to metamask\n\n      window.ethereum.request({\n        method: \"eth_requestAccounts\"\n      }).then(function (result) {\n        setConnButtonText(\"Wallet Connected\");\n        setDefaultAccount(result[0]);\n      })[\"catch\"](function (error) {\n        setErrorMessage(error.message);\n      });\n    } else if (!window.ethereum) {\n      console.log(\"Need to install MetaMask\");\n      setErrorMessage(\"Please install MetaMask browser extension to interact\");\n    }\n  };\n\n  var loginHandler = /*#__PURE__*/function () {\n    var _ref = (0,_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var url;\n      return _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (window.ethereum && window.ethereum.isMetaMask) {\n                url = \"http://localhost:8000/users/auth/connect?wallet_address=\" + defaultAccount;\n                axios__WEBPACK_IMPORTED_MODULE_4___default().get(url).then(function (res) {\n                  console.log(\"MetaMask Here!\");\n                  var signer = provider.getSigner();\n                  signer.signMessage(res.data).then(function (signature) {\n                    axios__WEBPACK_IMPORTED_MODULE_4___default().post(\"http://localhost:8000/users/auth/login\", {\n                      wallet_address: defaultAccount,\n                      signature: signature\n                    }).then(function (res) {\n                      console.log(res.data);\n                      setName(res.data.first_name + \" \" + res.data.last_name);\n                      _services_token_service__WEBPACK_IMPORTED_MODULE_3__.default.setUser(res.data);\n                    })[\"catch\"](function (err) {\n                      return console.log(err);\n                    });\n                  });\n                });\n              } else {\n                console.log(\"Need to install MetaMask\");\n                setErrorMessage(\"Please install MetaMask browser extension to interact\");\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loginHandler() {\n      return _ref.apply(this, arguments);\n    };\n  }(); //   const getAuthenticatedData = () => {\n  //     api.get(\"/users/me\").then((res) => {\n  //       console.log(res.data);\n  //       setAuthenticated(true);\n  //     });\n  //   };\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (defaultAccount) {\n      provider.getBalance(defaultAccount).then(function (balanceResult) {\n        setUserBalance(ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.formatEther(balanceResult));\n      });\n      var options = {\n        address: defaultAccount,\n        provider: provider\n      };\n      (0,_ethers_helpers_GetTokenBalance__WEBPACK_IMPORTED_MODULE_5__.getERC20TokenBalance)(options).then(function (res) {\n        setERC20Balance(res);\n      })[\"catch\"](function (err) {\n        console.log(\"ERC20 Balance error: \", err);\n      });\n    }\n  }, [defaultAccount]);\n  return (\n    /*#__PURE__*/\n    // <div className=\"walletCard\">\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Nav.Link, {\n      onClick: connectWalletHandler,\n      children: \"Connect Wallet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 5\n    }, _this) //   <button onClick={loginHandler}>login</button>\n    //   <button onClick={getAuthenticatedData}>authenticate</button>\n    // </div>\n\n  );\n};\n\n_s(WalletCardEthers, \"ZEGFKI2sF2uCJYQbkBjUBOtJlbw=\");\n\n_c = WalletCardEthers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WalletCardEthers);\n\nvar _c;\n\n$RefreshReg$(_c, \"WalletCardEthers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsUUFBUSxFQUFFQTtBQUZJLE9BQWhCO0FBSUFiLE1BQUFBLHFGQUFvQixDQUFDb0QsT0FBRCxDQUFwQixDQUNHMUIsSUFESCxDQUNRLFVBQUNVLEdBQUQsRUFBUztBQUNiMUIsUUFBQUEsZUFBZSxDQUFDMEIsR0FBRCxDQUFmO0FBQ0QsT0FISCxXQUlTLFVBQUNXLEdBQUQsRUFBUztBQUNkakIsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNnQixHQUFyQztBQUNELE9BTkg7QUFPRDtBQUNGLEdBakJRLEVBaUJOLENBQUMxQyxjQUFELENBakJNLENBQVQ7QUFtQkE7QUFBQTtBQUNFO0FBQ0Esa0VBQUMsR0FBRCxDQUFLLElBQUw7QUFBVSxhQUFPLEVBQUVjLG9CQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLENBR0U7QUFDQTtBQUNBOztBQUxGO0FBT0QsQ0E5RkQ7O0dBQU1sQjs7S0FBQUE7QUFnR04sK0RBQWVBLGdCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tbW9uL1dhbGxldC5qcz9lNDYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG4vLyBpbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFRva2VuU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvdG9rZW4uc2VydmljZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZ2V0RVJDMjBUb2tlbkJhbGFuY2UgfSBmcm9tIFwiLi4vZXRoZXJzX2hlbHBlcnMvR2V0VG9rZW5CYWxhbmNlXCI7XG4vLyBpbXBvcnQgeyBOSUlGSSB9IGZyb20gXCIuL2V0aGVyc19oZWxwZXJzL1Rva2VuRGV0YWlsc1wiO1xuLy8gaW1wb3J0IFwiLi9XYWxsZXRDYXJkLmNzc1wiO1xuXG5jb25zdCBXYWxsZXRDYXJkRXRoZXJzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2RlZmF1bHRBY2NvdW50LCBzZXREZWZhdWx0QWNjb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXJCYWxhbmNlLCBzZXRVc2VyQmFsYW5jZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW0VSQzIwQmFsYW5jZSwgc2V0RVJDMjBCYWxhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29ubkJ1dHRvblRleHQsIHNldENvbm5CdXR0b25UZXh0XSA9IHVzZVN0YXRlKFwiQ29ubmVjdCBXYWxsZXRcIik7XG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYXV0aGVudGljYXRlZCwgc2V0QXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICBjb25zdCBjb25uZWN0V2FsbGV0SGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmV0aGVyZXVtICYmIGRlZmF1bHRBY2NvdW50ID09IG51bGwpIHtcbiAgICAgIC8vIHNldCBldGhlcnMgcHJvdmlkZXJcbiAgICAgIHNldFByb3ZpZGVyKG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pKTtcblxuICAgICAgLy8gY29ubmVjdCB0byBtZXRhbWFza1xuICAgICAgd2luZG93LmV0aGVyZXVtXG4gICAgICAgIC5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgc2V0Q29ubkJ1dHRvblRleHQoXCJXYWxsZXQgQ29ubmVjdGVkXCIpO1xuICAgICAgICAgIHNldERlZmF1bHRBY2NvdW50KHJlc3VsdFswXSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgY29uc29sZS5sb2coXCJOZWVkIHRvIGluc3RhbGwgTWV0YU1hc2tcIik7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFzayBicm93c2VyIGV4dGVuc2lvbiB0byBpbnRlcmFjdFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9naW5IYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuZXRoZXJldW0gJiYgd2luZG93LmV0aGVyZXVtLmlzTWV0YU1hc2spIHtcblxuICAgICAgICB2YXIgdXJsID1cbiAgICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC91c2Vycy9hdXRoL2Nvbm5lY3Q/d2FsbGV0X2FkZHJlc3M9XCIgK1xuICAgICAgICAgIGRlZmF1bHRBY2NvdW50O1xuICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWV0YU1hc2sgSGVyZSFcIik7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBzaWduZXIuc2lnbk1lc3NhZ2UocmVzLmRhdGEpLnRoZW4oKHNpZ25hdHVyZSkgPT4ge1xuICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC91c2Vycy9hdXRoL2xvZ2luXCIsIHtcbiAgICAgICAgICAgICAgd2FsbGV0X2FkZHJlc3M6IGRlZmF1bHRBY2NvdW50LFxuICAgICAgICAgICAgICBzaWduYXR1cmU6IHNpZ25hdHVyZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgc2V0TmFtZShyZXMuZGF0YS5maXJzdF9uYW1lICsgXCIgXCIgKyByZXMuZGF0YS5sYXN0X25hbWUpO1xuICAgICAgICAgICAgICBUb2tlblNlcnZpY2Uuc2V0VXNlcihyZXMuZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5lZWQgdG8gaW5zdGFsbCBNZXRhTWFza1wiKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrIGJyb3dzZXIgZXh0ZW5zaW9uIHRvIGludGVyYWN0XCIpO1xuICAgIH1cbiAgfTtcblxuLy8gICBjb25zdCBnZXRBdXRoZW50aWNhdGVkRGF0YSA9ICgpID0+IHtcbi8vICAgICBhcGkuZ2V0KFwiL3VzZXJzL21lXCIpLnRoZW4oKHJlcykgPT4ge1xuLy8gICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuLy8gICAgICAgc2V0QXV0aGVudGljYXRlZCh0cnVlKTtcbi8vICAgICB9KTtcbi8vICAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZWZhdWx0QWNjb3VudCkge1xuICAgICAgcHJvdmlkZXIuZ2V0QmFsYW5jZShkZWZhdWx0QWNjb3VudCkudGhlbigoYmFsYW5jZVJlc3VsdCkgPT4ge1xuICAgICAgICBzZXRVc2VyQmFsYW5jZShldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoYmFsYW5jZVJlc3VsdCkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBhZGRyZXNzOiBkZWZhdWx0QWNjb3VudCxcbiAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLFxuICAgICAgfTtcbiAgICAgIGdldEVSQzIwVG9rZW5CYWxhbmNlKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBzZXRFUkMyMEJhbGFuY2UocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSQzIwIEJhbGFuY2UgZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIFtkZWZhdWx0QWNjb3VudF0pO1xuXG4gIHJldHVybiAoXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRDYXJkXCI+XG4gICAgPE5hdi5MaW5rIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXRIYW5kbGVyfT5Db25uZWN0IFdhbGxldDwvTmF2Lkxpbms+XG4gICAgLy8gICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2luSGFuZGxlcn0+bG9naW48L2J1dHRvbj5cbiAgICAvLyAgIDxidXR0b24gb25DbGljaz17Z2V0QXV0aGVudGljYXRlZERhdGF9PmF1dGhlbnRpY2F0ZTwvYnV0dG9uPlxuICAgIC8vIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2FsbGV0Q2FyZEV0aGVycztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiVG9rZW5TZXJ2aWNlIiwiYXhpb3MiLCJnZXRFUkMyMFRva2VuQmFsYW5jZSIsIldhbGxldENhcmRFdGhlcnMiLCJwcm9wcyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImRlZmF1bHRBY2NvdW50Iiwic2V0RGVmYXVsdEFjY291bnQiLCJ1c2VyQmFsYW5jZSIsInNldFVzZXJCYWxhbmNlIiwiRVJDMjBCYWxhbmNlIiwic2V0RVJDMjBCYWxhbmNlIiwiY29ubkJ1dHRvblRleHQiLCJzZXRDb25uQnV0dG9uVGV4dCIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJuYW1lIiwic2V0TmFtZSIsImF1dGhlbnRpY2F0ZWQiLCJzZXRBdXRoZW50aWNhdGVkIiwiY29ubmVjdFdhbGxldEhhbmRsZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInJlcXVlc3QiLCJtZXRob2QiLCJ0aGVuIiwicmVzdWx0IiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImxvZ2luSGFuZGxlciIsImlzTWV0YU1hc2siLCJ1cmwiLCJnZXQiLCJyZXMiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJzaWduTWVzc2FnZSIsImRhdGEiLCJzaWduYXR1cmUiLCJwb3N0Iiwid2FsbGV0X2FkZHJlc3MiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwic2V0VXNlciIsImVyciIsImdldEJhbGFuY2UiLCJiYWxhbmNlUmVzdWx0IiwidXRpbHMiLCJmb3JtYXRFdGhlciIsIm9wdGlvbnMiLCJhZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Common/Wallet.js\n");

/***/ })

});