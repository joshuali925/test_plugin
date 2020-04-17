import React, { Fragment } from 'react';
import GridLayout from 'react-grid-layout';
import Plt from './visualization/plt';
import { EuiFlexGroup } from '@elastic/eui';
import { EuiFlexItem } from '@elastic/eui';
import ReactResizeDetector from 'react-resize-detector';

class Dashboard extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      data: [
      ]
    };
  }
  
  onResize = () => {
    this.child.current.autoResize();
  };
  
  render() {
    return (
      <Fragment>
        <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
          <div key="a" data-grid={{ x: 0, y: 0, w: 4, h: 10 }}>
            <Plt ref={this.child}/>
            <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
          </div>
          <div key="b" data-grid={{ x: 4, y: 0, w: 4, h: 10 }}><Plt /></div>
          <div key="c" data-grid={{ x: 9, y: 0, w: 4, h: 10 }}><Plt /></div>
        </GridLayout>
      </Fragment>
    );
  }
}

Dashboard.defaultProps = {

}

export default Dashboard