import * as React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router';
import { About } from './About';
import { Demands } from './Demands';

export const App = React.createClass({

  render() {

    return (
      <Router history={browserHistory}>
        <Route path="/">
          <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
            <a className="navbar-brand" href="#">Demandity</a>
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/demands">Demands</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Route path="#/demands" component={Demands}/>
          <Route path="#/about" component={About}/>
          <Route path="*" component={About}/>
        </Route>

      </Router>



    )
  }

});

