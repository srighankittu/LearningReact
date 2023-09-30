import { useState } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom"; // will reload only the required components and not the entire page

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
        <header className="restaurant-header">
          <div className="logo">
            <img src={LOGO_URL} alt="Restaurant Logo" />
          </div>
          <nav className="navigation">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="#">Cart</Link></li>
              <li>
              <button className="login-btn" onClick={() => {
                            if (btnName == "Login"){
                                setBtnName("Logout");
                            }
                            else{
                                setBtnName("Login");
                            }
                        }}>{btnName}</button>
              </li>
            </ul>
          </nav>
        </header>
      );
}


export default Header;