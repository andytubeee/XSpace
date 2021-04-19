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
          particles: {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "#1c5c4d",
                blur: 1
              }
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container d-flex align-items-center justify-content-center align-self-center",
        style: {
          position: "absolute",
          top: 0,
          height: "90vh"
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
            lineNumber: 49,
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
              lineNumber: 59,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              "class": "btn btn-primary mb-4",
              children: "Launch Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
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
          lineNumber: 73,
          columnNumber: 24
        }, this), " \xA9 ", new Date().getFullYear()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsInBhcnRpY2xlcyIsImxpbmVfbGlua2VkIiwic2hhZG93IiwiZW5hYmxlIiwiY29sb3IiLCJibHVyIiwicG9zaXRpb24iLCJ0b3AiLCJoZWlnaHQiLCJ3aW5kb3ciLCJvcGVuIiwid2lkdGgiLCJjdXJzb3IiLCJwdXNoIiwiYm90dG9tIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw4QkFDRSxxRUFBQyx5REFBRDtBQUFXLGFBQUssRUFBRSxPQUFsQjtBQUEyQixjQUFNLEVBQUUsTUFBbkM7QUFDRSxjQUFNLEVBQUU7QUFDTkMsbUJBQVMsRUFBRTtBQUNULHNCQUFVO0FBQ1IsdUJBQVM7QUFERCxhQUREO0FBSVQsb0JBQVE7QUFDTix1QkFBUztBQURILGFBSkM7QUFPVEMsdUJBQVcsRUFBRTtBQUNYQyxvQkFBTSxFQUFFO0FBQ05DLHNCQUFNLEVBQUUsSUFERjtBQUVOQyxxQkFBSyxFQUFFLFNBRkQ7QUFHTkMsb0JBQUksRUFBRTtBQUhBO0FBREc7QUFQSixXQURMO0FBZ0JOLDJCQUFpQjtBQUNmLHNCQUFVO0FBQ1IseUJBQVc7QUFDVCwwQkFBVSxJQUREO0FBRVQsd0JBQVE7QUFGQztBQURIO0FBREs7QUFoQlg7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUEyQkU7QUFDRSxpQkFBUyxFQUFDLDhFQURaO0FBRUUsYUFBSyxFQUFFO0FBQ0xDLGtCQUFRLEVBQUUsVUFETDtBQUVMQyxhQUFHLEVBQUUsQ0FGQTtBQUdMQyxnQkFBTSxFQUFFO0FBSEgsU0FGVDtBQUFBLCtCQVFFO0FBQ0UsbUJBQVMsRUFBQyw4REFEWjtBQUVFLGVBQUssRUFBRTtBQUFFQSxrQkFBTSxFQUFFO0FBQVYsV0FGVDtBQUFBLGtDQUlFO0FBQ0UsZUFBRyxFQUFDLG1DQUROO0FBRUUsZUFBRyxFQUFDLGFBRk47QUFHRSxxQkFBUyxFQUFDLG1CQUhaO0FBSUUsbUJBQU8sRUFBRSxtQkFBTTtBQUNiQyxvQkFBTSxDQUFDQyxJQUFQLENBQVkseUJBQVosRUFBdUMsU0FBdkM7QUFDRCxhQU5IO0FBT0UsaUJBQUssRUFBRTtBQUFFQyxtQkFBSyxFQUFFLEdBQVQ7QUFBY0Msb0JBQU0sRUFBRTtBQUF0QjtBQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFhRTtBQUFLLHFCQUFTLEVBQUMsOENBQWY7QUFBQSxvQ0FDRTtBQUNFLGtCQUFJLEVBQUMsUUFEUDtBQUVFLHVCQUFNLHNCQUZSO0FBR0UscUJBQU8sRUFBRTtBQUFBLHVCQUFNZCxNQUFNLENBQUNlLElBQVAsQ0FBWSxrQkFBWixDQUFOO0FBQUEsZUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQVFFO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQXNCLHVCQUFNLHNCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCRixlQThERTtBQUFRLGlCQUFTLEVBQUMsYUFBbEI7QUFBZ0MsYUFBSyxFQUFFO0FBQUVQLGtCQUFRLEVBQUUsVUFBWjtBQUF3QlEsZ0JBQU0sRUFBRSxFQUFoQztBQUFvQ0gsZUFBSyxFQUFFO0FBQTNDLFNBQXZDO0FBQUEsaURBQ2U7QUFBRyxjQUFJLEVBQUMsbUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGYsWUFDbUYsSUFBSUksSUFBSixHQUFXQyxXQUFYLEVBRG5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXNFRDs7R0F6RXVCbkIsSTtVQUNQRSxxRDs7O0tBRE9GLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDM4NWRkNzgyYWMyMzYxZDczMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICA8UGFydGljbGVzIHdpZHRoPXsnMTAwdncnfSBoZWlnaHQ9eyc5NnZoJ31cbiAgICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICAgIHBhcnRpY2xlczoge1xuICAgICAgICAgICAgICBcIm51bWJlclwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA1MFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInNpemVcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogM1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICAgIHNoYWRvdzoge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzFjNWM0ZFwiLFxuICAgICAgICAgICAgICAgICAgYmx1cjogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaW50ZXJhY3Rpdml0eVwiOiB7XG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcIm9uaG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwibW9kZVwiOiBcInJlcHVsc2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19IC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLXNlbGYtY2VudGVyXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGhlaWdodDogXCI5MHZoXCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0MHZoXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL1NwYWNlWExvZ29GdWxsLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlNwYWNlWCBMb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGQtYmxvY2tcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5zcGFjZXguY29tL1wiLCBcIl8gYmxhbmtcIik7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA3MDAsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCB3LTUwIGp1c3RpZnktY29udGVudC1hcm91bmQgZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtYi00XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcImxhdW5jaF9nZW5lcmF0b3JcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMYXVuY2ggR2VuZXJhdG9yXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbWItNFwiPlxuICAgICAgICAgICAgICAgIExhdW5jaCBTZWFyY2hcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206IDQwLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgIERldmVsb3BlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9hbmR5dHViZWVlXCI+QW5kcmV3IFlhbmc8L2E+ICZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==