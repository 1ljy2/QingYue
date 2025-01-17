import React from 'react';
import { Row, Col, Card, Button, Typography } from 'antd';
import {
  AppstoreAddOutlined,
  ReadOutlined,
  GithubOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title
        level={1}
        style={{ textAlign: 'center' }}
      >
        欢迎来到 轻阅AI
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        我们为您提供最新的人工智能新闻、工具和文章。快速了解AI的前沿动态，提升您的工作效率。
      </Paragraph>

      <Row
        gutter={16}
        justify="center"
      >
        <Col span={8}>
          <Card
            title="AI新闻"
            bordered={false}
            hoverable
          >
            <p>获取最新的人工智能新闻，了解行业动态。</p>
            <Button
              type="primary"
              icon={<ReadOutlined />}
            >
              阅读更多
            </Button>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            title="AI工具"
            bordered={false}
            hoverable
          >
            <p>探索各种智能工具，帮助您提升生产力。</p>
            <Button
              type="primary"
              icon={<AppstoreAddOutlined />}
            >
              立即体验
            </Button>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            title="开源项目"
            bordered={false}
            hoverable
          >
            <p>参与和学习各种与人工智能相关的开源项目。</p>
            <Button
              type="primary"
              icon={<GithubOutlined />}
            >
              访问GitHub
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
