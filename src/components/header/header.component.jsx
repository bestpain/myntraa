import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg"; //specail syntax for imgorting svg files
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.components";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCardDropDownVisibility } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, signOut, cartDropDownVisible }) => {
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
        {currentUser ? (
          <div className="option" onClick={signOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartDropDownVisible && <CartDropDown />}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   cartDropDownVisible:selectCardDropDownVisibility(state)
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropDownVisible: selectCardDropDownVisibility,
});

export default connect(mapStateToProps)(Header);
