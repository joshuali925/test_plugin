(window["testPlugin_bundle_jsonpfunction"] = window["testPlugin_bundle_jsonpfunction"] || []).push([[1],{

/***/ "./public/application.tsx":
/*!********************************!*\
  !*** ./public/application.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderApp = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var _app = __webpack_require__(/*! ./components/app */ "./public/components/app.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderApp = ({
  notifications,
  http
}, {
  navigation
}, {
  appBasePath,
  element
}) => {
  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_app.TestPluginApp, {
    basename: appBasePath,
    notifications: notifications,
    http: http,
    navigation: navigation
  }), element);

  return () => _reactDom.default.unmountComponentAtNode(element);
};

exports.renderApp = renderApp;

/***/ }),

/***/ "./public/components/app.tsx":
/*!***********************************!*\
  !*** ./public/components/app.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestPluginApp = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _react2 = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _tabs = _interopRequireDefault(__webpack_require__(/*! ./tabs */ "./public/components/tabs.tsx"));

var _eui = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");

var _common = __webpack_require__(/*! ../../common */ "./common/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const TestPluginApp = ({
  basename,
  notifications,
  http,
  navigation
}) => {
  // Use React hooks to manage state.
  // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, {
    basename: basename
  }, /*#__PURE__*/_react.default.createElement(_react2.I18nProvider, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(navigation.ui.TopNavMenu, {
    appName: _common.PLUGIN_ID,
    showSearchBar: true
  }), /*#__PURE__*/_react.default.createElement(_eui.EuiPage, {
    restrictWidth: "1500px"
  }, /*#__PURE__*/_react.default.createElement(_eui.EuiPageBody, null, /*#__PURE__*/_react.default.createElement(_tabs.default, null))))));
};

exports.TestPluginApp = TestPluginApp;

/***/ }),

/***/ "./public/components/plt.tsx":
/*!***********************************!*\
  !*** ./public/components/plt.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactPlotly = _interopRequireDefault(__webpack_require__(/*! react-plotly.js */ "../../node_modules/react-plotly.js/react-plotly.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Plt extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: Array.from({
          length: 10
        }, () => Math.random() * 10),
        type: 'scatter',
        mode: 'lines+markers',
        marker: {
          color: 'red'
        },
        text: 'hello'
      }]
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_reactPlotly.default, {
      data: this.state.data,
      layout: {
        width: 600,
        height: 480,
        title: 'A Randomly Generated Plot',
        // plot_bgcolor: "#1d1e24",
        // paper_bgcolor: "#1d1e24",
        // font: {
        //   color: "#dfe5ef"
        // },
        annotations: [{
          x: this.state.data[0].y.indexOf(Math.max(...this.state.data[0].y)) + 1,
          y: Math.max(...this.state.data[0].y),
          xref: 'x',
          yref: 'y',
          text: 'Peak',
          showarrow: true,
          arrowhead: 7,
          ax: -40,
          ay: -40
        }]
      }
    });
  }

}

var _default = Plt;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./public/components/tabs.tsx":
/*!************************************!*\
  !*** ./public/components/tabs.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _plt = _interopRequireDefault(__webpack_require__(/*! ./plt */ "./public/components/plt.tsx"));

var _eui = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class EuiTabsNavigation extends _react.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "tabs", void 0);

    this.tabs = [{
      id: 'dashboard--id',
      name: 'Dashboard',
      content: /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_eui.EuiSpacer, null), /*#__PURE__*/_react.default.createElement(_eui.EuiTitle, null, /*#__PURE__*/_react.default.createElement("h3", null, "Dashboard")))
    }, {
      id: 'plot--id',
      name: 'Plot',
      content: /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_eui.EuiSpacer, null), /*#__PURE__*/_react.default.createElement(_eui.EuiTitle, null, /*#__PURE__*/_react.default.createElement("h3", null, "Plot")), /*#__PURE__*/_react.default.createElement(_plt.default, null))
    }, {
      id: 'visualization--id',
      name: 'visualization',
      content: /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_eui.EuiSpacer, null), /*#__PURE__*/_react.default.createElement(_eui.EuiTitle, null, /*#__PURE__*/_react.default.createElement("h3", null, "Visualization")))
    }, {
      id: 'monosodium_glutammate--id',
      name: 'Monosodium Glutamate',
      content: /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_eui.EuiSpacer, null), /*#__PURE__*/_react.default.createElement(_eui.EuiTitle, null, /*#__PURE__*/_react.default.createElement("h3", null, "Monosodium Glutamate")), /*#__PURE__*/_react.default.createElement(_eui.EuiText, null, "Monosodium glutamate (MSG, also known as sodium glutamate) is the sodium salt of glutamic acid, one of the most abundant naturally occurring non-essential amino acids. Monosodium glutamate is found naturally in tomatoes, cheese and other foods."))
    }];
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_eui.EuiTabbedContent, {
      tabs: this.tabs,
      initialSelectedTab: this.tabs[1],
      autoFocus: "selected",
      onTabClick: tab => {
        console.log('clicked tab', tab);
      }
    });
  }

}

var _default = EuiTabsNavigation;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=1.plugin.js.map