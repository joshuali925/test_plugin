import { EuiTreeView, EuiToken } from '@elastic/eui';
import React, { useState, Fragment, Component } from 'react';
import { EuiPanel } from '@elastic/eui';
import { EuiIcon } from '@elastic/eui';
import { EuiText } from '@elastic/eui';
import { EuiFlexGroup } from '@elastic/eui';
import { EuiFlexItem } from '@elastic/eui';


class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    }
  }

  toggleExpand() {
    this.setState((prevState) => { return { expand: !prevState.expand } })
  }

  render() {
    return (
      <Fragment>
        <EuiPanel
          style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}
          paddingSize="s">
          {this.props.children.length === 0 ? (
            <Fragment>
              <EuiFlexGroup>
                <EuiFlexItem grow={false} style={{ marginRight: -6 }}>
                  <EuiIcon type="empty" />
                </EuiFlexItem>
                <EuiFlexItem onClick={() => {
                  // this.props.loadIndex(this.props.content)
                }}>
                  {this.props.content}
                </EuiFlexItem>
              </EuiFlexGroup>
            </Fragment>
          ) : (
              <Fragment>
                <EuiFlexGroup>
                  <EuiFlexItem grow={false} style={{ marginRight: -6 }}>
                    {this.state.expand ? (
                      <EuiIcon type="arrowDown" onClick={() => this.toggleExpand()} />
                    ) : (
                        <EuiIcon type="arrowRight" onClick={() => this.toggleExpand()} />
                      )}
                  </EuiFlexItem>
                  <EuiFlexItem onClick={() => {
                    // this.props.loadIndex(this.props.content)
                  }}>
                    {this.props.content}
                  </EuiFlexItem>
                </EuiFlexGroup>
                {this.state.expand ? (
                  this.props.children.map((child, idx) => (
                    <Fragment key={idx}>
                      <EuiText style={{ paddingTop: 10, paddingLeft: 21, fontSize: '0.95em', fontStyle: 'italic' }}>{'- ' + child}</EuiText>
                    </Fragment>
                  ))
                ) : (null)}
              </Fragment>
            )}
        </EuiPanel>
      </Fragment>
    )

  }
}

TreeNode.defaultProps = {
  content: 'test',
  children: [],
}

export default TreeNode