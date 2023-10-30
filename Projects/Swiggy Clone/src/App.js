import React from 'react'
import ReactDom from 'react-dom/client'

import Navbar from './components/Navbar'

const Body = () => {
    return(
        <React.Fragment>
            <Navbar/>
        </React.Fragment>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<Body/>)