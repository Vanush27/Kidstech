import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import { Home } from '../views/index';

export const appRouter = createBrowserRouter([
  {
    path: ROUTES.home(),
    element: <Home />,
  },
]);
