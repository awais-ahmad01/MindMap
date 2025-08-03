import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

function DrawerContent() {
  const [opened, { open, close }] = useDisclosure(false);

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
            to="/" 
            className="text-white hover:text-indigo-200 font-medium text-lg py-2"
            onClick={close}
          >
            Home
          </Link>
          <Link 
            href="" 
            className="text-white hover:text-indigo-200 font-medium text-lg py-2 "
            onClick={close}
          >
            About
          </Link>
          <Link 
            href="/login" 
            className="text-white hover:text-indigo-200 font-medium text-lg py-2"
            onClick={close}
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className="text-white hover:text-indigo-200 font-medium text-lg py-2 "
            onClick={close}
          >
            Register
          </Link>
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

export default DrawerContent;