import * as React from 'react'
import { DocumentCard, DocumentCardPreview, DocumentCardTitle, DocumentCardActivity } from 'office-ui-fabric-react/lib/DocumentCard';


interface IDemandProps {
}

interface IDemandState {
  demands: [Demand]
}

type Demand = {
  name: string,
  description: string
}

export class Demands extends React.Component<IDemandProps,IDemandState> {

  state: IDemandState = {
    demands: null
  };

  constructor( props: any ) {

    super(props);

    this.state.demands = [
      {
        name: 'one',
        description: 'desc'
      },
      {
        name: 'two',
        description: 'desc'
      }

    ];

  }

  render() {

    var demandItems = this.state.demands.map( ( demand, index ) => {
      return (
        <DocumentCard key={index}>
          <h4>{demand.name}</h4>
          <p className="card-text">{demand.description}</p>
        </DocumentCard>
      );
    }, this );


    return (
      <div className="album text-muted">
        <div className="container">
          <div className="row">
            <div className="card">
              {demandItems}
            </div>
          </div>
        </div>
      </div>
    )
  }

}
