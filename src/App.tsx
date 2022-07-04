import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RouteType } from 'types/RouteType';
import Error404 from 'components/Error404';
import AuthLayout from 'layouts/Auth';
import CommonLayout from 'layouts/Common';
import protectedRoutes from 'routes/protectedRoutes';
import publicRoutes from 'routes/publicRoutes';
import { Auth, Common } from 'types/LayoutType';

type RouteProps = {
  route: RouteType;
  component: (props: Auth | Common) => JSX.Element
}

const renderRoutes = (props: RouteProps) => {
  const { path, name, element } = props.route
  const Layout = props.component
  return <Route key={path + name} path={path} element={<Layout>{element}</Layout>} />
}

const auth = localStorage.getItem('authorized');

function App() {
  return (
    <Routes>
      {
        auth ? protectedRoutes.map((route: RouteType) => renderRoutes({ route, component: AuthLayout }))
          : publicRoutes.map((route: RouteType) => renderRoutes({ route, component: CommonLayout }))
      }
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
