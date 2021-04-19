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
              onClick: function onClick() {
                return router.push("launch_search");
              },
              children: "Launch Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              "class": "btn btn-primary mb-4",
              onClick: function onClick() {
                return router.push("launch_search");
              },
              children: "Rocket Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              "class": "btn btn-primary mb-4",
              onClick: function onClick() {
                return router.push("launch_search");
              },
              children: "Rocket Generator"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
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
          lineNumber: 99,
          columnNumber: 24
        }, this), " \xA9 ", new Date().getFullYear()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsImxpbmVfbGlua2VkIiwic2hhZG93IiwiZW5hYmxlIiwiY29sb3IiLCJibHVyIiwicG9zaXRpb24iLCJ0b3AiLCJoZWlnaHQiLCJ3aW5kb3ciLCJvcGVuIiwid2lkdGgiLCJjdXJzb3IiLCJwdXNoIiwiYm90dG9tIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw4QkFDRSxxRUFBQyx5REFBRDtBQUFXLGFBQUssRUFBRSxPQUFsQjtBQUEyQixjQUFNLEVBQUUsTUFBbkM7QUFDRSxjQUFNLEVBQUU7QUFDTix1QkFBYTtBQUNYLHFCQUFTLFNBREU7QUFFWEMsdUJBQVcsRUFBRTtBQUNYQyxvQkFBTSxFQUFFO0FBQ05DLHNCQUFNLEVBQUUsSUFERjtBQUVOQyxxQkFBSyxFQUFFLFNBRkQ7QUFHTkMsb0JBQUksRUFBRTtBQUhBO0FBREcsYUFGRjtBQVNYLHNCQUFVO0FBQ1IsdUJBQVM7QUFERCxhQVRDO0FBWVgsb0JBQVE7QUFDTix1QkFBUztBQURIO0FBWkcsV0FEUDtBQWtCTiwyQkFBaUI7QUFDZixzQkFBVTtBQUNSLHlCQUFXO0FBQ1QsMEJBQVUsSUFERDtBQUVULHdCQUFRO0FBRkM7QUFESCxhQURLO0FBT2YscUJBQVM7QUFDUCx3QkFBVTtBQUNSLDRCQUFZLEdBREo7QUFFUiw0QkFBWSxDQUZKO0FBR1Isd0JBQVEsQ0FIQTtBQUlSLDJCQUFXO0FBSkgsZUFESDtBQU9QLHlCQUFXO0FBQ1QsNEJBQVksR0FESDtBQUVULDRCQUFZO0FBRkg7QUFQSjtBQVBNO0FBbEJYO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBeUNFO0FBQ0UsaUJBQVMsRUFBQyxvRUFEWjtBQUVFLGFBQUssRUFBRTtBQUNMQyxrQkFBUSxFQUFFLFVBREw7QUFFTEMsYUFBRyxFQUFFLEtBRkE7QUFHTEMsZ0JBQU0sRUFBRTtBQUhILFNBRlQ7QUFBQSwrQkFRRTtBQUNFLG1CQUFTLEVBQUMsOERBRFo7QUFFRSxlQUFLLEVBQUU7QUFBRUEsa0JBQU0sRUFBRTtBQUFWLFdBRlQ7QUFBQSxrQ0FJRTtBQUNFLGVBQUcsRUFBQyxtQ0FETjtBQUVFLGVBQUcsRUFBQyxhQUZOO0FBR0UscUJBQVMsRUFBQyxtQkFIWjtBQUlFLG1CQUFPLEVBQUUsbUJBQU07QUFDYkMsb0JBQU0sQ0FBQ0MsSUFBUCxDQUFZLHlCQUFaLEVBQXVDLFNBQXZDO0FBQ0QsYUFOSDtBQU9FLGlCQUFLLEVBQUU7QUFBRUMsbUJBQUssRUFBRSxHQUFUO0FBQWNDLG9CQUFNLEVBQUU7QUFBdEI7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBYUU7QUFBSyxxQkFBUyxFQUFDLDhDQUFmO0FBQUEsb0NBQ0U7QUFDRSxrQkFBSSxFQUFDLFFBRFA7QUFFRSx1QkFBTSxzQkFGUjtBQUdFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTWIsTUFBTSxDQUFDYyxJQUFQLENBQVksa0JBQVosQ0FBTjtBQUFBLGVBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFRRTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBTSxzQkFBNUI7QUFDRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1kLE1BQU0sQ0FBQ2MsSUFBUCxDQUFZLGVBQVosQ0FBTjtBQUFBLGVBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkYsZUFhRTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBTSxzQkFBNUI7QUFDRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1kLE1BQU0sQ0FBQ2MsSUFBUCxDQUFZLGVBQVosQ0FBTjtBQUFBLGVBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYkYsZUFrQkU7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBc0IsdUJBQU0sc0JBQTVCO0FBQ0UscUJBQU8sRUFBRTtBQUFBLHVCQUFNZCxNQUFNLENBQUNjLElBQVAsQ0FBWSxlQUFaLENBQU47QUFBQSxlQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpDRixlQXdGRTtBQUFRLGlCQUFTLEVBQUMsYUFBbEI7QUFBZ0MsYUFBSyxFQUFFO0FBQUVQLGtCQUFRLEVBQUUsVUFBWjtBQUF3QlEsZ0JBQU0sRUFBRSxFQUFoQztBQUFvQ0gsZUFBSyxFQUFFO0FBQTNDLFNBQXZDO0FBQUEsaURBQ2U7QUFBRyxjQUFJLEVBQUMsbUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGYsWUFDbUYsSUFBSUksSUFBSixHQUFXQyxXQUFYLEVBRG5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWdHRDs7R0FuR3VCbEIsSTtVQUNQRSxxRDs7O0tBRE9GLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGQyNDFlM2Q2ZmVkNTIxZTU0ZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICA8UGFydGljbGVzIHdpZHRoPXsnMTAwdncnfSBoZWlnaHQ9eyc5NnZoJ31cbiAgICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICAgIFwicGFydGljbGVzXCI6IHtcbiAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMxYzVjNGRcIixcbiAgICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICAgICAgICBzaGFkb3c6IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcbiAgICAgICAgICAgICAgICAgIGJsdXI6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwibnVtYmVyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDgwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIFwiaW50ZXJhY3Rpdml0eVwiOiB7XG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcIm9uaG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwibW9kZVwiOiBcInJlcHVsc2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJtb2Rlc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJidWJibGVcIjoge1xuICAgICAgICAgICAgICAgICAgXCJkaXN0YW5jZVwiOiAyNTAsXG4gICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDIsXG4gICAgICAgICAgICAgICAgICBcInNpemVcIjogMCxcbiAgICAgICAgICAgICAgICAgIFwib3BhY2l0eVwiOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInJlcHVsc2VcIjoge1xuICAgICAgICAgICAgICAgICAgXCJkaXN0YW5jZVwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fSAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLXNlbGYtY2VudGVyXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHRvcDogJzMwJScsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNDB2aFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWFyb3VuZFwiXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNDB2aFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9TcGFjZVhMb2dvRnVsbC5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJTcGFjZVggTG9nb1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBkLWJsb2NrXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuc3BhY2V4LmNvbS9cIiwgXCJfIGJsYW5rXCIpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNzAwLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggdy01MCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbWItNFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCJsYXVuY2hfZ2VuZXJhdG9yXCIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTGF1bmNoIEdlbmVyYXRvclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG1iLTRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwibGF1bmNoX3NlYXJjaFwiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExhdW5jaCBTZWFyY2hcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtYi00XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcImxhdW5jaF9zZWFyY2hcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSb2NrZXQgU2VhcmNoXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbWItNFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCJsYXVuY2hfc2VhcmNoXCIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUm9ja2V0IEdlbmVyYXRvclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcicgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogNDAsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgRGV2ZWxvcGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy5naXRodWIuY29tL2FuZHl0dWJlZWVcIj5BbmRyZXcgWWFuZzwvYT4gJmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9