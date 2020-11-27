import React from 'react'
import { auth, addUserToDatabase } from '../../firebase/firebase.utils'

import CustomButton from '../custom-button/customButton-component'
import CustomInput from '../customInput/custom-input-component'

import './signUp-styles.scss'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await addUserToDatabase(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <h3 className="title">New to Our Shop?</h3>
        <span>create your account</span>

        <form action="#" onSubmit={this.handleSubmit}>
          <CustomInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            placeholder="User Name"
            required
          />
          <CustomInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            placeholder="Email"
            required
          />
          <CustomInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            placeholder="Password"
            required
          />
          <CustomInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            placeholder="Confirm Password"
            required
          />
          <CustomInput type name />
          <CustomButton type="submit" children="SIGN UP" />
        </form>
      </div>
    )
  }
}

export default SignUpForm
