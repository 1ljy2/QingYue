import React from 'react';
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // 使用 useNavigate 进行跳转
import { connect } from 'react-redux';

const { Header } = Layout;

function TopHeader(props) {
  const navigate = useNavigate(); // 获取 navigate 函数

  // 切换折叠状态
  const changeCollapsed = () => {
    props.changeCollapsed();
  };

  // 菜单项
  const menu = (
    <Menu>
      <Menu.Item key="1">user1</Menu.Item>
      <Menu.Item
        key="2"
        danger
        onClick={() => navigate('/login')} // 跳转到登录页
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
          style={{ fontSize: '20px', padding: '0 20px' }}
        />
      ) : (
        <MenuFoldOutlined
          onClick={changeCollapsed}
          aria-label="折叠菜单"
          style={{ fontSize: '20px', padding: '0 20px' }}
        />
      )}

      {/* 右侧用户信息和头像 */}
      <Dropdown
        overlay={menu}
        trigger={['click']}
      >
        <Avatar
          style={{ cursor: 'pointer' }}
          icon={<UserOutlined />}
          size="large"
        />
      </Dropdown>
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
