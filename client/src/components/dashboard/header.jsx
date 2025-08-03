import { Link } from "react-router-dom";

import DashboardDrawer from "./dashboardDrawer";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/actions/auth";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signOutUser = ()=>{
    dispatch(signOut())
    // .unwrap()
    // .then(()=>{
    //   navigate('/login');
    // })
  }


  return (
    <nav className="bg-indigo-600 py-8 px-10">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">MindMap</h1>
        <div className="lg:block hidden">
          <ul className="flex space-x-12">
            <li>
              <Link
                to="/dashboardPanel"
                className="text-white hover:text-indigo-200 font-medium"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="newJournal"
                className="text-white hover:text-indigo-200 font-medium"
              >
                Journal
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-white hover:text-indigo-200 font-medium"
              >
                Profile
              </Link>
            </li>
            <li>
              <button 
                 className="text-white hover:text-indigo-200 font-medium"
              onClick={signOutUser}>
                Logout
              </button>
                
              
            </li>
          </ul>
        </div>

        <div className="lg:hidden block">
          <DashboardDrawer />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
