import React, { useState, useEffect, useRef, Fragment } from 'react'
import style from './duihua.module.scss'
import { Input } from 'antd'
import { AudioOutlined, AliwangwangOutlined } from '@ant-design/icons'

// AI卡片
function AiCard({ AiContent }) {
  return (
    <div className={style.aiCard}>
      <AliwangwangOutlined style={{ fontSize: '45px', color: '#1890ff' }} />
      <span className={style.aiName}>轻阅AI</span>
      <div className={style.aiContent}>{AiContent}</div>
    </div>
  )
}

// 用户卡片
function UserCard({ userContent }) {
  return (
    <div className={style.userCard}>
      <span className={style.userHeadPhoto}>提问：</span>
      <div className={style.userContent}>{userContent}</div>
    </div>
  )
}

// 用户输入
function UserInput({ items, AiReturn, setItems, setAiReturn }) {
  const [content, setContent] = useState('')
  const { Search } = Input

  const handleChange = (e) => setContent(e.target.value)

  // 数据处理
  const onSearch = (value) => {
    const lastItem = items.slice(-1)[0]
    if (value.trim() !== '' && value !== lastItem) {
      setItems([...items, value])
      setAiReturn([...AiReturn, value])
    }
    setContent('')
  }

  return (
    <div className={style.inputCard}>
      <Search
        placeholder='请输入您的问题'
        enterButton='搜索'
        size='large'
        value={content}
        onSearch={onSearch}
        onChange={handleChange}
        style={{
          width: '100%',
          borderRadius: '20px',
          padding: '8px 20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>
  )
}

export default function Duihua() {
  const [items, setItems] = useState([])
  const [AiReturn, setAiReturn] = useState([])
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [items])

  return (
    <div className={style.total}>
      <AiCard AiContent={'欢迎'} />
      <ul>
        {items.map((item, index) => (
          <Fragment key={index}>
            <li>
              <UserCard userContent={item} />
            </li>
            {index < AiReturn.length && (
              <li>
                <AiCard AiContent={AiReturn[index]} />
              </li>
            )}
          </Fragment>
        ))}
      </ul>
      <div className={style.box} ref={messagesEndRef}></div>
      <div className={style.foot}>
        <UserInput
          items={items}
          AiReturn={AiReturn}
          setItems={setItems}
          setAiReturn={setAiReturn}
        />
      </div>
    </div>
  )
}
