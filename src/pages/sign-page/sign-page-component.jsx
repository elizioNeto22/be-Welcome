import React from 'react'

import SignInForm from '../../components/signIn/signIn-component'
import SignUpForm from '../../components/signUp/signUp-component'

import './sign-page-styles.scss'

const SignPage = () => (
  <div className="sign-page-container">
    <SignInForm />
    <SignUpForm />
  </div>
)

export default SignPage 