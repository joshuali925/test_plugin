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
    const propx = Array.from({ length: 700 }, (x, i) => i),
      propy = Array.from({ length: 700 }, () => Math.random() * 15 + 100);
    const datalist = [
      {
        data: [{
          x: [3],
          y: [10],
          type: 'bar',
          orientation: 'h',
          marker: { color: 'rgba(255,255,255,0)' },
          mode: 'lines',
          line: { width: 0 },
          hoverinfo: "none",
          showlegend: false,
        },
        {
          x: [7],
          y: [10],
          type: 'bar',
          orientation: 'h',
          showlegend: false,
          mode: 'lines',
          line: { width: 0 },
          marker: {
            color: 'rgb(97, 147, 201)',
            opacity: 0.7,
            line: {
              color: 'rgba(53, 97, 164, 0)',
              width: 2
            }
          },
        },
        {
          x: [7],
          y: [8],
          type: 'bar',
          orientation: 'h',
          marker: { color: 'rgba(255,255,255,0)' },
          mode: 'lines',
          line: { width: 0 },
          hoverinfo: "none",
          showlegend: false,
        },
        {
          x: [6],
          y: [8],
          type: 'bar',
          orientation: 'h',
          showlegend: false,
          mode: 'lines',
          line: { width: 0 },
          marker: {
            color: 'rgb(97, 147, 201)',
            opacity: 0.7,
            line: {
              color: 'rgba(53, 97, 164, 0)',
              width: 2
            }
          },
        },
        {
          x: [11],
          y: [6],
          type: 'bar',
          orientation: 'h',
          marker: { color: 'rgba(255,255,255,0)' },
          mode: 'lines',
          line: { width: 0 },
          hoverinfo: "none",
          showlegend: false,
        },
        {
          x: [8],
          y: [6],
          type: 'bar',
          orientation: 'h',
          showlegend: false,
          mode: 'lines',
          line: { width: 0 },
          marker: {
            color: 'rgb(97, 147, 201)',
            opacity: 0.7,
            line: {
              color: 'rgba(53, 97, 164, 0)',
              width: 2
            }
          },
        },
        {
          x: [14],
          y: [4],
          type: 'bar',
          orientation: 'h',
          marker: { color: 'rgba(255,255,255,0)' },
          mode: 'lines',
          line: { width: 0 },
          hoverinfo: "none",
          showlegend: false,
        },
        {
          x: [7],
          y: [4],
          type: 'bar',
          orientation: 'h',
          showlegend: false,
          mode: 'lines',
          line: { width: 0 },
          marker: {
            color: 'rgb(97, 147, 201)',
            opacity: 0.7,
            line: {
              color: 'rgba(53, 97, 164, 0)',
              width: 2
            }
          },
        },
        {
          x: [17],
          y: [2],
          type: 'bar',
          orientation: 'h',
          marker: { color: 'rgba(255,255,255,0)' },
          mode: 'lines',
          line: { width: 0 },
          hoverinfo: "none",
          showlegend: false,
        },
        {
          x: [9],
          y: [2],
          type: 'bar',
          orientation: 'h',
          showlegend: false,
          mode: 'lines',
          line: { width: 0 },
          marker: {
            color: 'rgb(97, 147, 201)',
            opacity: 0.7,
            line: {
              color: 'rgba(53, 97, 164, 0)',
              width: 2
            }
          },
        },
        {
          x: [20],
          y: [0],
          type: 'bar',
          orientation: 'h',
          marker: { color: 'rgba(255,255,255,0)' },
          mode: 'lines',
          line: { width: 0 },
          hoverinfo: "none",
          showlegend: false,
        },
        {
          x: [8],
          y: [0],
          type: 'bar',
          orientation: 'h',
          showlegend: false,
          mode: 'lines',
          line: { width: 0 },
          marker: {
            color: 'rgb(97, 147, 201)',
            opacity: 0.7,
            line: {
              color: 'rgba(53, 97, 164, 0)',
              width: 2
            }
          },
        },
        {
          x: [24],
          y: [-2],
          type: 'bar',
          orientation: 'h',
          marker: { color: 'rgba(255,255,255,0)' },
          mode: 'lines',
          line: { width: 0 },
          hoverinfo: "none",
          showlegend: false,
        },
        {
          x: [10],
          y: [-2],
          type: 'bar',
          orientation: 'h',
          showlegend: false,
          mode: 'lines',
          line: { width: 0 },
          marker: {
            color: 'rgb(97, 147, 201)',
            opacity: 0.7,
            line: {
              color: 'rgba(53, 97, 164, 0)',
              width: 2
            }
          },
        },
        ],
        title: "Plot 1"
      },
      {
        data: [{
          id: 'b',
          y: Array.from({ length: 15 }, () => Math.random() * 15),
          type: 'scatter',
          orientation: 'v',
        }],
        title: 'Plot 2',
      },
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
            displayModeBar: false,
            fill: 'tonexty',
          },
        ],
        title: 'Plot 3'
      }
    ];


    this.setState({ isModalVisible: false });
    this.state.data.length = 0;
    

    Object.keys(this.state.checkboxIdToSelectedMap).sort().forEach(id => {
      if (this.state.checkboxIdToSelectedMap[id]) {
        this.setState({ show: true });
        let i = (Number(id.slice(-1)) - 1)
        datalist[i]["grid_x"] = 4 * ((this.state.data.length) % 3)
        datalist[i]["grid_y"] = 4 * Math.floor((this.state.data.length) / 3)
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
                <div key={`grid-${idx}`} data-grid={{ x: grid_x, y: grid_y, w: 4, h: 10 }}>
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
