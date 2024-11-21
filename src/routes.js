// routes.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Index from './routes/index';
import Apropos from './routes/about';
import Error404 from './routes/Error404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <Apropos />,
  },
  {
    path:"*",
    element: <Error404 />,
  }
]);

export default router;