import { Outlet } from "react-router-dom";
import Navigation from "../navigation";

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Root;
