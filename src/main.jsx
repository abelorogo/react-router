import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import Settings from './components/settings.jsx';
import UserProfile from './components/userProfile.jsx';
//import ErrorMsg from './components/error.jsx';
import Users from './components/user.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement:<div><h1>404 page not found</h1></div>
  },
  {
    path: '/profile/:profileId',
    element: <Profile/>,
    errorElement:<div><h1>404 page not found</h1></div>
  
  },
  {
    path: '/profile',
    element: <Profile/>,
    errorElement:<div><h1>404 page not found</h1></div>
  
  },
  {
    path: '/settings/:settingsId',
    element: <Settings/>
    
  },
  {
    path: '/settings',
    element: <Settings/>
    
  },
  {
    path: '/users',
    element: <Users/>
    
  },
  {
    path: '/userProfile',
    element: <UserProfile/>
    
  },
  {
    path: '/home',
    element: <Home/>,
    errorElement:<div><h1>404 page not found</h1></div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
