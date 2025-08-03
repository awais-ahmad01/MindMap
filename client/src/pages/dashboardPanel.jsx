
import { Outlet } from "react-router-dom";

import Header from '../components/dashboard/header';

import Footer from '../components/home/footer';

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { useSelector } from "react-redux";

const DashboardPanel = () => {

  // const navigate = useNavigate();

  // const {isAuthenticated} = useSelector(state => state.auth);

  // useEffect(()=>{
  //   if(!isAuthenticated){
  //     navigate('/login')
  //   }
  // }, [isAuthenticated, navigate])


  return (
    <div className='bg-gray-50 min-h-screen'>

        <Header />

        <div>
            <Outlet />
        </div>

        <Footer />
      
    </div>
  );
}

export default DashboardPanel;