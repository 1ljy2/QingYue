import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' // import styles
import { Input } from 'antd'
import style from './biji.module.scss'

const { TextArea } = Input

export default function Biji() {
  const [value, setValue] = useState('')

  // 当内容变化时，更新状态
  const handleChange = (content) => {
    setValue(content)
  }

  return (
    <div className={style.rootBox}>
      {/* 标题输入框 */}
      <div className={style.title}>
        <Input
          className={style.input}
          placeholder='请输入标题'
          bordered={false}
          autoFocus
          style={{
            fontSize: '18px', // 调整字体大小
            padding: '8px 12px', // 调整内边距
            background: '#f5f5f5',
            borderRadius: '8px',
            marginBottom: '15px', // 调整底部间距
            width: '100%', // 确保输入框宽度占满父容器
          }}
        />
      </div>

      {/* 富文本编辑器 */}
      <div className={style.contentBox}>
        <ReactQuill
          value={value}
          onChange={handleChange}
          placeholder='请输入笔记'
          theme='snow'
          style={{
            height: 400, // 调整编辑器高度
            width: '100%',
          }}
        />
      </div>
    </div>
  )
}
