import logo from '../images/swiggy-logo.webp'


const Navbar = () => {
    return(
        <header>
             <div className="nav-bar container">
                <div className='logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li>Offers</li>
                        <li>About</li>
                        <li>Login</li>
                    </ul>
                </div>
        </div>
        </header>
    )
       
}

export default Navbar;