import React from 'react';
import ReactDOM from 'react-dom';

class AddPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: ''
    }
  }

  addPlayer(input) {
    this.setState({player: input.target.value})
  }

  render() {
    return (
      <div>
        Name: <input type='text' onChange={(input) => {this.addPlayer(input)}}/>
        <button onClick={() => {this.props.addPlayer(this.state.player)}}>Submit</button>
      </div>
    );
  }
}

export default AddPlayer;