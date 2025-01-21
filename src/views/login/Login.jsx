import React, { useState } from 'react'
import { Button, Form, Input, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom' // 导入 useNavigate

export default function Login() {
  const navigate = useNavigate() // 使用 useNavigate 钩子

  const [loading, setLoading] = useState(false)

  const onFinish = (value) => {
    setLoading(true) // 设置加载状态
    console.log(value)
    // 登录验证示例，可以替换成实际的 API 请求
    setTimeout(() => {
      if (value.username === 'admin' && value.password === '123456') {
        localStorage.setItem('token', 'some-token')
        navigate('/home') // 登录成功后跳转
      } else {
        message.error('用户名或密码错误')
      }
      setLoading(false) // 请求完成，取消加载状态
    }, 1000)
  }

  return (
    <div
      style={{
        width: '100%', // 确保宽度铺满
        height: '100vh', // 确保高度铺满
        overflow: 'hidden', // 隐藏溢出的内容
        position: 'relative', // 定位容器
        margin: 0, // 防止出现页面滚动条
        background: '#001529', // 背景颜色
      }}
    >
      {/* 背景效果（例如渐变） */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, #1890ff, #ff4d4f)', // 渐变背景
          zIndex: 0,
        }}
      ></div>

      {/* 登录表单 */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          width: '400px', // 控制表单宽度
        }}
      >
        <div
          style={{
            textAlign: 'center',
            fontSize: '30px',
            color: '#fff',
            marginBottom: '20px',
          }}
        >
          欢迎使用轻阅AI
        </div>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name='username'
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='用户名'
            />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='密码'
            />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
              style={{
                width: '100%',
                backgroundColor: '#1890ff', // 自定义按钮颜色
              }}
              loading={loading} // 显示加载状态
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
