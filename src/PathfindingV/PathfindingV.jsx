import React,{component} from "react";
import Node from './Node/Node';
import './PathfindingV.css';
export default class PathfindingV extends component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
        };
}
componentDisMount() {
    const nodes = [];
    for (let row =0;row<15 ;row++){
    const currentRow = [];
    for (let col = 0; col <50; col++){
        currentRow.push([]);
    }
    nodes.push(currentRow);
}
    this.setState({nodes});
}
render() {
    const {nodes} =this.state;
    console.log(nodes);
    return(
        <div>
          {nodes.map((row, rowIdx)=> {
            return <div>
                {row.map((node, nodeIdx) => <Node></Node>)}
            </div>
          })}
          </div>     
    );
}
}