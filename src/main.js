import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './component/navbar'
import Shelf from './component/shelf'
import Library from './component/library'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <main>
        <BrowserRouter>
          <div>
            <h1> Here comes the sass. </h1>
            <Navbar />
            <Route exact path='/library' component={Library} />
            <Route exact path='/shelf' component={Shelf} />
          </div>
        </BrowserRouter>
      </main>

    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
