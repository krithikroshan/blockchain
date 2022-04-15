"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/marketplace",{

/***/ "./pages/marketplace/index.js":
/*!************************************!*\
  !*** ./pages/marketplace/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Marketplace; }\n/* harmony export */ });\n/* harmony import */ var _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json */ \"./artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/roshan/Dev/blockchain/frontend-next/pages/marketplace/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Marketplace() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      nfts = _useState[0],\n      setNfts = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1]; // const marketplaceAddress = \"\"\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    loadNFTs();\n  }, []);\n\n  function loadNFTs() {\n    return _loadNFTs.apply(this, arguments);\n  }\n\n  function _loadNFTs() {\n    _loadNFTs = (0,_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var provider, contract, data, items;\n      return _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              /* create a generic provider and query for unsold market items */\n              console.log(\"1\");\n              provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.JsonRpcProvider();\n              console.log(\"2\");\n              contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.marketplaceAddress, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_6__.abi, provider);\n              console.log(\"3\", contract);\n              _context2.next = 7;\n              return contract.fetchMarketItems();\n\n            case 7:\n              data = _context2.sent;\n              console.log(\"4\");\n              /*\n               *  map over items returned from smart contract and format\n               *  them as well as fetch their token metadata\n               */\n\n              _context2.next = 11;\n              return Promise.all(data.map( /*#__PURE__*/function () {\n                var _ref = (0,_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(i) {\n                  var tokenUri, meta, price, item;\n                  return _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          _context.next = 2;\n                          return contract.tokenURI(i.tokenId);\n\n                        case 2:\n                          tokenUri = _context.sent;\n                          _context.next = 5;\n                          return axios__WEBPACK_IMPORTED_MODULE_3___default().get(tokenUri);\n\n                        case 5:\n                          meta = _context.sent;\n                          price = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(i.price.toString(), \"ether\");\n                          item = {\n                            price: price,\n                            tokenId: i.tokenId.toNumber(),\n                            seller: i.seller,\n                            owner: i.owner,\n                            image: meta.data.image,\n                            name: meta.data.name,\n                            description: meta.data.description\n                          };\n                          return _context.abrupt(\"return\", item);\n\n                        case 9:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                return function (_x2) {\n                  return _ref.apply(this, arguments);\n                };\n              }()));\n\n            case 11:\n              items = _context2.sent;\n              console.log(\"5\");\n              setNfts(items);\n              setLoading(false);\n\n            case 15:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _loadNFTs.apply(this, arguments);\n  }\n\n  function buyNft(_x) {\n    return _buyNft.apply(this, arguments);\n  }\n\n  function _buyNft() {\n    _buyNft = (0,_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(nft) {\n      var web3Modal, connection, provider, signer, contract, price, transaction;\n      return _Users_roshan_Dev_blockchain_frontend_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              /* needs the user to sign the transaction, so will use Web3Provider and sign it */\n              web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())();\n              _context3.next = 3;\n              return web3Modal.connect();\n\n            case 3:\n              connection = _context3.sent;\n              provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(connection);\n              signer = provider.getSigner();\n              contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.marketplaceAddress, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n              /* user will be prompted to pay the asking proces to complete the transaction */\n\n              price = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.parseUnits(nft.price.toString(), \"ether\");\n              _context3.next = 10;\n              return contract.createMarketSale(nft.tokenId, {\n                value: price\n              });\n\n            case 10:\n              transaction = _context3.sent;\n              _context3.next = 13;\n              return transaction.wait();\n\n            case 13:\n              loadNFTs();\n\n            case 14:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n    return _buyNft.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    children: !loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n      children: \"Hi\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {}, void 0, false)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Marketplace, \"Xu7ThsH35mRfDOV8Y1kg1IE53o0=\");\n\n_c = Marketplace;\n\nvar _c;\n\n$RefreshReg$(_c, \"Marketplace\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z2VzL21hcmtldHBsYWNlL2luZGV4LmpzP2U1MGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xuXG5pbXBvcnQgeyBtYXJrZXRwbGFjZUFkZHJlc3MgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XG5cbmltcG9ydCBORlRNYXJrZXRwbGFjZSBmcm9tIFwiLi4vLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlRNYXJrZXRwbGFjZS5zb2wvTkZUTWFya2V0cGxhY2UuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXJrZXRwbGFjZSgpIHtcbiAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBjb25zdCBtYXJrZXRwbGFjZUFkZHJlc3MgPSBcIlwiXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkTkZUcygpO1xuICB9LCBbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gbG9hZE5GVHMoKSB7XG4gICAgLyogY3JlYXRlIGEgZ2VuZXJpYyBwcm92aWRlciBhbmQgcXVlcnkgZm9yIHVuc29sZCBtYXJrZXQgaXRlbXMgKi9cbiAgICBjb25zb2xlLmxvZyhcIjFcIilcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcigpO1xuICAgIGNvbnNvbGUubG9nKFwiMlwiKVxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIG1hcmtldHBsYWNlQWRkcmVzcyxcbiAgICAgIE5GVE1hcmtldHBsYWNlLmFiaSxcbiAgICAgIHByb3ZpZGVyXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhcIjNcIiwgY29udHJhY3QpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbnRyYWN0LmZldGNoTWFya2V0SXRlbXMoKTtcbiAgICBjb25zb2xlLmxvZyhcIjRcIilcblxuICAgIC8qXG4gICAgICogIG1hcCBvdmVyIGl0ZW1zIHJldHVybmVkIGZyb20gc21hcnQgY29udHJhY3QgYW5kIGZvcm1hdFxuICAgICAqICB0aGVtIGFzIHdlbGwgYXMgZmV0Y2ggdGhlaXIgdG9rZW4gbWV0YWRhdGFcbiAgICAgKi9cbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgZGF0YS5tYXAoYXN5bmMgKGkpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW5VcmkgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSShpLnRva2VuSWQpO1xuICAgICAgICBjb25zdCBtZXRhID0gYXdhaXQgYXhpb3MuZ2V0KHRva2VuVXJpKTtcbiAgICAgICAgbGV0IHByaWNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGkucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcbiAgICAgICAgbGV0IGl0ZW0gPSB7XG4gICAgICAgICAgcHJpY2UsXG4gICAgICAgICAgdG9rZW5JZDogaS50b2tlbklkLnRvTnVtYmVyKCksXG4gICAgICAgICAgc2VsbGVyOiBpLnNlbGxlcixcbiAgICAgICAgICBvd25lcjogaS5vd25lcixcbiAgICAgICAgICBpbWFnZTogbWV0YS5kYXRhLmltYWdlLFxuICAgICAgICAgIG5hbWU6IG1ldGEuZGF0YS5uYW1lLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZXRhLmRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFwiNVwiKVxuICAgIHNldE5mdHMoaXRlbXMpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGJ1eU5mdChuZnQpIHtcbiAgICAvKiBuZWVkcyB0aGUgdXNlciB0byBzaWduIHRoZSB0cmFuc2FjdGlvbiwgc28gd2lsbCB1c2UgV2ViM1Byb3ZpZGVyIGFuZCBzaWduIGl0ICovXG4gICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpO1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pO1xuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIG1hcmtldHBsYWNlQWRkcmVzcyxcbiAgICAgIE5GVE1hcmtldHBsYWNlLmFiaSxcbiAgICAgIHNpZ25lclxuICAgICk7XG5cbiAgICAvKiB1c2VyIHdpbGwgYmUgcHJvbXB0ZWQgdG8gcGF5IHRoZSBhc2tpbmcgcHJvY2VzIHRvIGNvbXBsZXRlIHRoZSB0cmFuc2FjdGlvbiAqL1xuICAgIGNvbnN0IHByaWNlID0gZXRoZXJzLnV0aWxzLnBhcnNlVW5pdHMobmZ0LnByaWNlLnRvU3RyaW5nKCksIFwiZXRoZXJcIik7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBjb250cmFjdC5jcmVhdGVNYXJrZXRTYWxlKG5mdC50b2tlbklkLCB7XG4gICAgICB2YWx1ZTogcHJpY2UsXG4gICAgfSk7XG4gICAgYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpO1xuICAgIGxvYWRORlRzKCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeyFsb2FkaW5nID8gKFxuICAgICAgPGgxPkhpPC9oMT5cbiAgICAgICkgOiAoPD48Lz4pfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJheGlvcyIsIldlYjNNb2RhbCIsIm1hcmtldHBsYWNlQWRkcmVzcyIsIk5GVE1hcmtldHBsYWNlIiwiTWFya2V0cGxhY2UiLCJuZnRzIiwic2V0TmZ0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9hZE5GVHMiLCJjb25zb2xlIiwibG9nIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJKc29uUnBjUHJvdmlkZXIiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiYWJpIiwiZmV0Y2hNYXJrZXRJdGVtcyIsImRhdGEiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaSIsInRva2VuVVJJIiwidG9rZW5JZCIsInRva2VuVXJpIiwiZ2V0IiwibWV0YSIsInByaWNlIiwidXRpbHMiLCJmb3JtYXRVbml0cyIsInRvU3RyaW5nIiwiaXRlbSIsInRvTnVtYmVyIiwic2VsbGVyIiwib3duZXIiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIml0ZW1zIiwiYnV5TmZ0IiwibmZ0Iiwid2ViM01vZGFsIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJwYXJzZVVuaXRzIiwiY3JlYXRlTWFya2V0U2FsZSIsInZhbHVlIiwidHJhbnNhY3Rpb24iLCJ3YWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/marketplace/index.js\n");

/***/ })

});