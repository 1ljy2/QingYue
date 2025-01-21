import React, { useState } from 'react'
import { Layout, Dropdown, Menu, Avatar } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
const { Header } = Layout
import { connect } from 'react-redux'
import { toggleCollapse } from '../../redux/actions'

function TopHeader(props) {
  const { isCollapsed, toggleCollapse } = props
  const menu = (
    <Menu>
      <Menu.Item key='1'>hyyy</Menu.Item>
      <Menu.Item key='2' danger onClick={() => {}}>
        退出登录
      </Menu.Item>
    </Menu>
  )

  return (
    <Header
      className='site-layout-background'
      style={{
        padding: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'white',
      }}
    >
      {/* 左侧折叠按钮 */}
      {isCollapsed ? (
        <MenuUnfoldOutlined onClick={toggleCollapse} aria-label='展开菜单' />
      ) : (
        <MenuFoldOutlined onClick={toggleCollapse} aria-label='折叠菜单' />
      )}

      {/* 右侧用户信息和头像 */}
      <Dropdown menu={menu} trigger={['click']}>
        <Avatar
          style={{ cursor: 'pointer' }}
          icon={<UserOutlined />}
          size='large'
        />
      </Dropdown>
    </Header>
  )
}
const mapStateToProps = (state) => ({
  isCollapsed: state.CollapsedReducer.isCollapsed,
})
const mapDispatchToProps = {
  toggleCollapse,
}
export default connect(mapStateToProps, mapDispatchToProps)(TopHeader)
