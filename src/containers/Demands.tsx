import * as React from 'react'

export class Demands extends React.Component<{},{}> {


  render() {

    const demands = [
      {
        name:'one',
        description:'desc'
      },
      {
        name:'two',
        description:'desc'
      }

    ];
    var demandItems = demands.map((demand, index) => {
      return (
        <li key={index}>{demand.name}</li>
      );
    }, this);


    return (
      <div>
        <h1>Demands</h1>

        <ul>
          {demandItems}
        </ul>
      </div>
    )
  }

}
