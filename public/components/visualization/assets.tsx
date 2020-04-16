import React, { Fragment } from 'react';
import { EuiListGroup } from '@elastic/eui';
import { EuiText } from '@elastic/eui';
import { EuiListGroupItem } from '@elastic/eui';

class Assets extends React.Component<{}, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <EuiText grow={false}>Assets</EuiText>
        <EuiListGroup>
          {this.props.data.map(({ label }, idx) => (
            <EuiListGroupItem onClick={()=>{alert('clicked')}} label={label}></EuiListGroupItem>
          ))}
        </EuiListGroup>
      </Fragment>
    );
  }
}

Assets.defaultProps = {
  data: [
    {
      label: 'Custom Viz',
    },
    {
      label: 'Filters',
    },
    {
      label: 'Templates',
    },
    {
      label: 'Integrations',
    },
  ]
}

export default Assets