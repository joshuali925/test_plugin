import React, { useState, Fragment } from 'react';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js/dist/plotly';
import { EuiOverlayMask, EuiModal, EuiModalHeader, EuiModalHeaderTitle, EuiModalBody, EuiFieldText, EuiModalFooter, EuiButtonEmpty, EuiButton } from '@elastic/eui';


class Plt extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      modalValue: '',
      event: undefined,
      data: [
        {
          x: Array.from({ length: this.props.y.length }, (x, i) => i + 1),
          y: this.props.y,
          type: this.props.type,
          orientation: this.props.orientation,
          mode: 'lines+markers',
          marker: {
            color: 'rgb(97, 147, 201)',
            opacity: 0.7,
            size: 20,
            line: {
              color: 'rgba(53, 97, 164, 0)',
              width: 2
            }
          },
          // text: 'hello'
        },
      ],
      annotations: [],
    };
  }

  onModalChange = e => {
    this.setState({ modalValue: e.target.value });
  };

  cancel() {
    this.setState({ isModalVisible: false })
    this.setState({ modalValue: '' });
  }

  save() {
    this.setState({ isModalVisible: false })
    this.addAnnotation(this.state.event, this.state.modalValue);
    this.setState({ modalValue: '' });
  }

  autoResize() {
    Plotly.Plots.resize(this.graphDiv)
  }

  showInputModal(e) {
    this.setState({ isModalVisible: true })
    this.setState({ event: e })
  }

  inputModal() {
    return (this.state.isModalVisible ? (
      <EuiOverlayMask>
        <EuiModal onClose={() => this.setState({ isModalVisible: false })} initialFocus="[name=input]">
          <EuiModalHeader>
            <EuiModalHeaderTitle>Add Annotation</EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            <EuiFieldText
              name="input"
              placeholder="Enter annotation"
              value={this.state.modalValue}
              onChange={e => this.onModalChange(e)}
            />
          </EuiModalBody>

          <EuiModalFooter>
            <EuiButtonEmpty onClick={() => this.cancel()}>
              Cancel
            </EuiButtonEmpty>
            <EuiButton onClick={() => this.save()} fill>
              Save
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      </EuiOverlayMask>
    ) : (
        null
      )
    );
  }

  addAnnotation(e, text) {
    let annotation = {
      x: e.points[0].x,
      y: e.points[0].y,
      xref: 'x',
      yref: 'y',
      text: text,
      showarrow: true,
      arrowhead: 7,
      ax: -5,
      ay: -40,
    }
    this.state.annotations.push(annotation)
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
      <Fragment>
        {/* <this.inputModal /> */}
        {this.inputModal()}

        <Plot
          data={this.props.data || this.state.data}
          // config={{responsive: true}}
          style={{ width: "100%", height: "100%" }}
          useResizeHandler={true}
          onInitialized={(figure, graphDiv) => this.graphDiv = graphDiv}
          onHover={() => Plotly.Plots.resize(this.graphDiv)}
          onClick={(e) => this.showInputModal(e)}
          layout={{
            plot_bgcolor: "rgb(26,27,32)",
            paper_bgcolor: "rgb(26,27,32)",
            font: {
              color: "rgb(201,208,216)"
            },
            height: this.props.height,
            width: this.props.width,
            autosize: true,
            // title: {
            //   text: this.props.title,
            //   font: {
            //     size: 13,
            //   },
            //   y: 0.8,
            // },
            margin: {
              l: 50,
              r: 50,
              b: 50,
              t: 50,
              pad: 4
            },
            annotations: this.state.annotations,
            barmode: 'stack',
            showlegend: false,
            legend: {
              orientation: 'h',
            },
            dragmode: 'lasso', // (enumerated: "zoom" | "pan" | "select" | "lasso" | "orbit" | "turntable" )
            hovermode: 'closest',
            xaxis: {
              showgrid: true,
              zeroline: false,
              type: 'auto',
              gridcolor: 'rgb(60,61,64)',
              rangemode: 'normal', // (enumerated: "normal" | "tozero" | "nonnegative" )
            },
            yaxis: {
              showgrid: true,
              zeroline: false,
              type: 'linear',
              gridcolor: 'rgb(60,61,64)',
              rangemode: 'normal', // (enumerated: "normal" | "tozero" | "nonnegative" ),
            },
            zaxis: {
              showgrid: true,
              zeroline: false,
              type: 'linear',
              gridcolor: 'rgb(60,61,64)',
              rangemode: 'normal', // (enumerated: "normal" | "tozero" | "nonnegative" )
            },
          }}
        />
      </Fragment>
    );
  }
}

Plt.defaultProps = {
  x: Array.from({ length: 10 }, (x, i) => i + 1),
  y: Array.from({ length: 10 }, () => Math.random() * 10),
  title: 'A Randomly Generated Plot',
  type: 'scatter',
  orientation: 'v',
}

export default Plt