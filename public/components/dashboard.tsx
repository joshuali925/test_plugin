import React, { Fragment } from 'react';
import GridLayout from 'react-grid-layout';
import Plt from './visualization/plt';
import { EuiFlexGroup } from '@elastic/eui';
import { EuiFlexItem } from '@elastic/eui';
import ReactResizeDetector from 'react-resize-detector';

class Dashboard extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.children = [React.createRef(),React.createRef(),React.createRef()];
    this.state = {
      children: [],
      count: 0
    };
  }

  render() {
    return (
      <Fragment>
        {/* <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
          {['a', 'b', 'c'].map((id, idx) => {
            { this.state.children.push(React.createRef()) }
            <div key={id} data-grid={{ x: 0, y: 4 * idx, w: 4, h: 10 }}>
              <Plt ref={this.state.children[idx]} />
              <ReactResizeDetector handleWidth handleHeight onResize={() => this.state.children[idx].current.autoResize()} />
            </div>
          })}
        </GridLayout> */}

        <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
          <div key="a" data-grid={{ x: 0, y: 0, w: 4, h: 10 }}>
            <Plt ref={this.children[0]} />
            <ReactResizeDetector handleWidth handleHeight onResize={() => this.children[0].current.autoResize()} />
          </div>
          <div key="b" data-grid={{ x: 4, y: 0, w: 4, h: 10 }}>
            <Plt ref={this.children[1]} />
            <ReactResizeDetector handleWidth handleHeight onResize={() => this.children[1].current.autoResize()} />
          </div>
          <div key="c" data-grid={{ x: 9, y: 0, w: 4, h: 10 }}>
            <Plt ref={this.children[2]} />
            <ReactResizeDetector handleWidth handleHeight onResize={() => this.children[2].current.autoResize()} />
          </div>
        </GridLayout>
      </Fragment>
    );
  }
}

Dashboard.defaultProps = {

}

export default Dashboard