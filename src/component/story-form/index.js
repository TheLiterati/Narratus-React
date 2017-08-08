import React from 'react'

class StoryForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title : props.story ? props.story.title : '',
      description : props.story ? props.story.description : '',
      startSnippet : props.story ? props.story.startSnippet : '',
    }

  }

  render(){
    return(
      <form className='story-form'
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
