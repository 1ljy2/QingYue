import React, { useState, useEffect } from 'react';
import { Layout, Card, List, Button, message, Modal } from 'antd';
import { FileOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // 引入 useNavigate
import { connect } from 'react-redux';

const { Content } = Layout;

function ReadingRecord(props) {
  // 假设文件列表是从后端获取的
  const [fileList, setFileList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate(); // 获取跳转函数

  // 假设从服务器获取的文件列表
  useEffect(() => {
    // 假设这是从后端获取的文件列表
    const fetchedFiles = [
      {
        id: 1,
        name: '文件1.pdf',
        uploadTime: '2025-01-10',
        path: '/path/to/file1.pdf',
      },
      {
        id: 2,
        name: '文件2.docx',
        uploadTime: '2025-01-11',
        path: '/path/to/file2.docx',
      },
      {
        id: 3,
        name: '文件3.txt',
        uploadTime: '2025-01-12',
        path: '/path/to/file3.txt',
      },
    ];
    setFileList(fetchedFiles);
  }, []);

  // 文件点击查看
  const handleFileClick = (file) => {
    // 设置选中的文件
    setSelectedFile(file);
    // 跳转到阅读页，并传递文件的id
    navigate(`/readingpage/${file.id}`);
  };

  return (
    <Content style={{ padding: '0 50px', minHeight: 280 }}>
      <Card
        title="阅读记录"
        style={{ marginTop: '20px' }}
      >
        <List
          itemLayout="horizontal"
          dataSource={fileList}
          renderItem={(file) => (
            <List.Item
              actions={[
                <Button
                  type="link"
                  onClick={() => handleFileClick(file)} // 点击时跳转
                  icon={<FileOutlined />}
                >
                  查看
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={file.name}
                description={`上传时间: ${file.uploadTime}`}
              />
            </List.Item>
          )}
        />
      </Card>

      {/* 模态框显示文件内容 */}
      <Modal
        title="文件详情"
        visible={open}
        onCancel={() => setVisible(false)}
        footer={[
          <Button
            key="back"
            onClick={() => setVisible(false)}
          >
            关闭
          </Button>,
        ]}
      >
        {selectedFile && (
          <div>
            <p>
              <strong>文件名:</strong> {selectedFile.name}
            </p>
            <p>
              <strong>上传时间:</strong> {selectedFile.uploadTime}
            </p>
            <p>
              <strong>文件路径:</strong> {selectedFile.path}
            </p>
          </div>
        )}
      </Modal>
    </Content>
  );
}

const mapStateToProps = ({ CollapsedReducer: { isCollapsed } }) => {
  return { isCollapsed };
};

const mapDispatchToProps = {
  changeCollapsed() {
    return { type: 'change_collapsed' };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadingRecord);
