import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import Dashboard from './Pages/UserDashboard/Dashboard'
import DashboardHome from './Pages/UserDashboard/DashboardHome'
import AllCourses from './Pages/UserDashboard/AllCourses'
import Profile from './Pages/UserDashboard/Profile'
import Messages from './Pages/UserDashboard/Messages'
import Settings from './Pages/UserDashboard/Settings'
import SideBar from './components/DashboardComponents/SideBar'


const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/" element={<DashboardHome />}>
    <Route >
      {/* <Route index element={<DashboardHome />} /> */}
      <Route index path="/" element={<DashboardHome />} />
      <Route path="/allCourses" element={<AllCourses />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
  )
)




function App() {
  return (
    <>
      <Dashboard router={router}/>
    </>
  )
}

export default App