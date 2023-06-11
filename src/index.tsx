import React from 'react';
import ReactDOM from 'react-dom/client';
// 路由配置
import { HashRouter } from 'react-router-dom';

import './index.css';
import '@/assets/css/index.less';
// 重置css样式文件
import 'normalize.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from 'styled-components';
import them from './assets/theme';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* redux +  eduxjs/toolkit */}
    <Provider store={store}>
      {/* styled-components */}
      <ThemeProvider theme={them}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
