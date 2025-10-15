
import { RouteObject } from 'react-router-dom';
import Home from '../pages/home/page';
import Support from '../pages/support/page';
import Feedback from '../pages/feedback/page';
import About from '../pages/about/page';
import Privacy from '../pages/privacy/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/support',
    element: <Support />,
  },
  {
    path: '/feedback',
    element: <Feedback />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
