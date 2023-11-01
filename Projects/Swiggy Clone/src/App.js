import React from 'react'
import ReactDom from 'react-dom/client'

import Navbar from './components/Navbar'
import Body from './components/Body'
import SearchBar from './components/SearchBar'

const App = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <SearchBar/>
        </React.Fragment>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<App/>)