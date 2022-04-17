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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ \"./redux/actions/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helper_functions_StringOperations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper_functions/StringOperations */ \"./helper_functions/StringOperations.js\");\n/* harmony import */ var _Wallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Wallet */ \"./components/Common/Wallet.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/token.service */ \"./components/services/token.service.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _ethers_helpers_GetTokenBalance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ethers_helpers/GetTokenBalance */ \"./components/ethers_helpers/GetTokenBalance.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/roshan/Dev/blockchain/frontend-next/components/Common/Header.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Header() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      user = _useState2[0],\n      setUser = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      defaultAccount = _useState3[0],\n      setDefaultAccount = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      userBalance = _useState4[0],\n      setUserBalance = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      ERC20Balance = _useState5[0],\n      setERC20Balance = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"Connect Wallet\"),\n      connButtonText = _useState6[0],\n      setConnButtonText = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      provider = _useState7[0],\n      setProvider = _useState7[1];\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  var currentUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.currentUser;\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (currentUser.loggedIn) {\n      var name = (0,_helper_functions_StringOperations__WEBPACK_IMPORTED_MODULE_5__.capitalizeFirstLetter)(currentUser.user.user.first_name) + \" \" + (0,_helper_functions_StringOperations__WEBPACK_IMPORTED_MODULE_5__.capitalizeFirstLetter)(currentUser.user.user.last_name);\n      setUser(name);\n    } else {\n      setUser(null);\n    }\n  }, [currentUser]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setLoading(false);\n  }, [user]);\n\n  var logout = function logout() {\n    dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_3__.default.userActions.logOut());\n    next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/\");\n  };\n\n  var connectWalletHandler = function connectWalletHandler() {\n    console.log(\"hi\");\n\n    if (window.ethereum && defaultAccount == null) {\n      console.log(\"hi\"); // set ethers provider\n\n      setProvider(new ethers__WEBPACK_IMPORTED_MODULE_11__.ethers.providers.Web3Provider(window.ethereum)); // connect to metamask\n\n      window.ethereum.request({\n        method: \"eth_requestAccounts\"\n      }).then(function (result) {\n        setConnButtonText(\"Wallet Connected\");\n        setDefaultAccount(result[0]);\n      })[\"catch\"](function (error) {\n        setErrorMessage(error.message);\n      });\n    } else if (!window.ethereum) {\n      console.log(\"Need to install MetaMask\");\n      setErrorMessage(\"Please install MetaMask browser extension to interact\");\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"header\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Navbar, {\n      bg: \"light\",\n      variant: \"light\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Container, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n          href: \"/\",\n          passHref: true,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Navbar.Brand, {\n            children: \"Access\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Nav, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/tickets/view\",\n            passHref: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Nav.Link, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"i\", {\n                className: \"fas fa-shopping-cart pr-1\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 17\n              }, this), \" My Tickets\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, this), !loading && !user ?\n          /*#__PURE__*/\n          // <Link href=\"/login\" passHref>\n          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Nav.Link, {\n            onClick: connectWalletHandler,\n            children: \"Connect Wallet\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 15\n          }, this) : user ?\n          /*#__PURE__*/\n          // </Link>\n          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NavDropdown, {\n            title: user,\n            id: \"email\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n              href: \"/account\",\n              passHref: true,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NavDropdown.Item, {\n                children: \"Account\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 99,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n              href: \"/manage/events\",\n              passHref: true,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NavDropdown.Item, {\n                children: \"Manage Events\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 102,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 101,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n              href: \"/manage/events/create\",\n              passHref: true,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NavDropdown.Item, {\n                children: \"Create Event\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 105,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NavDropdown.Item, {\n              onClick: function onClick() {\n                logout();\n              },\n              children: \"Logout\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 15\n          }, this) : null]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Header, \"hYOZSCykVSEJJTTU2idp894NngM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eURBQUQ7QUFBYSxpQkFBSyxFQUFFQSxJQUFwQjtBQUEwQixjQUFFLEVBQUMsT0FBN0I7QUFBQSxvQ0FDRSwrREFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsVUFBWDtBQUFzQixzQkFBUSxNQUE5QjtBQUFBLHFDQUNFLCtEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFLCtEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxnQkFBWDtBQUE0QixzQkFBUSxNQUFwQztBQUFBLHFDQUNFLCtEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixlQU9FLCtEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyx1QkFBWDtBQUFtQyxzQkFBUSxNQUEzQztBQUFBLHFDQUNFLCtEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRixlQVVFLCtEQUFDLDhEQUFEO0FBQ0UscUJBQU8sRUFBRSxtQkFBTTtBQUNibUIsZ0JBQUFBLE1BQU07QUFDUCxlQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGTSxHQW9CSixJQWxDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStDRDs7R0F6R1F0QjtVQVVVVixzREFFR0Q7OztLQVpiVztBQTJHVCwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbW1vbi9IZWFkZXIuanM/MDg0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBDb250YWluZXIsIE5hdkRyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgYWxsQWN0aW9ucyBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcl9mdW5jdGlvbnMvU3RyaW5nT3BlcmF0aW9uc1wiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBXYWxsZXQgZnJvbSBcIi4vV2FsbGV0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgVG9rZW5TZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy90b2tlbi5zZXJ2aWNlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBnZXRFUkMyMFRva2VuQmFsYW5jZSB9IGZyb20gXCIuLi9ldGhlcnNfaGVscGVycy9HZXRUb2tlbkJhbGFuY2VcIjtcblxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbZGVmYXVsdEFjY291bnQsIHNldERlZmF1bHRBY2NvdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdXNlckJhbGFuY2UsIHNldFVzZXJCYWxhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbRVJDMjBCYWxhbmNlLCBzZXRFUkMyMEJhbGFuY2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb25uQnV0dG9uVGV4dCwgc2V0Q29ubkJ1dHRvblRleHRdID0gdXNlU3RhdGUoXCJDb25uZWN0IFdhbGxldFwiKTtcbiAgY29uc3QgW3Byb3ZpZGVyLCBzZXRQcm92aWRlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmN1cnJlbnRVc2VyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjdXJyZW50VXNlci5sb2dnZWRJbikge1xuICAgICAgdmFyIG5hbWUgPVxuICAgICAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoY3VycmVudFVzZXIudXNlci51c2VyLmZpcnN0X25hbWUpICtcbiAgICAgICAgXCIgXCIgK1xuICAgICAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoY3VycmVudFVzZXIudXNlci51c2VyLmxhc3RfbmFtZSk7XG4gICAgICBzZXRVc2VyKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRVc2VyKG51bGwpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRVc2VyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW3VzZXJdKTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goYWxsQWN0aW9ucy51c2VyQWN0aW9ucy5sb2dPdXQoKSk7XG4gICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXRIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGlcIilcbiAgICBpZiAod2luZG93LmV0aGVyZXVtICYmIGRlZmF1bHRBY2NvdW50ID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGlcIilcbiAgICAgIC8vIHNldCBldGhlcnMgcHJvdmlkZXJcbiAgICAgIHNldFByb3ZpZGVyKG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pKTtcblxuICAgICAgLy8gY29ubmVjdCB0byBtZXRhbWFza1xuICAgICAgd2luZG93LmV0aGVyZXVtXG4gICAgICAgIC5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgc2V0Q29ubkJ1dHRvblRleHQoXCJXYWxsZXQgQ29ubmVjdGVkXCIpO1xuICAgICAgICAgIHNldERlZmF1bHRBY2NvdW50KHJlc3VsdFswXSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIXdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgY29uc29sZS5sb2coXCJOZWVkIHRvIGluc3RhbGwgTWV0YU1hc2tcIik7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFzayBicm93c2VyIGV4dGVuc2lvbiB0byBpbnRlcmFjdFwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPE5hdmJhciBiZz1cImxpZ2h0XCIgdmFyaWFudD1cImxpZ2h0XCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+QWNjZXNzPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9tYW5hZ2UvZXZlbnRzL2NyZWF0ZVwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICA8TmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnQgcHItMVwiPjwvaT4gQ3JlYXRlIEV2ZW50XG4gICAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90aWNrZXRzL3ZpZXdcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPE5hdi5MaW5rPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0IHByLTFcIj48L2k+IE15IFRpY2tldHNcbiAgICAgICAgICAgICAgPC9OYXYuTGluaz4gXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7IWxvYWRpbmcgJiYgIXVzZXIgPyAoXG4gICAgICAgICAgICAgIC8vIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPE5hdi5MaW5rIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXRIYW5kbGVyfT5Db25uZWN0IFdhbGxldDwvTmF2Lkxpbms+XG4gICAgICAgICAgICApIDogdXNlciA/IChcbiAgICAgICAgICAgICAgLy8gPC9MaW5rPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9e3VzZXJ9IGlkPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnRcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtPkFjY291bnQ8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFuYWdlL2V2ZW50c1wiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0+TWFuYWdlIEV2ZW50czwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYW5hZ2UvZXZlbnRzL2NyZWF0ZVwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0+Q3JlYXRlIEV2ZW50PC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2dvdXQoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9OYXZiYXI+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm91dGVyIiwiTmF2YmFyIiwiTmF2IiwiQ29udGFpbmVyIiwiTmF2RHJvcGRvd24iLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiYWxsQWN0aW9ucyIsIkxpbmsiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHlsZXMiLCJXYWxsZXQiLCJldGhlcnMiLCJUb2tlblNlcnZpY2UiLCJheGlvcyIsImdldEVSQzIwVG9rZW5CYWxhbmNlIiwiSGVhZGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VyIiwic2V0VXNlciIsImRlZmF1bHRBY2NvdW50Iiwic2V0RGVmYXVsdEFjY291bnQiLCJ1c2VyQmFsYW5jZSIsInNldFVzZXJCYWxhbmNlIiwiRVJDMjBCYWxhbmNlIiwic2V0RVJDMjBCYWxhbmNlIiwiY29ubkJ1dHRvblRleHQiLCJzZXRDb25uQnV0dG9uVGV4dCIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJkaXNwYXRjaCIsImN1cnJlbnRVc2VyIiwic3RhdGUiLCJsb2dnZWRJbiIsIm5hbWUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwibG9nb3V0IiwidXNlckFjdGlvbnMiLCJsb2dPdXQiLCJwdXNoIiwiY29ubmVjdFdhbGxldEhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZXRoZXJldW0iLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJyZXF1ZXN0IiwibWV0aG9kIiwidGhlbiIsInJlc3VsdCIsImVycm9yIiwic2V0RXJyb3JNZXNzYWdlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Common/Header.js\n");

/***/ })

});