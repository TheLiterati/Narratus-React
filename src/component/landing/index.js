import React from 'react'
import superagent from 'superagent'

const API_URL = 'http://localhost:3000'

class SignupForm extends React.Component{
  constructor(props){
    super(props)
    // this.state = {
    //   username: props.user ? props.user.username : '',
    //   password: props.user ? props.user.password : '',
    //   email: props.user ? props.user.email : '',
    // }

    this.state = {
      username: '',
      password: '',
      email: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange(story){
    let {name} = story.target
    this.setState({
      [name]: story.target.value,
    })
  }

  render(){
    return(
      <form id='signup-form'
      onSubmit={this.handleSubmit}>
        <input name='username' placeholder='Username' type='text' value={this.state.username} onChange={this.handleChange} />
        <input name='password' placeholder='Password' type='password' value={this.state.password} onChange={this.handleChange} />
        <input name='email' placeholder='Email Address' type='text' value={this.state.email} onChange={this.handleChange} />
        <button type='submit'>Sign Up</button>
      </form>
    )
  }
}

class SigninForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: props.user ? props.user.username : '',
      password: props.user ? props.user.password : '',
      email: props.user ? props.user.email : '',
    }
    // this.state = {
    //   username: '',
    //   password: '',
    //   email: '',
    // }
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handlechange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange(story){
    let {name} = story.target
    this.setState({
      [name]: story.target.value,
    })
  }

  render() {
    return (
      <form id='signin-form'
      onSubmit={this.handleSubmit}>
        <input name='username' placeholder='Username' type='text' value={this.state.username} onChange={this.handleChange} />
        <input name='password' placeholder='Password' type='password' value={this.state.password} onChange={this.handleChange} />
        <button type='submit'>Sign In</button>
      </form>
    )
  }
}

class Landing extends React.Component {
  render() {
    return (
      <div>
        <SignupForm />
        <SigninForm />
      </div>
    )
  }
}

export default Landing
