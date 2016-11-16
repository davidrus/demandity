// modules/App.js
import * as React from 'react'
import { Nav, Link, INavLinkGroup } from 'office-ui-fabric-react';

interface IAppState {
  menu: [ INavLinkGroup ]
}

export class App extends React.Component<{}, IAppState> {

  constructor(props: any){
    super(props);

    const links = { links: [
      { name: 'Demands', url: '/demands'},
      { name: 'New Demand + ', url: '/new-demand'},
      { name: 'About', url: '/about'}
    ] };

    this.state = { 'menu': [ links ] };

  }

  render() {
    return (
      <div className="ms-Grid">
        <nav className="ms-Grid-row">
          <Link className="ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg2" href="/">Demandity</Link>
          <Nav groups={ this.state.menu} />
        </nav>

        <div className="container">
          <div className="starter-template">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}