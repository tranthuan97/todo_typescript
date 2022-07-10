import { RouteType } from "types/RouteType";

import Login from "pages/Login";
import Register from "pages/Register";
import Introduce from "pages/Introduce";

const routes: Array<RouteType> = [
  {
    name: 'Introduce',
    path: '/',
    element: <Introduce />,
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