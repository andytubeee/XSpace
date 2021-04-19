webpackHotUpdate_N_E("pages/launch_search",{

/***/ "./components/LaunchSearch.js":
false,

/***/ "./components/LaunchSearchBar.js":
/*!***************************************!*\
  !*** ./components/LaunchSearchBar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LaunchesGenerator; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Andrew_Yang_Projects_Tutorials_SpaceX_Launch_Stats_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LaunchesCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LaunchesCard */ "./components/LaunchesCard.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\Andrew Yang\\Projects\\Tutorials\\SpaceX Launch Stats\\client\\components\\LaunchSearch.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_Andrew_Yang_Projects_Tutorials_SpaceX_Launch_Stats_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query LaunchSearchQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n      launch_year\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var LAUNCHES_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());
function LaunchesGenerator(props) {
  _s();

  var _this = this;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(LAUNCHES_QUERY),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      amount = _useState[0],
      setAmount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      newData = _useState2[0],
      setNewData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      ready = _useState3[0],
      setReady = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex; // While there remain elements to shuffle...

    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1; // And swap it with the current element.

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  var handleGenerateClick = function handleGenerateClick() {
    if (error) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
        icon: "error",
        title: "Error",
        text: "".concat(error.message)
      });
    }

    if (loading) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
        title: "Loading!",
        html: "Please be patient...",
        timer: 3000,
        timerProgressBar: true,
        didOpen: function didOpen() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
          timerInterval = setInterval(function () {
            var content = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.getContent();

            if (content) {
              var b = content.querySelector("b");

              if (b) {
                b.textContent = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.getTimerLeft();
              }
            }
          }, 100);
        },
        willClose: function willClose() {
          clearInterval(timerInterval);
        }
      }).then(function (result) {
        /* Read more about handling dismissals below */
        if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.timer) {
          console.log("Should be ready now!");
        }
      });
    }

    if (data) {
      if (!ready) {
        if (amount > Array.from(data.launches).length) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            icon: "error",
            title: "Error",
            text: "More than amount of data on server, the max is ".concat(Array.from(data.launches).length)
          });
          setAmount(Array.from(data.launches).length);
        }

        if (amount == 0) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            icon: "error",
            title: "Error",
            text: "You cannot search for 0 query"
          });
        } else {
          setReady(true);
        }
      } else {
        setReady(false);
      }
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "btn btn-secondary",
      onClick: function onClick() {
        return router.push("/");
      },
      children: "Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "display-4 my-3 text-center",
      children: "Launch Search"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group d-flex flex-column",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Flight ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "number",
          className: "form-control",
          placeholder: "ID",
          disabled: ready,
          style: ready ? {
            cursor: "not-allowed"
          } : {
            cursor: "text"
          },
          min: "1",
          onChange: function onChange(e) {
            if (!ready) {
              setAmount(e.target.value);
            }
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          "class": "btn btn-primary mt-3 align-self-end",
          onClick: handleGenerateClick,
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, this), ready && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: data && shuffle(Array.from(data.launches)).splice(0, amount).map(function (launch, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LaunchesCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          launch: launch,
          id: index
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false)]
  }, void 0, true);
}

_s(LaunchesGenerator, "QTVstNlAtj0Ao8gy31/2bB18uKg=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = LaunchesGenerator;

var _c;

$RefreshReg$(_c, "LaunchesGenerator");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/launch_search.js":
/*!********************************!*\
  !*** ./pages/launch_search.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _components_LaunchSearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LaunchSearchBar */ "./components/LaunchSearchBar.js");


var _jsxFileName = "C:\\Users\\Andrew Yang\\Projects\\Tutorials\\SpaceX Launch Stats\\client\\pages\\launch_search.js",
    _s = $RefreshSig$();





var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloClient"]({
  uri: "http://localhost:5000/graphql",
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]()
});
function Home() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
    client: client,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/assets/images/SpaceXLogoFull.png",
        alt: "SpaceX Logo",
        className: "img-fluid d-block m-auto",
        onClick: function onClick() {
          window.open('https://www.spacex.com/', '_ blank');
        },
        style: {
          width: 500,
          cursor: 'pointer'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LaunchSearchBar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

_s(Home, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXVuY2hTZWFyY2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xhdW5jaF9zZWFyY2guanMiXSwibmFtZXMiOlsiTEFVTkNIRVNfUVVFUlkiLCJncWwiLCJMYXVuY2hlc0dlbmVyYXRvciIsInByb3BzIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlU3RhdGUiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJuZXdEYXRhIiwic2V0TmV3RGF0YSIsInJlYWR5Iiwic2V0UmVhZHkiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaHVmZmxlIiwiYXJyYXkiLCJjdXJyZW50SW5kZXgiLCJsZW5ndGgiLCJ0ZW1wb3JhcnlWYWx1ZSIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaGFuZGxlR2VuZXJhdGVDbGljayIsIlN3YWwiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwidGV4dCIsIm1lc3NhZ2UiLCJodG1sIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsInNob3dMb2FkaW5nIiwidGltZXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiY29udGVudCIsImdldENvbnRlbnQiLCJiIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiZ2V0VGltZXJMZWZ0Iiwid2lsbENsb3NlIiwiY2xlYXJJbnRlcnZhbCIsInRoZW4iLCJyZXN1bHQiLCJkaXNtaXNzIiwiRGlzbWlzc1JlYXNvbiIsImNvbnNvbGUiLCJsb2ciLCJBcnJheSIsImZyb20iLCJsYXVuY2hlcyIsInB1c2giLCJjdXJzb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzcGxpY2UiLCJtYXAiLCJsYXVuY2giLCJpbmRleCIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIkhvbWUiLCJ3aW5kb3ciLCJvcGVuIiwid2lkdGgiXSwibWFw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QUFGSixxQkFqQ0o7QUFBQSxrQkFERjtBQTZDRDs7R0F4SXVCL0QsaUI7VUFDV0UsdUQsRUFLbEJZLHFEOzs7S0FOT2QsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnhCO0FBQ0E7QUFDQTtBQU1BO0FBRUEsSUFBTWdFLE1BQU0sR0FBRyxJQUFJQywyREFBSixDQUFpQjtBQUM1QkMsS0FBRyxFQUFFLCtCQUR1QjtBQUU1QkMsT0FBSyxFQUFFLElBQUlDLDREQUFKO0FBRnFCLENBQWpCLENBQWY7QUFLZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQzNCLE1BQU14RCxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0Esc0JBQ0kscUVBQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFa0QsTUFBeEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFDSSxXQUFHLEVBQUMsbUNBRFI7QUFFSSxXQUFHLEVBQUMsYUFGUjtBQUdJLGlCQUFTLEVBQUMsMEJBSGQ7QUFJSSxlQUFPLEVBQUUsbUJBQU07QUFDWE0sZ0JBQU0sQ0FBQ0MsSUFBUCxDQUFZLHlCQUFaLEVBQXVDLFNBQXZDO0FBQ0gsU0FOTDtBQU9JLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUUsR0FBVDtBQUFjaEIsZ0JBQU0sRUFBRTtBQUF0QjtBQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVdJLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQkg7O0dBbkJ1QmEsSTtVQUNMdkQscUQ7OztLQURLdUQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYXVuY2hfc2VhcmNoLjZhYjFmZGI1OTU2Y2RiMDI1NmRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGF1bmNoZXNDYXJkIGZyb20gXCIuL0xhdW5jaGVzQ2FyZFwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTEFVTkNIRVNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgTGF1bmNoU2VhcmNoUXVlcnkge1xyXG4gICAgbGF1bmNoZXMge1xyXG4gICAgICBmbGlnaHRfbnVtYmVyXHJcbiAgICAgIG1pc3Npb25fbmFtZVxyXG4gICAgICBsYXVuY2hfZGF0ZV9sb2NhbFxyXG4gICAgICBsYXVuY2hfc3VjY2Vzc1xyXG4gICAgICBsYXVuY2hfeWVhclxyXG4gICAgICByb2NrZXQge1xyXG4gICAgICAgIHJvY2tldF9pZFxyXG4gICAgICAgIHJvY2tldF9uYW1lXHJcbiAgICAgICAgcm9ja2V0X3R5cGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhdW5jaGVzR2VuZXJhdG9yKHByb3BzKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoTEFVTkNIRVNfUVVFUlkpO1xyXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbmV3RGF0YSwgc2V0TmV3RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlYWR5LCBzZXRSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBmdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XHJcbiAgICB2YXIgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLFxyXG4gICAgICB0ZW1wb3JhcnlWYWx1ZSxcclxuICAgICAgcmFuZG9tSW5kZXg7XHJcblxyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cclxuICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcclxuICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXHJcbiAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcclxuICAgICAgY3VycmVudEluZGV4IC09IDE7XHJcblxyXG4gICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcbiAgICAgIHRlbXBvcmFyeVZhbHVlID0gYXJyYXlbY3VycmVudEluZGV4XTtcclxuICAgICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcclxuICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlR2VuZXJhdGVDbGljayA9ICgpID0+IHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICAgIHRleHQ6IGAke2Vycm9yLm1lc3NhZ2V9YCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiBcIkxvYWRpbmchXCIsXHJcbiAgICAgICAgaHRtbDogXCJQbGVhc2UgYmUgcGF0aWVudC4uLlwiLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKCkgPT4ge1xyXG4gICAgICAgICAgU3dhbC5zaG93TG9hZGluZygpO1xyXG4gICAgICAgICAgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IFN3YWwuZ2V0Q29udGVudCgpO1xyXG4gICAgICAgICAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGIgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJiXCIpO1xyXG4gICAgICAgICAgICAgIGlmIChiKSB7XHJcbiAgICAgICAgICAgICAgICBiLnRleHRDb250ZW50ID0gU3dhbC5nZXRUaW1lckxlZnQoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsQ2xvc2U6ICgpID0+IHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJbnRlcnZhbCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLyogUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHMgYmVsb3cgKi9cclxuICAgICAgICBpZiAocmVzdWx0LmRpc21pc3MgPT09IFN3YWwuRGlzbWlzc1JlYXNvbi50aW1lcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTaG91bGQgYmUgcmVhZHkgbm93IVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGlmICghcmVhZHkpIHtcclxuICAgICAgICBpZiAoYW1vdW50ID4gQXJyYXkuZnJvbShkYXRhLmxhdW5jaGVzKS5sZW5ndGgpIHtcclxuICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICAgICAgdGV4dDogYE1vcmUgdGhhbiBhbW91bnQgb2YgZGF0YSBvbiBzZXJ2ZXIsIHRoZSBtYXggaXMgJHtBcnJheS5mcm9tKGRhdGEubGF1bmNoZXMpLmxlbmd0aFxyXG4gICAgICAgICAgICAgIH1gLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRBbW91bnQoQXJyYXkuZnJvbShkYXRhLmxhdW5jaGVzKS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYW1vdW50ID09IDApIHtcclxuICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICAgICAgdGV4dDogYFlvdSBjYW5ub3Qgc2VhcmNoIGZvciAwIHF1ZXJ5YCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRSZWFkeSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0UmVhZHkoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfT5cclxuICAgICAgICBCYWNrXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00IG15LTMgdGV4dC1jZW50ZXJcIj5MYXVuY2ggU2VhcmNoPC9oMT5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgPGxhYmVsPkZsaWdodCBJRDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSURcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17cmVhZHl9XHJcbiAgICAgICAgICAgIHN0eWxlPXtyZWFkeSA/IHsgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCIgfSA6IHsgY3Vyc29yOiBcInRleHRcIiB9fVxyXG4gICAgICAgICAgICBtaW49e1wiMVwifVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbXQtMyBhbGlnbi1zZWxmLWVuZFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUdlbmVyYXRlQ2xpY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcIlNlYXJjaFwifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIHtyZWFkeSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtkYXRhICYmXHJcbiAgICAgICAgICAgIHNodWZmbGUoQXJyYXkuZnJvbShkYXRhLmxhdW5jaGVzKSlcclxuICAgICAgICAgICAgICAuc3BsaWNlKDAsIGFtb3VudClcclxuICAgICAgICAgICAgICAubWFwKChsYXVuY2gsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGF1bmNoZXNDYXJkIGxhdW5jaD17bGF1bmNofSBpZD17aW5kZXh9IC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgICBBcG9sbG9DbGllbnQsXHJcbiAgICBBcG9sbG9Qcm92aWRlcixcclxuICAgIEluTWVtb3J5Q2FjaGUsXHJcbiAgICBncWwsXHJcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBMYXVuY2hTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9MYXVuY2hTZWFyY2hCYXInXHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHVyaTogXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZ3JhcGhxbFwiLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL1NwYWNlWExvZ29GdWxsLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiU3BhY2VYIExvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBkLWJsb2NrIG0tYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuc3BhY2V4LmNvbS8nLCAnXyBibGFuaycpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNTAwLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGF1bmNoU2VhcmNoIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=