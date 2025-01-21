import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../views/Index/Home/home'
import NotFound from '../../views/Index/NotFound/notfound'
import Comprehensive from '../../views/Index/comprehension/comprehensive'
import Levelled from '../../views/Index/Levelled/levelled'
import Record from '../../views/Index'
import Space from '../../views/Index'
import Visualization from '../../views/Index/Visualization/visualization'
import Yuedufenye from '../../views/Index/Comprehension/fenye'
import ReadingPage from '../../views/Index/Reading/reading'
import Txt from '../../views/Index/Levelled/txt'
import Wd from '../../views/Index/Levelled/wd'
import Pic from '../../views/Index/Levelled/pic'
const LocalRouterMap = {
  '/home': Home,
  '*': NotFound,
  '/visualization': Visualization,
  '/comprehension': Comprehensive,
  '/levelled': Levelled,
  '/levelled/txt': Txt,
  '/levelled/wd': Wd,
  '/levelled/pic': Pic,
  '/record': Record,
  '/space': Space,
  '/comprehension/yuedufenye': Yuedufenye,
  '/readingpage/:id': ReadingPage,
}

function AiRouter() {
  return (
    <Routes>
      {Object.keys(LocalRouterMap).map((path) => {
        const Component = LocalRouterMap[path] // 获取对应路径的组件
        return <Route key={path} path={path} element={<Component />} />
      })}
    </Routes>
  )
}

export default AiRouter
