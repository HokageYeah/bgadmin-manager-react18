import React from 'react';
import { RouteObject } from 'react-router-dom';
const Home = React.lazy(() => import('@/views/home'));
const Detail = React.lazy(() => import('@/views/detail'));
const Entire = React.lazy(() => import('@/views/entire'));

const routes: RouteObject[] = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entire',
    element: <Entire />
  }
];

export default routes;
