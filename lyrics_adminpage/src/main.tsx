import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.scss';

import { Error } from './components/Error.tsx';
import Loginpage from './pages/Loginpage.tsx';
import Contentpage from './pages/Contentpage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Loginpage />,
    errorElement: <Error />,
  },
  {
    path: '/content',
    element: <Contentpage />,
  },
  {
    path: '/login',
    element: <Loginpage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
