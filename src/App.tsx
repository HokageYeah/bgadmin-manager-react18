import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import { Suspense } from 'react';
// import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch, appShallowEqual } from './store';
import { changeNameAction } from './store/modules/counter';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';

function App() {
  // const { count, message } = useSelector(
  //   (state: FnReturnType) => ({
  //     count: state.counter.count,
  //     message: state.counter.name
  //   }),
  //   shallowEqual
  // );
  // 测试提交
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.yycounter.count,
      message: state.yycounter.name
    }),
    appShallowEqual
  );
  const dispath = useAppDispatch();
  const handleChangeName = () => {
    dispath(changeNameAction('呵呵呵呵呵呵呵呵'));
    console.log('handleChangeName');
  };
  return (
    <div className="App">
      <AppHeader />
      <div className="page">
        <Suspense fallback={'加载中...'}>
          <div className="main">{useRoutes(routes)}</div>
        </Suspense>
      </div>
      <AppFooter />
      -----------------------------------
      <div className="footer">
        <h2>当前技术： {count}</h2>
        <h2>当前名字： {message}</h2>
        <button onClick={handleChangeName}>修改姓名</button>
      </div>
    </div>
  );
}

export default App;
