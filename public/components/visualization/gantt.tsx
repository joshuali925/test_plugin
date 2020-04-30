import React, { useState, Fragment } from 'react';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js/dist/plotly';
import { EuiOverlayMask, EuiModal, EuiModalHeader, EuiModalHeaderTitle, EuiModalBody, EuiFieldText, EuiModalFooter, EuiButtonEmpty, EuiButton } from '@elastic/eui';


class Gantt extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      modalValue: '',
      event: undefined,
      data: [
        {
          x: [3],
          y: [2],
          type: 'bar',
          orientation: 'h',
          marker: { color: 'rgba(255,255,255,0)' },
          hoverinfo: "none",
          showlegend: false,
        },
        {
          x: [5],
          y: [2],
          type: 'bar',
          orientation: 'h',
        },
        {
          x: [6],
          y: [4],
          type: 'bar',
          orientation: 'h',
          marker: { color: 'rgba(255,255,255,0)' },
          hoverinfo: "none",
          showlegend: false,
        },
        {
          x: [4],
          y: [4],
          type: 'bar',
          orientation: 'h',
        },
        {
          x: [9],
          y: [6],
          type: 'bar',
          orientation: 'h',
          marker: { color: 'rgba(255,255,255,0)' },
          hoverinfo: "none",
          showlegend: false,
        },
        {
          x: [5],
          y: [6],
          type: 'bar',
          orientation: 'h',
        },
        {
          x: [12],
          y: [8],
          type: 'bar',
          orientation: 'h',
          marker: { color: 'rgba(255,255,255,0)' },
          hoverinfo: "none",
          showlegend: false,
        },
        {
          x: [5],
          y: [8],
          type: 'bar',
          orientation: 'h',
        },
        {
          x: [15],
          y: [10],
          type: 'bar',
          orientation: 'h',
          marker: { color: 'rgba(255,255,255,0)' },
          hoverinfo: "none",
          showlegend: false,
        },
        {
          x: [5],
          y: [10],
          type: 'bar',
          orientation: 'h',
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
          data={this.state.data}
          style={{ width: "100%", height: "100%" }}
          useResizeHandler={true}
          onInitialized={(figure, graphDiv) => this.graphDiv = graphDiv}
          onHover={() => Plotly.Plots.resize(this.graphDiv)}
          onClick={(e) => this.showInputModal(e)}
          layout={{
            height: this.props.height,
            width: this.props.width,
            autosize: true,
            title: this.props.title,
            annotations: this.state.annotations,
            barmode: 'stack',
            yaxis: { fixedrange: true },
            xaxis: { fixedrange: true }
          }}
        />
      </Fragment>
    );
  }
}

Gantt.defaultProps = {
  x: Array.from({ length: 10 }, (x, i) => i + 1),
  y: Array.from({ length: 10 }, () => Math.random() * 10),
  title: 'Gantt',
  type: 'bar',
  orientation: 'h',
}

export default Gantt