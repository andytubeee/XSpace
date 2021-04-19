webpackHotUpdate_N_E("pages/launch_search",{

/***/ "./components/LaunchSearchBar.js":
/*!***************************************!*\
  !*** ./components/LaunchSearchBar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LaunchSearch; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Andrew_Yang_Projects_Tutorials_SpaceX_Launch_Stats_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Andrew_Yang_Projects_Tutorials_SpaceX_Launch_Stats_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LaunchesCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LaunchesCard */ "./components/LaunchesCard.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _LaunchSearchResultCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LaunchSearchResultCard */ "./components/LaunchSearchResultCard.js");





var _jsxFileName = "C:\\Users\\Andrew Yang\\Projects\\Tutorials\\SpaceX Launch Stats\\client\\components\\LaunchSearchBar.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_Andrew_Yang_Projects_Tutorials_SpaceX_Launch_Stats_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query LaunchSearchQuery {\n      launches {\n        flight_number\n        mission_name\n        launch_date_local\n        launch_success\n        launch_year\n        rocket {\n          rocket_id\n          rocket_name\n          rocket_type\n        }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







function LaunchSearch(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(1),
      flight_id = _useState[0],
      set_flightID = _useState[1];

  var LAUNCH_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(LAUNCH_QUERY),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0),
      amount = _useState2[0],
      setAmount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      newData = _useState3[0],
      setNewData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      searched = _useState4[0],
      setSearched = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      filteredFlight = _useState5[0],
      setFilteredFlight = _useState5[1];

  var searchLaunch = function searchLaunch(allLaunch, flightNumber) {
    return Array.from(allLaunch).filter(function (launch) {
      return launch.flight_number === flightNumber;
    });
  };

  var handleSearchClick = function handleSearchClick() {
    if (error) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
        icon: "error",
        title: "Error",
        text: "".concat(error.message)
      });
    }

    if (loading) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
        title: "Loading!",
        html: "Please be patient...",
        timer: 3000,
        timerProgressBar: true,
        didOpen: function didOpen() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.showLoading();
          timerInterval = setInterval(function () {
            var content = sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.getContent();

            if (content) {
              var b = content.querySelector("b");

              if (b) {
                b.textContent = sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.getTimerLeft();
              }
            }
          }, 100);
        },
        willClose: function willClose() {
          clearInterval(timerInterval);
        }
      }).then(function (result) {
        /* Read more about handling dismissals below */
        if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.timer) {
          console.log("Should be ready now!");
        }
      });
    }

    if (!searched) {
      if (data) {
        setFilteredFlight(function (prev) {
          return [].concat(Object(C_Users_Andrew_Yang_Projects_Tutorials_SpaceX_Launch_Stats_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), Object(C_Users_Andrew_Yang_Projects_Tutorials_SpaceX_Launch_Stats_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(searchLaunch(Array.from(data.launches), Number(flight_id))));
        });
        setSearched(true);
      }
    } else {
      setSearched(false);
    }
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "btn btn-secondary",
      onClick: function onClick() {
        return router.push("/");
      },
      children: "Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "display-4 my-3 text-center",
      children: "Launch Search"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group d-flex flex-column",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Flight ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "number",
          className: "form-control",
          placeholder: "ID",
          disabled: searched,
          style: searched ? {
            cursor: "not-allowed"
          } : {
            cursor: "text"
          },
          onChange: function onChange(e) {
            if (!searched) {
              set_flightID(e.target.value);
            }
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          "class": "btn btn-primary mt-3 align-self-end",
          onClick: handleSearchClick,
          children: !searched ? "Search" : "Clear"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), searched && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: data && Array.from(filteredFlight).map(function (launch, index) {
        // <LaunchSearchResultCard launch={launch} id={index} />
        console.log(launch.mission_name);
      })
    }, void 0, false)]
  }, void 0, true);
}

_s(LaunchSearch, "w5G0sH2iVDZIBXLHfwFRpsurrrI=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = LaunchSearch;

var _c;

$RefreshReg$(_c, "LaunchSearch");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXVuY2hTZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiTGF1bmNoU2VhcmNoIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImZsaWdodF9pZCIsInNldF9mbGlnaHRJRCIsIkxBVU5DSF9RVUVSWSIsImdxbCIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImFtb3VudCIsInNldEFtb3VudCIsIm5ld0RhdGEiLCJzZXROZXdEYXRhIiwic2VhcmNoZWQiLCJzZXRTZWFyY2hlZCIsImZpbHRlcmVkRmxpZ2h0Iiwic2V0RmlsdGVyZWRGbGlnaHQiLCJzZWFyY2hMYXVuY2giLCJhbGxMYXVuY2giLCJmbGlnaHROdW1iZXIiLCJBcnJheSIsImZyb20iLCJmaWx0ZXIiLCJsYXVuY2giLCJmbGlnaHRfbnVtYmVyIiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJTd2FsIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInRleHQiLCJtZXNzYWdlIiwiaHRtbCIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJzaG93TG9hZGluZyIsInRpbWVySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiYiIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImdldFRpbWVyTGVmdCIsIndpbGxDbG9zZSIsImNsZWFySW50ZXJ2YWwiLCJ0aGVuIiwicmVzdWx0IiwiZGlzbWlzcyIsIkRpc21pc3NSZWFzb24iLCJjb25zb2xlIiwibG9nIiwicHJldiIsImxhdW5jaGVzIiwiTnVtYmVyIiwicm91dGVyIiwidXNlUm91dGVyIiwicHVzaCIsImN1cnNvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImluZGV4IiwibWlzc2lvbl9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxtQkFBTSxxQ0FGUjtBQUdFLGlCQUFPLEVBQUVyQyxpQkFIWDtBQUFBLG9CQUtHLENBQUNaLFFBQUQsR0FBWSxRQUFaLEdBQXVCO0FBTDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLEVBZ0NJQSxRQUFRLGlCQUNOO0FBQUEsZ0JBQ0dMLElBQUksSUFBSVksS0FBSyxDQUFDQyxJQUFOLENBQVdOLGNBQVgsRUFBMkJnRCxHQUEzQixDQUErQixVQUFDeEMsTUFBRCxFQUFTeUMsS0FBVCxFQUFtQjtBQUN6RDtBQUNBYixlQUFPLENBQUNDLEdBQVIsQ0FBWTdCLE1BQU0sQ0FBQzBDLFlBQW5CO0FBQ0QsT0FIUTtBQURYLHFCQWpDTjtBQUFBLGtCQURGO0FBNkNEOztHQTdIdUJuRSxZO1VBcUJXTyx1RCxFQTBEbEJvRCxxRDs7O0tBL0VPM0QsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYXVuY2hfc2VhcmNoLjdlNTIzYWVkOGRhOThkNjIwY2NkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGF1bmNoZXNDYXJkIGZyb20gXCIuL0xhdW5jaGVzQ2FyZFwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF1bmNoU2VhcmNoUmVzdWx0Q2FyZCBmcm9tIFwiLi9MYXVuY2hTZWFyY2hSZXN1bHRDYXJkXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhdW5jaFNlYXJjaChwcm9wcykge1xyXG4gIGNvbnN0IFtmbGlnaHRfaWQsIHNldF9mbGlnaHRJRF0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICB2YXIgTEFVTkNIX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IExhdW5jaFNlYXJjaFF1ZXJ5IHtcclxuICAgICAgbGF1bmNoZXMge1xyXG4gICAgICAgIGZsaWdodF9udW1iZXJcclxuICAgICAgICBtaXNzaW9uX25hbWVcclxuICAgICAgICBsYXVuY2hfZGF0ZV9sb2NhbFxyXG4gICAgICAgIGxhdW5jaF9zdWNjZXNzXHJcbiAgICAgICAgbGF1bmNoX3llYXJcclxuICAgICAgICByb2NrZXQge1xyXG4gICAgICAgICAgcm9ja2V0X2lkXHJcbiAgICAgICAgICByb2NrZXRfbmFtZVxyXG4gICAgICAgICAgcm9ja2V0X3R5cGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoTEFVTkNIX1FVRVJZKTtcclxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW25ld0RhdGEsIHNldE5ld0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWFyY2hlZCwgc2V0U2VhcmNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZEZsaWdodCwgc2V0RmlsdGVyZWRGbGlnaHRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBzZWFyY2hMYXVuY2ggPSAoYWxsTGF1bmNoLCBmbGlnaHROdW1iZXIpID0+IHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGFsbExhdW5jaCkuZmlsdGVyKGxhdW5jaCA9PiBsYXVuY2guZmxpZ2h0X251bWJlciA9PT0gZmxpZ2h0TnVtYmVyKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgdGV4dDogYCR7ZXJyb3IubWVzc2FnZX1gLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IFwiTG9hZGluZyFcIixcclxuICAgICAgICBodG1sOiBcIlBsZWFzZSBiZSBwYXRpZW50Li4uXCIsXHJcbiAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICBkaWRPcGVuOiAoKSA9PiB7XHJcbiAgICAgICAgICBTd2FsLnNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgICB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gU3dhbC5nZXRDb250ZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYiA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcImJcIik7XHJcbiAgICAgICAgICAgICAgaWYgKGIpIHtcclxuICAgICAgICAgICAgICAgIGIudGV4dENvbnRlbnQgPSBTd2FsLmdldFRpbWVyTGVmdCgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbGxDbG9zZTogKCkgPT4ge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvKiBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2FscyBiZWxvdyAqL1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gU3dhbC5EaXNtaXNzUmVhc29uLnRpbWVyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNob3VsZCBiZSByZWFkeSBub3chXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFzZWFyY2hlZCkge1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIHNldEZpbHRlcmVkRmxpZ2h0KHByZXYgPT4gWy4uLnByZXYsIC4uLnNlYXJjaExhdW5jaChBcnJheS5mcm9tKGRhdGEubGF1bmNoZXMpLCBOdW1iZXIoZmxpZ2h0X2lkKSlcclxuICAgICAgICBdKVxyXG4gICAgICAgIHNldFNlYXJjaGVkKHRydWUpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNlYXJjaGVkKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfT5cclxuICAgICAgICBCYWNrXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00IG15LTMgdGV4dC1jZW50ZXJcIj5MYXVuY2ggU2VhcmNoPC9oMT5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgPGxhYmVsPkZsaWdodCBJRDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSURcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17c2VhcmNoZWR9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzZWFyY2hlZCA/IHsgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCIgfSA6IHsgY3Vyc29yOiBcInRleHRcIiB9fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXNlYXJjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRfZmxpZ2h0SUQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtdC0zIGFsaWduLXNlbGYtZW5kXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNoQ2xpY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHshc2VhcmNoZWQgPyBcIlNlYXJjaFwiIDogXCJDbGVhclwifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIHtcclxuICAgICAgICBzZWFyY2hlZCAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7ZGF0YSAmJiBBcnJheS5mcm9tKGZpbHRlcmVkRmxpZ2h0KS5tYXAoKGxhdW5jaCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAvLyA8TGF1bmNoU2VhcmNoUmVzdWx0Q2FyZCBsYXVuY2g9e2xhdW5jaH0gaWQ9e2luZGV4fSAvPlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxhdW5jaC5taXNzaW9uX25hbWUpO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==