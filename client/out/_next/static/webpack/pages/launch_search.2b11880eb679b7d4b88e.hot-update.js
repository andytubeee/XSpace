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
/* harmony import */ var C_Users_Andrew_Yang_Projects_Tutorials_SpaceX_Launch_Stats_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LaunchesCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LaunchesCard */ "./components/LaunchesCard.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\Andrew Yang\\Projects\\Tutorials\\SpaceX Launch Stats\\client\\components\\LaunchSearchBar.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_Andrew_Yang_Projects_Tutorials_SpaceX_Launch_Stats_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query LaunchSearchQuery {\n      launches {\n        flight_number\n        mission_name\n        launch_date_local\n        launch_success\n        launch_year\n        rocket {\n          rocket_id\n          rocket_name\n          rocket_type\n        }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






function LaunchSearch(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(1),
      flight_id = _useState[0],
      set_flightID = _useState[1];

  var LAUNCH_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(LAUNCH_QUERY),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      amount = _useState2[0],
      setAmount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      newData = _useState3[0],
      setNewData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      searched = _useState4[0],
      setSearched = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      filteredFlight = _useState5[0],
      setFilteredFlight = _useState5[1];

  var searchLaunch = function searchLaunch(allLaunch, flightNumber) {
    return Array.from(allLaunch).filter(function (launch) {
      return launch.flight_number === flightNumber;
    });
  };

  var handleSearchClick = function handleSearchClick() {
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

    if (!searched) {
      if (data) {
        // console.log(data.launches);
        searchLaunch(Array.from(data.launches).splice(0, 10), 5);
        setFilteredFlight(function (prev) {
          return prev;
        });
        setSearched(true);
      }
    } else {
      setSearched(false);
    }
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
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
    }, this), searched && {}]
  }, void 0, true);
}

_s(LaunchSearch, "w5G0sH2iVDZIBXLHfwFRpsurrrI=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXVuY2hTZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiTGF1bmNoU2VhcmNoIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImZsaWdodF9pZCIsInNldF9mbGlnaHRJRCIsIkxBVU5DSF9RVUVSWSIsImdxbCIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImFtb3VudCIsInNldEFtb3VudCIsIm5ld0RhdGEiLCJzZXROZXdEYXRhIiwic2VhcmNoZWQiLCJzZXRTZWFyY2hlZCIsImZpbHRlcmVkRmxpZ2h0Iiwic2V0RmlsdGVyZWRGbGlnaHQiLCJzZWFyY2hMYXVuY2giLCJhbGxMYXVuY2giLCJmbGlnaHROdW1iZXIiLCJBcnJheSIsImZyb20iLCJmaWx0ZXIiLCJsYXVuY2giLCJmbGlnaHRfbnVtYmVyIiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJTd2FsIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInRleHQiLCJtZXNzYWdlIiwiaHRtbCIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJzaG93TG9hZGluZyIsInRpbWVySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiYiIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImdldFRpbWVyTGVmdCIsIndpbGxDbG9zZSIsImNsZWFySW50ZXJ2YWwiLCJ0aGVuIiwicmVzdWx0IiwiZGlzbWlzcyIsIkRpc21pc3NSZWFzb24iLCJjb25zb2xlIiwibG9nIiwibGF1bmNoZXMiLCJzcGxpY2UiLCJwcmV2Iiwicm91dGVyIiwidXNlUm91dGVyIiwicHVzaCIsImN1cnNvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0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QyxRQURQO0FBRUUsbUJBQU0scUNBRlI7QUFHRSxpQkFBTyxFQUFFckMsaUJBSFg7QUFBQSxvQkFLRyxDQUFDWixRQUFELEdBQVksUUFBWixHQUF1QjtBQUwxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixFQWdDSUEsUUFBUSxJQUFJLEVBaENoQjtBQUFBLGtCQURGO0FBd0NEOztHQXpIdUJmLFk7VUFxQldPLHVELEVBMkRsQm9ELHFEOzs7S0FoRk8zRCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaF9zZWFyY2guMmIxMTg4MGViNjc5YjdkNGI4OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMYXVuY2hlc0NhcmQgZnJvbSBcIi4vTGF1bmNoZXNDYXJkXCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhdW5jaFNlYXJjaChwcm9wcykge1xyXG4gIGNvbnN0IFtmbGlnaHRfaWQsIHNldF9mbGlnaHRJRF0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICB2YXIgTEFVTkNIX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IExhdW5jaFNlYXJjaFF1ZXJ5IHtcclxuICAgICAgbGF1bmNoZXMge1xyXG4gICAgICAgIGZsaWdodF9udW1iZXJcclxuICAgICAgICBtaXNzaW9uX25hbWVcclxuICAgICAgICBsYXVuY2hfZGF0ZV9sb2NhbFxyXG4gICAgICAgIGxhdW5jaF9zdWNjZXNzXHJcbiAgICAgICAgbGF1bmNoX3llYXJcclxuICAgICAgICByb2NrZXQge1xyXG4gICAgICAgICAgcm9ja2V0X2lkXHJcbiAgICAgICAgICByb2NrZXRfbmFtZVxyXG4gICAgICAgICAgcm9ja2V0X3R5cGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoTEFVTkNIX1FVRVJZKTtcclxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW25ld0RhdGEsIHNldE5ld0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWFyY2hlZCwgc2V0U2VhcmNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZEZsaWdodCwgc2V0RmlsdGVyZWRGbGlnaHRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBzZWFyY2hMYXVuY2ggPSAoYWxsTGF1bmNoLCBmbGlnaHROdW1iZXIpID0+IHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGFsbExhdW5jaCkuZmlsdGVyKGxhdW5jaCA9PiBsYXVuY2guZmxpZ2h0X251bWJlciA9PT0gZmxpZ2h0TnVtYmVyKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgdGV4dDogYCR7ZXJyb3IubWVzc2FnZX1gLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IFwiTG9hZGluZyFcIixcclxuICAgICAgICBodG1sOiBcIlBsZWFzZSBiZSBwYXRpZW50Li4uXCIsXHJcbiAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICBkaWRPcGVuOiAoKSA9PiB7XHJcbiAgICAgICAgICBTd2FsLnNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgICB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gU3dhbC5nZXRDb250ZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYiA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcImJcIik7XHJcbiAgICAgICAgICAgICAgaWYgKGIpIHtcclxuICAgICAgICAgICAgICAgIGIudGV4dENvbnRlbnQgPSBTd2FsLmdldFRpbWVyTGVmdCgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbGxDbG9zZTogKCkgPT4ge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvKiBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2FscyBiZWxvdyAqL1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gU3dhbC5EaXNtaXNzUmVhc29uLnRpbWVyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNob3VsZCBiZSByZWFkeSBub3chXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFzZWFyY2hlZCkge1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEubGF1bmNoZXMpO1xyXG4gICAgICAgIHNlYXJjaExhdW5jaChBcnJheS5mcm9tKGRhdGEubGF1bmNoZXMpLnNwbGljZSgwLCAxMCksIDUpXHJcbiAgICAgICAgc2V0RmlsdGVyZWRGbGlnaHQocHJldj0+cHJldilcclxuICAgICAgICBzZXRTZWFyY2hlZCh0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTZWFyY2hlZChmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aHIgLz5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0+XHJcbiAgICAgICAgQmFja1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCBteS0zIHRleHQtY2VudGVyXCI+TGF1bmNoIFNlYXJjaDwvaDE+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxsYWJlbD5GbGlnaHQgSUQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIklEXCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3NlYXJjaGVkfVxyXG4gICAgICAgICAgICBzdHlsZT17c2VhcmNoZWQgPyB7IGN1cnNvcjogXCJub3QtYWxsb3dlZFwiIH0gOiB7IGN1cnNvcjogXCJ0ZXh0XCIgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzZWFyY2hlZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0X2ZsaWdodElEKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbXQtMyBhbGlnbi1zZWxmLWVuZFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaENsaWNrfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7IXNlYXJjaGVkID8gXCJTZWFyY2hcIiA6IFwiQ2xlYXJcIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgc2VhcmNoZWQgJiYge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=