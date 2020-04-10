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
        x: Array.from({
          length: this.props.y.length
        }, (x, i) => i + 1),
        y: this.props.y,
        type: 'scatter',
        mode: 'lines+markers',
        marker: {
          color: 'red'
        } // text: 'hello'

      }]
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_reactPlotly.default, {
      data: this.state.data,
      layout: {
        width: 600,
        height: 480,
        title: this.props.title,
        // plot_bgcolor: "#1d1e24",
        // paper_bgcolor: "#1d1e24",
        // font: {
        //   color: "#dfe5ef"
        // },
        // plot_bgcolor: "#fafbfd",
        // paper_bgcolor: "#fafbfd",
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

Plt.defaultProps = {
  x: Array.from({
    length: 10
  }, (x, i) => i + 1),
  y: Array.from({
    length: 10
  }, () => Math.random() * 10),
  title: 'A Randomly Generated Plot'
};
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

var _eui = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");

var _plt = _interopRequireDefault(__webpack_require__(/*! ./plt */ "./public/components/plt.tsx"));

var _visualization = _interopRequireDefault(__webpack_require__(/*! ./visualization/visualization */ "./public/components/visualization/visualization.tsx"));

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
      name: 'Visualization',
      content: /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_eui.EuiSpacer, null), /*#__PURE__*/_react.default.createElement(_visualization.default, null))
    }, {
      id: 'monosodium_glutammate--id',
      name: 'Monosodium Glutamate',
      content: /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_eui.EuiSpacer, null), /*#__PURE__*/_react.default.createElement(_eui.EuiTitle, null, /*#__PURE__*/_react.default.createElement("h3", null, "Monosodium Glutamate")), /*#__PURE__*/_react.default.createElement(_eui.EuiText, null, "Monosodium glutamate (MSG, also known as sodium glutamate) is the sodium salt of glutamic acid, one of the most abundant naturally occurring non-essential amino acids. Monosodium glutamate is found naturally in tomatoes, cheese and other foods."), /*#__PURE__*/_react.default.createElement(_eui.EuiText, null, "Test here"))
    }];
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_eui.EuiTabbedContent, {
      tabs: this.tabs,
      initialSelectedTab: this.tabs[2],
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

/***/ }),

/***/ "./public/components/visualization/datalist.tsx":
/*!******************************************************!*\
  !*** ./public/components/visualization/datalist.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactSplitPane = _interopRequireDefault(__webpack_require__(/*! react-split-pane */ "../../node_modules/react-split-pane/dist/index.esm.js"));

var _eui = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");

var _dataloader = __webpack_require__(/*! ./dataloader */ "./public/components/visualization/dataloader.ts");

var _hover = _interopRequireDefault(__webpack_require__(/*! ./hover */ "./public/components/visualization/hover.tsx"));

var _plt = _interopRequireDefault(__webpack_require__(/*! ../plt */ "./public/components/plt.tsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function DataList(props) {
  const [isItemRemovable, setIsItemRemovable] = (0, _react.useState)(false); // const [list1, setList1] = useState(makeList());

  const [list1, setList1] = (0, _react.useState)((0, _dataloader.makeFromList)(Object.keys(_dataloader.covidData)));
  const [list2, setList2] = (0, _react.useState)([]);
  const lists = {
    DROPPABLE_AREA_COPY_1: list1,
    DROPPABLE_AREA_COPY_2: list2
  };
  const actions = {
    DROPPABLE_AREA_COPY_1: setList1,
    DROPPABLE_AREA_COPY_2: setList2
  };

  const remove = (droppableId, index) => {
    const list = Array.from(lists[droppableId]);
    list.splice(index, 1);
    actions[droppableId](list);
  };

  const onDragUpdate = ({
    source,
    destination
  }) => {
    const shouldRemove = !destination && source.droppableId === 'DROPPABLE_AREA_COPY_2';
    setIsItemRemovable(shouldRemove);
  };

  const onDragEnd = ({
    source,
    destination
  }) => {
    if (source && destination) {
      if (source.droppableId === destination.droppableId) {
        const items = (0, _eui.euiDragDropReorder)(lists[destination.droppableId], source.index, destination.index);
        actions[destination.droppableId](items);
      } else {
        const sourceId = source.droppableId;
        const destinationId = destination.droppableId;
        const result = (0, _eui.euiDragDropCopy)(lists[sourceId], lists[destinationId], source, destination, {
          property: 'id',
          modifier: _dataloader.makeId
        });
        actions[sourceId](result[sourceId]); // set list1

        actions[destinationId](result[destinationId]); // set list2
      }
    } else if (!destination && source.droppableId === 'DROPPABLE_AREA_COPY_2') {
      remove(source.droppableId, source.index);
    }
  };

  function DataListSidebar() {
    return /*#__PURE__*/_react.default.createElement(_eui.EuiDroppable, {
      droppableId: "DROPPABLE_AREA_COPY_1",
      cloneDraggables: true,
      spacing: "s",
      grow: true
    }, list1.map(({
      content,
      id
    }, idx) => /*#__PURE__*/_react.default.createElement(_eui.EuiDraggable, {
      key: id,
      index: idx,
      draggableId: id,
      spacing: "s"
    }, /*#__PURE__*/_react.default.createElement(_hover.default, {
      content: content,
      hoverMessage: `this is the popover for item ${idx}, content = ${content}`
    }))));
  }

  function DataListVisualizer() {
    return /*#__PURE__*/_react.default.createElement(_eui.EuiDroppable, {
      droppableId: "DROPPABLE_AREA_COPY_2",
      withPanel: true,
      grow: true
    }, list2.length ?
    /*#__PURE__*/
    // list2.map(({ content, id }, idx) => (
    //   <EuiDraggable
    //     key={id}
    //     index={idx}
    //     draggableId={id}
    //     spacing="s"
    //     isRemovable={isItemRemovable}>
    //     <EuiPanel>
    //       <EuiFlexGroup gutterSize="none" alignItems="center">
    //         <EuiFlexItem>{content}</EuiFlexItem>
    //         <EuiFlexItem grow={false}>
    //           {isItemRemovable ? (
    //             <EuiIcon type="trash" color="danger" />
    //           ) : (
    //               <EuiButtonIcon
    //                 iconType="cross"
    //                 aria-label="Remove"
    //                 onClick={() => remove('DROPPABLE_AREA_COPY_2', idx)}
    //               />
    //             )}
    //         </EuiFlexItem>
    //       </EuiFlexGroup>
    //     </EuiPanel>
    //   </EuiDraggable>
    // ))
    _react.default.createElement(_plt.default, {
      y: _dataloader.covidData[list2[0].content].y,
      title: list2[0].content
    }) : /*#__PURE__*/_react.default.createElement(_eui.EuiFlexGroup, {
      alignItems: "center",
      justifyContent: "spaceAround",
      gutterSize: "none",
      style: {
        height: '100%'
      }
    }, /*#__PURE__*/_react.default.createElement(_eui.EuiFlexItem, {
      grow: false
    }, "Drop Items Here")));
  }

  return (
    /*#__PURE__*/
    // <EuiDragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
    //   <EuiFlexGroup>
    //     <EuiFlexItem grow={false}>
    //       <DataListSidebar />
    //     </EuiFlexItem>
    //     <EuiFlexItem>
    //       <DataListVisualizer />
    //     </EuiFlexItem>
    //   </EuiFlexGroup>
    // </EuiDragDropContext>
    _react.default.createElement(_reactSplitPane.default, {
      split: "vertical"
    }, /*#__PURE__*/_react.default.createElement("div", null, "hello"), /*#__PURE__*/_react.default.createElement("div", null, "world"))
  );
}

;
var _default = DataList;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./public/components/visualization/dataloader.ts":
/*!*******************************************************!*\
  !*** ./public/components/visualization/dataloader.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.covidData = exports.makeFromList = exports.makeList = exports.makeId = void 0;

var _testdata = _interopRequireDefault(__webpack_require__(/*! ../../data/testdata */ "./public/data/testdata.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { htmlIdGenerator } from '../../../../src/services';
// export const makeId = () => htmlIdGenerator()();
// uuid seems to have conflicts with Kibana
// import uuid from 'uuid';
// function htmlIdGenerator(idPrefix: string = '') {
//   const staticUuid = uuid.v1();
//   return (idSuffix: string = '') => {
//     const prefix = `${idPrefix}${idPrefix !== '' ? '_' : 'i'}`;
//     const suffix = idSuffix ? `_${idSuffix}` : '';
//     return `${prefix}${suffix ? staticUuid : uuid.v1()}${suffix}`;
//   };
// }
// temporary solution
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

function htmlIdGenerator(idPrefix = '') {
  const staticUuid = uuidv4();
  return (idSuffix = '') => {
    const prefix = `${idPrefix}${idPrefix !== '' ? '_' : 'i'}`;
    const suffix = idSuffix ? `_${idSuffix}` : '';
    return `${prefix}${suffix ? staticUuid : uuidv4()}${suffix}`;
  };
}

const makeId = () => htmlIdGenerator()(); // export const makeList = (number, start = 1) => Array.from({ length: number }, (v, k) => k + start).map(el => {
//   return {
//     content: `thing${el}`,
//     id: makeId()
//   };
// });


exports.makeId = makeId;

const makeList = () => Array.from({
  length: 8
}, (x, i) => 2 ** (i * 2)).map(el => {
  return {
    content: `${el}`,
    id: makeId()
  };
});

exports.makeList = makeList;

const makeFromList = list => list.map(el => {
  return {
    content: `${el}`,
    id: makeId()
  };
});

exports.makeFromList = makeFromList;
const covidData = _testdata.default;
exports.covidData = covidData;

/***/ }),

/***/ "./public/components/visualization/hover.tsx":
/*!***************************************************!*\
  !*** ./public/components/visualization/hover.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _eui = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Hover extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopoverOpen: false
    };
  }

  onMouseEnter() {
    this.setState({
      isPopoverOpen: true
    });
  }

  onMouseLeave() {
    this.setState({
      isPopoverOpen: false
    });
  }

  closePopover() {
    this.setState({
      isPopoverOpen: false
    });
  }

  render() {
    const panel = /*#__PURE__*/_react.default.createElement(_eui.EuiPanel // TODO fix width
    , {
      style: {
        width: '80px'
      },
      onMouseEnter: this.onMouseEnter.bind(this),
      onMouseLeave: this.onMouseLeave.bind(this)
    }, this.props.content);

    return /*#__PURE__*/_react.default.createElement(_eui.EuiPopover, {
      button: panel,
      isOpen: this.state.isPopoverOpen,
      anchorPosition: "rightCenter",
      closePopover: this.closePopover.bind(this)
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '250px'
      }
    }, this.props.hoverMessage));
  }

}

var _default = Hover;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./public/components/visualization/visualization.tsx":
/*!***********************************************************!*\
  !*** ./public/components/visualization/visualization.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _datalist = _interopRequireDefault(__webpack_require__(/*! ./datalist */ "./public/components/visualization/datalist.tsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// put visualization page layout here
var _default = () =>
/*#__PURE__*/
// <EuiPage>
// <EuiPageSideBar>
_react.default.createElement(_datalist.default, null) // </EuiPageSideBar>
//   <EuiPageBody component="div">
//     <DataList />
//   </EuiPageBody>
// </EuiPage>
;

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./public/data/testdata.js":
/*!*********************************!*\
  !*** ./public/data/testdata.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const allData = {
  us: {
    y: [1, 1, 2, 2, 5, 5, 5, 5, 5, 7, 8, 8, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 15, 15, 15, 51, 51, 57, 58, 60, 68, 74, 98, 118, 149, 217, 262, 402, 518, 583, 959, 1281, 1663, 2179, 2727, 3499, 4632, 6421, 7783, 13747, 19273, 25600, 33276, 43847, 53740, 65778, 83836, 101657, 121465, 140909, 161831, 188172, 213372, 243762, 275586, 308853, 337072, 366667, 396223, 429052, 461437],
    x: Array.from({
      length: 79
    }, (x, i) => i + 1)
  },
  spain: {
    y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 13, 15, 32, 45, 84, 120, 165, 222, 259, 400, 500, 673, 1073, 1695, 2277, 2277, 5232, 6391, 7798, 9942, 11748, 13910, 17963, 20410, 25374, 28768, 35136, 39885, 49515, 57786, 65719, 73235, 80110, 87956, 95923, 104118, 112065, 119199, 126168, 131646, 136675, 141942, 148220, 153222],
    x: Array.from({
      length: 79
    }, (x, i) => i + 1)
  },
  italy: {
    y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 20, 62, 155, 229, 322, 453, 655, 888, 1128, 1694, 2036, 2502, 3089, 3858, 4636, 5883, 7375, 9172, 10149, 12462, 12462, 17660, 21157, 24747, 27980, 31506, 35713, 41035, 47021, 53578, 59138, 63927, 69176, 74386, 80589, 86498, 92472, 97689, 101739, 105792, 110574, 115242, 119827, 124632, 128948, 132547, 135586, 139422, 143626],
    x: Array.from({
      length: 79
    }, (x, i) => i + 1)
  }
};
var _default = allData;
exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=1.plugin.js.map