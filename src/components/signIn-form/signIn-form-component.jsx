import React from 'react'

import CustomInput from '../customInput/custom-input-component'
import CustomButton from '../custom-button/customButton-component'
import {signInWithGoogle} from '../../firebase/firebase.utils' 
import {auth} from '../../firebase/firebase.utils'

import './signIn-form-styles.scss'

class SignInForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      remember: true,
      isLogged: '',
      userInfo: {
        displayName: '',
        email: '',
        emailVerified: '',
        userToken: ''
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({username: '', password: ''})
  }

  handleChange = (e) => {
    const {name,value, type, checked} = e.target
    type === 'checkbox' ? this.setState({remember: checked})
    : this.setState({[name]: value})
  }

  // handleSignIn = () => {
  //   signInWithGoogle().then((result) => {
  //     const token = result.credential.accessToken
  //     const user = result.user
  //     this.setState(() => {
  //       return user.J ? {userInfo: {displayName: user.displayName, email: user.email, userToken: token}}
  //       : console.log('eroooou') 
  //     })
  //     console.log(this.state.userInfo)
  //   })
  // }

  render(){
    return(
      <div className="sign-in">
        <h3>
          Already have an account?
          <br/>
          Please Sign in
        </h3>

        <form action="#" onSubmit={this.handleSubmit}>
          <CustomInput
            className="input-username"
            name="username"
            type="text"
            value={this.state.username}
            placeholder="username "
            required
            handleChange={this.handleChange}
          />

          <CustomInput
            className="input-password"
            name="password"
            type="password"
            value={this.state.password}
            placeholder="password"
            required
            handleChange={this.handleChange}
          />

          <CustomInput 
            name="remember"
            type="checkbox"
            value={this.state.remember}
            handleChange={this.handleChange}
          />
          <CustomButton className="login" type="submit">LOG IN</CustomButton>
          <CustomButton className="login" onClick={signInWithGoogle} >Sign in with Google</CustomButton>
        </form>
      </div>
    )
  }
}


export default SignInForm



