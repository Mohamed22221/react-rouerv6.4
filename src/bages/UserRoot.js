import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const UserRoot = () => {
  return (
    <div className="wrapper2">
      <Nav />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserRoot;
