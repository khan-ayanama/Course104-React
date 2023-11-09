import brand_logo from "/images/brand_logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="container">
        <div className="nav-logo">
          <img src={brand_logo} alt="brand-logo" />
        </div>
        <ul>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button>LOGIN</button>
      </nav>
    </>
  );
};

export default Navbar;
