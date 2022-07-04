import Dashboard from "pages/Dashboard";
import { RouteType } from "types/RouteType";


const routes: Array<RouteType> = [
  {
    name: 'Dashboard',
    path: '/',
    element: <Dashboard />,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    element: <Dashboard />,
  },
]

const protectedRoutes = routes.map((route: RouteType) => ({ ...route, type: 'protected' }))

export default protectedRoutes;