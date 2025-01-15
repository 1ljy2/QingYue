import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import TopHeader from '../../components/sandbox/TopHeader';
import AiRouter from '../../components/sandbox/AiRouter';
import SideMenu from '../../components/sandbox/SideMenu';
const { Content } = Layout;
export default function AiSandBox() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu />
      <Layout className="site-layout">
        <TopHeader />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            overflow: 'auto',
            minHeight: 280,
          }}
        >
          <AiRouter />
        </Content>
      </Layout>
    </Layout>
  );
}
