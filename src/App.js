import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { setCurrentUser, clearCurrentUser } from "./redux/user/user.actions";
import CheckOut from "./pages/checkout/checkout.component";

class App extends React.Component {
  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          clientId:
            "63459670158-f12t3a3sbrtfpj6uvp879vnfdsqg0ug7.apps.googleusercontent.com",
        })
        .then(() => {
          this.GoogleAuth = window.gapi.auth2.getAuthInstance(); //get the google auth instance
          this.onAuthChange(this.GoogleAuth.isSignedIn.get()); //stores the current signed in user to state or store
          this.GoogleAuth.isSignedIn.listen(this.onAuthChange); //setting up a listener which starts all soon our button get clicked
        });
    });
  }

  unsubscribeFromAuth = null;

  onAuthChange = (isSignedIn) => {
    //if user sign in
    if (isSignedIn) {
      //dispatch action to store google user to store
      this.props.setCurrentUser(this.GoogleAuth.currentUser.get().getId());
    } else {
      //if user signOuts clear the store auth reducer
      this.props.clearCurrentUser();
    }
  };

  signIn = () => {
    this.GoogleAuth.signIn();
  };

  signOut = () => {
    this.GoogleAuth.signOut();
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth(); //remove google auth listerner to save memory leak
  }
  render() {
    return (
      <div>
        <Header signOut={this.signOut} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route
            path="/signin"
            render={() =>
              this.props.user ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage signIn={this.signIn} />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  clearCurrentUser: () => dispatch(clearCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
