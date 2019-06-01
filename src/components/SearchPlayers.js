import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SearchPlayers extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchResult: []
    }

    this.getPlayers = this.getPlayers.bind(this)
  }

  getPlayers(){
    let searchURL = `http://cricapi.com/api/playerFinder?name=${this.props.match.params.name}&apikey=BMqGnI7UdYRMbtEm5voIY6c9QEd2`;
    fetch(searchURL)
      .then((result) => result.json())
      .then((players) => {
        this.setState({
          searchResult: players.data 
        });
      })
      .catch((error) =>  console.log('Error in Fetching data'))
  }

  componentDidMount(){
    this.getPlayers();
  }
 
  render(){
    return(
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell medium-12 large-12">
            <h1>Player Search </h1>
          </div>
          <div className="cell small-12">
            <table>
              <thead>
                <tr>
                  <th>Players</th>
                </tr>
              </thead>
              <tbody>     
                {this.state.searchResult.map((player,i) =>
                  <tr key={i}>
                    <td key={player.pid}><Link to={"/player_stat/"+player.pid}>{player.name}</Link></td>
                  </tr>
                )} 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPlayers;
