import React from 'react';
import { EuiCard } from '@elastic/eui';
import { EuiDragDropContext, EuiDroppable, EuiDraggable, EuiPanel } from '@elastic/eui';
import { list } from 'tar';
import { EuiText } from '@elastic/eui';
import { makeId, makeList, makeFromList, covidData } from './dataloader';
import { euiDragDropReorder } from '@elastic/eui';
import { EuiListGroup, EuiListGroupItem } from '@elastic/eui';

class Axises extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      list: makeList()
    };
  }

  render() {
    return (
      <EuiListGroup flush={true} bordered={true}>
        {this.props.data.map((label, idx) => (
          <EuiListGroupItem key={idx} onClick={() => { alert('clicked') }} label={label}></EuiListGroupItem>
        ))}
      </EuiListGroup>
    );
  }
}

Axises.defaultProps = {
  data: [
    'X-axis', '- flights', '- avg(routes)', 'Y-axis', '- Time', '', 'Options'
  ]
}

export default Axises