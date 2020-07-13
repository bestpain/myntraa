import React from 'react';

import SignIn from '../../components/sing-in/sign-in.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = (props) => {
  return (<div className='sign-in-and-sign-up'>
    <SignIn signIn={props.signIn}/>
  </div>)
};

export default SignInAndSignUpPage;