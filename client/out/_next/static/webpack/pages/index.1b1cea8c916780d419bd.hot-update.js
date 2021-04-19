webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\Andrew Yang\\Projects\\Tutorials\\SpaceX Launch Stats\\client\\pages\\index.js",
    _s = $RefreshSig$();




function Home() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "d-flex flex-column",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_particles_js__WEBPACK_IMPORTED_MODULE_3___default.a, {
        width: '100vw',
        height: '96vh',
        params: {
          "particles": {
            "color": "#1c5c4d",
            line_linked: {
              shadow: {
                enable: true,
                color: "#000000",
                blur: 1
              }
            },
            "number": {
              "value": 80
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            },
            "modes": {
              "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
              },
              "repulse": {
                "distance": 200,
                "duration": 4
              }
            }
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "d-flex align-items-center justify-content-center align-self-center",
        style: {
          position: "absolute",
          top: '30%',
          height: "40vh"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-column align-items-center justify-content-around",
          style: {
            height: "40vh"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/assets/images/SpaceXLogoFull.png",
            alt: "SpaceX Logo",
            className: "img-fluid d-block",
            onClick: function onClick() {
              window.open("https://www.spacex.com/", "_ blank");
            },
            style: {
              width: 700,
              cursor: "pointer"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex w-50 justify-content-around flex-wrap",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              "class": "btn btn-primary mb-4",
              onClick: function onClick() {
                return router.push("launch_generator");
              },
              children: "Launch Generator"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              "class": "btn btn-primary mb-4",
              children: "Launch Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        className: "text-center",
        style: {
          position: 'absolute',
          bottom: 40,
          width: '100%'
        },
        children: ["Developed by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.github.com/andytubeee",
          children: "Andrew Yang"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 24
        }, this), " \xA9 ", new Date().getFullYear()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsImxpbmVfbGlua2VkIiwic2hhZG93IiwiZW5hYmxlIiwiY29sb3IiLCJibHVyIiwicG9zaXRpb24iLCJ0b3AiLCJoZWlnaHQiLCJ3aW5kb3ciLCJvcGVuIiwid2lkdGgiLCJjdXJzb3IiLCJwdXNoIiwiYm90dG9tIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw4QkFDRSxxRUFBQyx5REFBRDtBQUFXLGFBQUssRUFBRSxPQUFsQjtBQUEyQixjQUFNLEVBQUUsTUFBbkM7QUFDRSxjQUFNLEVBQUU7QUFDTix1QkFBYTtBQUNYLHFCQUFTLFNBREU7QUFFWEMsdUJBQVcsRUFBRTtBQUNYQyxvQkFBTSxFQUFFO0FBQ05DLHNCQUFNLEVBQUUsSUFERjtBQUVOQyxxQkFBSyxFQUFFLFNBRkQ7QUFHTkMsb0JBQUksRUFBRTtBQUhBO0FBREcsYUFGRjtBQVNYLHNCQUFVO0FBQ1IsdUJBQVM7QUFERCxhQVRDO0FBWVgsb0JBQVE7QUFDTix1QkFBUztBQURIO0FBWkcsV0FEUDtBQWtCTiwyQkFBaUI7QUFDZixzQkFBVTtBQUNSLHlCQUFXO0FBQ1QsMEJBQVUsSUFERDtBQUVULHdCQUFRO0FBRkM7QUFESCxhQURLO0FBT2YscUJBQVM7QUFDUCx3QkFBVTtBQUNSLDRCQUFZLEdBREo7QUFFUiw0QkFBWSxDQUZKO0FBR1Isd0JBQVEsQ0FIQTtBQUlSLDJCQUFXO0FBSkgsZUFESDtBQU9QLHlCQUFXO0FBQ1QsNEJBQVksR0FESDtBQUVULDRCQUFZO0FBRkg7QUFQSjtBQVBNO0FBbEJYO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBeUNFO0FBQ0UsaUJBQVMsRUFBQyxvRUFEWjtBQUVFLGFBQUssRUFBRTtBQUNMQyxrQkFBUSxFQUFFLFVBREw7QUFFTEMsYUFBRyxFQUFFLEtBRkE7QUFHTEMsZ0JBQU0sRUFBRTtBQUhILFNBRlQ7QUFBQSwrQkFRRTtBQUNFLG1CQUFTLEVBQUMsOERBRFo7QUFFRSxlQUFLLEVBQUU7QUFBRUEsa0JBQU0sRUFBRTtBQUFWLFdBRlQ7QUFBQSxrQ0FJRTtBQUNFLGVBQUcsRUFBQyxtQ0FETjtBQUVFLGVBQUcsRUFBQyxhQUZOO0FBR0UscUJBQVMsRUFBQyxtQkFIWjtBQUlFLG1CQUFPLEVBQUUsbUJBQU07QUFDYkMsb0JBQU0sQ0FBQ0MsSUFBUCxDQUFZLHlCQUFaLEVBQXVDLFNBQXZDO0FBQ0QsYUFOSDtBQU9FLGlCQUFLLEVBQUU7QUFBRUMsbUJBQUssRUFBRSxHQUFUO0FBQWNDLG9CQUFNLEVBQUU7QUFBdEI7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBYUU7QUFBSyxxQkFBUyxFQUFDLDhDQUFmO0FBQUEsb0NBQ0U7QUFDRSxrQkFBSSxFQUFDLFFBRFA7QUFFRSx1QkFBTSxzQkFGUjtBQUdFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTWIsTUFBTSxDQUFDYyxJQUFQLENBQVksa0JBQVosQ0FBTjtBQUFBLGVBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFRRTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBTSxzQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6Q0YsZUE0RUU7QUFBUSxpQkFBUyxFQUFDLGFBQWxCO0FBQWdDLGFBQUssRUFBRTtBQUFFUCxrQkFBUSxFQUFFLFVBQVo7QUFBd0JRLGdCQUFNLEVBQUUsRUFBaEM7QUFBb0NILGVBQUssRUFBRTtBQUEzQyxTQUF2QztBQUFBLGlEQUNlO0FBQUcsY0FBSSxFQUFDLG1DQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURmLFlBQ21GLElBQUlJLElBQUosR0FBV0MsV0FBWCxFQURuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFvRkQ7O0dBdkZ1QmxCLEk7VUFDUEUscUQ7OztLQURPRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFiMWNlYThjOTE2NzgwZDQxOWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSAncmVhY3QtcGFydGljbGVzLWpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgPFBhcnRpY2xlcyB3aWR0aD17JzEwMHZ3J30gaGVpZ2h0PXsnOTZ2aCd9XG4gICAgICAgICAgcGFyYW1zPXt7XG4gICAgICAgICAgICBcInBhcnRpY2xlc1wiOiB7XG4gICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMWM1YzRkXCIsXG4gICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgICAgc2hhZG93OiB7XG4gICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICAgICAgICBibHVyOiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcIm51bWJlclwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA4MFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInNpemVcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogM1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBcImludGVyYWN0aXZpdHlcIjoge1xuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJvbmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcIm1vZGVcIjogXCJyZXB1bHNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwibW9kZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYnViYmxlXCI6IHtcbiAgICAgICAgICAgICAgICAgIFwiZGlzdGFuY2VcIjogMjUwLFxuICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAyLFxuICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IDAsXG4gICAgICAgICAgICAgICAgICBcIm9wYWNpdHlcIjogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJyZXB1bHNlXCI6IHtcbiAgICAgICAgICAgICAgICAgIFwiZGlzdGFuY2VcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiA0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX0gLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1zZWxmLWNlbnRlclwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB0b3A6ICczMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjQwdmhcIlxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1hcm91bmRcIlxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjQwdmhcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvU3BhY2VYTG9nb0Z1bGwucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiU3BhY2VYIExvZ29cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgZC1ibG9ja1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3LnNwYWNleC5jb20vXCIsIFwiXyBibGFua1wiKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDcwMCwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHctNTAganVzdGlmeS1jb250ZW50LWFyb3VuZCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG1iLTRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwibGF1bmNoX2dlbmVyYXRvclwiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExhdW5jaCBHZW5lcmF0b3JcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtYi00XCI+XG4gICAgICAgICAgICAgICAgTGF1bmNoIFNlYXJjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcicgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogNDAsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgRGV2ZWxvcGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy5naXRodWIuY29tL2FuZHl0dWJlZWVcIj5BbmRyZXcgWWFuZzwvYT4gJmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9