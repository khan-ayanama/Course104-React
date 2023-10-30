import logo from '../images/swiggy-logo.webp'
import SearchBar from './SearchBar';


const Navbar = () => {
    return(
        <header>
             <div className="nav-bar container">
                <div className='logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <SearchBar/>
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