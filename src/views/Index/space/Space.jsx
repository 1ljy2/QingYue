import React, { useState, useEffect } from 'react';
import {
  Layout,
  Card,
  List,
  Button,
  message,
  Upload,
  Modal,
  Typography,
} from 'antd';
import { FolderOutlined, FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // 使用 navigate 进行页面跳转
import { connect } from 'react-redux';

const { Content } = Layout;
const { Title } = Typography;

function DocumentSpace(props) {
  const navigate = useNavigate(); // 获取 navigate 函数
  const [exampleDocs, setExampleDocs] = useState([]); // 示例文档
  const [userDocs, setUserDocs] = useState([]); // 用户上传的文档
  const [visible, setVisible] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  // 模拟从后端获取的示例文档和用户上传文档
  useEffect(() => {
    // 示例文档
    const fetchedExampleDocs = [
      {
        id: 1,
        name: '示例文档1.pdf',
        uploadTime: '2025-01-10',
        path: '/files/example1.pdf',
      },
      {
        id: 2,
        name: '示例文档2.docx',
        uploadTime: '2025-01-11',
        path: '/files/example2.docx',
      },
    ];
    setExampleDocs(fetchedExampleDocs);

    // 用户上传文档
    const fetchedUserDocs = [
      {
        id: 3,
        name: 'AI解读文档1.txt',
        uploadTime: '2025-01-15',
        path: '/files/user1.txt',
      },
      {
        id: 4,
        name: 'AI解读文档2.pdf',
        uploadTime: '2025-01-16',
        path: '/files/user2.pdf',
      },
    ];
    setUserDocs(fetchedUserDocs);
  }, []);

  // 处理点击查看文档，跳转到阅读页并传递文档ID
  const handleViewDoc = (doc) => {
    // 跳转到阅读页面，并携带文档的 ID
    navigate(`/readingpage/${doc.id}`);
  };

  // 模态框关闭
  const handleModalClose = () => {
    setVisible(false);
  };

  // 模拟上传文档
  const handleUpload = (file) => {
    message.success(`文档上传成功：${file.name}`);
    // 这里可以添加文件上传的API请求
    return false; // 阻止默认上传行为
  };

  return (
    <Content
      style={{
        padding: '0 50px',
        minHeight: '280px',
        backgroundColor: '#f4f6f9',
      }}
    >
      <Title
        level={2}
        style={{
          color: '#001529', // 标题使用深蓝色
          fontWeight: 'bold',
        }}
      >
        文档空间
      </Title>

      <Card
        title="示例文档"
        style={{
          marginBottom: 20,
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={exampleDocs}
          renderItem={(doc) => (
            <List.Item
              actions={[
                <Button
                  type="link"
                  icon={<FileTextOutlined />}
                  onClick={() => handleViewDoc(doc)} // 点击查看文档跳转
                  style={{
                    color: '#1890ff', // 按钮文字为蓝色
                    fontWeight: '600',
                  }}
                >
                  查看
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={
                  <span style={{ fontSize: '16px', color: '#333' }}>
                    {doc.name}
                  </span>
                }
                description={
                  <span style={{ fontSize: '14px', color: '#8c8c8c' }}>
                    上传时间: {doc.uploadTime}
                  </span>
                }
              />
            </List.Item>
          )}
        />
      </Card>

      <Card
        title="我的文档"
        style={{
          marginBottom: 20,
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={userDocs}
          renderItem={(doc) => (
            <List.Item
              actions={[
                <Button
                  type="link"
                  icon={<FileTextOutlined />}
                  onClick={() => handleViewDoc(doc)} // 点击查看文档跳转
                  style={{
                    color: '#1890ff', // 按钮文字为蓝色
                    fontWeight: '600',
                  }}
                >
                  查看
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={
                  <span style={{ fontSize: '16px', color: '#333' }}>
                    {doc.name}
                  </span>
                }
                description={
                  <span style={{ fontSize: '14px', color: '#8c8c8c' }}>
                    上传时间: {doc.uploadTime}
                  </span>
                }
              />
            </List.Item>
          )}
        />
      </Card>

      <Card
        title="上传新文档"
        style={{
          marginBottom: 20,
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Upload
          customRequest={({ file }) => handleUpload(file)}
          showUploadList={false}
        >
          <Button
            icon={<FolderOutlined />}
            style={{
              backgroundColor: '#1890ff', // 按钮背景色为蓝色
              color: 'white',
              borderRadius: '4px',
              fontSize: '16px',
            }}
          >
            上传文档
          </Button>
        </Upload>
      </Card>
    </Content>
  );
}

const mapStateToProps = ({ CollapsedReducer: { isCollapsed } }) => ({
  isCollapsed,
});

export default connect(mapStateToProps)(DocumentSpace);
