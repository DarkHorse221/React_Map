import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer } from 'antd'

import Router from '../Router';
import { getRouteName } from '../../utils/routes'

class MainDrawer extends Component {

  static propTypes = {
  }

  state = {
    collapsed: true,
    visible: true,
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.showDrawer();
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });

  };

  isDrawerRequired = () => {
    if (this.props.location.pathname !== "/") {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const props = this.props;
    return (this.isDrawerRequired() &&
      <Drawer
        title={getRouteName(props.location.pathname)}
        placement="right"
        closable={true}
        onClose={this.onClose}
        visible={this.state.visible}
        width={520}
      >
        {/* <Camera /> */}
        <Router />
      </Drawer>
    );
  }
}


export default withRouter(MainDrawer);
