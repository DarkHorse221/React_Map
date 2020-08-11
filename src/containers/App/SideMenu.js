import React, { Component } from 'react';

import {
  AlertOutlined,
  CarOutlined,
  ExclamationOutlined,
  NumberOutlined,
  TableOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import logo from "../../assets/icons/icon.png"

class SideMenu extends Component {
  render() {
    return (
      <Menu mode="inline" defaultSelectedKeys={['1']} selectedKeys={this.props.location.pathname}>
        <Menu.Item key="/map">
        <Link to="/">
          <img alt="" className="anticon" width="14px" height="14px" src={logo} />
          <span>Map</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/cctv">
          <Link to="/cctv">
          <VideoCameraOutlined />
          <span>CCTV</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/vms">
          <Link to="/vms">
          <TableOutlined />
          <span>VMS</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/ims">
        <Link to="/ims">
          <ExclamationOutlined />
          <span>IMS</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/parking">
        <Link to="/parking">
          <CarOutlined />
          <span>Parking</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/beacons">
        <Link to="/beacons">
          <AlertOutlined />
          <span>Beacons</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/atcc">
        <Link to="/atcc">
        <NumberOutlined />
          <span>Beacons</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(SideMenu);
 
