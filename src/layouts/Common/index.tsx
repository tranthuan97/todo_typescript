import { Common } from "types/LayoutType";

const CommonLayout = (props: Common) => {
  return (
    <div>
      <h3>Common</h3>
      {props.children}
    </div>
  );
};

export default CommonLayout;