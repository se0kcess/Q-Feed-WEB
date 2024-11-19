import RootLayout from '@/components/RootLayout';
import Main from '@/pages/Main';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '', // 홈 페이지
        element: <Main />,
      },
    ],
  },
]);

export default router;
