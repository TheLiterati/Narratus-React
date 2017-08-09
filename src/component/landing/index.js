import React from 'react'
import superagent from 'superagent'

const API_URL = 'http://localhost:3000'

class SignupForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: props.user ? props.user.username : '',
      password: props.user ? props.user.password : '',
      email: props.user ? props.user.email : '',
    }
  }

  render(){
    return(      
      <form id='signup-form'
      onSubmit={this.handleSubmit}>
      <input name='username' type='text' value={this.state.username} onChange={this.handleChange} />
      <input name='password' type='password' value={this.state.password} onChange={this.handleChange} />
      <input name='email' type='text' value={this.state.email} onChange={this.handleChange} />
      <button type='submit'>sign up</button>
      </form>
    )
  }
}

// class SigninForm extends React.Component {
//
// }
//
// class Landing extends React.Component {
//
// }

export default SignupForm
