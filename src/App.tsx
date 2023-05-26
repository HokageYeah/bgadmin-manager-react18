import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import { Suspense } from 'react';
function App() {
  console.log();
  const nameAry = [];
  for (let i = 0; i < 100; i++) {
    nameAry.push(i);
  }
  return (
    <div className="App">
      <div className="header">header</div>
      <div className="page">
        <Suspense fallback={'加载中'}>{useRoutes(routes)}</Suspense>
      </div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
