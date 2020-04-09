import React, { Component, Fragment } from 'react';
import Plt from './plt'

import {
  EuiIcon,
  EuiTabbedContent,
  EuiTitle,
  EuiText,
  EuiSpacer,
} from '@elastic/eui';

class EuiTabsExample extends Component {
  tabs: ({ id: string; name: string; content: JSX.Element; } | { id: string; name: JSX.Element; content: JSX.Element; })[];
  constructor(props) {
    super(props);

    this.tabs = [
      {
        id: 'dextrose--id',
        name: 'Dextrose',
        content: (
          <Fragment>
            <EuiSpacer />
            <EuiTitle>
              <h3>Dextrose</h3>
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
        id: 'hydrogen--id',
        name: (
          <span>
            <EuiIcon type="heatmap" />
            &nbsp;Hydrogen
          </span>
        ),
        content: (
          <Fragment>
            <EuiSpacer />
            <EuiTitle>
              <h3>Hydrogen</h3>
            </EuiTitle>
            <EuiText>
              Hydrogen is a chemical element with symbol H and atomic number 1.
              With a standard atomic weight of 1.008, hydrogen is the lightest
              element on the periodic table
            </EuiText>
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

export default EuiTabsExample