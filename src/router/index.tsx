import React from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

// 路由的懒加载，使用懒加载后必须使用Suspense包裹路由组件，告知失败的时候展示什么
const Mine = React.lazy(() => import('@/views/mine'));
const Discover = React.lazy(() => import('@/views/discover'));
const Download = React.lazy(() => import('@/views/download'));
const Focus = React.lazy(() => import('@/views/focus'));
const ScrollView = React.lazy(() => import('@/views/scrollView'));

// Discover的二级路由
const Recommend = React.lazy(() => import('@/views/discover/c-views/recommend'));
const Album = React.lazy(() => import('@/views/discover/c-views/album'));
const Artist = React.lazy(() => import('@/views/discover/c-views/artist'));
const Djradio = React.lazy(() => import('@/views/discover/c-views/djradio'));
const Ranking = React.lazy(() => import('@/views/discover/c-views/ranking'));
const Songs = React.lazy(() => import('@/views/discover/c-views/songs'));

const routes: RouteObject[] = [
  // 默认路径的时候 导航到指定地址
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/discover',
    element: <Discover />,
    // 二级路由
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/scrollView',
    element: <ScrollView />
  }
];

export default routes;
