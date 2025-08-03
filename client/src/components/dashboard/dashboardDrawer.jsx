import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { signOut } from "../../store/actions/auth";


function DashboardDrawer() {
  const [opened, { open, close }] = useDisclosure(false);


  const dispatch = useDispatch();


  const signOutUser = ()=>{
    dispatch(signOut())
    
  }

  return (
    <>
      <Drawer
        position="right"
        size="xs"
        opened={opened}
        onClose={close}
        overlayProps={{ opacity: 0.5, blur: 4 }}
        styles={{
          content: {
            backgroundColor: '#4f46e5', 
          },
          header: {
            backgroundColor: '#4f46e5',
          },
        }}
        closeButtonProps={{
          icon: <ImCross size={16} className="text-white" />,
        }}
      >
        <div className="flex flex-col space-y-6 p-4">
         
          <Link 
            to='dashboard'
            className="text-white hover:text-indigo-200 font-medium text-lg py-2"
            onClick={close}
          >
            Home
          </Link>
          <Link 
            to="newJournal" 
            className="text-white hover:text-indigo-200 font-medium text-lg py-2 "
            onClick={close}
          >
            Journal
          </Link>
          <Link
            href="" 
            className="text-white hover:text-indigo-200 font-medium text-lg py-2"
            onClick={close}
          >
            Profile
          </Link>
           <li>
              <button 
                 className="text-white hover:text-indigo-200 font-medium"
              onClick={signOutUser}>
                Logout
              </button>
                
              
            </li>
        </div>
      </Drawer>

      <button 
        onClick={open}
        className="text-white hover:text-indigo-200"
       
      >
        <GiHamburgerMenu size={24} />
      </button>
    </>
  );
}

export default DashboardDrawer;