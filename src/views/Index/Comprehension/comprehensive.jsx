import style from './yuedulijie.module.scss'
import React from 'react'
import { FileTextOutlined, FileAddOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export default function Comprehensive() {
  return (
    <>
      <div className={style.modern1}>
        <div className={style.jieshao}>
          <h1 className={style.title}>阅读理解</h1>
          <h2 className={style.text}>英文阅读教育新纪元</h2>
          <p className={style.p1}>小说/议论文/新闻纪实</p>
          <p className={style.p1}>AI帮你实现文章概要总结、文章内容</p>
          <p>提问、智能对话</p>
        </div>
      </div>

      <div className={style.modern2}>
        <Link className={`${style.card} ${style.txt}`} to='yuedufenye'>
          <div className={style.cardContent}>
            <h3>自由阅读</h3>
            <p>上传各类文档</p>
            <p>分析文档中的关键内容</p>
          </div>
          <div className={style.iconContainer}>
            <FileTextOutlined className={style.icon} />
          </div>
        </Link>

        <Link className={`${style.card} ${style.wp}`} to='yuedufenye'>
          <div className={style.cardContent}>
            <h3>图书阅读</h3>
            <p>导入电子书籍</p>
            <p>分章节整理书中核心点</p>
          </div>
          <div className={style.iconContainer}>
            <FileAddOutlined className={style.icon} />
          </div>
        </Link>
      </div>
    </>
  )
}
