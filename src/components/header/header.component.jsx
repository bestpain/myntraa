import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg"; //specail syntax for imgorting svg files
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.components'
import { connect } from 'react-redux';

const Header = ({ currentUser ,signOut,cartDropDownVisible }) => {
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
        {currentUser  ? (
          <div className="option" onClick={signOut}>SIGN OUT</div>
        ) : (
          <Link className="option" to="/signin">SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {cartDropDownVisible && <CartDropDown/>}
    </div>
  );
};

const mapStateToProps = ({user:{currentUser},cart:{cartDropDownVisible}}) => ({
  currentUser: currentUser,
  cartDropDownVisible:cartDropDownVisible
});

export default connect(mapStateToProps)(Header);