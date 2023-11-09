import logo from '../images/swiggy-logo.webp'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return(
        <header>
             <div className="nav-bar container">
                <div className='logo'>
                    <Link to='/'><img src={logo} alt="logo"/></Link>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li>
                            <Link to="/offers">Offers</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
        </div>
        </header>
    )
       
}

export default Navbar;