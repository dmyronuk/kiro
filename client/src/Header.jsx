import React from "react";
import { Link } from "react-router-dom";
import hamburger from "./icons/hamburger.png";

function Header(props){
  return (
    <header className="header-top">
      <button alt="Sidebar Toggle Button" className="toggle-nav" onClick={props.hamburgerClickHandler}>
        <img src={hamburger}/>
      </button>
      {props.user &&
        <div>
          Signed in as: {props.user.email}
        </div>
      }
      <Link to={"/"}>
        <h1 className="App-title">Title</h1>
      </Link>
        <div className="login-container">
          { !props.user &&
            <div>
              <Link to={"/login"}>
                <button className="default-auth-button">Login</button>
              </Link>
              <Link to={"/signup"}>
                <button className="default-auth-button">Signup</button>
              </Link>
            </div>
          }
          { props.user &&
            <Link to={"/logout"}>
              <button className="default-auth-button">Logout</button>
            </Link>
          }
        </div>
    </header>
  )
}

export default Header