import './App.css';
import { Link, useRoutes } from 'react-router-dom';
import routes from './router';
import { Suspense } from 'react';
// import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch, appShallowEqual } from './store';
import { changeNameAction } from './store/modules/counter';

function App() {
  // const { count, message } = useSelector(
  //   (state: FnReturnType) => ({
  //     count: state.counter.count,
  //     message: state.counter.name
  //   }),
  //   shallowEqual
  // );

  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.name
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
      <div className="nav">
        <Link to={'/discover'}>发现音乐</Link>
        <Link to={'/mine'}>我的音乐</Link>
        <Link to={'/focus'}>关注</Link>
        <Link to={'/download'}>下载客户端</Link>
        <Link to={'/scrollView'}>渲染十万数据</Link>
      </div>
      <h2>当前技术： {count}</h2>
      <h2>当前名字： {message}</h2>
      <button onClick={handleChangeName}>修改姓名</button>
      <div className="page">
        <Suspense fallback={'加载中...'}>
          <div className="main">{useRoutes(routes)}</div>
        </Suspense>
      </div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
