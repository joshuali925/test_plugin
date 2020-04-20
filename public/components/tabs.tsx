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

import Dashboard from './dashboard';

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
            <Dashboard />
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
            <Plt height={400} width={600} />
          </Fragment>
        ),
      },
      {
        id: 'panel-3--id',
        name: 'Panel 3',
        content: (
          <Fragment>
            
          
          </Fragment>
        ),
      },
    ];
  }


  render() {
    return (
      <EuiTabbedContent
        tabs={this.tabs}
        initialSelectedTab={this.tabs[0]}
        autoFocus="selected"
        onTabClick={tab => {
          // console.log('clicked tab', tab);
        }}
      />
    );
  }
}

export default EuiTabsNavigation