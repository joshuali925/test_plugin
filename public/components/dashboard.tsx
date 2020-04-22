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
    const datalist = [
      {
        id: 'a',
        y: Array.from({ length: 15 }, () => Math.random() * 15),
        type: 'bar',
        orientation: 'v',
        title: 'Plot 1',
      },
      {
        id: 'b',
        y: Array.from({ length: 15 }, () => Math.random() * 15),
        type: 'bar',
        orientation: 'v',
        title: 'Plot 2',
      },
      {
        id: 'c',
        y: Array.from({ length: 15 }, () => Math.random() * 15),
        type: 'scatter',
        orientation: 'v',
        title: 'Plot 3',
      },
      {
        id: 'd',
        y: Array.from({ length: 15 }, () => Math.random() * 15),
        type: 'scatter',
        orientation: 'h',
        title: 'Plot 4',
      },
      {
        id: 'e',
        y: Array.from({ length: 15 }, () => Math.random() * 15),
        type: 'bar',
        orientation: 'h',
        title: 'Plot 5',
      },
      {
        id: 'f',
        y: Array.from({ length: 15 }, () => Math.random() * 15),
        type: 'bar',
        orientation: 'v',
        title: 'Plot 6',
      },
    ];

    this.setState({ isModalVisible: false });
    this.state.data.length = 0;

    Object.keys(this.state.checkboxIdToSelectedMap).sort().forEach(id => {
      if (this.state.checkboxIdToSelectedMap[id]) {
        this.setState({ show: true });

        let i = (Number(id.slice(-1)) - 1) * 2
        datalist[i]["grid_x"] = 4 * ((this.state.data.length) % 3)
        datalist[i]["grid_y"] = 4 * Math.floor((this.state.data.length) / 3)
        this.state.data.push(datalist[i]);
        datalist[i + 1]["grid_x"] = 4 * (this.state.data.length % 3)
        datalist[i + 1]["grid_y"] = 4 * Math.floor(this.state.data.length / 3)
        this.state.data.push(datalist[i + 1]);
      }
    });
    console.log(this.state.data)
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
          <GridLayout className="layout" cols={12} rowHeight={26} width={1400}>
            {this.state.data.map(({ id, y, type, title, orientation, grid_x, grid_y }, idx) => (
              <div key={`grid-${id}`} data-grid={{ x: grid_x, y: grid_y, w: 4, h: 10 }}>
                <Plt ref={this.state.children[idx]} y={y} type={type} orientation={orientation} title={title} />
                <ReactResizeDetector handleWidth handleHeight onResize={() => this.state.children[idx].current.autoResize()} />
              </div>
            ))}
          </GridLayout>
        ) : (null)}


        <EuiKeyPadMenuItem
          style={{ width: 100, height: 100 }}
          label="Add Visualizations"
          onClick={() => { this.showSelectModal() }}>
          <EuiIcon type="plusInCircle" size="l" />
        </EuiKeyPadMenuItem>

      </Fragment>
    );
  }
}

Dashboard.defaultProps = {

}

export default Dashboard