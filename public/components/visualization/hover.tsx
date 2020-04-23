import React from 'react';
import { EuiPopover, EuiPanel } from '@elastic/eui';
import TreeNode from './treenode';


class Hover extends React.Component<{}, any> {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
    };
  }

  onMouseEnter() {
    this.setState({
      isPopoverOpen: true,
    });
  }

  onMouseLeave() {
    this.setState({
      isPopoverOpen: false,
    });
  }

  closePopover() {
    this.setState({
      isPopoverOpen: false,
    });
  }

  render() {
    const panel = (
      <TreeNode 
        style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}
        paddingSize="s"
        loadIndex={this.props.loadIndex}
        content={this.props.content}
        children={this.props.children}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
      // TODO onclick and draggable conflict
      // onClick={() => this.props.loadIndex(this.props.content)}
      />
    );

    return (
      <EuiPopover
        button={panel}
        isOpen={this.state.isPopoverOpen}
        anchorPosition="rightCenter"
        closePopover={this.closePopover.bind(this)}>
        <div style={{ width: '250px' }}>
          {this.props.hoverMessage}
        </div>
      </EuiPopover>
    );
  }
}

export default Hover