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

/***/ "./components/Common/Header.js":
/*!*************************************!*\
  !*** ./components/Common/Header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions */ \"./redux/actions/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _helper_functions_StringOperations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helper_functions/StringOperations */ \"./helper_functions/StringOperations.js\");\n/* harmony import */ var _Wallet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Wallet */ \"./components/Common/Wallet.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/token.service */ \"./components/services/token.service.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _ethers_helpers_GetTokenBalance__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethers_helpers/GetTokenBalance */ \"./components/ethers_helpers/GetTokenBalance.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/roshan/Dev/blockchain/frontend-next/components/Common/Header.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Header() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      user = _useState2[0],\n      setUser = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      defaultAccount = _useState3[0],\n      setDefaultAccount = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      userBalance = _useState4[0],\n      setUserBalance = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      ERC20Balance = _useState5[0],\n      setERC20Balance = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Connect Wallet\"),\n      connButtonText = _useState6[0],\n      setConnButtonText = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      provider = _useState7[0],\n      setProvider = _useState7[1];\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n  var currentUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.currentUser;\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (currentUser.loggedIn) {\n      var name = (0,_helper_functions_StringOperations__WEBPACK_IMPORTED_MODULE_7__.capitalizeFirstLetter)(currentUser.user.user.first_name) + \" \" + (0,_helper_functions_StringOperations__WEBPACK_IMPORTED_MODULE_7__.capitalizeFirstLetter)(currentUser.user.user.last_name);\n      setUser(name);\n    } else {\n      setUser(null);\n    }\n  }, [currentUser]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    setLoading(false);\n  }, [user]);\n\n  var logout = function logout() {\n    dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_5__.default.userActions.logOut());\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\");\n  };\n\n  var connectWalletHandler = function connectWalletHandler() {\n    if (window.ethereum && defaultAccount == null) {\n      console.log(\"hello\"); // set ethers provider\n\n      setProvider(new ethers__WEBPACK_IMPORTED_MODULE_13__.ethers.providers.Web3Provider(window.ethereum)); // connect to metamask\n\n      window.ethereum.request({\n        method: \"eth_requestAccounts\"\n      }).then(function (result) {\n        setConnButtonText(\"Wallet Connected\");\n        setDefaultAccount(result[0]);\n        console.log(result[0]);\n      })[\"catch\"](function (error) {\n        setErrorMessage(error.message);\n      });\n    } else if (!window.ethereum) {\n      console.log(\"Need to install MetaMask\");\n      setErrorMessage(\"Please install MetaMask browser extension to interact\");\n    }\n  };\n\n  var loginHandler = /*#__PURE__*/function () {\n    var _ref = (0,_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var url;\n      return _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"h1\");\n\n              if (window.ethereum && window.ethereum.isMetaMask && defaultAccount) {\n                console.log(\"h2\");\n                url = \"http://localhost:8000/users/wallet/connect?wallet_address=\" + defaultAccount;\n                axios__WEBPACK_IMPORTED_MODULE_10___default().get(url).then(function (res) {\n                  console.log(\"MetaMask Here!\");\n                  var signer = provider.getSigner();\n                  signer.signMessage(res.data).then(function (signature) {\n                    axios__WEBPACK_IMPORTED_MODULE_10___default().post(\"http://localhost:8000/users/auth/login\", {\n                      wallet_address: defaultAccount,\n                      signature: signature\n                    }).then(function (res) {\n                      console.log(res.data);\n                      setName(res.data.wallet_address);\n                      _services_token_service__WEBPACK_IMPORTED_MODULE_9__.default.setUser(res.data);\n                    })[\"catch\"](function (err) {\n                      return console.log(err);\n                    });\n                  });\n                });\n              } else {\n                console.log(\"Need to install MetaMask\");\n                setErrorMessage(\"Please install MetaMask browser extension to interact\");\n              }\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loginHandler() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (defaultAccount) {\n      loginHandler();\n      provider.getBalance(defaultAccount).then(function (balanceResult) {\n        setUserBalance(ethers__WEBPACK_IMPORTED_MODULE_13__.ethers.utils.formatEther(balanceResult));\n      });\n      var options = {\n        address: defaultAccount,\n        provider: provider\n      };\n      (0,_ethers_helpers_GetTokenBalance__WEBPACK_IMPORTED_MODULE_11__.getERC20TokenBalance)(options).then(function (res) {\n        setERC20Balance(res);\n      })[\"catch\"](function (err) {\n        console.log(\"ERC20 Balance error: \", err);\n      });\n    }\n  }, [defaultAccount]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(\"header\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Navbar, {\n      bg: \"light\",\n      variant: \"light\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Container, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n          href: \"/\",\n          passHref: true,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Navbar.Brand, {\n            children: \"Access\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Nav, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n            href: \"/tickets/view\",\n            passHref: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Nav.Link, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(\"i\", {\n                className: \"fas fa-shopping-cart pr-1\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 139,\n                columnNumber: 17\n              }, this), \" My Tickets\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 138,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 13\n          }, this), !loading && !user ?\n          /*#__PURE__*/\n          // <Link href=\"/login\" passHref>\n          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Nav.Link, {\n            onClick: connectWalletHandler,\n            children: \"Connect Wallet\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 144,\n            columnNumber: 15\n          }, this) : user ?\n          /*#__PURE__*/\n          // </Link>\n          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NavDropdown, {\n            title: user,\n            id: \"email\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n              href: \"/account\",\n              passHref: true,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NavDropdown.Item, {\n                children: \"Account\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 149,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 148,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n              href: \"/manage/events\",\n              passHref: true,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NavDropdown.Item, {\n                children: \"Manage Events\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 152,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 151,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n              href: \"/manage/events/create\",\n              passHref: true,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NavDropdown.Item, {\n                children: \"Create Event\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 155,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 154,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NavDropdown.Item, {\n              onClick: function onClick() {\n                logout();\n              },\n              children: \"Logout\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 157,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 147,\n            columnNumber: 15\n          }, this) : null]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 125,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"1CmtImMYxr6lWtYVpW8Q2AeQcOA=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBSUUsK0RBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLGdCQUFYO0FBQTRCLHNCQUFRLE1BQXBDO0FBQUEscUNBQ0UsK0RBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBT0UsK0RBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLHVCQUFYO0FBQW1DLHNCQUFRLE1BQTNDO0FBQUEscUNBQ0UsK0RBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGLGVBVUUsK0RBQUMsOERBQUQ7QUFDRSxxQkFBTyxFQUFFLG1CQUFNO0FBQ2JtQixnQkFBQUEsTUFBTTtBQUNQLGVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZNLEdBb0JKLElBbENOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0NEOztHQTNKUXRCO1VBVVVWLHNEQUVHRDs7O0tBWmJXO0FBNkpULCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tbW9uL0hlYWRlci5qcz8wODQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIENvbnRhaW5lciwgTmF2RHJvcGRvd24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBhbGxBY3Rpb25zIGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVyX2Z1bmN0aW9ucy9TdHJpbmdPcGVyYXRpb25zXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9IZWFkZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFdhbGxldCBmcm9tIFwiLi9XYWxsZXRcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBUb2tlblNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL3Rva2VuLnNlcnZpY2VcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGdldEVSQzIwVG9rZW5CYWxhbmNlIH0gZnJvbSBcIi4uL2V0aGVyc19oZWxwZXJzL0dldFRva2VuQmFsYW5jZVwiO1xuXG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IFtkZWZhdWx0QWNjb3VudCwgc2V0RGVmYXVsdEFjY291bnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt1c2VyQmFsYW5jZSwgc2V0VXNlckJhbGFuY2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtFUkMyMEJhbGFuY2UsIHNldEVSQzIwQmFsYW5jZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Nvbm5CdXR0b25UZXh0LCBzZXRDb25uQnV0dG9uVGV4dF0gPSB1c2VTdGF0ZShcIkNvbm5lY3QgV2FsbGV0XCIpO1xuICBjb25zdCBbcHJvdmlkZXIsIHNldFByb3ZpZGVyXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBjdXJyZW50VXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFVzZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRVc2VyLmxvZ2dlZEluKSB7XG4gICAgICB2YXIgbmFtZSA9XG4gICAgICAgIGNhcGl0YWxpemVGaXJzdExldHRlcihjdXJyZW50VXNlci51c2VyLnVzZXIuZmlyc3RfbmFtZSkgK1xuICAgICAgICBcIiBcIiArXG4gICAgICAgIGNhcGl0YWxpemVGaXJzdExldHRlcihjdXJyZW50VXNlci51c2VyLnVzZXIubGFzdF9uYW1lKTtcbiAgICAgIHNldFVzZXIobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgfVxuICB9LCBbY3VycmVudFVzZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9LCBbdXNlcl0pO1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChhbGxBY3Rpb25zLnVzZXJBY3Rpb25zLmxvZ091dCgpKTtcbiAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSAmJiBkZWZhdWx0QWNjb3VudCA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXG4gICAgICAvLyBzZXQgZXRoZXJzIHByb3ZpZGVyXG4gICAgICBzZXRQcm92aWRlcihuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKSk7XG5cbiAgICAgIC8vIGNvbm5lY3QgdG8gbWV0YW1hc2tcbiAgICAgIHdpbmRvdy5ldGhlcmV1bVxuICAgICAgICAucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHNldENvbm5CdXR0b25UZXh0KFwiV2FsbGV0IENvbm5lY3RlZFwiKTtcbiAgICAgICAgICBzZXREZWZhdWx0QWNjb3VudChyZXN1bHRbMF0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdFswXSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghd2luZG93LmV0aGVyZXVtKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5lZWQgdG8gaW5zdGFsbCBNZXRhTWFza1wiKTtcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrIGJyb3dzZXIgZXh0ZW5zaW9uIHRvIGludGVyYWN0XCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2dpbkhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoMVwiKVxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0gJiYgd2luZG93LmV0aGVyZXVtLmlzTWV0YU1hc2sgJiYgZGVmYXVsdEFjY291bnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoMlwiKVxuICAgICAgICB2YXIgdXJsID1cbiAgICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC91c2Vycy93YWxsZXQvY29ubmVjdD93YWxsZXRfYWRkcmVzcz1cIiArXG4gICAgICAgICAgZGVmYXVsdEFjY291bnQ7XG4gICAgICBheGlvcy5nZXQodXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNZXRhTWFzayBIZXJlIVwiKTtcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIHNpZ25lci5zaWduTWVzc2FnZShyZXMuZGF0YSkudGhlbigoc2lnbmF0dXJlKSA9PiB7XG4gICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3VzZXJzL2F1dGgvbG9naW5cIiwge1xuICAgICAgICAgICAgICB3YWxsZXRfYWRkcmVzczogZGVmYXVsdEFjY291bnQsXG4gICAgICAgICAgICAgIHNpZ25hdHVyZTogc2lnbmF0dXJlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICAgICAgICBzZXROYW1lKHJlcy5kYXRhLndhbGxldF9hZGRyZXNzKTtcbiAgICAgICAgICAgICAgVG9rZW5TZXJ2aWNlLnNldFVzZXIocmVzLmRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJOZWVkIHRvIGluc3RhbGwgTWV0YU1hc2tcIik7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFzayBicm93c2VyIGV4dGVuc2lvbiB0byBpbnRlcmFjdFwiKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGVmYXVsdEFjY291bnQpIHtcbiAgICAgIGxvZ2luSGFuZGxlcigpXG4gICAgICBwcm92aWRlci5nZXRCYWxhbmNlKGRlZmF1bHRBY2NvdW50KS50aGVuKChiYWxhbmNlUmVzdWx0KSA9PiB7XG4gICAgICAgIHNldFVzZXJCYWxhbmNlKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihiYWxhbmNlUmVzdWx0KSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGFkZHJlc3M6IGRlZmF1bHRBY2NvdW50LFxuICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICB9O1xuICAgICAgZ2V0RVJDMjBUb2tlbkJhbGFuY2Uob3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHNldEVSQzIwQmFsYW5jZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJDMjAgQmFsYW5jZSBlcnJvcjogXCIsIGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2RlZmF1bHRBY2NvdW50XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPE5hdmJhciBiZz1cImxpZ2h0XCIgdmFyaWFudD1cImxpZ2h0XCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+QWNjZXNzPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9tYW5hZ2UvZXZlbnRzL2NyZWF0ZVwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICA8TmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnQgcHItMVwiPjwvaT4gQ3JlYXRlIEV2ZW50XG4gICAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90aWNrZXRzL3ZpZXdcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPE5hdi5MaW5rPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0IHByLTFcIj48L2k+IE15IFRpY2tldHNcbiAgICAgICAgICAgICAgPC9OYXYuTGluaz4gXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7IWxvYWRpbmcgJiYgIXVzZXIgPyAoXG4gICAgICAgICAgICAgIC8vIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPE5hdi5MaW5rIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXRIYW5kbGVyfT5Db25uZWN0IFdhbGxldDwvTmF2Lkxpbms+XG4gICAgICAgICAgICApIDogdXNlciA/IChcbiAgICAgICAgICAgICAgLy8gPC9MaW5rPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9e3VzZXJ9IGlkPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnRcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtPkFjY291bnQ8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFuYWdlL2V2ZW50c1wiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0+TWFuYWdlIEV2ZW50czwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYW5hZ2UvZXZlbnRzL2NyZWF0ZVwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0+Q3JlYXRlIEV2ZW50PC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2dvdXQoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9OYXZiYXI+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm91dGVyIiwiTmF2YmFyIiwiTmF2IiwiQ29udGFpbmVyIiwiTmF2RHJvcGRvd24iLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiYWxsQWN0aW9ucyIsIkxpbmsiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHlsZXMiLCJXYWxsZXQiLCJldGhlcnMiLCJUb2tlblNlcnZpY2UiLCJheGlvcyIsImdldEVSQzIwVG9rZW5CYWxhbmNlIiwiSGVhZGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VyIiwic2V0VXNlciIsImRlZmF1bHRBY2NvdW50Iiwic2V0RGVmYXVsdEFjY291bnQiLCJ1c2VyQmFsYW5jZSIsInNldFVzZXJCYWxhbmNlIiwiRVJDMjBCYWxhbmNlIiwic2V0RVJDMjBCYWxhbmNlIiwiY29ubkJ1dHRvblRleHQiLCJzZXRDb25uQnV0dG9uVGV4dCIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJkaXNwYXRjaCIsImN1cnJlbnRVc2VyIiwic3RhdGUiLCJsb2dnZWRJbiIsIm5hbWUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwibG9nb3V0IiwidXNlckFjdGlvbnMiLCJsb2dPdXQiLCJwdXNoIiwiY29ubmVjdFdhbGxldEhhbmRsZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJyZXF1ZXN0IiwibWV0aG9kIiwidGhlbiIsInJlc3VsdCIsImVycm9yIiwic2V0RXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImxvZ2luSGFuZGxlciIsImlzTWV0YU1hc2siLCJ1cmwiLCJnZXQiLCJyZXMiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJzaWduTWVzc2FnZSIsImRhdGEiLCJzaWduYXR1cmUiLCJwb3N0Iiwid2FsbGV0X2FkZHJlc3MiLCJzZXROYW1lIiwiZXJyIiwiZ2V0QmFsYW5jZSIsImJhbGFuY2VSZXN1bHQiLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwib3B0aW9ucyIsImFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Common/Header.js\n");

/***/ })

});