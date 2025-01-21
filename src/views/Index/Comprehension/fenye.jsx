import React, { useState } from 'react'
import { Layout, Button, Upload, Tabs, Typography, Space } from 'antd'
import { ArrowLeftOutlined, UploadOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import Daodu from './daodu'
import Duihua from './duihua'
import Biji from './biji'
import Fanyi from './fanyi'

const { Title } = Typography

const items = [
  {
    key: '1',
    label: '导读',
    items: <Daodu />,
  },
  {
    key: '2',
    label: '对话',
    items: <Duihua />,
  },
  {
    key: '3',
    label: '笔记',
    items: <Biji />,
  },
  {
    key: '4',
    label: '翻译',
    items: <Fanyi />,
  },
]

export default function Yuedufenye() {
  const navigateTo = useNavigate()
  const handleClick = () => {
    navigateTo('/comprehension')
  }

  // 拿到上传的文件
  const [fileList, setFileList] = useState([])
  const handleChange = (info) => {
    let newFileList = [...info.fileList]
    newFileList = newFileList.slice(1)
    newFileList = newFileList.map((file) => {
      if (file.response) {
        file.url = file.response.url
      }
      return file
    })
    setFileList(newFileList)
  }

  const props = {
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange: handleChange,
    multiple: true,
  }

  return (
    <Layout.Content
      style={{
        padding: '20px',
        marginTop: '20px',
        background: '#fff',
        borderRadius: '8px',
      }}
    >
      {/* Header Section */}
      <Space
        align='center'
        style={{
          width: '100%',
          marginBottom: '20px',
          justifyContent: 'space-between',
        }}
      >
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={handleClick}
          type='link'
          style={{
            fontSize: 20,
            color: '#1890ff',
            padding: 0,
          }}
        />
        <Title level={3} style={{ margin: 0, color: '#333' }}>
          【示例】书名
        </Title>
        <Upload {...props} fileList={fileList} showUploadList={false}>
          <Button icon={<UploadOutlined />}>上传文件</Button>
        </Upload>
      </Space>

      {/* File Display and Tabs */}
      <div style={{ marginBottom: '20px', fontSize: 16, color: '#666' }}>
        【示例】书名.pdf
      </div>

      <Tabs
        defaultActiveKey='1'
        items={items}
        onChange={(key) => console.log(key)}
        tabBarStyle={{
          backgroundColor: 'transparent',
          borderBottom: '2px solid #d9d9d9', // 修改为浅灰色
          marginBottom: '30px', // 向下移动边框
        }}
        tabBarGutter={50}
      />
    </Layout.Content>
  )
}
