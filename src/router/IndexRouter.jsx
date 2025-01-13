import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from '../views/login/Login';
// 替换为你实际的组件
// 导入 NewsSandBox 组件
import AiSandBox from '../views/sandbox/AiSandBox';
export default function IndexRouter() {
  const token = localStorage.getItem('token'); // 从 localStorage 获取 token

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
