import { RouteType } from "types/RouteType";

import Login from "pages/Login";
import Register from "pages/Register";

const routes: Array<RouteType> = [
  {
    name: 'Login',
    path: '/',
    element: <Login />,
  },
  {
    name: 'Login',
    path: '/login',
    element: <Login />,
  },
  {
    name: 'Register',
    path: '/register',
    element: <Register />,
  },
]

const publicRoutes = routes.map((route: RouteType) => ({ ...route, type: 'public' }));

export default publicRoutes;