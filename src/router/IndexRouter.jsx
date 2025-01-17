import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 导入 Routes 和 Route
import Login from '../views/login/Login'; // 导入登录组件
import Index from '../views/Index/Index'; // 导入主页组件

const IndexRouter = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={<Index />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      {/* 添加其他路由 */}
    </Routes>
  );
};

export default IndexRouter;
