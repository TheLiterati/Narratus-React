import React from 'react'

import superagent from 'superagent'

const API_URL = 'http://localhost:3000'
const token = localStorage.getItem('token')

class StoryForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title : props.story ? props.story.title : '',
      description : props.story ? props.story.description : '',
      startSnippet : props.story ? props.story.startSnippet : '',
      genre : props.story ? props.story.genre : '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(story){
    let {name} = story.target
    this.setState({
      [name]: story.target.value,
    })
  }

  handleSubmit(story){
    story.preventDefault

    console.log('Title:', this.state.title)
    console.log('Description:', this.state.description)
    console.log('Start Snippet:', this.state.startSnippet)
    superagent.post(`${API_URL}/api/story`)
    .set({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    })
    .send(new FormData(document.getElementById('story-form')))
    .then((err, res) => console.log(res.data))
    .end((res, err) => res.json(err.message))
    this.handleSubmit(this.state)
  }

  render(){
    return(

      <form id='story-form'
        onSubmit={this.handleSubmit}>
        <input name='title' type='text' placeholder='Story Title' value={this.state.title} onChange={this.handleChange} />
        <input name='genre' type='radio' value='Science Fiction'/>SciFi
        <input name='genre' type='radio' value='Mystery'/>Mystery
        <input name='genre' type='radio' value='Romance'/>Romance<br/>
        <input name='genre' type='radio' value='Historical Fiction'/>Historical Fiction
        <input name='genre' type='radio' value='Fantasy'/>Fantasy
        <input name='genre' type='radio' value='Thriller'/>Thriller<br/>
        <input name='description' type='text' placeholder='Summary' value={this.state.description} onChange={this.handleChange} />
        <input name='startSnippet' type='text' placeholder='Once upon a time...' value={this.state.startSnippet} onChange={this.handleChange} />
        <button type='submit'>Publish</button>
      </form>
    )
  }

}

export default StoryForm
