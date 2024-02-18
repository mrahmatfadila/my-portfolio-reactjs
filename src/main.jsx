import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/home'
import AboutPage from './Pages/about'
import SkillPage from './Pages/skill'
import WorkPage from './Pages/work'
import ContactPage from './Pages/contact'
import DetailWork from './Pages/detailWork'
import { ThemeProvider } from '@material-tailwind/react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path: '/mywork',
    element: <WorkPage/>
  },
  {
    path: '/myskill',
    element: <SkillPage/>
  },
  {
    path: '/contact',
    element: <ContactPage/>
  },
  {
    path: '/detailWork',
    element: <DetailWork/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>,
)
