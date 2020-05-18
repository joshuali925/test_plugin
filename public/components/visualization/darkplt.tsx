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
          x: this.props.x,
          y: this.props.y,
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
          x: this.props.x,
          y: this.props.y.map(y => y * 2),
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
          x: this.props.x,
          y: this.props.y.map(y => y * 3),
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
          x: this.props.x,
          y: this.props.y.map(y => y * 4),
          line: {
            color: 'rgb(27, 61, 108)',
            width: 1,
            dash: 'solid',
            shape: 'linear',
          },
          type: 'scatter',
          displayModeBar: false,
          fill: 'tonexty',
        }
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
  x: Array.from({ length: 700 }, (x, i) => i),
  y: Array.from({ length: 700 }, () => Math.random() * 15 + 100),
  title: 'A Dark Plot',
  type: 'scatter',
  orientation: 'v',
}

export default DarkPlt