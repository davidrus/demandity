// modules/App.js
import * as React from 'react'
import { Link } from 'react-router'

export const App = React.createClass( {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-inverse">
          <Link className="navbar-brand" to="/" onlyActiveOnIndex activeClassName="active">Demandity</Link>
          <ul className="nav navbar-nav">
            <li><Link to="/demands" activeClassName="active">Demands</Link></li>
            <li><Link to="/new-demand" activeClassName="active">New demand +</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
          </ul>
        </nav>

        <div className="container">
          <div className="starter-template">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
} )