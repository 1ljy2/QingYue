import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import styles from './wd.module.scss'
import { InboxOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
// import { baseURL } from '../../configs'
const { Dragger } = Upload

export default function Wd() {
  // state 路由传参
  const { state } = useLocation()
  console.log(state.level)
  const level = state.level

  const props = {
    name: 'file',
    multiple: true,
    headers: {
      'X-Requested-With': null,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data',
    },
    data: {
      level: level,
      // file: file
    },
    // action: 'http://localhost:8070/three_simple_context/image',
    action: 'http://localhost:8070/three_simple_context/document',
    onChange(info) {
      // console.log(info);
      const { status } = info.file
      const file = info.file
      const fileList = info.fileList

      let formdata = new FormData()
      formdata.append('level', level)
      // 如果上传多个文件，是数组fileList的话，循环append
      for (var i = 0; i < fileList.length; i++) {
        const file = fileList[i].originFileObj
        const reader = new FileReader()

        reader.onload = function (event) {
          const base64String = event.target.result
          formdata.append('file', base64String) // 将文件内容以Base64字符串形式添加到file参数
        }

        reader.readAsDataURL(file)
      }

      if (status !== 'uploading') {
        console.log(file, fileList)
        console.log(level)
      }
      if (status === 'done') {
        message.success(`${file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
  }

  const [data, setData] = useState(0)

  let onSave = () => {
    // useEffect(() => {
    // 	// 在组件挂载时获取后端数据
    // }, []);

    var fetchData = async () => {
      try {
        // 发送 GET 请求获取后端数据
        const response = await axios.get(
          'http://localhost:8070/three_simple_context/document/download/{global_filename}'
        )
        // 设置组件的状态来保存获取到的数据
        setData(response.data)
      } catch (error) {
        console.error('获取数据时出错:', error)
      }
    }

    fetchData()
  }

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>文档阅读，让AI赋能高效阅读</h1>
        <h2 className={styles.jieshao}>
          上传你想要简译的文档，将根据您选择的难度为您简译!
        </h2>
        <h3 className={styles.zhidao}>请将要简译的文档上传</h3>
      </div>
      <Dragger className={styles.upload} {...props} level={state.level}>
        <div className='ant-upload-drag-icon'>
          <InboxOutlined />
        </div>
        <div>
          将文件拖到此处，或
          <div style={{ color: 'rgb(22,119,255)' }}>点击上传</div>
        </div>
      </Dragger>
      <div className={styles.gongneng}>
        <button className={styles.button1}>文档简译</button>
        <button className={styles.button2} onClick={() => onSave()}>
          保存结果
        </button>
      </div>
      <div className={styles.result}>
        <h3>文档简译结果：</h3>
        <div className={styles.jianyi}>简译后：......</div>
      </div>
    </>
  )
}
