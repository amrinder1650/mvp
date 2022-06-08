import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import PlayerList from './PlayerList.jsx';
import AddPlayer from './AddPlayer.jsx';
import TeamList from './TeamList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      teams: []
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

  randomize() {
    var list = [...this.state.players];
    list = _.shuffle(list);

    var shuffledList = [];
    for (var i = 0; i < list.length; i++) {
      shuffledList.push(list[i]['player'])
    }

    var result = [];
    for (var i = 0; i < shuffledList.length; i+=2) {
      var team = [];
      team.push(shuffledList[i]);
      team.push(shuffledList[i + 1] || '(Loser)');
      result.push(team);
    }

    this.setState({
      teams: result
    })
  }

  render() {
    return (
      <div>
        <h1>Random Team Generator</h1>
        <PlayerList players={this.state.players}/>
        <br></br>
        <AddPlayer addPlayer={this.addPlayer.bind(this)}/>
        <br></br>
        <button onClick={() => {this.randomize()}}>Generate Teams</button>
        <TeamList teams={this.state.teams}/>
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('app'));