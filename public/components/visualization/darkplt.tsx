import React, { useState, Fragment } from 'react';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js/dist/plotly';
import { EuiOverlayMask, EuiModal, EuiModalHeader, EuiModalHeaderTitle, EuiModalBody, EuiFieldText, EuiModalFooter, EuiButtonEmpty, EuiButton } from '@elastic/eui';


class DarkPlt extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      modalValue: '',
      event: undefined,
      data: [
        {
          x: Array.from({ length: 120 }, (x, i) => i),
          y: Array.from({ length: 120 }, (x, i) => this.props.y[i] * 1 + Math.random() * 1 + 1),
          line: {
            color: 'rgb(101, 157, 86)',
            width: 2.2,
            dash: 'solid',
            shape: 'linear',
          },
          type: 'scatter',
          displayModeBar: false,
          fill: 'tozeroy',  // tozeroy
          fillcolor: 'rgba(101, 157, 86, 0.25)',
        },
        {
          x: Array.from({ length: 120 }, (x, i) => i),
          y: Array.from({ length: 120 }, (x, i) => this.props.y[i] * 1 + Math.random() * 1 + 8),
          line: {
            color: 'rgb(91, 150, 77)',
            width: 2.2,
            dash: 'solid',
            shape: 'linear',
          },
          type: 'scatter',
          displayModeBar: false,
          fill: 'tozeroy',
          fillcolor: 'rgba(91, 150, 77, 0.25)',
        },
        {
          x: Array.from({ length: 120 }, (x, i) => i),
          y: Array.from({ length: 120 }, (x, i) => this.props.y[i] * 9 + Math.random() * 3 + 13),
          line: {
            color: 'rgb(91, 150, 77)',
            width: 2.2,
            dash: 'solid',
            shape: 'linear',
          },
          type: 'scatter',
          displayModeBar: false,
          fill: 'tozeroy',
          fillcolor: 'rgba(91, 150, 77, 0.25)',
        },
        {
          x: Array.from({ length: 120 }, (x, i) => i),
          y: Array.from({ length: 120 }, (x, i) => this.props.y[i] * 18 + Math.random() * 3 + 18),
          line: {
            color: 'rgb(80, 134, 66)',
            width: 2.2,
            dash: 'solid',
            shape: 'linear',
          },
          type: 'scatter',
          displayModeBar: false,
          fill: 'tozeroy',
          fillcolor: 'rgba(80, 134, 66, 0.25)',
        },
        {
          x: Array.from({ length: 120 }, (x, i) => i),
          y: Array.from({ length: 120 }, (x, i) => -(this.props.y[i] * 1 + Math.random() * 1 + 8)),
          line: {
            color: 'rgb(30, 120, 193)',
            width: 2.2,
            dash: 'solid',
            shape: 'linear',
          },
          type: 'scatter',
          displayModeBar: false,
          fill: 'tozeroy',
          fillcolor: 'rgba(30, 120, 193, 0.25)',
        },
        {
          x: Array.from({ length: 120 }, (x, i) => i),
          y: Array.from({ length: 120 }, (x, i) => -(this.props.y[i] * 18 + Math.random() * 3 + 18)),
          line: {
            color: 'rgb(130, 181, 216)',
            width: 2.2,
            dash: 'solid',
            shape: 'linear',
          },
          type: 'scatter',
          displayModeBar: false,
          fill: 'tozeroy',
          fillcolor: 'rgba(130, 181, 216, 0.25)',
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

DarkPlt.defaultProps = {
  x: Array.from({ length: 120 }, (x, i) => i),
  y: Array.from({ length: 120 }, () => Math.random() * 1),
  title: 'A Dark Plot',
  type: 'scatter',
  orientation: 'v',
}

export default DarkPlt