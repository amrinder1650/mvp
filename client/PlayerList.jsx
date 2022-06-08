import React from 'react';
import Player from './Player.jsx';

var PlayerList = (props) => {
  return (
    <div>
      <h2>List of Players</h2>
      <div>
        {props.players.map(player =>
          <Player key={player.id} name={player.player}/>
        )}
      </div>
    </div>
  )
}

export default PlayerList;