import React, { Fragment } from 'react';
import { EuiListGroup } from '@elastic/eui';
import { EuiListGroupItem } from '@elastic/eui';
import { EuiCard } from '@elastic/eui';
import { EuiText } from '@elastic/eui';

class Assets extends React.Component<{}, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        {/* <EuiCard
          textAlign="left"
          title="Assets"
          description="">
          <EuiListGroup>
            {this.props.data.map(({ label }, idx) => (
              <EuiListGroupItem key={idx} onClick={() => { alert('clicked') }} label={label}></EuiListGroupItem>
            ))}
          </EuiListGroup>
        </EuiCard> */}

        <EuiText>Assets</EuiText>
        <EuiListGroup bordered={true} >
          {this.props.data.map(({ label }, idx) => (
            <EuiListGroupItem key={idx} onClick={() => { alert('clicked') }} label={label}></EuiListGroupItem>
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