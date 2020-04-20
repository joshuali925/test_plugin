import React, { Fragment } from 'react';
import GridLayout from 'react-grid-layout';
import Plt from './visualization/plt';
import ReactResizeDetector from 'react-resize-detector';

class Dashboard extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      data: [
        {
          id: 'a',
          y: Array.from({ length: 15 }, () => Math.random() * 15),
          type: 'bar',
          orientation:'v',
          title:'Plot 1',
        },
        {
          id: 'b',
          y: Array.from({ length: 15 }, () => Math.random() * 15),
          type: 'bar',
          orientation:'v',
          title:'Plot 2',
        },
        {
          id: 'c',
          y: Array.from({ length: 15 }, () => Math.random() * 15),
          type: 'scatter',
          orientation:'v',
          title:'Plot 3',
        },
        {
          id: 'd',
          y: Array.from({ length: 15 }, () => Math.random() * 15),
          type: 'scatter',
          orientation:'h',
          title:'Plot 4',
        },
        {
          id: 'e',
          y: Array.from({ length: 15 }, () => Math.random() * 15),
          type: 'bar',
          orientation:'h',
          title:'Plot 5',
        },
        {
          id: 'f',
          y: Array.from({ length: 15 }, () => Math.random() * 15),
          type: 'bar',
          orientation:'v',
          title:'Plot 6',
        },
      ]
    };
  }

  render() {
    this.state.data.forEach(element => {
      this.state.children.push(React.createRef())
    });
    return (
      <Fragment>
        <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
          {this.state.data.map(({ id, y, type, title, orientation }, idx) => (
            <div key={`grid-${id}`} data-grid={{ x: 4 * (idx % 3), y: 4 * Math.floor(idx / 3), w: 4, h: 10 }}>
              <Plt ref={this.state.children[idx]} y={y} type={type} orientation={orientation} title={title} />
              <ReactResizeDetector handleWidth handleHeight onResize={() => this.state.children[idx].current.autoResize()} />
            </div>
          ))}
        </GridLayout>

      </Fragment>
    );
  }
}

Dashboard.defaultProps = {

}

export default Dashboard