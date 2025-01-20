import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../views/Index/home/Home';
import Nopermission from '../../views/Index/nopermission/Nopermission';
import Comprehensive from '../../views/Index/comprehension/Comprehensive';
import Levelled from '../../views/Index/levelled/Levelled';
import Record from '../../views/Index/record/Record';
import Space from '../../views/Index/space/space';
import Visualization from '../../views/Index/visualization/Visualization';
import Yuedufenye from '../../views/Index/comprehension/FreeRead';
const LocalRouterMap = {
  '/home': Home,
  '*': Nopermission,
  '/visualization': Visualization,
  '/comprehension': Comprehensive,
  '/levelled': Levelled,
  '/record': Record,
  '/space': Space,
  '/comprehension/yuedufenye': Yuedufenye,
};

function AiRouter() {
  return (
    <Routes>
      {Object.keys(LocalRouterMap).map((path) => {
        const Component = LocalRouterMap[path]; // 获取对应路径的组件
        return (
          <Route
            key={path}
            path={path}
            element={<Component />}
          />
        );
      })}
    </Routes>
  );
}

export default AiRouter;
