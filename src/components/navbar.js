import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'


const menuItems = [
  { name: "Home", href: "/", description: "Home",},
  { name: "Create Account",  href: "/createaccount", description: "Create Account",},
  { name: "Deposit", href: "/deposit", description: "Deposit", },
  { name: "Withdraw", href: "/withdraw", description: "Withdraw" , },
  { name: "All Data", href: "/alldata", description: "All data", },
];

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
            >
              
        <div className="container-fluid ms-5">
          <NavLink to="/" className="navbar-brand fs-1 fw-bold logo">
          
            <span className="logocolor">B</span>ad<span className="logocolor2">B</span>ank 
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
           
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNav"
          >
            <div className="navbar-nav nav-pills">
              {menuItems.map((item, index) => (
              
                  <NavLink
                    key={index}
                    id={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                      ? "nav-link fs-6 mx-3 active"
                      : "nav-link fs-6 mx-3"
                    }
                  >
                    {item.name}
                  </NavLink>
                
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
