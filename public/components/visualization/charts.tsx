import React, { Fragment } from 'react';
import { EuiFlexGroup } from '@elastic/eui';
import { EuiTabbedContent } from '@elastic/eui';
import { x } from 'tar';
import { EuiFlexItem } from '@elastic/eui';
import { EuiIcon } from '@elastic/eui';
import { EuiCard } from '@elastic/eui';

class Charts extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.tabs = [
      {
        id: 'recommendations--id',
        name: 'Recommendations',
        content: (
          <Fragment>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiCard
                  style={{height: 60, width:60}}
                  icon={<EuiIcon type="visBarHorizontal" />}
                  title=""
                  description=""
                  onClick={() => { }}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  style={{height: 60, width:60}}
                  icon={<EuiIcon type="visBarVertical" />}
                  title=""
                  description=""
                  onClick={() => { }}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  style={{height: 60, width:60}}
                  icon={<EuiIcon type="visPie" />}
                  title=""
                  description=""
                  onClick={() => { }}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  style={{height: 60, width:60}}
                  icon={<EuiIcon type="visLine" />}
                  title=""
                  description=""
                  onClick={() => { }}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  style={{height: 60, width:60}}
                  icon={<EuiIcon type="visArea" />}
                  title=""
                  description=""
                  onClick={() => { }}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
          </Fragment>
        ),
      },
      {
        id: 'basic-charts--id',
        name: 'Basic Charts',
        content: (
          <Fragment>
          </Fragment>
        ),
      },
      {
        id: 'statistical-charts--id',
        name: 'Statistical Charts',
        content: (
          <Fragment>
          </Fragment>
        ),
      },
      {
        id: 'maps--id',
        name: 'Maps',
        content: (
          <Fragment>
          </Fragment>
        ),
      },
      {
        id: '3d-charts--id',
        name: '3D Charts',
        content: (
          <Fragment>
          </Fragment>
        ),
      },
      {
        id: 'sub-plots--id',
        name: 'Sub Plots',
        content: (
          <Fragment>
          </Fragment>
        ),
      },
    ]
  }
  render() {
    return (
      <EuiTabbedContent
        tabs={this.tabs}
        initialSelectedTab={this.tabs[0]}
        display="condensed"
        autoFocus="selected"
        onTabClick={tab => {
          // console.log('clicked tab', tab);
        }}
      />
    );
  }
}

Charts.defaultProps = {
  x: Array.from({ length: 10 }, (x, i) => i + 1),
  y: Array.from({ length: 10 }, () => Math.random() * 10),
  title: 'A Randomly Generated Plot',
  height: 480,
  width: 600,
}

export default Charts