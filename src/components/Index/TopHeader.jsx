import React, { useState } from 'react';
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header } = Layout;
import { connect } from 'react-redux';
function TopHeader(props) {
  const changeCollapsed = () => {
    props.changeCollapsed();
  };
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
        <MenuUnfoldOutlined
          onClick={changeCollapsed}
          aria-label="展开菜单"
        />
      ) : (
        <MenuFoldOutlined
          onClick={changeCollapsed}
          aria-label="折叠菜单"
        />
      )}
      {/* 右侧用户信息 */}
    </Header>
  );
}
const mapStateToProps = ({ CollapsedReducer: { isCollapsed } }) => {
  return {
    isCollapsed,
  };
};
const mapDispatchToProps = {
  changeCollapsed() {
    return { type: 'change_collapsed' };
  },
};
export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
