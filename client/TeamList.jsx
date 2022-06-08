import React from 'react';
import Team from './Team.jsx';

var TeamList = (props) => {

  return (
    <div>
      <h2>List of Teams</h2>
      <div>
        {props.teams.map(team =>
          <Team key={Math.random()} player1={team[0]} player2={team[1]}/>
        )}
      </div>
    </div>
  )
}

export default TeamList;