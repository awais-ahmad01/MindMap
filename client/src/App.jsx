
import './App.css'

import { useDispatch, useSelector } from 'react-redux'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/home'

import Register from './pages/register'

import Login from './pages/login'

import Dashboard from './pages/dashboard'

import DashboardPage from './pages/dashboardPage'

import NewJournal from './pages/newJournal'

import DashboardPanel from './pages/dashboardPanel'

import { useEffect } from 'react'

import { verifyToken } from './store/actions/auth'

import PrivateRoute from './components/privateRoute'

import { Loader } from '@mantine/core'

import AllJournalEntries from './pages/allJournalEntries'

import VerifyEmail from './pages/verifyEmail';

import GoogleSuccess from './pages/googleSuccess'


function App() {

  const dispatch = useDispatch();

  const {isloading} = useSelector(state => state.auth);

  

  useEffect(()=>{
    dispatch(verifyToken());
  }, [dispatch]);

  console.log('isloa:', isloading)


  if(isloading){
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader/>
      </div>
    )
  }
 


  return (
    <>
      <div>

        <Router>
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            
            <Route path="/register" element={<Register />} />

            <Route path='/verify-email' element={<VerifyEmail/>} />

            <Route path="/google-success" element={<GoogleSuccess />} />



           <Route element={<PrivateRoute/>}>
              <Route path="/dashboardPanel" element={<DashboardPanel />}>
              <Route index element={<Dashboard />} />  
              <Route path="newJournal" element={<NewJournal />} />  
              <Route path="allJournalEntries" element={<AllJournalEntries />} />  
            </Route>
           </Route>

           
            
            <Route path="/dashboardPage" element={<DashboardPage />} />

           
          </Routes>
       
        </Router> 
       </div>
    </>
  )
}

export default App
