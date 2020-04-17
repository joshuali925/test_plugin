import React from 'react';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js/dist/plotly';

class Plt extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          x: Array.from({ length: this.props.y.length }, (x, i) => i + 1),
          y: this.props.y,
          type: this.props.type,
          orientation: this.props.orientation,
          mode: 'lines+markers',
          marker: { color: 'red' },
          // text: 'hello'
        },
      ],
      annotations: [],
    };
  }

  autoResize() {
    Plotly.Plots.resize(this.graphDiv)
  }

  addAnnotation(e) {
    let anno = {
      x: e.points[0].x,
      y: e.points[0].y,
      xref: 'x',
      yref: 'y',
      text: 'Clicked',
      showarrow: true,
      arrowhead: 7,
      ax: -40,
      ay: -40,
    }
    this.state.annotations.push(anno)
    Plotly.redraw(this.graphDiv)
  }

  render() {
    const peak_annotation = [
      {
        x: this.state.data[0].y.indexOf(Math.max(...this.state.data[0].y)) + 1,
        y: Math.max(...this.state.data[0].y),
        xref: 'x',
        yref: 'y',
        text: 'Peak',
        showarrow: true,
        arrowhead: 7,
        ax: -40,
        ay: -40
      }
    ];

    return (
      <Plot
        data={this.state.data}
        // config={{responsive: true}}
        style={{ width: "100%", height: "100%" }}
        useResizeHandler={true}
        onInitialized={(figure, graphDiv) => this.graphDiv = graphDiv}
        onHover={() => Plotly.Plots.resize(this.graphDiv)}
        onClick={(e) => this.addAnnotation(e)}
        layout={{
          height: this.props.height,
          width: this.props.width,
          autosize: true,
          title: this.props.title,
          annotations: this.state.annotations,
        }}
      />
    );
  }
}

Plt.defaultProps = {
  x: Array.from({ length: 10 }, (x, i) => i + 1),
  y: Array.from({ length: 10 }, () => Math.random() * 10),
  title: 'A Randomly Generated Plot',
  type: 'bar',
  orientation: 'v',
}

export default Plt