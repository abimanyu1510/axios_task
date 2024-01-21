import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
export const API_URL='https://65a7774394c2c5762da6b7a9.mockapi.io/axios'
function App() {
  const router=createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router} />
  
  </>
}

export default App