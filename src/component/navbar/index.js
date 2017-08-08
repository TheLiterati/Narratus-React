import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <h1>Narratus</h1>
        <nav>
          <ul>
            <li><Link to='/library'>Library</Link></li>
            <li><Link to='/shelf'>My Shelf</Link></li>
            <li><Link to='/new'>Create Draft</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar
