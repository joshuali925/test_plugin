import React, { Component, Fragment } from 'react';


import {
  EuiIcon,
  EuiTabbedContent,
  EuiTitle,
  EuiText,
  EuiSpacer,
} from '@elastic/eui';

import Plt from './visualization/plt'
import Visualization from './visualization/visualization';

import BasicLayout from './basiclayout';

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
            <BasicLayout />
          </Fragment>
        ),
      },
      {
        id: 'panel-1--id',
        name: 'Panel 1',
        content: (
          <Fragment>
          <Visualization />
          </Fragment>
        ),
      },
      {
        id: 'panel-2--id',
        name: 'Panel 2',
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
        id: 'panel-3--id',
        name: 'Panel 3',
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
            <EuiText>Test here</EuiText>
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
          // console.log('clicked tab', tab);
        }}
      />
    );
  }
}

export default EuiTabsNavigation