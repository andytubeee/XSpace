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
    console.log(Array.from(allLaunch).filter(function (launch) {
      return launch.flight_number === flightNumber;
    }));
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
        console.log(launch);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXVuY2hTZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiTGF1bmNoU2VhcmNoIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImZsaWdodF9pZCIsInNldF9mbGlnaHRJRCIsIkxBVU5DSF9RVUVSWSIsImdxbCIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImFtb3VudCIsInNldEFtb3VudCIsIm5ld0RhdGEiLCJzZXROZXdEYXRhIiwic2VhcmNoZWQiLCJzZXRTZWFyY2hlZCIsImZpbHRlcmVkRmxpZ2h0Iiwic2V0RmlsdGVyZWRGbGlnaHQiLCJzZWFyY2hMYXVuY2giLCJhbGxMYXVuY2giLCJmbGlnaHROdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiQXJyYXkiLCJmcm9tIiwiZmlsdGVyIiwibGF1bmNoIiwiZmxpZ2h0X251bWJlciIsImhhbmRsZVNlYXJjaENsaWNrIiwiU3dhbCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJ0ZXh0IiwibWVzc2FnZSIsImh0bWwiLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwic2hvd0xvYWRpbmciLCJ0aW1lckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImIiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJnZXRUaW1lckxlZnQiLCJ3aWxsQ2xvc2UiLCJjbGVhckludGVydmFsIiwidGhlbiIsInJlc3VsdCIsImRpc21pc3MiLCJEaXNtaXNzUmVhc29uIiwicHJldiIsImxhdW5jaGVzIiwiTnVtYmVyIiwicm91dGVyIiwidXNlUm91dGVyIiwicHVzaCIsImN1cnNvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSWUs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O0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxtQkFBTSxxQ0FGUjtBQUdFLGlCQUFPLEVBQUVuQyxpQkFIWDtBQUFBLG9CQUtHLENBQUNkLFFBQUQsR0FBWSxRQUFaLEdBQXVCO0FBTDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLEVBZ0NJQSxRQUFRLGlCQUNOO0FBQUEsZ0JBQ0dMLElBQUksSUFBSWMsS0FBSyxDQUFDQyxJQUFOLENBQVdSLGNBQVgsRUFBMkJnRCxHQUEzQixDQUErQixVQUFDdEMsTUFBRCxFQUFTdUMsS0FBVCxFQUFtQjtBQUN6RDtBQUNBNUMsZUFBTyxDQUFDQyxHQUFSLENBQVlJLE1BQVo7QUFDRCxPQUhRO0FBRFgscUJBakNOO0FBQUEsa0JBREY7QUE2Q0Q7O0dBN0h1QjNCLFk7VUFxQldPLHVELEVBMERsQm9ELHFEOzs7S0EvRU8zRCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaF9zZWFyY2guODQzZGM4YTEyNmIwY2U3YzU1YzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMYXVuY2hlc0NhcmQgZnJvbSBcIi4vTGF1bmNoZXNDYXJkXCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXVuY2hTZWFyY2hSZXN1bHRDYXJkIGZyb20gXCIuL0xhdW5jaFNlYXJjaFJlc3VsdENhcmRcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF1bmNoU2VhcmNoKHByb3BzKSB7XHJcbiAgY29uc3QgW2ZsaWdodF9pZCwgc2V0X2ZsaWdodElEXSA9IHVzZVN0YXRlKDEpXHJcblxyXG4gIHZhciBMQVVOQ0hfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgTGF1bmNoU2VhcmNoUXVlcnkge1xyXG4gICAgICBsYXVuY2hlcyB7XHJcbiAgICAgICAgZmxpZ2h0X251bWJlclxyXG4gICAgICAgIG1pc3Npb25fbmFtZVxyXG4gICAgICAgIGxhdW5jaF9kYXRlX2xvY2FsXHJcbiAgICAgICAgbGF1bmNoX3N1Y2Nlc3NcclxuICAgICAgICBsYXVuY2hfeWVhclxyXG4gICAgICAgIHJvY2tldCB7XHJcbiAgICAgICAgICByb2NrZXRfaWRcclxuICAgICAgICAgIHJvY2tldF9uYW1lXHJcbiAgICAgICAgICByb2NrZXRfdHlwZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5cclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShMQVVOQ0hfUVVFUlkpO1xyXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbmV3RGF0YSwgc2V0TmV3RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaGVkLCBzZXRTZWFyY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZpbHRlcmVkRmxpZ2h0LCBzZXRGaWx0ZXJlZEZsaWdodF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaExhdW5jaCA9IChhbGxMYXVuY2gsIGZsaWdodE51bWJlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coQXJyYXkuZnJvbShhbGxMYXVuY2gpLmZpbHRlcihsYXVuY2ggPT4gbGF1bmNoLmZsaWdodF9udW1iZXIgPT09IGZsaWdodE51bWJlcikpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICB0ZXh0OiBgJHtlcnJvci5tZXNzYWdlfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICB0aXRsZTogXCJMb2FkaW5nIVwiLFxyXG4gICAgICAgIGh0bWw6IFwiUGxlYXNlIGJlIHBhdGllbnQuLi5cIixcclxuICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgIGRpZE9wZW46ICgpID0+IHtcclxuICAgICAgICAgIFN3YWwuc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICAgIHRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBTd2FsLmdldENvbnRlbnQoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBiID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiYlwiKTtcclxuICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgYi50ZXh0Q29udGVudCA9IFN3YWwuZ2V0VGltZXJMZWZ0KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbENsb3NlOiAoKSA9PiB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8qIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzIGJlbG93ICovXHJcbiAgICAgICAgaWYgKHJlc3VsdC5kaXNtaXNzID09PSBTd2FsLkRpc21pc3NSZWFzb24udGltZXIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2hvdWxkIGJlIHJlYWR5IG5vdyFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXNlYXJjaGVkKSB7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgc2V0RmlsdGVyZWRGbGlnaHQocHJldiA9PiBbLi4ucHJldiwgLi4uc2VhcmNoTGF1bmNoKEFycmF5LmZyb20oZGF0YS5sYXVuY2hlcyksIE51bWJlcihmbGlnaHRfaWQpKVxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgc2V0U2VhcmNoZWQodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2VhcmNoZWQoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9PlxyXG4gICAgICAgIEJhY2tcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgbXktMyB0ZXh0LWNlbnRlclwiPkxhdW5jaCBTZWFyY2g8L2gxPlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICA8bGFiZWw+RmxpZ2h0IElEPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJRFwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWFyY2hlZH1cclxuICAgICAgICAgICAgc3R5bGU9e3NlYXJjaGVkID8geyBjdXJzb3I6IFwibm90LWFsbG93ZWRcIiB9IDogeyBjdXJzb3I6IFwidGV4dFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghc2VhcmNoZWQpIHtcclxuICAgICAgICAgICAgICAgIHNldF9mbGlnaHRJRChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTMgYWxpZ24tc2VsZi1lbmRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2hDbGlja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgeyFzZWFyY2hlZCA/IFwiU2VhcmNoXCIgOiBcIkNsZWFyXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHNlYXJjaGVkICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtkYXRhICYmIEFycmF5LmZyb20oZmlsdGVyZWRGbGlnaHQpLm1hcCgobGF1bmNoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIDxMYXVuY2hTZWFyY2hSZXN1bHRDYXJkIGxhdW5jaD17bGF1bmNofSBpZD17aW5kZXh9IC8+XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobGF1bmNoKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=