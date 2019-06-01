import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PlayerStat from './PlayerStat';
import Score from './Score';
import MatchList from './MatchList';
import Error from './Error';
import Navigation from './Navigation';
import SearchPlayers from './SearchPlayers';

const APIkey ='BMqGnI7UdYRMbtEm5voIY6c9QEd2';
const API = 'http://cricapi.com/api';

class Cricinfo extends Component { 
 
  render() {
    return(
      <div>
        <BrowserRouter>
          <div>
            <Navigation />
            <div className="grid-container">
              <div className="grid-x grid-margin-x">
                <div className="cell small-12">
                  <Switch>
                    <Route path="/" component={() => <MatchList API={API} APIkey={APIkey}/> } exact />
                    <Route path="/player_stat/:playerid" component={ PlayerStat } />
                    <Route path="/score" component={Score} />
                    <Route path="/searchplayers/:name" component={SearchPlayers} />

                    {/*<Route path="/searchplayers/:name" component={() => <SearchPlayers API={API} APIkey={APIkey}/> } />*/}
                    <Route component={Error} /> 
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default Cricinfo;
