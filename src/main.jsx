import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import {Home, About, Contact, User, Github, githubinfolaoder, PrivacyPolicy, TermsAndConditions} from './components'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/> , 
//     children: [
//       {
//         path:"",
//         element: <Home/> 
//       }, 
//       {
//         path:"about",
//         element:<About/> 
//       },
//       {
//         path:"contact",
//         element:<Contact/> 
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route loader={githubinfolaoder} path='github' element={<Github/>} />
      <Route path='privacypolicy' element={<PrivacyPolicy/> }/> 
      <Route path='termsandconditions' element={<TermsAndConditions/>} />
    </Route> 

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router } />
  </StrictMode>,
)
