webpackHotUpdate_N_E("pages/launch_search",{

/***/ "./components/LaunchSearchResultCard.js":
/*!**********************************************!*\
  !*** ./components/LaunchSearchResultCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LaunchSearchResultCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\Andrew Yang\\Projects\\Tutorials\\SpaceX Launch Stats\\client\\components\\LaunchSearchResultCard.js";
function LaunchSearchResultCard(props) {
  var _props$launch = props.launch,
      mission_name = _props$launch.mission_name,
      launch_year = _props$launch.launch_year,
      launch_success = _props$launch.launch_success,
      launch_date_local = _props$launch.launch_date_local;
  var _props$launch$rocket = props.launch.rocket,
      rocket_id = _props$launch$rocket.rocket_id,
      rocket_name = _props$launch$rocket.rocket_name,
      rocket_type = _props$launch$rocket.rocket_type;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      style: {
        marginTop: 100,
        mar: mar
      },
      children: "This is what I found: "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "border mb-3 rounded p-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Mission Name:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), " ", mission_name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Launch Year:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), " ", launch_year]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Launch Date:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), " ", launch_date_local]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), launch_success != null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Launch Success:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: launch_success ? "text-success" : "text-danger",
          children: capitalizeFirstLetter(launch_success.toString())
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }, this), launch_success == null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Launch Success:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "text-secondary",
          children: "Null"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        "class": "btn btn-info",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#rocketInfo".concat(props.id),
        "aria-expanded": "false",
        "aria-controls": "rocketInfo",
        children: "View Rocket Info"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "collapse mt-4",
        id: "rocketInfo".concat(props.id),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "Rocket ID:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), " ", rocket_id]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "Rocket Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), " ", rocket_name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "Rocket Type:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this), " ", rocket_type]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
_c = LaunchSearchResultCard;

var _c;

$RefreshReg$(_c, "LaunchSearchResultCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXVuY2hTZWFyY2hSZXN1bHRDYXJkLmpzIl0sIm5hbWVzIjpbIkxhdW5jaFNlYXJjaFJlc3VsdENhcmQiLCJwcm9wcyIsImxhdW5jaCIsIm1pc3Npb25fbmFtZSIsImxhdW5jaF95ZWFyIiwibGF1bmNoX3N1Y2Nlc3MiLCJsYXVuY2hfZGF0ZV9sb2NhbCIsInJvY2tldCIsInJvY2tldF9pZCIsInJvY2tldF9uYW1lIiwicm9ja2V0X3R5cGUiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwibWFyZ2luVG9wIiwibWFyIiwidG9TdHJpbmciLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxzQkFBVCxDQUFnQ0MsS0FBaEMsRUFBdUM7QUFBQSxzQkFNOUNBLEtBQUssQ0FBQ0MsTUFOd0M7QUFBQSxNQUU5Q0MsWUFGOEMsaUJBRTlDQSxZQUY4QztBQUFBLE1BRzlDQyxXQUg4QyxpQkFHOUNBLFdBSDhDO0FBQUEsTUFJOUNDLGNBSjhDLGlCQUk5Q0EsY0FKOEM7QUFBQSxNQUs5Q0MsaUJBTDhDLGlCQUs5Q0EsaUJBTDhDO0FBQUEsNkJBT0ZMLEtBQUssQ0FBQ0MsTUFBTixDQUFhSyxNQVBYO0FBQUEsTUFPMUNDLFNBUDBDLHdCQU8xQ0EsU0FQMEM7QUFBQSxNQU8vQkMsV0FQK0Isd0JBTy9CQSxXQVArQjtBQUFBLE1BT2xCQyxXQVBrQix3QkFPbEJBLFdBUGtCOztBQVNsRCxXQUFTQyxxQkFBVCxDQUErQkMsTUFBL0IsRUFBdUM7QUFDbkMsV0FBT0EsTUFBTSxDQUFDQyxNQUFQLENBQWMsQ0FBZCxFQUFpQkMsV0FBakIsS0FBaUNGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhLENBQWIsQ0FBeEM7QUFDSDs7QUFDRCxzQkFDSTtBQUFBLDRCQUNJO0FBQUksV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUUsR0FBYjtBQUFrQkMsV0FBRyxFQUFIQTtBQUFsQixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBQyx5QkFBZjtBQUFBLDhCQUNJO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosT0FDb0NkLFlBRHBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixPQUNtQ0MsV0FEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFPSTtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLE9BQ21DRSxpQkFEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEosRUFVS0QsY0FBYyxJQUFJLElBQWxCLGlCQUNHO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFDcUMsR0FEckMsZUFFSTtBQUFNLG1CQUFTLEVBQUVBLGNBQWMsR0FBRyxjQUFILEdBQW9CLGFBQW5EO0FBQUEsb0JBQ0tNLHFCQUFxQixDQUFDTixjQUFjLENBQUNhLFFBQWYsRUFBRDtBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhSLEVBa0JLYixjQUFjLElBQUksSUFBbEIsaUJBQ0c7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUNxQyxHQURyQyxlQUVJO0FBQU0sbUJBQVMsRUFBQyxnQkFBaEI7QUFBQSxvQkFBa0M7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQlIsZUF5Qkk7QUFDSSxpQkFBTSxjQURWO0FBRUksWUFBSSxFQUFDLFFBRlQ7QUFHSSwwQkFBZSxVQUhuQjtBQUlJLCtDQUE4QkosS0FBSyxDQUFDa0IsRUFBcEMsQ0FKSjtBQUtJLHlCQUFjLE9BTGxCO0FBTUkseUJBQWMsWUFObEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QkosZUFtQ0k7QUFBSyxpQkFBTSxlQUFYO0FBQTJCLFVBQUUsc0JBQWVsQixLQUFLLENBQUNrQixFQUFyQixDQUE3QjtBQUFBLGdDQUNJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosT0FDaUNYLFNBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosT0FDbUNDLFdBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQU9JO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosT0FDbUNDLFdBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQW9ESDtLQWhFdUJWLHNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaF9zZWFyY2guMWQ4NWJkODYxMjYzYWY1YzU5ZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhdW5jaFNlYXJjaFJlc3VsdENhcmQocHJvcHMpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBtaXNzaW9uX25hbWUsXHJcbiAgICAgICAgbGF1bmNoX3llYXIsXHJcbiAgICAgICAgbGF1bmNoX3N1Y2Nlc3MsXHJcbiAgICAgICAgbGF1bmNoX2RhdGVfbG9jYWwsXHJcbiAgICB9ID0gcHJvcHMubGF1bmNoO1xyXG4gICAgY29uc3QgeyByb2NrZXRfaWQsIHJvY2tldF9uYW1lLCByb2NrZXRfdHlwZSB9ID0gcHJvcHMubGF1bmNoLnJvY2tldDtcclxuXHJcbiAgICBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpblRvcDogMTAwLCBtYXIgfX0+VGhpcyBpcyB3aGF0IEkgZm91bmQ6IDwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIG1iLTMgcm91bmRlZCBwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWlzc2lvbiBOYW1lOjwvc3Ryb25nPiB7bWlzc2lvbl9uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5MYXVuY2ggWWVhcjo8L3N0cm9uZz4ge2xhdW5jaF95ZWFyfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5MYXVuY2ggRGF0ZTo8L3N0cm9uZz4ge2xhdW5jaF9kYXRlX2xvY2FsfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAge2xhdW5jaF9zdWNjZXNzICE9IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkxhdW5jaCBTdWNjZXNzOjwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtsYXVuY2hfc3VjY2VzcyA/IFwidGV4dC1zdWNjZXNzXCIgOiBcInRleHQtZGFuZ2VyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcGl0YWxpemVGaXJzdExldHRlcihsYXVuY2hfc3VjY2Vzcy50b1N0cmluZygpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7bGF1bmNoX3N1Y2Nlc3MgPT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TGF1bmNoIFN1Y2Nlc3M6PC9zdHJvbmc+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiPntcIk51bGxcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PXtgI3JvY2tldEluZm8ke3Byb3BzLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicm9ja2V0SW5mb1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVmlldyBSb2NrZXQgSW5mb1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG10LTRcIiBpZD17YHJvY2tldEluZm8ke3Byb3BzLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlJvY2tldCBJRDo8L3N0cm9uZz4ge3JvY2tldF9pZH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Um9ja2V0IE5hbWU6PC9zdHJvbmc+IHtyb2NrZXRfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Um9ja2V0IFR5cGU6PC9zdHJvbmc+IHtyb2NrZXRfdHlwZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=