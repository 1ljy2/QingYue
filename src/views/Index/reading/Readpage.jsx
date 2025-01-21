import React, { useState, useEffect } from 'react';
import { Layout, Spin, Typography, Button, message, Row, Col } from 'antd';
import { useParams } from 'react-router-dom'; // 用于获取路由参数
import axios from 'axios';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function ReadingPage() {
  const { id } = useParams(); // 获取路由中传递的文档ID
  const [docData, setDocData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 获取文档详情
  useEffect(() => {
    const fetchDocument = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/${id}`);
        setDocData(response.data); // 假设后端返回文档数据
      } catch (error) {
        message.error('获取文档失败，请稍后重试');
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, [id]);

  // 如果文档没有加载完，显示加载中的动画
  if (loading) {
    return (
      <Content style={{ padding: '40px 80px', backgroundColor: '#f7f7f7' }}>
        <Spin size="large" />
      </Content>
    );
  }

  // 如果文档数据为空，显示错误提示
  if (!docData) {
    return (
      <Content style={{ padding: '40px 80px', backgroundColor: '#f7f7f7' }}>
        <Title
          level={3}
          style={{ textAlign: 'center' }}
        >
          文档不存在或已被删除
        </Title>
      </Content>
    );
  }

  return (
    <Content
      style={{
        padding: '40px 80px',
        backgroundColor: '#f7f7f7',
        minHeight: '100vh',
      }}
    >
      <Row justify="center">
        <Col
          span={18}
          xs={24}
          sm={20}
          md={18}
          lg={16}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Title
              level={2}
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#1890ff', // 标题采用蓝色
              }}
            >
              {docData.title}
            </Title>
            <Paragraph
              type="secondary"
              style={{
                fontSize: '14px',
                color: '#7d7d7d',
                marginBottom: '20px',
                fontStyle: 'italic', // 时间使用斜体
              }}
            >
              上传时间: {docData.uploadTime}
            </Paragraph>
            <Paragraph
              style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#333', // 内容主体文字颜色
                wordBreak: 'break-word',
              }}
            >
              {docData.content}
            </Paragraph>

            {/* 按钮区 */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginTop: '30px',
              }}
            >
              <Button
                type="primary"
                onClick={() => window.history.back()}
                style={{
                  backgroundColor: '#ff4d4f', // 按钮使用红色
                  borderColor: '#ff4d4f',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                返回
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Content>
  );
}

export default ReadingPage;
