webpackHotUpdate_N_E("pages/launch_search",{

/***/ "./components/LaunchSearch.js":
/*!************************************!*\
  !*** ./components/LaunchSearch.js ***!
  \************************************/
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
  var data = Object(C_Users_Andrew_Yang_Projects_Tutorials_SpaceX_Launch_Stats_client_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n      launch_year\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);

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
          "for": "exampleInputPassword1",
          children: "Flight ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "number",
          className: "form-control",
          placeholder: "Amount",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXVuY2hTZWFyY2guanMiXSwibmFtZXMiOlsiTEFVTkNIRVNfUVVFUlkiLCJncWwiLCJMYXVuY2hlc0dlbmVyYXRvciIsInByb3BzIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlU3RhdGUiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJuZXdEYXRhIiwic2V0TmV3RGF0YSIsInJlYWR5Iiwic2V0UmVhZHkiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaHVmZmxlIiwiYXJyYXkiLCJjdXJyZW50SW5kZXgiLCJsZW5ndGgiLCJ0ZW1wb3JhcnlWYWx1ZSIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaGFuZGxlR2VuZXJhdGVDbGljayIsIlN3YWwiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwidGV4dCIsIm1lc3NhZ2UiLCJodG1sIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsInNob3dMb2FkaW5nIiwidGltZXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiY29udGVudCIsImdldENvbnRlbnQiLCJiIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiZ2V0VGltZXJMZWZ0Iiwid2lsbENsb3NlIiwiY2xlYXJJbnRlcnZhbCIsInRoZW4iLCJyZXN1bHQiLCJkaXNtaXNzIiwiRGlzbWlzc1JlYXNvbiIsImNvbnNvbGUiLCJsb2ciLCJBcnJheSIsImZyb20iLCJsYXVuY2hlcyIsInB1c2giLCJjdXJzb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzcGxpY2UiLCJtYXAiLCJsYXVuY2giLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLDBEQUFILG1CQUFwQjtBQWlCZSxTQUFTQyxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFBQTs7QUFBQTs7QUFBQSxrQkFDZEMsK0RBQVEsQ0FBQ0osY0FBRCxDQURNO0FBQUEsTUFDdkNLLE9BRHVDLGFBQ3ZDQSxPQUR1QztBQUFBLE1BQzlCQyxLQUQ4QixhQUM5QkEsS0FEOEI7QUFBQSxNQUN2QkMsSUFEdUIsYUFDdkJBLElBRHVCOztBQUFBLGtCQUVuQkMsc0RBQVEsQ0FBQyxDQUFELENBRlc7QUFBQSxNQUV4Q0MsTUFGd0M7QUFBQSxNQUVoQ0MsU0FGZ0M7O0FBQUEsbUJBR2pCRixzREFBUSxDQUFDLEVBQUQsQ0FIUztBQUFBLE1BR3hDRyxPQUh3QztBQUFBLE1BRy9CQyxVQUgrQjs7QUFBQSxtQkFJckJKLHNEQUFRLENBQUMsS0FBRCxDQUphO0FBQUEsTUFJeENLLEtBSndDO0FBQUEsTUFJakNDLFFBSmlDOztBQU0vQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFdBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3RCLFFBQUlDLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxNQUF6QjtBQUFBLFFBQ0VDLGNBREY7QUFBQSxRQUVFQyxXQUZGLENBRHNCLENBS3RCOztBQUNBLFdBQU8sTUFBTUgsWUFBYixFQUEyQjtBQUN6QjtBQUNBRyxpQkFBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTixZQUEzQixDQUFkO0FBQ0FBLGtCQUFZLElBQUksQ0FBaEIsQ0FIeUIsQ0FLekI7O0FBQ0FFLG9CQUFjLEdBQUdILEtBQUssQ0FBQ0MsWUFBRCxDQUF0QjtBQUNBRCxXQUFLLENBQUNDLFlBQUQsQ0FBTCxHQUFzQkQsS0FBSyxDQUFDSSxXQUFELENBQTNCO0FBQ0FKLFdBQUssQ0FBQ0ksV0FBRCxDQUFMLEdBQXFCRCxjQUFyQjtBQUNEOztBQUVELFdBQU9ILEtBQVA7QUFDRDs7QUFFRCxNQUFNUSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDaEMsUUFBSXBCLEtBQUosRUFBVztBQUNUcUIsd0RBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ1JDLFlBQUksRUFBRSxPQURFO0FBRVJDLGFBQUssRUFBRSxPQUZDO0FBR1JDLFlBQUksWUFBS3pCLEtBQUssQ0FBQzBCLE9BQVg7QUFISSxPQUFWO0FBS0Q7O0FBQ0QsUUFBSTNCLE9BQUosRUFBYTtBQUNYc0Isd0RBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ1JFLGFBQUssRUFBRSxVQURDO0FBRVJHLFlBQUksRUFBRSxzQkFGRTtBQUdSQyxhQUFLLEVBQUUsSUFIQztBQUlSQyx3QkFBZ0IsRUFBRSxJQUpWO0FBS1JDLGVBQU8sRUFBRSxtQkFBTTtBQUNiVCw0REFBSSxDQUFDVSxXQUFMO0FBQ0FDLHVCQUFhLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ2hDLGdCQUFNQyxPQUFPLEdBQUdiLGtEQUFJLENBQUNjLFVBQUwsRUFBaEI7O0FBQ0EsZ0JBQUlELE9BQUosRUFBYTtBQUNYLGtCQUFNRSxDQUFDLEdBQUdGLE9BQU8sQ0FBQ0csYUFBUixDQUFzQixHQUF0QixDQUFWOztBQUNBLGtCQUFJRCxDQUFKLEVBQU87QUFDTEEsaUJBQUMsQ0FBQ0UsV0FBRixHQUFnQmpCLGtEQUFJLENBQUNrQixZQUFMLEVBQWhCO0FBQ0Q7QUFDRjtBQUNGLFdBUjBCLEVBUXhCLEdBUndCLENBQTNCO0FBU0QsU0FoQk87QUFpQlJDLGlCQUFTLEVBQUUscUJBQU07QUFDZkMsdUJBQWEsQ0FBQ1QsYUFBRCxDQUFiO0FBQ0Q7QUFuQk8sT0FBVixFQW9CR1UsSUFwQkgsQ0FvQlEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2xCO0FBQ0EsWUFBSUEsTUFBTSxDQUFDQyxPQUFQLEtBQW1CdkIsa0RBQUksQ0FBQ3dCLGFBQUwsQ0FBbUJqQixLQUExQyxFQUFpRDtBQUMvQ2tCLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNEO0FBQ0YsT0F6QkQ7QUEwQkQ7O0FBRUQsUUFBSTlDLElBQUosRUFBVTtBQUNSLFVBQUksQ0FBQ00sS0FBTCxFQUFZO0FBQ1YsWUFBSUosTUFBTSxHQUFHNkMsS0FBSyxDQUFDQyxJQUFOLENBQVdoRCxJQUFJLENBQUNpRCxRQUFoQixFQUEwQnBDLE1BQXZDLEVBQStDO0FBQzdDTyw0REFBSSxDQUFDQyxJQUFMLENBQVU7QUFDUkMsZ0JBQUksRUFBRSxPQURFO0FBRVJDLGlCQUFLLEVBQUUsT0FGQztBQUdSQyxnQkFBSSwyREFBb0R1QixLQUFLLENBQUNDLElBQU4sQ0FBV2hELElBQUksQ0FBQ2lELFFBQWhCLEVBQTBCcEMsTUFBOUU7QUFISSxXQUFWO0FBTUFWLG1CQUFTLENBQUM0QyxLQUFLLENBQUNDLElBQU4sQ0FBV2hELElBQUksQ0FBQ2lELFFBQWhCLEVBQTBCcEMsTUFBM0IsQ0FBVDtBQUNEOztBQUNELFlBQUlYLE1BQU0sSUFBSSxDQUFkLEVBQWlCO0FBQ2ZrQiw0REFBSSxDQUFDQyxJQUFMLENBQVU7QUFDUkMsZ0JBQUksRUFBRSxPQURFO0FBRVJDLGlCQUFLLEVBQUUsT0FGQztBQUdSQyxnQkFBSTtBQUhJLFdBQVY7QUFLRCxTQU5ELE1BTU87QUFDTGpCLGtCQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0Q7QUFDRixPQW5CRCxNQW1CTztBQUNMQSxnQkFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFDRixHQTdERDs7QUErREEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFRLGVBQVMsRUFBQyxtQkFBbEI7QUFBc0MsYUFBTyxFQUFFO0FBQUEsZUFBTUMsTUFBTSxDQUFDMEMsSUFBUCxDQUFZLEdBQVosQ0FBTjtBQUFBLE9BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFLRTtBQUFJLGVBQVMsRUFBQyw0QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUU7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSxnQ0FDRTtBQUFPLGlCQUFJLHVCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFTLEVBQUMsY0FGWjtBQUdFLHFCQUFXLEVBQUMsUUFIZDtBQUlFLGtCQUFRLEVBQUU1QyxLQUpaO0FBS0UsZUFBSyxFQUFFQSxLQUFLLEdBQUc7QUFBRTZDLGtCQUFNLEVBQUU7QUFBVixXQUFILEdBQStCO0FBQUVBLGtCQUFNLEVBQUU7QUFBVixXQUw3QztBQU1FLGFBQUcsRUFBRSxHQU5QO0FBT0Usa0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFPO0FBQ2YsZ0JBQUksQ0FBQzlDLEtBQUwsRUFBWTtBQUNWSCx1QkFBUyxDQUFDaUQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBVDtBQUNEO0FBQ0Y7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBZUU7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFNLHFDQUZSO0FBR0UsaUJBQU8sRUFBRW5DLG1CQUhYO0FBQUEsb0JBS0c7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixFQWdDR2IsS0FBSyxpQkFDSjtBQUFBLGdCQUNHTixJQUFJLElBQ0hVLE9BQU8sQ0FBQ3FDLEtBQUssQ0FBQ0MsSUFBTixDQUFXaEQsSUFBSSxDQUFDaUQsUUFBaEIsQ0FBRCxDQUFQLENBQ0dNLE1BREgsQ0FDVSxDQURWLEVBQ2FyRCxNQURiLEVBRUdzRCxHQUZILENBRU8sVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsNEJBQ0gscUVBQUMscURBQUQ7QUFBYyxnQkFBTSxFQUFFRCxNQUF0QjtBQUE4QixZQUFFLEVBQUVDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREc7QUFBQSxPQUZQO0FBRkoscUJBakNKO0FBQUEsa0JBREY7QUE2Q0Q7O0dBeEl1Qi9ELGlCO1VBQ1dFLHVELEVBS2xCWSxxRDs7O0tBTk9kLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaF9zZWFyY2guNDEwMjNlN2Y1MmRkMjkzMDc2YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMYXVuY2hlc0NhcmQgZnJvbSBcIi4vTGF1bmNoZXNDYXJkXCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMQVVOQ0hFU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBMYXVuY2hlc1F1ZXJ5IHtcclxuICAgIGxhdW5jaGVzIHtcclxuICAgICAgZmxpZ2h0X251bWJlclxyXG4gICAgICBtaXNzaW9uX25hbWVcclxuICAgICAgbGF1bmNoX2RhdGVfbG9jYWxcclxuICAgICAgbGF1bmNoX3N1Y2Nlc3NcclxuICAgICAgbGF1bmNoX3llYXJcclxuICAgICAgcm9ja2V0IHtcclxuICAgICAgICByb2NrZXRfaWRcclxuICAgICAgICByb2NrZXRfbmFtZVxyXG4gICAgICAgIHJvY2tldF90eXBlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXVuY2hlc0dlbmVyYXRvcihwcm9wcykge1xyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KExBVU5DSEVTX1FVRVJZKTtcclxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW25ld0RhdGEsIHNldE5ld0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZWFkeSwgc2V0UmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xyXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCxcclxuICAgICAgdGVtcG9yYXJ5VmFsdWUsXHJcbiAgICAgIHJhbmRvbUluZGV4O1xyXG5cclxuICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXHJcbiAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxyXG4gICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XHJcbiAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xyXG5cclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XHJcbiAgICAgIGFycmF5W2N1cnJlbnRJbmRleF0gPSBhcnJheVtyYW5kb21JbmRleF07XHJcbiAgICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUdlbmVyYXRlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICB0ZXh0OiBgJHtlcnJvci5tZXNzYWdlfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICB0aXRsZTogXCJMb2FkaW5nIVwiLFxyXG4gICAgICAgIGh0bWw6IFwiUGxlYXNlIGJlIHBhdGllbnQuLi5cIixcclxuICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgIGRpZE9wZW46ICgpID0+IHtcclxuICAgICAgICAgIFN3YWwuc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICAgIHRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBTd2FsLmdldENvbnRlbnQoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBiID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiYlwiKTtcclxuICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgYi50ZXh0Q29udGVudCA9IFN3YWwuZ2V0VGltZXJMZWZ0KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbENsb3NlOiAoKSA9PiB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8qIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzIGJlbG93ICovXHJcbiAgICAgICAgaWYgKHJlc3VsdC5kaXNtaXNzID09PSBTd2FsLkRpc21pc3NSZWFzb24udGltZXIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2hvdWxkIGJlIHJlYWR5IG5vdyFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBpZiAoIXJlYWR5KSB7XHJcbiAgICAgICAgaWYgKGFtb3VudCA+IEFycmF5LmZyb20oZGF0YS5sYXVuY2hlcykubGVuZ3RoKSB7XHJcbiAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IGBNb3JlIHRoYW4gYW1vdW50IG9mIGRhdGEgb24gc2VydmVyLCB0aGUgbWF4IGlzICR7QXJyYXkuZnJvbShkYXRhLmxhdW5jaGVzKS5sZW5ndGhcclxuICAgICAgICAgICAgICB9YCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2V0QW1vdW50KEFycmF5LmZyb20oZGF0YS5sYXVuY2hlcykubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFtb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IGBZb3UgY2Fubm90IHNlYXJjaCBmb3IgMCBxdWVyeWAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0UmVhZHkodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFJlYWR5KGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aHIgLz5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0+XHJcbiAgICAgICAgQmFja1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCBteS0zIHRleHQtY2VudGVyXCI+TGF1bmNoIFNlYXJjaDwvaDE+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIj5GbGlnaHQgSUQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFtb3VudFwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkeX1cclxuICAgICAgICAgICAgc3R5bGU9e3JlYWR5ID8geyBjdXJzb3I6IFwibm90LWFsbG93ZWRcIiB9IDogeyBjdXJzb3I6IFwidGV4dFwiIH19XHJcbiAgICAgICAgICAgIG1pbj17XCIxXCJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghcmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIHNldEFtb3VudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtdC0zIGFsaWduLXNlbGYtZW5kXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlR2VuZXJhdGVDbGlja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge1wiU2VhcmNoXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAge3JlYWR5ICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2RhdGEgJiZcclxuICAgICAgICAgICAgc2h1ZmZsZShBcnJheS5mcm9tKGRhdGEubGF1bmNoZXMpKVxyXG4gICAgICAgICAgICAgIC5zcGxpY2UoMCwgYW1vdW50KVxyXG4gICAgICAgICAgICAgIC5tYXAoKGxhdW5jaCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxMYXVuY2hlc0NhcmQgbGF1bmNoPXtsYXVuY2h9IGlkPXtpbmRleH0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==