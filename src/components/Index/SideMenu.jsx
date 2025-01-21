import React from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FolderOutlined,
  EyeOutlined,
  PieChartOutlined,
  ClockCircleOutlined,
  OrderedListOutlined,
  ProfileOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

const { Sider } = Layout

function SideMenu(props) {
  console.log(props.isCollapsed)

  const navigate = useNavigate()
  const location = useLocation() // 获取当前的路由路径
  const onClick = (e) => {
    navigate(e.key) // 使用 navigate 进行页面跳转
  }

  const items = [
    {
      key: '/home',
      icon: <PieChartOutlined />,
      label: '首页',
    },
    {
      key: '/visualization',
      icon: <EyeOutlined />,
      label: '文本可视化',
    },
    {
      key: '/comprehension',
      icon: <ProfileOutlined />,
      label: '阅读理解',
    },
    {
      key: '/levelled',
      label: '分级阅读',
      icon: <OrderedListOutlined />,
    },
    {
      key: '/record',
      label: '阅读记录',
      icon: <ClockCircleOutlined />,
    },
    {
      key: '/space',
      label: '文档空间',
      icon: <FolderOutlined />,
    },
  ]

  return (
    <Sider trigger={null} collapsible collapsed={props.isCollapsed}>
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          background: '#001529',
        }}
      >
        <div
          className='logo'
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            padding: '16px',
            background: '#001529',
          }}
        >
          {props.isCollapsed ? '轻阅' : '轻阅AI'}
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Menu
            theme='dark'
            onClick={onClick}
            mode='inline'
            selectedKeys={[location.pathname]} // 根据当前路径设置选中的菜单项
            items={items} // 渲染菜单项
          />
        </div>
      </div>
    </Sider>
  )
}

const mapStateToProps = (state) => ({
  isCollapsed: state.CollapsedReducer.isCollapsed,
})

export default connect(mapStateToProps)(SideMenu)
