
import * as React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { App } from './containers/App'
import { About } from './containers/About'
import { Demands } from './containers/Demands'
import { NewDemands } from './containers/NewDemand'

export const AppRouter = React.createClass({

  render() {
    return(
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <Route path="/demands" component={ Demands }/>
          <Route path="/new-demand" component={ NewDemands }/>
          <Route path="/about" component={ About }/>
        </Route>
      </Router>
    )
  }

});
