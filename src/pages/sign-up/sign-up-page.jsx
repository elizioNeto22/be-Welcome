import React from 'react'
import {auth, addUserToDatabase} from '../../firebase/firebase.utils'
import {Link} from 'react-router-dom'

import CustomButton from '../../components/custom-button/customButton-component'
import CustomInput from '../../components/customInput/custom-input-component'

import './sign-up-page-styles.scss'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state
    if(password !== confirmPassword) {
      alert("Passwords don't match") 
      return
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await addUserToDatabase(user, {displayName})
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch(error) {
      console.error(error)
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state
    return(
      <div className="sign-up">
        <h3 className="title">New to Our Shop?</h3>
        <span>create your account</span>

        <form action="#" onSubmit={this.handleSubmit}>
          <CustomInput 
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="username"
            required
          />
          <CustomInput 
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <CustomInput 
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <CustomInput 
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="confirm password"
            required
          />
          <CustomButton className="custom-button" type="submit" children="SIGN UP" />
        </form>
        <h5>If you already have an account,<br/>
          <Link to='/signin'>Sing in here.</Link>
        </h5>
      </div>
    )
  }
}

export default SignUpForm