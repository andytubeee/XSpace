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
                return router.push("launch_generator");
              },
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
          lineNumber: 89,
          columnNumber: 24
        }, this), " \xA9 ", new Date().getFullYear()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsImxpbmVfbGlua2VkIiwic2hhZG93IiwiZW5hYmxlIiwiY29sb3IiLCJibHVyIiwicG9zaXRpb24iLCJ0b3AiLCJoZWlnaHQiLCJ3aW5kb3ciLCJvcGVuIiwid2lkdGgiLCJjdXJzb3IiLCJwdXNoIiwiYm90dG9tIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw4QkFDRSxxRUFBQyx5REFBRDtBQUFXLGFBQUssRUFBRSxPQUFsQjtBQUEyQixjQUFNLEVBQUUsTUFBbkM7QUFDRSxjQUFNLEVBQUU7QUFDTix1QkFBYTtBQUNYLHFCQUFTLFNBREU7QUFFWEMsdUJBQVcsRUFBRTtBQUNYQyxvQkFBTSxFQUFFO0FBQ05DLHNCQUFNLEVBQUUsSUFERjtBQUVOQyxxQkFBSyxFQUFFLFNBRkQ7QUFHTkMsb0JBQUksRUFBRTtBQUhBO0FBREcsYUFGRjtBQVNYLHNCQUFVO0FBQ1IsdUJBQVM7QUFERCxhQVRDO0FBWVgsb0JBQVE7QUFDTix1QkFBUztBQURIO0FBWkcsV0FEUDtBQWtCTiwyQkFBaUI7QUFDZixzQkFBVTtBQUNSLHlCQUFXO0FBQ1QsMEJBQVUsSUFERDtBQUVULHdCQUFRO0FBRkM7QUFESCxhQURLO0FBT2YscUJBQVM7QUFDUCx3QkFBVTtBQUNSLDRCQUFZLEdBREo7QUFFUiw0QkFBWSxDQUZKO0FBR1Isd0JBQVEsQ0FIQTtBQUlSLDJCQUFXO0FBSkgsZUFESDtBQU9QLHlCQUFXO0FBQ1QsNEJBQVksR0FESDtBQUVULDRCQUFZO0FBRkg7QUFQSjtBQVBNO0FBbEJYO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBeUNFO0FBQ0UsaUJBQVMsRUFBQyxvRUFEWjtBQUVFLGFBQUssRUFBRTtBQUNMQyxrQkFBUSxFQUFFLFVBREw7QUFFTEMsYUFBRyxFQUFFLEtBRkE7QUFHTEMsZ0JBQU0sRUFBRTtBQUhILFNBRlQ7QUFBQSwrQkFRRTtBQUNFLG1CQUFTLEVBQUMsOERBRFo7QUFFRSxlQUFLLEVBQUU7QUFBRUEsa0JBQU0sRUFBRTtBQUFWLFdBRlQ7QUFBQSxrQ0FJRTtBQUNFLGVBQUcsRUFBQyxtQ0FETjtBQUVFLGVBQUcsRUFBQyxhQUZOO0FBR0UscUJBQVMsRUFBQyxtQkFIWjtBQUlFLG1CQUFPLEVBQUUsbUJBQU07QUFDYkMsb0JBQU0sQ0FBQ0MsSUFBUCxDQUFZLHlCQUFaLEVBQXVDLFNBQXZDO0FBQ0QsYUFOSDtBQU9FLGlCQUFLLEVBQUU7QUFBRUMsbUJBQUssRUFBRSxHQUFUO0FBQWNDLG9CQUFNLEVBQUU7QUFBdEI7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBYUU7QUFBSyxxQkFBUyxFQUFDLDhDQUFmO0FBQUEsb0NBQ0U7QUFDRSxrQkFBSSxFQUFDLFFBRFA7QUFFRSx1QkFBTSxzQkFGUjtBQUdFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTWIsTUFBTSxDQUFDYyxJQUFQLENBQVksa0JBQVosQ0FBTjtBQUFBLGVBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFRRTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBTSxzQkFBNUI7QUFDRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1kLE1BQU0sQ0FBQ2MsSUFBUCxDQUFZLGtCQUFaLENBQU47QUFBQSxlQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekNGLGVBOEVFO0FBQVEsaUJBQVMsRUFBQyxhQUFsQjtBQUFnQyxhQUFLLEVBQUU7QUFBRVAsa0JBQVEsRUFBRSxVQUFaO0FBQXdCUSxnQkFBTSxFQUFFLEVBQWhDO0FBQW9DSCxlQUFLLEVBQUU7QUFBM0MsU0FBdkM7QUFBQSxpREFDZTtBQUFHLGNBQUksRUFBQyxtQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEZixZQUNtRixJQUFJSSxJQUFKLEdBQVdDLFdBQVgsRUFEbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBc0ZEOztHQXpGdUJsQixJO1VBQ1BFLHFEOzs7S0FET0YsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YmNmNzhlNDYwYmM3ZTVlNjYzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgIDxQYXJ0aWNsZXMgd2lkdGg9eycxMDB2dyd9IGhlaWdodD17Jzk2dmgnfVxuICAgICAgICAgIHBhcmFtcz17e1xuICAgICAgICAgICAgXCJwYXJ0aWNsZXNcIjoge1xuICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzFjNWM0ZFwiLFxuICAgICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICAgIHNoYWRvdzoge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgICAgICAgYmx1cjogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJudW1iZXJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogODBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJzaXplXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IDNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgXCJpbnRlcmFjdGl2aXR5XCI6IHtcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwib25ob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgXCJtb2RlXCI6IFwicmVwdWxzZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcIm1vZGVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImJ1YmJsZVwiOiB7XG4gICAgICAgICAgICAgICAgICBcImRpc3RhbmNlXCI6IDI1MCxcbiAgICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogMixcbiAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiAwLFxuICAgICAgICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwicmVwdWxzZVwiOiB7XG4gICAgICAgICAgICAgICAgICBcImRpc3RhbmNlXCI6IDIwMCxcbiAgICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogNFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19IC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24tc2VsZi1jZW50ZXJcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgdG9wOiAnMzAlJyxcbiAgICAgICAgICAgIGhlaWdodDogXCI0MHZoXCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0MHZoXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL1NwYWNlWExvZ29GdWxsLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlNwYWNlWCBMb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGQtYmxvY2tcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5zcGFjZXguY29tL1wiLCBcIl8gYmxhbmtcIik7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA3MDAsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCB3LTUwIGp1c3RpZnktY29udGVudC1hcm91bmQgZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtYi00XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcImxhdW5jaF9nZW5lcmF0b3JcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMYXVuY2ggR2VuZXJhdG9yXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbWItNFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCJsYXVuY2hfZ2VuZXJhdG9yXCIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTGF1bmNoIFNlYXJjaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcicgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogNDAsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgRGV2ZWxvcGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy5naXRodWIuY29tL2FuZHl0dWJlZWVcIj5BbmRyZXcgWWFuZzwvYT4gJmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9