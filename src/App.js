import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

class App extends React.Component {
  state = {
    userId: "",
    name: "Quest",
    signedIn: false,
  };

  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          clientId:
            "63459670158-f12t3a3sbrtfpj6uvp879vnfdsqg0ug7.apps.googleusercontent.com",
        })
        .then(() => {
          this.GoogleAuth = window.gapi.auth2.getAuthInstance(); //get the google auth instance
          this.GoogleAuth.isSignedIn.listen(this.onAuthChange); //setting up a listener which starts all soon our button get clicked
          this.setState({
            userId: this.GoogleAuth.currentUser.get().getId(),
            signedIn: this.GoogleAuth.isSignedIn.get(),
          });
        });
    });
  }

  unsubscribeFromAuth = null;

  onAuthChange = (isSignedIn) => {
    //if user sign in
    if (isSignedIn) {
      this.setState({
        userId: this.GoogleAuth.currentUser.get().getId(),
        name: this.GoogleAuth.currentUser.get().Qt.nW,
        signedIn: this.GoogleAuth.isSignedIn.get(),
      });
    } else {
      //if user signOuts
      this.setState({
        userId: "",
        name: "Quest",
        signedIn: this.GoogleAuth.isSignedIn.get(),
      });
    }
  };

  signIn = (event) => {
    event.preventDefault();
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
        <Header status={this.state.signedIn} signOut={this.signOut} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route
            path="/signin"
            render={() => <SignInAndSignUpPage signIn={this.signIn} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
