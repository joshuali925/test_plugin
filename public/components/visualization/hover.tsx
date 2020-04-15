import React from 'react';
import { EuiPopover, EuiPanel } from '@elastic/eui';


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
      <EuiPanel
          // TODO fix width
        style={{ width: '200px' }}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}>
        {this.props.content}
      </EuiPanel>
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