import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg"; //specail syntax for imgorting svg files

const Header = ({ status,signOut }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <Link className="option" to="/checkout">
          CHECKOUT
        </Link>
        {status ? (
          <div className="option" onClick={signOut}>SIGN OUT</div>
        ) : (
          <Link className="option" to="/signin">SIGN IN</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
