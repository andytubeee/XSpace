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
/* harmony import */ var _LaunchSearchResultCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LaunchSearchResultCard */ "./components/LaunchSearchResultCard.js");




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
    console.log(Array.from(allLaunch).filter(function (launch) {
      return launch.flight_number === flightNumber;
    }));
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
        // setFilteredFlight(prev => [...prev, ...searchLaunch(Array.from(data.launches), flight_id)])
        console.log(flight_id === 5);
        searchLaunch(Array.from(data.launches), flight_id);
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
    }, this), searched && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: data && Array.from(filteredFlight).map(function (launch, index) {
        // <LaunchSearchResultCard launch={launch} id={index} />
        console.log(launch);
      })
    }, void 0, false)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXVuY2hTZWFyY2hCYXIuanMiXSwibmFtZXMiOlsiTGF1bmNoU2VhcmNoIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImZsaWdodF9pZCIsInNldF9mbGlnaHRJRCIsIkxBVU5DSF9RVUVSWSIsImdxbCIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImFtb3VudCIsInNldEFtb3VudCIsIm5ld0RhdGEiLCJzZXROZXdEYXRhIiwic2VhcmNoZWQiLCJzZXRTZWFyY2hlZCIsImZpbHRlcmVkRmxpZ2h0Iiwic2V0RmlsdGVyZWRGbGlnaHQiLCJzZWFyY2hMYXVuY2giLCJhbGxMYXVuY2giLCJmbGlnaHROdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiQXJyYXkiLCJmcm9tIiwiZmlsdGVyIiwibGF1bmNoIiwiZmxpZ2h0X251bWJlciIsImhhbmRsZVNlYXJjaENsaWNrIiwiU3dhbCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJ0ZXh0IiwibWVzc2FnZSIsImh0bWwiLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwic2hvd0xvYWRpbmciLCJ0aW1lckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImIiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJnZXRUaW1lckxlZnQiLCJ3aWxsQ2xvc2UiLCJjbGVhckludGVydmFsIiwidGhlbiIsInJlc3VsdCIsImRpc21pc3MiLCJEaXNtaXNzUmVhc29uIiwibGF1bmNoZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwdXNoIiwiY3Vyc29yIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSWUsU0FBU0EsWUFBVCxDQUFzQkMs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RUFBRWpDLGlCQUhYO0FBQUEsb0JBS0csQ0FBQ2QsUUFBRCxHQUFZLFFBQVosR0FBdUI7QUFMMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsRUFnQ0lBLFFBQVEsaUJBQ047QUFBQSxnQkFDR0wsSUFBSSxJQUFJYyxLQUFLLENBQUNDLElBQU4sQ0FBV1IsY0FBWCxFQUEyQjhDLEdBQTNCLENBQStCLFVBQUNwQyxNQUFELEVBQVNxQyxLQUFULEVBQW1CO0FBQ3pEO0FBQ0ExQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUksTUFBWjtBQUNELE9BSFE7QUFEWCxxQkFqQ047QUFBQSxrQkFERjtBQTZDRDs7R0E5SHVCM0IsWTtVQXFCV08sdUQsRUEyRGxCa0QscUQ7OztLQWhGT3pELFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGF1bmNoX3NlYXJjaC4wOWRkM2RkMDkyMDQ2MzA0NmY1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExhdW5jaGVzQ2FyZCBmcm9tIFwiLi9MYXVuY2hlc0NhcmRcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExhdW5jaFNlYXJjaFJlc3VsdENhcmQgZnJvbSBcIi4vTGF1bmNoU2VhcmNoUmVzdWx0Q2FyZFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXVuY2hTZWFyY2gocHJvcHMpIHtcclxuICBjb25zdCBbZmxpZ2h0X2lkLCBzZXRfZmxpZ2h0SURdID0gdXNlU3RhdGUoMSlcclxuXHJcbiAgdmFyIExBVU5DSF9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBMYXVuY2hTZWFyY2hRdWVyeSB7XHJcbiAgICAgIGxhdW5jaGVzIHtcclxuICAgICAgICBmbGlnaHRfbnVtYmVyXHJcbiAgICAgICAgbWlzc2lvbl9uYW1lXHJcbiAgICAgICAgbGF1bmNoX2RhdGVfbG9jYWxcclxuICAgICAgICBsYXVuY2hfc3VjY2Vzc1xyXG4gICAgICAgIGxhdW5jaF95ZWFyXHJcbiAgICAgICAgcm9ja2V0IHtcclxuICAgICAgICAgIHJvY2tldF9pZFxyXG4gICAgICAgICAgcm9ja2V0X25hbWVcclxuICAgICAgICAgIHJvY2tldF90eXBlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcblxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KExBVU5DSF9RVUVSWSk7XHJcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtuZXdEYXRhLCBzZXROZXdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoZWQsIHNldFNlYXJjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZmlsdGVyZWRGbGlnaHQsIHNldEZpbHRlcmVkRmxpZ2h0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoTGF1bmNoID0gKGFsbExhdW5jaCwgZmxpZ2h0TnVtYmVyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhBcnJheS5mcm9tKGFsbExhdW5jaCkuZmlsdGVyKGxhdW5jaCA9PiBsYXVuY2guZmxpZ2h0X251bWJlciA9PT0gZmxpZ2h0TnVtYmVyKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hDbGljayA9ICgpID0+IHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICAgIHRleHQ6IGAke2Vycm9yLm1lc3NhZ2V9YCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiBcIkxvYWRpbmchXCIsXHJcbiAgICAgICAgaHRtbDogXCJQbGVhc2UgYmUgcGF0aWVudC4uLlwiLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKCkgPT4ge1xyXG4gICAgICAgICAgU3dhbC5zaG93TG9hZGluZygpO1xyXG4gICAgICAgICAgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IFN3YWwuZ2V0Q29udGVudCgpO1xyXG4gICAgICAgICAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGIgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJiXCIpO1xyXG4gICAgICAgICAgICAgIGlmIChiKSB7XHJcbiAgICAgICAgICAgICAgICBiLnRleHRDb250ZW50ID0gU3dhbC5nZXRUaW1lckxlZnQoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsQ2xvc2U6ICgpID0+IHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJbnRlcnZhbCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLyogUmVhZCBtb3JlIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHMgYmVsb3cgKi9cclxuICAgICAgICBpZiAocmVzdWx0LmRpc21pc3MgPT09IFN3YWwuRGlzbWlzc1JlYXNvbi50aW1lcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTaG91bGQgYmUgcmVhZHkgbm93IVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghc2VhcmNoZWQpIHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAvLyBzZXRGaWx0ZXJlZEZsaWdodChwcmV2ID0+IFsuLi5wcmV2LCAuLi5zZWFyY2hMYXVuY2goQXJyYXkuZnJvbShkYXRhLmxhdW5jaGVzKSwgZmxpZ2h0X2lkKV0pXHJcbiAgICAgICAgY29uc29sZS5sb2coZmxpZ2h0X2lkID09PSA1KTtcclxuICAgICAgICBzZWFyY2hMYXVuY2goQXJyYXkuZnJvbShkYXRhLmxhdW5jaGVzKSwgZmxpZ2h0X2lkKVxyXG4gICAgICAgIHNldFNlYXJjaGVkKHRydWUpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNlYXJjaGVkKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfT5cclxuICAgICAgICBCYWNrXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00IG15LTMgdGV4dC1jZW50ZXJcIj5MYXVuY2ggU2VhcmNoPC9oMT5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgPGxhYmVsPkZsaWdodCBJRDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSURcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17c2VhcmNoZWR9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzZWFyY2hlZCA/IHsgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCIgfSA6IHsgY3Vyc29yOiBcInRleHRcIiB9fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXNlYXJjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRfZmxpZ2h0SUQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtdC0zIGFsaWduLXNlbGYtZW5kXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNoQ2xpY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHshc2VhcmNoZWQgPyBcIlNlYXJjaFwiIDogXCJDbGVhclwifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIHtcclxuICAgICAgICBzZWFyY2hlZCAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7ZGF0YSAmJiBBcnJheS5mcm9tKGZpbHRlcmVkRmxpZ2h0KS5tYXAoKGxhdW5jaCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAvLyA8TGF1bmNoU2VhcmNoUmVzdWx0Q2FyZCBsYXVuY2g9e2xhdW5jaH0gaWQ9e2luZGV4fSAvPlxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxhdW5jaCk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9