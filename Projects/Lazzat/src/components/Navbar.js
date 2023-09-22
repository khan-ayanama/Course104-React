import { useState, useEffect } from "react";
import logo from "../images/swiggy-logo.webp";

const searchInput = () => {
  return <h1>Hello</h1>;
};

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-items">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </div>
        <div className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">About</a>
          </li>
          <li>
            <a href="#home">Offers</a>
          </li>
          <li>
            <a href="#home">contact</a>
          </li>
          <li>
            <a href="#home">Sign In</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
