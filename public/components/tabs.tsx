import React, { Component, Fragment } from 'react';
import Plt from './plt'

import {
  EuiIcon,
  EuiTabbedContent,
  EuiTitle,
  EuiText,
  EuiSpacer,
} from '@elastic/eui';
import DataList from './visualization/datalist';

class EuiTabsNavigation extends Component {
  tabs: ({ id: string; name: string; content: JSX.Element; } | { id: string; name: JSX.Element; content: JSX.Element; })[];
  constructor(props) {
    super(props);

    this.tabs = [
      {
        id: 'dashboard--id',
        name: 'Dashboard',
        content: (
          <Fragment>
            <EuiSpacer />
            <EuiTitle>
              <h3>Dashboard</h3>
            </EuiTitle>
          </Fragment>
        ),
      },
      {
        id: 'plot--id',
        name: 'Plot',
        content: (
          <Fragment>
            <EuiSpacer />
            <EuiTitle>
              <h3>Plot</h3>
            </EuiTitle>
            <Plt />
          </Fragment>
        ),
      },
      {
        id: 'visualization--id',
        name: 'visualization',
        content: (
          <Fragment>
            <EuiSpacer />
            <EuiTitle>
              <h3>Visualization</h3>
            </EuiTitle>
            <DataList />
          </Fragment>
        ),
      },
      {
        id: 'monosodium_glutammate--id',
        name: 'Monosodium Glutamate',
        content: (
          <Fragment>
            <EuiSpacer />
            <EuiTitle>
              <h3>Monosodium Glutamate</h3>
            </EuiTitle>
            <EuiText>
              Monosodium glutamate (MSG, also known as sodium glutamate) is the
              sodium salt of glutamic acid, one of the most abundant naturally
              occurring non-essential amino acids. Monosodium glutamate is found
              naturally in tomatoes, cheese and other foods.
            </EuiText>
          </Fragment>
        ),
      },
    ];
  }


  render() {
    return (
      <EuiTabbedContent
        tabs={this.tabs}
        initialSelectedTab={this.tabs[1]}
        autoFocus="selected"
        onTabClick={tab => {
          console.log('clicked tab', tab);
        }}
      />
    );
  }
}

export default EuiTabsNavigation