import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="w-screen h-screen relative">
      <Navbar></Navbar>
      <div className="md:pl-[250px] pl-[20px] w-full h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
