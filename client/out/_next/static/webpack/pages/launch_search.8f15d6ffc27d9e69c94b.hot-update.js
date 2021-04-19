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

  var searchLaunch = function searchLaunch(allLaunch, flightNumber) {
    log;
    Array(allLaunch).forEach(function (launch) {
      console.log(launch.flight_number);
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
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "btn btn-secondary",
      onClick: function onClick() {
        return router.push("/");
      },
      children: "Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "display-4 my-3 text-center",
      children: "Launch Search"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group d-flex flex-column",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Flight ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
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
          lineNumber: 101,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          "class": "btn btn-primary mt-3 align-self-end",
          onClick: handleSearchClick,
          children: !searched ? "Search" : "Clear"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(LaunchSearch, "BK7CGyh3K3QTiwyyYbLbWjNZkgE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXVuY2hTZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiTGF1bmNoU2VhcmNoIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImZsaWdodF9pZCIsInNldF9mbGlnaHRJRCIsIkxBVU5DSF9RVUVSWSIsImdxbCIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImFtb3VudCIsInNldEFtb3VudCIsIm5ld0RhdGEiLCJzZXROZXdEYXRhIiwic2VhcmNoZWQiLCJzZXRTZWFyY2hlZCIsInNlYXJjaExhdW5jaCIsImFsbExhdW5jaCIsImZsaWdodE51bWJlciIsImxvZyIsIkFycmF5IiwiZm9yRWFjaCIsImxhdW5jaCIsImNvbnNvbGUiLCJmbGlnaHRfbnVtYmVyIiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJTd2FsIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInRleHQiLCJtZXNzYWdlIiwiaHRtbCIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJzaG93TG9hZGluZyIsInRpbWVySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiYiIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImdldFRpbWVyTGVmdCIsIndpbGxDbG9zZSIsImNsZWFySW50ZXJ2YWwiLCJ0aGVuIiwicmVzdWx0IiwiZGlzbWlzcyIsIkRpc21pc3NSZWFzb24iLCJmcm9tIiwibGF1bmNoZXMiLCJzcGxpY2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwdXNoIiwiY3Vyc29yIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsQ0FBRCxD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QkFERjtBQWlDRDs7R0FuSHVCZixZO1VBcUJXTyx1RCxFQTREbEJpRCxxRDs7O0tBakZPeEQsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYXVuY2hfc2VhcmNoLjhmMTVkNmZmYzI3ZDllNjljOTRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGF1bmNoZXNDYXJkIGZyb20gXCIuL0xhdW5jaGVzQ2FyZFwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXVuY2hTZWFyY2gocHJvcHMpIHtcclxuICBjb25zdCBbZmxpZ2h0X2lkLCBzZXRfZmxpZ2h0SURdID0gdXNlU3RhdGUoMSlcclxuXHJcbiAgdmFyIExBVU5DSF9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBMYXVuY2hTZWFyY2hRdWVyeSB7XHJcbiAgICAgIGxhdW5jaGVzIHtcclxuICAgICAgICBmbGlnaHRfbnVtYmVyXHJcbiAgICAgICAgbWlzc2lvbl9uYW1lXHJcbiAgICAgICAgbGF1bmNoX2RhdGVfbG9jYWxcclxuICAgICAgICBsYXVuY2hfc3VjY2Vzc1xyXG4gICAgICAgIGxhdW5jaF95ZWFyXHJcbiAgICAgICAgcm9ja2V0IHtcclxuICAgICAgICAgIHJvY2tldF9pZFxyXG4gICAgICAgICAgcm9ja2V0X25hbWVcclxuICAgICAgICAgIHJvY2tldF90eXBlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcblxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KExBVU5DSF9RVUVSWSk7XHJcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtuZXdEYXRhLCBzZXROZXdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoZWQsIHNldFNlYXJjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoTGF1bmNoID0gKGFsbExhdW5jaCwgZmxpZ2h0TnVtYmVyKSA9PiB7XHJcbiAgICBsb2dcclxuICAgIEFycmF5KGFsbExhdW5jaCkuZm9yRWFjaChsYXVuY2ggPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhsYXVuY2guZmxpZ2h0X251bWJlcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgdGV4dDogYCR7ZXJyb3IubWVzc2FnZX1gLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IFwiTG9hZGluZyFcIixcclxuICAgICAgICBodG1sOiBcIlBsZWFzZSBiZSBwYXRpZW50Li4uXCIsXHJcbiAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICBkaWRPcGVuOiAoKSA9PiB7XHJcbiAgICAgICAgICBTd2FsLnNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgICB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gU3dhbC5nZXRDb250ZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYiA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcImJcIik7XHJcbiAgICAgICAgICAgICAgaWYgKGIpIHtcclxuICAgICAgICAgICAgICAgIGIudGV4dENvbnRlbnQgPSBTd2FsLmdldFRpbWVyTGVmdCgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbGxDbG9zZTogKCkgPT4ge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvKiBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2FscyBiZWxvdyAqL1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gU3dhbC5EaXNtaXNzUmVhc29uLnRpbWVyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNob3VsZCBiZSByZWFkeSBub3chXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFzZWFyY2hlZCkge1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEubGF1bmNoZXMpO1xyXG4gICAgICAgIHNlYXJjaExhdW5jaChBcnJheS5mcm9tKGRhdGEubGF1bmNoZXMpLnNwbGljZSgwLCAxMCksIDUpXHJcbiAgICAgICAgc2V0U2VhcmNoZWQodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2VhcmNoZWQoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9PlxyXG4gICAgICAgIEJhY2tcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgbXktMyB0ZXh0LWNlbnRlclwiPkxhdW5jaCBTZWFyY2g8L2gxPlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICA8bGFiZWw+RmxpZ2h0IElEPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJRFwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWFyY2hlZH1cclxuICAgICAgICAgICAgc3R5bGU9e3NlYXJjaGVkID8geyBjdXJzb3I6IFwibm90LWFsbG93ZWRcIiB9IDogeyBjdXJzb3I6IFwidGV4dFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghc2VhcmNoZWQpIHtcclxuICAgICAgICAgICAgICAgIHNldF9mbGlnaHRJRChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTMgYWxpZ24tc2VsZi1lbmRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2hDbGlja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgeyFzZWFyY2hlZCA/IFwiU2VhcmNoXCIgOiBcIkNsZWFyXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9