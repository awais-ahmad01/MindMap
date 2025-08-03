import { Link } from "react-router-dom";

import DrawerContent from "./drawer";

const NavBar = () => {
  return (
    <nav className="bg-indigo-600 py-8 px-10">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">MindMap</h1>
        <div className="lg:block hidden">
          <ul className="flex space-x-12">
            <li>
              <Link
                to="/"
                className="text-white hover:text-indigo-200 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-white hover:text-indigo-200 font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="login"
                className="text-white hover:text-indigo-200 font-medium"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="register"
                className="text-white hover:text-indigo-200 font-medium"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:hidden block">
          <DrawerContent />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
