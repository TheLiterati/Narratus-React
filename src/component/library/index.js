import React from 'react'
import superagent from 'superagent'

class Library extends React.Component {
  componentDidMount(){
    let {app} = this.props
    return superagent.get(`${__API_URL__}/api/story`)
    .type('application/json')
    .then(res => {
      sessionStorage.setItem('main-library', res.text)
      app.setState({ library: res.text })
      console.log('the library:', app.state.library)
    })
    .catch(err => console.log(err.message))
  }

  render() {
    let {app} = this.props
    return(
      <ul>
      {app.state.library.map((story, index) =>
        <li key={index}>
          <p>title: {story.title}</p>
          <p>startSnippet: {story.startSnippet}</p>
        </li>
      )}
      </ul>
    )
  }
}

export default Library
