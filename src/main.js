import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './component/navbar'
import Shelf from './component/shelf'
import Library from './component/library'
import StoryForm from './component/story-form'
import Landing from './component/landing'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      library: [],
    }
    this.getApp = this.getApp.bind(this)
  }

  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  render(){
    let {app} = this.props
    return(
      <main>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path='/' component={ () => <Landing app={this.getApp()}/>} />
            <Route exact path='/library' component={ () => <Library app={this.getApp()}/>} library={app.state.library} />
            <Route exact path='/shelf' component={ () => <Shelf app={this.getApp()}/>} />
            <Route exact path='/new' component={ () => <StoryForm app={this.getApp()}/>} />
          </div>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
