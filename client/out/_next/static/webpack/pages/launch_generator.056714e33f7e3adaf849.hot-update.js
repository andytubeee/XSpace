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
        mb: mb
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXVuY2hlc0dlbmVyYXRvci5qcyJdLCJuYW1lcyI6WyJMQVVOQ0hFU19RVUVSWSIsImdxbCIsIkxhdW5jaGVzR2VuZXJhdG9yIiwicHJvcHMiLCJ1c2VRdWVyeSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VTdGF0ZSIsImFtb3VudCIsInNldEFtb3VudCIsIm5ld0RhdGEiLCJzZXROZXdEYXRhIiwicmVhZHkiLCJzZXRSZWFkeSIsInJvdXRlciIsInVzZVJvdXRlciIsInNodWZmbGUiLCJhcnJheSIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInRlbXBvcmFyeVZhbHVlIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYW5kbGVHZW5lcmF0ZUNsaWNrIiwiU3dhbCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJ0ZXh0IiwibWVzc2FnZSIsImh0bWwiLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwic2hvd0xvYWRpbmciLCJ0aW1lckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImIiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJnZXRUaW1lckxlZnQiLCJ3aWxsQ2xvc2UiLCJjbGVhckludGVydmFsIiwidGhlbiIsInJlc3VsdCIsImRpc21pc3MiLCJEaXNtaXNzUmVhc29uIiwiY29uc29sZSIsImxvZyIsIkFycmF5IiwiZnJvbSIsImxhdW5jaGVzIiwicHVzaCIsImN1cnNvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNwbGljZSIsIm1hcCIsImxhdW5jaCIsImluZGV4IiwicG9zaXRpb24iLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJtYiIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFD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QVMsRUFBQyxhQUFsQjtBQUFnQyxXQUFLLEVBQUUsQ0FBQ3BELEtBQUQsR0FBUztBQUM5Q3FELGdCQUFRLEVBQUUsVUFEb0M7QUFFOUNDLFlBQUksRUFBRSxDQUZ3QztBQUc5Q0MsY0FBTSxFQUFFLEVBSHNDO0FBSTlDQyxhQUFLLEVBQUU7QUFKdUMsT0FBVCxHQUtuQztBQUFDQyxVQUFFLEVBQUZBO0FBQUQsT0FMSjtBQUFBLCtDQU1lO0FBQUcsWUFBSSxFQUFDLG1DQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTmYsWUFNbUYsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBTm5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNDRjtBQUFBLGtCQURGO0FBc0REOztHQWpKdUJ0RSxpQjtVQUNXRSx1RCxFQUtsQlkscUQ7OztLQU5PZCxpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYXVuY2hfZ2VuZXJhdG9yLjA1NjcxNGUzM2Y3ZTNhZGFmODQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGF1bmNoZXNDYXJkIGZyb20gXCIuL0xhdW5jaGVzQ2FyZFwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTEFVTkNIRVNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgTGF1bmNoZXNRdWVyeSB7XHJcbiAgICBsYXVuY2hlcyB7XHJcbiAgICAgIGZsaWdodF9udW1iZXJcclxuICAgICAgbWlzc2lvbl9uYW1lXHJcbiAgICAgIGxhdW5jaF9kYXRlX2xvY2FsXHJcbiAgICAgIGxhdW5jaF9zdWNjZXNzXHJcbiAgICAgIGxhdW5jaF95ZWFyXHJcbiAgICAgIHJvY2tldCB7XHJcbiAgICAgICAgcm9ja2V0X2lkXHJcbiAgICAgICAgcm9ja2V0X25hbWVcclxuICAgICAgICByb2NrZXRfdHlwZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF1bmNoZXNHZW5lcmF0b3IocHJvcHMpIHtcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShMQVVOQ0hFU19RVUVSWSk7XHJcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtuZXdEYXRhLCBzZXROZXdEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgIHZhciBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsXHJcbiAgICAgIHRlbXBvcmFyeVZhbHVlLFxyXG4gICAgICByYW5kb21JbmRleDtcclxuXHJcbiAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxyXG4gICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cclxuICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xyXG4gICAgICBjdXJyZW50SW5kZXggLT0gMTtcclxuXHJcbiAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBhcnJheVtjdXJyZW50SW5kZXhdO1xyXG4gICAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xyXG4gICAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVHZW5lcmF0ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXHJcbiAgICAgICAgdGV4dDogYCR7ZXJyb3IubWVzc2FnZX1gLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IFwiTG9hZGluZyFcIixcclxuICAgICAgICBodG1sOiBcIlBsZWFzZSBiZSBwYXRpZW50Li4uXCIsXHJcbiAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICBkaWRPcGVuOiAoKSA9PiB7XHJcbiAgICAgICAgICBTd2FsLnNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgICB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gU3dhbC5nZXRDb250ZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYiA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcImJcIik7XHJcbiAgICAgICAgICAgICAgaWYgKGIpIHtcclxuICAgICAgICAgICAgICAgIGIudGV4dENvbnRlbnQgPSBTd2FsLmdldFRpbWVyTGVmdCgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbGxDbG9zZTogKCkgPT4ge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvKiBSZWFkIG1vcmUgYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2FscyBiZWxvdyAqL1xyXG4gICAgICAgIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gU3dhbC5EaXNtaXNzUmVhc29uLnRpbWVyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNob3VsZCBiZSByZWFkeSBub3chXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgaWYgKCFyZWFkeSkge1xyXG4gICAgICAgIGlmIChhbW91bnQgPiBBcnJheS5mcm9tKGRhdGEubGF1bmNoZXMpLmxlbmd0aCkge1xyXG4gICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBgTW9yZSB0aGFuIGFtb3VudCBvZiBkYXRhIG9uIHNlcnZlciwgdGhlIG1heCBpcyAke0FycmF5LmZyb20oZGF0YS5sYXVuY2hlcykubGVuZ3RoXHJcbiAgICAgICAgICAgICAgfWAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNldEFtb3VudChBcnJheS5mcm9tKGRhdGEubGF1bmNoZXMpLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbW91bnQgPT0gMCkge1xyXG4gICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBgWW91IGNhbm5vdCBzZWFyY2ggZm9yIDAgcXVlcnlgLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFJlYWR5KHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRSZWFkeShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9PlxyXG4gICAgICAgIEJhY2tcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgbXktMyB0ZXh0LWNlbnRlclwiPkxhdW5jaGVzIEdlbmVyYXRvcjwvaDE+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIj5OdW1iZXIgb2YgRW50cmllczwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW1vdW50XCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3JlYWR5fVxyXG4gICAgICAgICAgICBzdHlsZT17cmVhZHkgPyB7IGN1cnNvcjogXCJub3QtYWxsb3dlZFwiIH0gOiB7IGN1cnNvcjogXCJ0ZXh0XCIgfX1cclxuICAgICAgICAgICAgbWluPXtcIjFcIn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFyZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTMgYWxpZ24tc2VsZi1lbmRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVHZW5lcmF0ZUNsaWNrfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cmVhZHkgPyBcIkNsZWFyXCIgOiBcIkdlbmVyYXRlXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAge3JlYWR5ICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2RhdGEgJiZcclxuICAgICAgICAgICAgc2h1ZmZsZShBcnJheS5mcm9tKGRhdGEubGF1bmNoZXMpKVxyXG4gICAgICAgICAgICAgIC5zcGxpY2UoMCwgYW1vdW50KVxyXG4gICAgICAgICAgICAgIC5tYXAoKGxhdW5jaCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxMYXVuY2hlc0NhcmQgbGF1bmNoPXtsYXVuY2h9IGlkPXtpbmRleH0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcicgc3R5bGU9eyFyZWFkeSA/IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgYm90dG9tOiAyMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgfSA6IHttYn19PlxyXG4gICAgICAgIERldmVsb3BlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9hbmR5dHViZWVlXCI+QW5kcmV3IFlhbmc8L2E+ICZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==