# 轻阅AI重构

## 1.路由搭建

路由搭建思想主要是先设置一个`IndexRouter`来实现token验证，如果token验证通过则跳转到采用Layout布局的组件`Aisandbox`,在这个盒子中还有路由处理：布局采用了sidemenu,Topheader以及contant的布局方式，contant组件要根据路由的不同进行跳转，所以将conatnt组件变成AiRouter在这个组件里进行路由逻辑的实现。



### IndexRouter

~~~jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from '../views/login/Login';

import AiSandBox from '../views/sandbox/AiSandBox';
export default function IndexRouter() {
 

  return (
    <Router>
      <Routes>
        {/* 登录页面 */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* 根路径（"/"）默认重定向到登录页面 */}
        <Route
          path="/*"
          element={token ? <AiSandBox /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

~~~

### Aisandebox

~~~jsx
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

~~~

