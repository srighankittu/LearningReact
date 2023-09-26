import { useState } from "react";
import { LOGO_URL } from "../utils/common";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    // return (
    //     <div className = "header">
    //         <div className = "logo-container">
    //             <img className="logo" src = {LOGO_URL} />
    //         </div>
    //         <div className="nav-items">
    //             <ul>
    //                 <li>Home</li>
    //                 <li>Address</li>
    //                 <li>Contact Us</li>
    //                 <li>Cart</li>
    //                 <li>
                        // <button className="login-btn" onClick={() => {
                        //     if (btnName == "Login"){
                        //         setBtnName("Logout");
                        //     }
                        //     else{
                        //         setBtnName("Login");
                        //     }
                        // }}>{btnName}</button>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // );
    return (
        <header className="restaurant-header">
          <div className="logo">
            <img src={LOGO_URL} alt="Restaurant Logo" />
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Address</a></li>
              <li><a href="#">Cart</a></li>
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