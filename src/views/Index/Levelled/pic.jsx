import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import pic from './pic.module.scss'
import { InboxOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
const { Dragger } = Upload

export default function Pic() {
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
      // "file": "file"
    },
    // action: 'http://localhost:8070/three_simple_context/image',
    action: 'http://localhost:8070/three_simple_context/image',
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

  const [data, setData] = useState(null)

  const onSave = () => {
    var fetchData = async () => {
      try {
        axios({
          method: 'get',
          url: 'http://localhost:8070/three_simple_context/image/download/{global_filename}',
          responseType: 'stream',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Header': '*',
          },
        }).then((response) => {
          console.log('success')
        })
        setData(response.data)
      } catch (error) {
        console.error('获取数据时出错:', error)
      }
    }
    fetchData()
  }

  return (
    <>
      <div className={pic.header}>
        <h1 className={pic.title}>图片阅读，降低英语学习门槛</h1>
        <h2 className={pic.jieshao}>
          上传你想要简译的图片，将根据您选择的难度为您简译!
        </h2>
        <h3 className={pic.zhidao}>请将要简译的图片上传</h3>
      </div>
      <Dragger className={pic.upload} {...props} level={level}>
        <div className='ant-upload-drag-icon'>
          <InboxOutlined />
        </div>
        <div>
          将文件拖到此处，或
          <div style={{ color: 'rgb(22,119,255)' }}>点击上传</div>
        </div>
      </Dragger>
      <div className={pic.gongneng}>
        <button className={pic.button1}>文档简译</button>
        <button className={pic.button2} onClick={() => onSave()}>
          保存结果
        </button>
      </div>
      <div className={pic.result}>
        <h3>图片原文解析：</h3>
        <div className={pic.jianyi}>
          <div className={pic.yuanwen}>原文解析结果：......</div>
          <div className={pic.jianyihou}>原文解析结果：......</div>
        </div>
      </div>
    </>
  )
}
