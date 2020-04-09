import React from 'react';
import Plot from 'react-plotly.js';

class Plt extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          y: Array.from({ length: 10 }, () => Math.random() * 10),
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
          text: 'hello'
        },
      ]
    };
  }
  render() {
    return (
      <Plot
        data={this.state.data}
        layout={{
          width: 600,
          height: 480,
          title: 'A Randomly Generated Plot',
          // plot_bgcolor: "#1d1e24",
          // paper_bgcolor: "#1d1e24",
          // font: {
          //   color: "#dfe5ef"
          // },
          annotations: [
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
          ]
        }}
      />
    );
  }
}

export default Plt