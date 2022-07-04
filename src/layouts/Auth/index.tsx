import { Auth } from "types/LayoutType";

const AuthLayout = (props: Auth) => {
  return (
    <div>
      <h3>Authorized</h3>
      {props.children}
    </div>
  );
};

export default AuthLayout;