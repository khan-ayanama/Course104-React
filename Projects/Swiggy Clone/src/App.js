import React, { Suspense, lazy } from 'react'
import ReactDom from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Body from './components/Body'
import Footer from './Footer'
// import Offers from './components/Offers'
import RestaurantMenu from './components/RestaurantMenu'
import isOnline from './utils/useIsOnline'
import Offline from './components/Offline'

const Offers = lazy(()=>import('./components/Offers'))

const AppLayout = () => {
    return(
        <React.Fragment>
            <Navbar/>
            {!isOnline()?<Offline/>:null}
            <Outlet/>
            <Footer/>
        </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/offers',
                element:(
                    <Suspense>
                        <Offers/>
                    </Suspense>
                )
            },
            {
                path:'/restaurants/:id',
                element:<RestaurantMenu/>
            }
        ]
    } 
])

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)