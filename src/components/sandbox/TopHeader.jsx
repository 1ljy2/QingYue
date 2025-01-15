import React, { useState } from 'react';
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header } = Layout;

function TopHeader(props) {
  const menu = (
    <Menu>
      <Menu.Item key="1">hyyy</Menu.Item>
      <Menu.Item
        key="2"
        danger
        onClick={() => {}}
      >
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'white',
      }}
    >
      {/* 左侧折叠按钮 */}
      {props.isCollapsed ? (
        <MenuUnfoldOutlined aria-label="展开菜单" />
      ) : (
        <MenuFoldOutlined aria-label="折叠菜单" />
      )}

      {/* 右侧用户信息 */}
    </Header>
  );
}

export default TopHeader;
