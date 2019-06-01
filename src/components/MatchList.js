import React, { Component } from 'react';

class MatchList extends Component { 

  constructor(props){
    super(props);
    this.state = {
      cache:'',
      matches:[]
    }

    this.getMatches = this.getMatches.bind(this);
  }

  getMatches(){
    let matchesURL = `${this.props.API}/matches?apikey=${this.props.APIkey}`;
    fetch(matchesURL)
      .then((result) => result.json())
      .then((data) => {
        this.setState({  
          cache: data.cache,
          matches: data.matches
        })
      })
      .catch((error) =>  console.log('Error in Fetching data'))
  }

  componentWillMount(){
    this.getMatches();
  }

  getFormattedDate(matchdate) {
    var date = new Date(matchdate);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    return day + "/" + month + "/" + year;
  }

  render() {
    console.log(this.state.matches);

    return(
      <div className="grid-x grid-padding-x">
        <div className="cell medium-12 large-12">
          <h1>Match Lists</h1>
        </div>
        <div className="cell medium-12 large-12">
          <table>
            <thead>
              <tr>
                <th width="200">Date</th>
                <th>Team 1</th>
                <th width="150">Team 2</th>
                <th width="150">Type</th>
                <th>Match Started</th>
                <th>Toss Win by</th>
                <th>Winner Team</th>
              </tr>
            </thead>
            <tbody>
              {this.state.matches.map(match =>
                <tr key={match.unique_id}>
                  <td>{this.getFormattedDate(match.date)}</td>
                  <td>{match["team-1"]}</td>
                  <td>{match["team-2"]}</td>
                  <td>{match.type}</td>
                  <td>{match.matchStarted}</td>
                  <td>{match.toss_winner_team}</td>
                  <td>{match.winner_team}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default MatchList;
