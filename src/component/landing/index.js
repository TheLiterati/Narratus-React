import React from 'react'
import superagent from 'superagent'

const API_URL = 'http://localhost:3000'

class SignupForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
      email: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('Submitted User:', this.state)
    superagent.post(`${__API_URL__}/api/signup`)
    .type('application/json')
    .send(this.state)
    .then(res => {
      sessionStorage.setItem('token', res.text)
      console.log('Successful Signup:', res.text)
    })
    .catch(err => console.log(err.message))
  }

  handleChange(story){
    let {name} = story.target
    this.setState({
      [name]: story.target.value,
    })
  }

  // componentDidMount(){
  //   try{
  //     let hasToken = JSON.parse(localStorage.token)
  //     this.setState({hasToken})
  //   }catch{
  //     superagent.get()
  //   }
  // }

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
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.username,':', this.state.password)
    superagent.get(`${__API_URL__}/api/signin`)
    .type('application/json')
    .auth(this.state.username, this.state.password)
    .send(this.state)
    .then(res => {
      sessionStorage.setItem('token', res.text)
      console.log('Successful login:', res.text)
    })
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
