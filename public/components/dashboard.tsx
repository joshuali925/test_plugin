import React, { Fragment } from 'react';
import GridLayout from 'react-grid-layout';
import Plt from './visualization/plt';
import ReactResizeDetector from 'react-resize-detector';
import { EuiIcon } from '@elastic/eui';
import { EuiKeyPadMenuItem } from '@elastic/eui';
import { EuiOverlayMask, EuiModal, EuiModalHeader, EuiModalHeaderTitle, EuiModalBody, EuiFieldText, EuiModalFooter, EuiButtonEmpty, EuiButton } from '@elastic/eui';
import { htmlIdGenerator } from '@elastic/eui';
import { EuiCheckboxGroup } from '@elastic/eui';

class Dashboard extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      show: false,
      isModalVisible: false,
      checkboxIdToSelectedMap: {},
      data: []
    };
  }

  selectModal() {
    return (this.state.isModalVisible ? (
      <EuiOverlayMask>
        <EuiModal onClose={() => this.setState({ isModalVisible: false })} initialFocus="[name=select]">
          <EuiModalHeader>
            <EuiModalHeaderTitle>Add Visualizations</EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            <EuiCheckboxGroup
              options={[
                {
                  id: 'panel_1',
                  label: 'Panel 1',
                },
                {
                  id: 'panel_2',
                  label: 'Panel 2',
                },
                {
                  id: 'panel_3',
                  label: 'Panel 3',
                },
              ]}
              idToSelectedMap={this.state.checkboxIdToSelectedMap}
              onChange={id => {
                this.setState((prevState) => {
                  return {
                    ...prevState,
                    checkboxIdToSelectedMap: {
                      ...prevState.checkboxIdToSelectedMap,
                      [id]: !prevState.checkboxIdToSelectedMap[id]
                    }
                  }
                })
              }}
            />
          </EuiModalBody>

          <EuiModalFooter>
            <EuiButtonEmpty onClick={() => this.cancel()}>
              Cancel
            </EuiButtonEmpty>
            <EuiButton onClick={() => this.save()} fill>
              Add
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      </EuiOverlayMask>
    ) : (null));
  }

  showSelectModal() {
    this.setState({ isModalVisible: true });
  }

  cancel() {
    this.setState({ isModalVisible: false })
  }

  save() {
    const propx = Array.from({ length: 450 }, (x, i) => i),
      propy = Array.from({ length: 450 }, () => Math.random() * 15 + 100),
      propy2 = Array.from({ length: 120 }, () => Math.random() * 1),
      now = Date.now()
    const datalist = [
      {
        data: [
          {
            x: propx,
            y: propy,
            line: {
              color: 'rgb(132, 207, 228)',
              width: 1,
              dash: 'solid',
              shape: 'linear',
            },
            type: 'scatter',
            name: 'web_server_01',
            displayModeBar: false,
            fill: 'tonexty',  // tozeroy
          },
          {
            x: propx,
            y: propy.map(y => y * 2),
            line: {
              color: 'rgb(82, 133, 189)',
              width: 1,
              dash: 'solid',
              shape: 'linear',
            },
            type: 'scatter',
            name: 'web_server_02',
            displayModeBar: false,
            fill: 'tonexty',
          },
          {
            x: propx,
            y: propy.map(y => y * 3),
            line: {
              color: 'rgb(31, 77, 145)',
              width: 1,
              dash: 'solid',
              shape: 'linear',
            },
            type: 'scatter',
            name: 'web_server_03',
            displayModeBar: false,
            fill: 'tonexty',
          },
          {
            x: propx,
            y: propy.map(y => y * 4),
            line: {
              color: 'rgb(27, 61, 108)',
              width: 1,
              dash: 'solid',
              shape: 'linear',
            },
            type: 'scatter',
            name: 'web_server_04',
            displayModeBar: false,
            fill: 'tonexty',
          },
        ],
        title: 'Server Requests'
      },
      {
        data: [
          {
            x: Array.from({ length: 30 }, (x, i) => i),
            y: Array.from({ length: 30 }, (x, i) => Math.random() * 1),
            marker: {
              color: 'rgb(172, 158, 148)',
            },
            width: 0.65,
            type: 'bar',
            name: 'upper_25',
            displayModeBar: false,
          },
          {
            x: Array.from({ length: 30 }, (x, i) => i),
            y: Array.from({ length: 30 }, (x, i) => Math.random() * 1 + 5),
            marker: {
              color: 'rgb(242, 200, 110)',
            },
            width: 0.65,
            type: 'bar',
            name: 'upper_50',
            displayModeBar: false,
          },
          {
            x: Array.from({ length: 30 }, (x, i) => i),
            y: Array.from({ length: 30 }, (x, i) => Math.random() * 4 + 20),
            marker: {
              color: 'rgb(234, 184, 57)',
            },
            width: 0.65,
            type: 'bar',
            name: 'upper_75',
            displayModeBar: false,
          },
          {
            x: Array.from({ length: 30 }, (x, i) => i),
            y: Array.from({ length: 30 }, (x, i) => Math.random() * 11 + 55),
            marker: {
              color: 'rgb(239, 133, 60)',
            },
            width: 0.65,
            type: 'bar',
            name: 'upper_90',
            displayModeBar: false,
          },
          {
            x: Array.from({ length: 30 }, (x, i) => i),
            y: Array.from({ length: 30 }, (x, i) => Math.random() * 16 + 80),
            marker: {
              color: 'rgb(226, 76, 66)',
            },
            width: 0.65,
            type: 'bar',
            name: 'upper_95',
            displayModeBar: false,
          }
        ],
        title: 'Client Side Full Page Load',
      },
      {
        data: [
          {
            x: Array.from({ length: 120 }, (x, i) => i),
            y: Array.from({ length: 120 }, (x, i) => Math.random() * 1),
            line: {
              color: 'rgb(101, 157, 86)',
              width: 2.2,
              dash: 'solid',
              shape: 'linear',
            },
            type: 'scatter',
            name: 'upper_25',
            displayModeBar: false,
            fill: 'tozeroy',  // tozeroy
            fillcolor: 'rgba(101, 157, 86, 0.25)',
          },
          {
            x: Array.from({ length: 120 }, (x, i) => i),
            y: Array.from({ length: 120 }, (x, i) => propy2[i] * 1 + Math.random() * 1 + 1),
            line: {
              color: 'rgb(101, 157, 86)',
              width: 2.2,
              dash: 'solid',
              shape: 'linear',
            },
            type: 'scatter',
            name: 'upper_50',
            displayModeBar: false,
            fill: 'tozeroy',  // tozeroy
            fillcolor: 'rgba(101, 157, 86, 0.25)',
          },
          {
            x: Array.from({ length: 120 }, (x, i) => i),
            y: Array.from({ length: 120 }, (x, i) => propy2[i] * 1 + Math.random() * 1 + 8),
            line: {
              color: 'rgb(91, 150, 77)',
              width: 2.2,
              dash: 'solid',
              shape: 'linear',
            },
            type: 'scatter',
            name: 'upper_75',
            displayModeBar: false,
            fill: 'tozeroy',
            fillcolor: 'rgba(91, 150, 77, 0.25)',
          },
          {
            x: Array.from({ length: 120 }, (x, i) => i),
            y: Array.from({ length: 120 }, (x, i) => propy2[i] * 9 + Math.random() * 3 + 13),
            line: {
              color: 'rgb(91, 150, 77)',
              width: 2.2,
              dash: 'solid',
              shape: 'linear',
            },
            type: 'scatter',
            name: 'upper_90',
            displayModeBar: false,
            fill: 'tozeroy',
            fillcolor: 'rgba(91, 150, 77, 0.25)',
          },
          {
            x: Array.from({ length: 120 }, (x, i) => i),
            y: Array.from({ length: 120 }, (x, i) => propy2[i] * 18 + Math.random() * 3 + 18),
            line: {
              color: 'rgb(80, 134, 66)',
              width: 2.2,
              dash: 'solid',
              shape: 'linear',
            },
            type: 'scatter',
            name: 'upper_95',
            displayModeBar: false,
            fill: 'tozeroy',
            fillcolor: 'rgba(80, 134, 66, 0.25)',
          },
          {
            x: Array.from({ length: 120 }, (x, i) => i),
            y: Array.from({ length: 120 }, (x, i) => -(propy2[i] * 1 + Math.random() * 1 + 8)),
            line: {
              color: 'rgb(30, 120, 193)',
              width: 2.2,
              dash: 'solid',
              shape: 'linear',
            },
            type: 'scatter',
            name: 'cpu1',
            displayModeBar: false,
            fill: 'tozeroy',
            fillcolor: 'rgba(30, 120, 193, 0.25)',
          },
          {
            x: Array.from({ length: 120 }, (x, i) => i),
            y: Array.from({ length: 120 }, (x, i) => -(propy2[i] * 18 + Math.random() * 3 + 18)),
            line: {
              color: 'rgb(130, 181, 216)',
              width: 2.2,
              dash: 'solid',
              shape: 'linear',
            },
            type: 'scatter',
            name: 'cpu2',
            displayModeBar: false,
            fill: 'tozeroy',
            fillcolor: 'rgba(130, 181, 216, 0.25)',
          },
        ],
        title: 'Traffic In/Out',
      },
    ];

    this.setState({ isModalVisible: false });
    this.state.data.length = 0;

    Object.keys(this.state.checkboxIdToSelectedMap).sort().forEach(id => {
      if (this.state.checkboxIdToSelectedMap[id]) {
        this.setState({ show: true });
        let i = (Number(id.slice(-1)) - 1)
        datalist[i]["grid_x"] = 6 * ((this.state.data.length) % 2)
        datalist[i]["grid_y"] = 6 * Math.floor((this.state.data.length) / 2)
        this.state.data.push(datalist[i]);
      }
    });
    if (this.state.data.length === 0)
      this.setState({ show: false });
  }

  render() {
    this.state.data.forEach(element => {
      this.state.children.push(React.createRef())
    });
    return (
      <Fragment>

        {this.selectModal()}

        {this.state.show ? (
          <Fragment>
            <GridLayout className="layout" cols={12} rowHeight={26} width={1400}>
              {this.state.data.map(({ title, grid_x, grid_y, data }, idx) => (
                <div key={`grid-${idx}`} data-grid={{ x: grid_x, y: grid_y, w: 6, h: 8 }} style={{border: '1px solid #2a2c30', borderRadius: '2px'}}>
                  <Plt ref={this.state.children[idx]} data={data} title={title} />
                  <ReactResizeDetector handleWidth handleHeight onResize={() => this.state.children[idx].current.autoResize()} />
                </div>
              ))}
            </GridLayout>
            <EuiKeyPadMenuItem
              style={{ width: 100, height: 100, bottom: 0, right: 0, position: "fixed" }}
              label="Add Visualizations"
              onClick={() => { this.showSelectModal() }}>
              <EuiIcon type="plusInCircle" size="l" />
            </EuiKeyPadMenuItem>
          </Fragment>
        ) : (
            <EuiKeyPadMenuItem
              style={{ width: 100, height: 100 }}
              label="Add Visualizations"
              onClick={() => { this.showSelectModal() }}>
              <EuiIcon type="plusInCircle" size="l" />
            </EuiKeyPadMenuItem>
          )}




      </Fragment>
    );
  }
}

Dashboard.defaultProps = {

}

export default Dashboard
