import React, { Component } from 'react';

class BowlingRecord extends Component {
  
  render() {
    return (
      <tr>
        <th>{this.props.matchtype}</th>
        <td>{this.props.bowl.Mat}</td>
        <td>{this.props.bowl.Inns}</td>
        <td>{this.props.bowl.Econ}</td>
        <td>{this.props.bowl.Ave}</td>
        <td>{this.props.bowl.BBM}</td>
        <td>{this.props.bowl.BBI}</td>
        <td>{this.props.bowl.Wkts}</td>
        <td>{this.props.bowl["10"]}</td>
        <td>{this.props.bowl["5w"]}</td>
        <td>{this.props.bowl["4w"]}</td>
      </tr>
    );
  }
}

export default BowlingRecord;