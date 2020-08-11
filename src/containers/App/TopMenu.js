import React, { Component } from 'react';

import {
  AlertOutlined,
  MailOutlined,
  SettingOutlined,
  ToolOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
// // eslint-disable-next-line no-unused-vars
// const MenuItemGroup = Menu.ItemGroup;

export default class TopMenu extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        style={{width: '100%'}}
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          Session
        </Menu.Item>

        <SubMenu title={<span className="submenu-title-wrapper">View</span>}>
          <SubMenu mode="vertical" title={<span className="submenu-title-wrapper"><SettingOutlined />System</span>}>
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </SubMenu>
          <SubMenu mode="vertical" title={<span className="submenu-title-wrapper"><ToolOutlined />Maintainence</span>}>
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </SubMenu>
          <SubMenu mode="vertical" title={<span className="submenu-title-wrapper"><VideoCameraOutlined />Video</span>}>
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </SubMenu>
          <SubMenu mode="vertical" title={<span className="submenu-title-wrapper"><MailOutlined />Message Signs</span>}>
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </SubMenu>
          <SubMenu mode="vertical" title={<span className="submenu-title-wrapper"><AlertOutlined />Incident</span>}>
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="setting:1">Weather Sensors</Menu.Item>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Help</a>
        </Menu.Item>
      </Menu>
    );
  }
}
