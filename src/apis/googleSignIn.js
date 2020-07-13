let GoogleAuth;
// // function init(event) {
// //     // gapi.load("auth2", function () {
// //     //   /* Ready. Make a call to gapi.auth2.init or some other API */
// //     //   gapi.auth2.init({ client_id: "63459670158-f12t3a3sbrtfpj6uvp879vnfdsqg0ug7.apps.googleusercontent.com" });
// //     //   console.log(gapi.auth2.getAuthInstance().isSignedIn.get())
// //     // });
// //     window.gapi.load('auth2',()=>{
// //         window.gapi.auth2.init({
// //             clientId:'63459670158-f12t3a3sbrtfpj6uvp879vnfdsqg0ug7.apps.googleusercontent.com',
// //         }).then(()=>{
// //             GoogleAuth=window.gapi.auth2.getAuthInstance();
// //             onAuthChange(GoogleAuth.isSignedIn.get())
// //             GoogleAuth.isSignedIn.listen(onAuthChange); //setting up a listener which starts all soon our button get clicked
// //             GoogleAuth.signOut();
// //         })
// //     })
// //   }

// //set up a function which will unsuscrbibe from listener set on googleauth ...this saves memory leak
// const unsuscribeFromAuth = null;
// //on component unmount we will remove listener
// function componentDidUnmount() {
//   unsuscribeFromAuth();
// }

// const onAuthChange = (isSignedIn) => {
//   if (isSignedIn) {
//     //add the userid to redux
//     //this.props.signIn(this.GoogleAuth.currentUser.get().getId());
//     console.log(GoogleAuth);
//   } else {
//     //remove the userId from state
//     //this.props.signOut();
//     GoogleAuth.signIn();
//     console.log(isSignedIn);
//   }
// };

export const signInPopUp = (event) => {
  event.preventDefault();
  
};

export function getAuthStatus(){
  return GoogleAuth.currentUser.get().Qt.nW;
}

function onAuthChange(){
  return GoogleAuth
    console.log(GoogleAuth)
}

//this method runs on our app start
//it loads the google auth objects
export function init() {
  return window.gapi.load("auth2", () => {
    window.gapi.auth2
      .init({
        clientId:
          "63459670158-f12t3a3sbrtfpj6uvp879vnfdsqg0ug7.apps.googleusercontent.com",
      })
      .then(() => {
        GoogleAuth = window.gapi.auth2.getAuthInstance(); //get the google auth instance
        GoogleAuth.isSignedIn.listen(onAuthChange); //setting up a listener which starts all soon our button get clicked
      });
  });

}
