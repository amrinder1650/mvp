import React from 'react';

var Player = (props) => {
  return (
    <div>
      {props.id}. {props.name}
    </div>
  )
}

export default Player;