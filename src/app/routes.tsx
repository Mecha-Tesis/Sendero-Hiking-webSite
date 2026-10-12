import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { GearPage } from './pages/GearPage';
import { RoutesPage } from './pages/RoutesPage';
import { RouteDetailPage } from './pages/RouteDetailPage';
import { SafetyPage } from './pages/SafetyPage';
import { SafetyArticlePage } from './pages/SafetyArticlePage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'gear',
        Component: GearPage,
      },
      {
        path: 'routes',
        Component: RoutesPage,
      },
      {
        path: 'routes/:id',
        Component: RouteDetailPage,
      },
      {
        path: 'safety',
        Component: SafetyPage,
      },
      {
        path: 'safety/:id',
        Component: SafetyArticlePage,
      },
    ],
  },
]);