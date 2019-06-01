import React, { Component } from 'react';

class BattingRecord extends Component {
  
  render() {
    return (
      <tr>
        <th>{this.props.matchtype}</th>
        <td>{this.props.bat.Mat}</td>
        <td>{this.props.bat.Inns}</td>
        <td>{this.props.bat.NO}</td>
        <td>{this.props.bat.Ave}</td>
        <td>{this.props.bat.Runs}</td>
        <td>{this.props.bat.St}</td>
        <td>{this.props.bat["50"]}</td>
        <td>{this.props.bat["100"]}</td>
        <td>{this.props.bat["6s"]}</td>
        <td>{this.props.bat["4s"]}</td>
        <td>{this.props.bat["HS"]}</td> 
      </tr>
    );
  }
}

export default BattingRecord;