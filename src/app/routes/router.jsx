import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@/pages';
import { ROUTER_PATH } from '@/shared';

const router = createBrowserRouter(
  [
    {
      path: ROUTER_PATH.ROOT,
      element: <MainPage />,
    },
  ],
  {
    basename: '/youtube-clone-vite',
  },
);

export const Routes = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};
