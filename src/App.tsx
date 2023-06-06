import './App.css';
import { Link, useRoutes } from 'react-router-dom';
import routes from './router';
import { Suspense } from 'react';
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to={'/discover'}>发现音乐</Link>
        <Link to={'/mine'}>我的音乐</Link>
        <Link to={'/focus'}>关注</Link>
        <Link to={'/download'}>下载客户端</Link>
        <Link to={'/scrollView'}>渲染十万数据</Link>
      </div>
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
