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
import { EuiControlBar } from '@elastic/eui';
import Gantt from './visualization/gantt';
import DarkPlt from './visualization/darkplt';

class EuiTabsNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 1,
      tabs: [
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
              <EuiText>Panel 2</EuiText>
              <DarkPlt height={400} width={1200} />
            </Fragment>
          ),
        },
        {
          id: 'panel-3--id',
          name: 'Panel 3',
          content: (
            <Fragment>
              <EuiText>Panel 3</EuiText>
            </Fragment>
          ),
        },
      ]
    }
  }


  render() {
    return (
      <Fragment>
        <EuiTabbedContent
          tabs={this.state.tabs}
          initialSelectedTab={this.state.tabs[0]}
          style={{ marginTop: -5, backgroundColor: 'black', height: '98vh' }}
          autoFocus="selected"
          onTabClick={tab => {
            // console.log('clicked tab', tab);
          }}
        />

        {/* {this.state.tabs[this.state.activeTabIndex].content} */}

        {/* <EuiControlBar
          showContent={false}
          size="s"
          controls={
            [
              {
                controlType: 'tab',
                id: 'dashboard--id',
                label: 'Dashboard',
                onClick: () => { this.setState({ activeTabIndex: 0 }) },
              },
              {
                controlType: 'tab',
                id: 'panel-1--id',
                label: 'Panel 1',
                onClick: () => { this.setState({ activeTabIndex: 1 }) },
              },
              {
                controlType: 'tab',
                id: 'panel-1--id',
                label: 'Panel 2',
                onClick: () => { this.setState({ activeTabIndex: 2 }) },
              },
              {
                controlType: 'tab',
                id: 'panel-1--id',
                label: 'Panel 3',
                onClick: () => { this.setState({ activeTabIndex: 3 }) },
              },
            ]
          }
        /> */}
      </Fragment>
    );
  }
}

export default EuiTabsNavigation