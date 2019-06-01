import React, { Component } from 'react'
import BattingRecord from './BattingRecord'
import BowlingRecord from './BowlingRecord';

class PlayerStat extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      pid: 35320,
      battingStyle: '',
      born: '',
      bowlingStyle: '',
      country: '',
      currentAge: '',
      fullName: '',
      imageURL: '',
      majorTeams: '',
      name: '',
      playingRole: '',
      profile: '',
      matchData:{
        "bowling":{
          "listA":{
            "10":"",
            "5w":"",
            "4w":"",
            "SR":"",
            "Econ":"",
            "Ave":"",
            "BBM":"",
            "BBI":"",
            "Wkts":"",
            "Runs":"",
            "Balls":"",
            "Inns":"",
            "Mat":""
          },
          "firstClass":{
            "10":"",
            "5w":"",
            "4w":"",
            "SR":"",
            "Econ":"",
            "Ave":"",
            "BBM":"",
            "BBI":"",
            "Wkts":"",
            "Runs":"",
            "Balls":"",
            "Inns":"",
            "Mat":""
          },
          "T20Is":{
            "10":"",
            "5w":"",
            "4w":"",
            "SR":"",
            "Econ":"",
            "Ave":"",
            "BBM":"",
            "BBI":"",
            "Wkts":"",
            "Runs":"",
            "Balls":"",
            "Inns":"",
            "Mat":""
          },
          "ODIs":{
            "10":"",
            "5w":"",
            "4w":"",
            "SR":"",
            "Econ":"",
            "Ave":"",
            "BBM":"",
            "BBI":"",
            "Wkts":"",
            "Runs":"",
            "Balls":"",
            "Inns":"",
            "Mat":""
          },
          "tests":{
            "10":"",
            "5w":"",
            "4w":"",
            "SR":"",
            "Econ":"",
            "Ave":"",
            "BBM":"",
            "BBI":"",
            "Wkts":"",
            "Runs":"",
            "Balls":"",
            "Inns":"",
            "Mat":""
          }
        },
        "batting":{
            "listA":{
              "50":"",
              "100":"",
              "St":"",
              "Ct":"",
              "6s":"",
              "4s":"",
              "SR":"",
              "BF":"",
              "Ave":"",
              "HS":"",
              "Runs":"",
              "NO":"",
              "Inns":"",
              "Mat":""
            },
            "firstClass":{
              "50":"",
              "100":"",
              "St":"",
              "Ct":"",
              "6s":"",
              "4s":"",
              "SR":"",
              "BF":"",
              "Ave":"",
              "HS":"",
              "Runs":"",
              "NO":"",
              "Inns":"",
              "Mat":""
            },
            "T20Is":{
              "50":"",
              "100":"",
              "St":"",
              "Ct":"",
              "6s":"",
              "4s":"",
              "SR":"",
              "BF":"",
              "Ave":"",
              "HS":"",
              "Runs":"",
              "NO":"",
              "Inns":"",
              "Mat":""
            },
            "ODIs":{
              "50":"",
              "100":"",
              "St":"",
              "Ct":"",
              "6s":"",
              "4s":"",
              "SR":"",
              "BF":"",
              "Ave":"",
              "HS":"",
              "Runs":"",
              "NO":"",
              "Inns":"",
              "Mat":""
            },
            "tests":{
              "50":"",
              "100":"",
              "St":"",
              "Ct":"",
              "6s":"",
              "4s":"",
              "SR":"",
              "BF":"",
              "Ave":"",
              "HS":"",
              "Runs":"",
              "NO":"",
              "Inns":"",
              "Mat":""
            }
        }
      }
    }
    this.getProfile = this.getProfile.bind(this);
  }

  getProfile(){
    let playerid = this.props.match.params.playerid;
    // let profileURL = `${this.props.API}/playerStats?pid=${this.state.pid}&apikey=${this.props.APIkey}`;
    let profileURL = `http://cricapi.com/api/playerStats?pid=${playerid}&apikey=BMqGnI7UdYRMbtEm5voIY6c9QEd2`;
    fetch(profileURL)
      .then((result) => result.json())
      .then((player) => {
        let newState = Object.assign({}, player.data);
        this.setState({  
          pid: player.pid,
          battingStyle: player.battingStyle,
          born: player.born,
          bowlingStyle: player.bowlingStyle,
          country: player.country,
          currentAge: player.currentAge,
          fullName: player.fullName,
          imageURL: player.imageURL,
          majorTeams: player.majorTeams,
          name: player.name,
          playingRole: player.playingRole,
          profile: player.profile,
          matchData: newState

        })
      })
      .catch((error) =>  console.log('Error in Fetching data'))
  }

  componentWillMount(){
    this.getProfile();
  }
 
  render(){
    
    return(
      <div className="grid-x grid-padding-x">
        <div className="cell medium-12 large-12">
          <h1>Player Stats </h1>
        </div>
        <div className="cell medium-12 large-12">
          <div className="callout large">
            <div className="text-center">
              <img className="thumbnail" src={this.state.imageURL} alt={this.state.name} />
              <h3>{this.state.fullName}</h3>
            </div>
            <div className="grid-x grid-padding-x">
              <div className="cell medium-6 large-6">
                <table className="unstriped">
                  <tbody>
                    <tr>
                      <th>Born</th>
                      <td>{this.state.born}</td>
                    </tr>
                    <tr>
                      <th>Counrty</th>
                      <td>{this.state.country}</td>
                    </tr>
                    <tr>
                      <th>Batting Style</th>
                      <td>{this.state.battingStyle}</td>
                    </tr>
                    <tr>
                      <th>Bowling Style</th>
                      <td>{this.state.bowlingStyle}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="cell medium-6 large-6">
                <table className="unstriped">
                  <tbody>
                    <tr>
                      <th>Current Age</th>
                      <td>{this.state.currentAge}</td>
                    </tr>
                    <tr>
                      <th>Major Teams</th>
                      <td>{this.state.majorTeams}</td>
                    </tr>
                    <tr>
                      <th>Playing role</th>
                      <td>{this.state.playingRole}</td>
                    </tr> 
                  </tbody>
                </table>
              </div>
            </div>
            <p>{this.state.profile}</p>
          </div>
        </div>
        <div className="cell medium-12 large-12">
          <h4>Batting</h4>
          <table>
            <tbody>
              <tr>
                <th>League</th>
                <th>Mat</th>
                <th>Inns</th>
                <th>NO</th>
                <th>Ave</th>
                <th>Runs</th>
                <th>St</th>
                <th>50</th>
                <th>100</th>
                <th>6s</th>
                <th>4s</th>
                <th>HS</th>
              </tr>
              <BattingRecord bat={this.state.matchData.batting["ODIs"]} matchtype="ODIs" />
              <BattingRecord bat={this.state.matchData.batting["tests"]} matchtype="Test" />
              <BattingRecord bat={this.state.matchData.batting["T20Is"]} matchtype="T20Is" />
              <BattingRecord bat={this.state.matchData.batting["firstClass"]} matchtype="First Class" />
              <BattingRecord bat={this.state.matchData.batting["listA"]} matchtype="List A" />
            </tbody>
          </table>
          <h4>Bowling</h4>
          <table>
            <tbody>
                <tr>
                <th>League</th> 
                <th>Matches</th> 
                <th>Inns</th>  
                <th>Econ</th>                    
                <th>Ave</th>                   
                <th>BBM</th>                    
                <th>BBI</th>                    
                <th>Wkts</th>                  
                <th>10W</th>    
                <th>5W</th>                    
                <th>4W</th>  
              </tr>
              <BowlingRecord bowl={this.state.matchData.bowling["ODIs"]} matchtype="ODIs" />
              <BowlingRecord bowl={this.state.matchData.bowling["tests"]} matchtype="Test" />
              <BowlingRecord bowl={this.state.matchData.bowling["T20Is"]} matchtype="T20Is" />
              <BowlingRecord bowl={this.state.matchData.bowling["firstClass"]} matchtype="First Class" />
              <BowlingRecord bowl={this.state.matchData.bowling["listA"]} matchtype="List A" />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PlayerStat;
