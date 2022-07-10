import { Common } from "types/LayoutType";

const CommonLayout = (props: Common) => {
  return (
    <div>
      <h4 className="text-center">TO DO LIST</h4>
      {props.children}
    </div>
  );
};

export default CommonLayout;