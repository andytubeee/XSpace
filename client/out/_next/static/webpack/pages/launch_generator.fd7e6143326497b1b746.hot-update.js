webpackHotUpdate_N_E("pages/launch_generator",{

/***/ "./components/LaunchesGenerator.js":
/*!*****************************************!*\
  !*** ./components/LaunchesGenerator.js ***!
  \*****************************************/
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




var _jsxFileName = "C:\\Users\\Andrew Yang\\Projects\\Tutorials\\SpaceX Launch Stats\\client\\components\\LaunchesGenerator.js",
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
      children: "Launches Generator"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group d-flex flex-column",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          "for": "exampleInputPassword1",
          children: "Number of Entries"
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
          children: ready ? "Clear" : "Generate"
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
    }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "text-center",
      style: !ready ? {
        position: "absolute",
        left: 0,
        bottom: 20,
        right: 0
      } : {
        marginBottom: 30
      },
      children: ["Developed by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://www.github.com/andytubeee",
        children: "Andrew Yang"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 22
      }, this), " \xA9 ", new Date().getFullYear()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, this)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXVuY2hlc0dlbmVyYXRvci5qcyJdLCJuYW1lcyI6WyJMQVVOQ0hFU19RVUVSWSIsImdxbCIsIkxhdW5jaGVzR2VuZXJhdG9yIiwicHJvcHMiLCJ1c2VRdWVyeSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VTdGF0ZSIsImFtb3VudCIsInNldEFtb3VudCIsIm5ld0RhdGEiLCJzZXROZXdEYXRhIiwicmVhZHkiLCJzZXRSZWFkeSIsInJvdXRlciIsInVzZVJvdXRlciIsInNodWZmbGUiLCJhcnJheSIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInRlbXBvcmFyeVZhbHVlIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYW5kbGVHZW5lcmF0ZUNsaWNrIiwiU3dhbCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJ0ZXh0IiwibWVzc2FnZSIsImh0bWwiLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwic2hvd0xvYWRpbmciLCJ0aW1lckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImIiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJnZXRUaW1lckxlZnQiLCJ3aWxsQ2xvc2UiLCJjbGVhckludGVydmFsIiwidGhlbiIsInJlc3VsdCIsImRpc21pc3MiLCJEaXNtaXNzUmVhc29uIiwiY29uc29sZSIsImxvZyIsIkFycmF5IiwiZnJvbSIsImxhdW5jaGVzIiwicHVzaCIsImN1cnNvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNwbGljZSIsIm1hcCIsImxhdW5jaCIsImluZGV4IiwicG9zaXRpb24iLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFB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Q0U7QUFBUSxlQUFTLEVBQUMsYUFBbEI7QUFBZ0MsV0FBSyxFQUFFLENBQUNwRCxLQUFELEdBQVM7QUFDOUNxRCxnQkFBUSxFQUFFLFVBRG9DO0FBRTlDQyxZQUFJLEVBQUUsQ0FGd0M7QUFHOUNDLGNBQU0sRUFBRSxFQUhzQztBQUk5Q0MsYUFBSyxFQUFFO0FBSnVDLE9BQVQsR0FLbkM7QUFBRUMsb0JBQVksRUFBRTtBQUFoQixPQUxKO0FBQUEsK0NBTWU7QUFBRyxZQUFJLEVBQUMsbUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOZixZQU1tRixJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFObkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0NGO0FBQUEsa0JBREY7QUFzREQ7O0dBakp1QnRFLGlCO1VBQ1dFLHVELEVBS2xCWSxxRDs7O0tBTk9kLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhdW5jaF9nZW5lcmF0b3IuZmQ3ZTYxNDMzMjY0OTdiMWI3NDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMYXVuY2hlc0NhcmQgZnJvbSBcIi4vTGF1bmNoZXNDYXJkXCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMQVVOQ0hFU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBMYXVuY2hlc1F1ZXJ5IHtcclxuICAgIGxhdW5jaGVzIHtcclxuICAgICAgZmxpZ2h0X251bWJlclxyXG4gICAgICBtaXNzaW9uX25hbWVcclxuICAgICAgbGF1bmNoX2RhdGVfbG9jYWxcclxuICAgICAgbGF1bmNoX3N1Y2Nlc3NcclxuICAgICAgbGF1bmNoX3llYXJcclxuICAgICAgcm9ja2V0IHtcclxuICAgICAgICByb2NrZXRfaWRcclxuICAgICAgICByb2NrZXRfbmFtZVxyXG4gICAgICAgIHJvY2tldF90eXBlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXVuY2hlc0dlbmVyYXRvcihwcm9wcykge1xyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KExBVU5DSEVTX1FVRVJZKTtcclxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW25ld0RhdGEsIHNldE5ld0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZWFkeSwgc2V0UmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xyXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCxcclxuICAgICAgdGVtcG9yYXJ5VmFsdWUsXHJcbiAgICAgIHJhbmRvbUluZGV4O1xyXG5cclxuICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXHJcbiAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxyXG4gICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XHJcbiAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xyXG5cclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XHJcbiAgICAgIGFycmF5W2N1cnJlbnRJbmRleF0gPSBhcnJheVtyYW5kb21JbmRleF07XHJcbiAgICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUdlbmVyYXRlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcclxuICAgICAgICB0ZXh0OiBgJHtlcnJvci5tZXNzYWdlfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICB0aXRsZTogXCJMb2FkaW5nIVwiLFxyXG4gICAgICAgIGh0bWw6IFwiUGxlYXNlIGJlIHBhdGllbnQuLi5cIixcclxuICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgIGRpZE9wZW46ICgpID0+IHtcclxuICAgICAgICAgIFN3YWwuc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICAgIHRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBTd2FsLmdldENvbnRlbnQoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBiID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiYlwiKTtcclxuICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgYi50ZXh0Q29udGVudCA9IFN3YWwuZ2V0VGltZXJMZWZ0KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lsbENsb3NlOiAoKSA9PiB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8qIFJlYWQgbW9yZSBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzIGJlbG93ICovXHJcbiAgICAgICAgaWYgKHJlc3VsdC5kaXNtaXNzID09PSBTd2FsLkRpc21pc3NSZWFzb24udGltZXIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2hvdWxkIGJlIHJlYWR5IG5vdyFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBpZiAoIXJlYWR5KSB7XHJcbiAgICAgICAgaWYgKGFtb3VudCA+IEFycmF5LmZyb20oZGF0YS5sYXVuY2hlcykubGVuZ3RoKSB7XHJcbiAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IGBNb3JlIHRoYW4gYW1vdW50IG9mIGRhdGEgb24gc2VydmVyLCB0aGUgbWF4IGlzICR7QXJyYXkuZnJvbShkYXRhLmxhdW5jaGVzKS5sZW5ndGhcclxuICAgICAgICAgICAgICB9YCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2V0QW1vdW50KEFycmF5LmZyb20oZGF0YS5sYXVuY2hlcykubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFtb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IGBZb3UgY2Fubm90IHNlYXJjaCBmb3IgMCBxdWVyeWAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0UmVhZHkodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFJlYWR5KGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aHIgLz5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0+XHJcbiAgICAgICAgQmFja1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCBteS0zIHRleHQtY2VudGVyXCI+TGF1bmNoZXMgR2VuZXJhdG9yPC9oMT5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiPk51bWJlciBvZiBFbnRyaWVzPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnRcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17cmVhZHl9XHJcbiAgICAgICAgICAgIHN0eWxlPXtyZWFkeSA/IHsgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCIgfSA6IHsgY3Vyc29yOiBcInRleHRcIiB9fVxyXG4gICAgICAgICAgICBtaW49e1wiMVwifVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbXQtMyBhbGlnbi1zZWxmLWVuZFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUdlbmVyYXRlQ2xpY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtyZWFkeSA/IFwiQ2xlYXJcIiA6IFwiR2VuZXJhdGVcIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICB7cmVhZHkgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7ZGF0YSAmJlxyXG4gICAgICAgICAgICBzaHVmZmxlKEFycmF5LmZyb20oZGF0YS5sYXVuY2hlcykpXHJcbiAgICAgICAgICAgICAgLnNwbGljZSgwLCBhbW91bnQpXHJcbiAgICAgICAgICAgICAgLm1hcCgobGF1bmNoLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExhdW5jaGVzQ2FyZCBsYXVuY2g9e2xhdW5jaH0gaWQ9e2luZGV4fSAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBzdHlsZT17IXJlYWR5ID8ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICBib3R0b206IDIwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB9IDogeyBtYXJnaW5Cb3R0b206IDMwIH19PlxyXG4gICAgICAgIERldmVsb3BlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9hbmR5dHViZWVlXCI+QW5kcmV3IFlhbmc8L2E+ICZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==