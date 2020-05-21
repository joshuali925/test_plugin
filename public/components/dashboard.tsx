import React, { Fragment } from 'react';
import GridLayout from 'react-grid-layout';
import Plt from './visualization/plt';
import ReactResizeDetector from 'react-resize-detector';
import { EuiIcon } from '@elastic/eui';
import { EuiKeyPadMenuItem } from '@elastic/eui';
import { EuiOverlayMask, EuiModal, EuiModalHeader, EuiModalHeaderTitle, EuiModalBody, EuiFieldText, EuiModalFooter, EuiButtonEmpty, EuiButton } from '@elastic/eui';
import { htmlIdGenerator } from '@elastic/eui';
import { EuiCheckboxGroup } from '@elastic/eui';
import { datalist } from '../data/dashboardData.js'
import { PreviousMap } from 'postcss';

class Dashboard extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      show: false,
      isModalVisible: false,
      checkboxIdToSelectedMap: {},
      data: [],
      mouseHover: [],
      isDraggable: false,
      mouseDown: false,
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
      this.state.mouseHover.push(false)
    });
    return (
      <Fragment>

        {this.selectModal()}

        {this.state.show ? (
          <Fragment>
            <GridLayout className="layout" cols={12} rowHeight={26} width={1375} isDraggable={this.state.isDraggable}>
              {this.state.data.map(({ title, grid_x, grid_y, data, layout }, idx) => (
                // <div key={`grid-${idx}`} data-grid={{ x: grid_x, y: grid_y, w: 6, h: 9 }} style={{border: '1px solid #2a2c30', borderRadius: '2px'}}>
                <div key={`grid-${idx}`} data-grid={{ x: grid_x, y: grid_y, w: 6, h: 9 }} style={{ border: '1px solid #202226', borderRadius: '2px' }}>
                  <div onMouseEnter={() => {
                    const newMouseHover = Array.from({ length: this.state.data.length }, (v, i) => false);
                    newMouseHover[idx] = true;
                    this.setState({ isDraggable: true, mouseHover: newMouseHover })
                  }} onMouseLeave={() => {
                    this.setState({ mouseHover: Array.from({ length: this.state.data.length }, (v, i) => false) })
                    if (!this.state.mouseDown)
                      this.setState({ isDraggable: false })
                  }} onMouseDown={() => {
                    this.setState({ mouseDown: true })
                  }} onMouseUp={() => {
                    this.setState({ mouseDown: false })
                  }} style={{
                    backgroundColor: { false: '#141619', true: '#202226' }[this.state.mouseHover[idx]], textAlign: 'center', paddingTop: 7, paddingBottom: 7, fontSize: 14
                  }}>{title}</div>
                  <Plt ref={this.state.children[idx]} data={data} layout={layout} title={title} />
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
