import React, { useState } from 'react'
import { Input, Button, message, Spin } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'

const { TextArea } = Input

export default function Fanyi() {
  const [inputText, setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  const translateText = async () => {
    if (!inputText.trim()) {
      message.warning('请输入要翻译的文本')
      return
    }

    setLoading(true)

    // 模拟调用翻译 API，实际使用时可以替换为真实的翻译服务
    try {
      // 这里模拟一个延迟，假设翻译结果是直接返回的文本
      setTimeout(() => {
        // 假设翻译结果
        setTranslatedText(`${inputText} (翻译结果)`)
        setLoading(false)
      }, 1500)
    } catch (error) {
      message.error('翻译失败，请稍后再试')
      setLoading(false)
    }
  }

  return (
    <div
      style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}
    >
      <h3 style={{ marginBottom: '20px' }}>翻你想翻</h3>

      <TextArea
        rows={4}
        placeholder='请输入文本进行翻译'
        value={inputText}
        onChange={handleInputChange}
        style={{ marginBottom: '20px' }}
      />

      <Button
        type='primary'
        icon={<GoogleOutlined />}
        onClick={translateText}
        loading={loading}
        style={{ marginBottom: '20px' }}
      >
        翻译
      </Button>

      <div>
        <h4>翻译结果：</h4>
        {loading ? (
          <Spin />
        ) : (
          <div
            style={{
              padding: '10px',
              backgroundColor: '#f7f7f7',
              borderRadius: '5px',
            }}
          >
            {translatedText || '翻译结果会显示在这里'}
          </div>
        )}
      </div>
    </div>
  )
}
