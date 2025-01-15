import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';

const { Sider } = Layout;

function SideMenu(props) {
  const onClick = (e) => {};
  const items = [
    {
      key: '1',
      icon: <PieChartOutlined />,
      label: '首页',
    },
    {
      key: '2',
      icon: <DesktopOutlined />,
      label: 'Option 2',
    },
    {
      key: '3',
      icon: <ContainerOutlined />,
      label: 'Option 3',
    },
    {
      key: 'sub1',
      label: 'Navigation One',
      icon: <MailOutlined />,
      children: [
        {
          key: '5',
          label: 'Option 5',
        },
        {
          key: '6',
          label: 'Option 6',
        },
        {
          key: '7',
          label: 'Option 7',
        },
        {
          key: '8',
          label: 'Option 8',
        },
      ],
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            {
              key: '11',
              label: 'Option 11',
            },
            {
              key: '12',
              label: 'Option 12',
            },
          ],
        },
      ],
    },
  ];
  return (
    <Sider
      trigger={null}
      collapsible
    >
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          background: '#001529',
        }}
      >
        <div className="logo">全球新闻发布系统</div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Menu
            theme="dark"
            onClick={onClick}
            mode="inline"
            items={items} // 渲染菜单项
          />
        </div>
      </div>
    </Sider>
  );
}

export default SideMenu;
