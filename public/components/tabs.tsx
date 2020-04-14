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

import GridLayout from 'react-grid-layout';
import BasicLayout from './layout';

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
            <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
              <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2 }}>a</div>
              <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2 }}>b</div>
              <div key="c" data-grid={{ x: 4, y: 0, w: 10, h: 10 }}>c</div>
            </GridLayout>
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
        name: 'Visualization',
        content: (
          <Fragment>
            <EuiSpacer />
            <Visualization />
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
        initialSelectedTab={this.tabs[2]}
        autoFocus="selected"
        onTabClick={tab => {
          console.log('clicked tab', tab);
        }}
      />
    );
  }
}

export default EuiTabsNavigation