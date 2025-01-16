import Login from '../views/login/Login'
// 替换为你实际的组件
// 导入 NewsSandBox 组件
import AiSandBox from '../views/Index/Index'

const routes = [
  {
    path: '/',
    element: <AiSandBox />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]

export default routes
