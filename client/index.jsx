import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import PlayerList from './PlayerList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/players',
      method: 'GET',
      success: (result) => {
        this.setState({
          players: [...result]
        });
      },
      error: function() {
        console.log('Error ajax get');
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Random Team Generator</h1>
        <PlayerList players={this.state.players}/>
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('app'));