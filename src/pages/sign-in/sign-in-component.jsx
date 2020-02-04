import React from 'react'

import CustomInput from '../../components/customInput/custom-input-component'
import CustomButton from '../../components/custom-button/customButton-component'
import {signInWithGoogle} from '../../firebase/firebase.utils'
import {Link} from 'react-router-dom'

import './sign-in-styles.scss'

class SignInForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({username: '', password: ''})
  }

  handleChange = (e) => {
    const {name,value} = e.target
    this.setState({[name]: value})
  }

  render(){
    return(
      <div className="sign-in">
        <h3>
          Already have an account?</h3>
          <span>Please Sign in</span>
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

          <div className="buttons">
            <CustomButton  type="submit">LOG IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
        <h5>Need to create an account?<br/>
          <Link to='/signup'>Sign up here.</Link>
        </h5>
      </div>
    )
  }
}


export default SignInForm



