
import * as React from 'react'
import { App } from './containers/App'
import { About } from './containers/About'
import { Demands } from './containers/Demands'
import { NewDemands } from './containers/NewDemand'
import { Router, Route } from 'office-ui-fabric-react/lib/utilities/router';

export const AppRouter = React.createClass({

  render() {
    return(
      <Router replaceState>
        <Route key="/" component={ App }>
          <Route key="/demands" component={ Demands }/>
          <Route key="/new-demand" component={ NewDemands }/>
          <Route key="/about" component={ About }/>
        </Route>
      </Router>
    )
  }

});
