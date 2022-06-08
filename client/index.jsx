import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import PlayerList from './PlayerList.jsx';
import AddPlayer from './AddPlayer.jsx';


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

  addPlayer(name) {
    if (name !== '') {
      $.ajax({
        url: '/players',
        method: 'POST',
        data: {name: name},
        success: (result) => {
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
          })
        },
        error: function() {
          console.log('Error ajax post');
        }
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Random Team Generator</h1>
        <PlayerList players={this.state.players}/>
        <br></br>
        <AddPlayer addPlayer={this.addPlayer.bind(this)}/>
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('app'));