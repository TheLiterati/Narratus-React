import React from 'react'
import superagent from 'superagent'

class Library extends React.Component {

  componentDidMount(){
    // superagent.get(`${}`)
  }

  render() {
    return(
      <p>The sass has arrived in the library component</p>
    )
  }
}

export default Library
