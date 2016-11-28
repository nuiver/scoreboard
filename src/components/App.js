import React from 'react'
import Scoreboard from '../containers/Scoreboard'
import Title from './Title'
import CreatePlayer from './CreatePlayer'
import './App.sass'

const playerData = [
  {
    playerId: 1,
    avatar: 'http://cd.sseu.re/matthew-32094823098.png',
    name: 'Matthew',
    points: 0,
    prize: ' ',
  },
  {
    playerId: 2,
    avatar: 'http://cd.sseu.re/miriam-3409830948.png',
    name: 'Miriam',
    points: 0,
    prize: ' ',
  },
  {
    playerId: 3,
    avatar: 'http://cd.sseu.re/wouter-38249879847.png',
    name: 'Wouter',
    points: 0,
    prize: ' ',
  }
]

class App extends React.Component {

  constructor(props) {
    super()

    this.state = {
      players: playerData
    }
  }

  plusOne(playerId) {
    const newPlayers = this.state.players.map((player) => {
      if (player.playerId === playerId) {
        return Object.assign({}, player, { points: player.points + 1 })
      }
      return player
    })

    var orderedPlayers = this.orderPlayers(newPlayers)

    this.setState({
      players: this.assignPrizes(orderedPlayers)
    })
  }

  orderPlayers(players) {
    return players.concat().sort((a, b) => {
      return b.points - a.points
    })
  }

  assignPrizes(players) {
    const newPlayers = players.map((player) => {

      if ( players.indexOf(player) == 0 && player.points > 9 ) {
        return Object.assign({}, player, { prize: 'Gold' })
      }
      else if ( players.indexOf(player) == 1 && player.points > 9 ) {
        return Object.assign({}, player, { prize: 'Silver' })
      }
      else if ( players.indexOf(player) == 2 && player.points > 9 ) {
        return Object.assign({}, player, { prize: 'Bronze' })
      }
      else {
        return player
      }
    })
    return newPlayers
  }

  render() {
    const { players } = this.state

    return (
      <div className="app">

        <Title label="Scoreboard" />
        <Scoreboard players={ players } plusOne={ this.plusOne.bind(this) } />
        <CreatePlayer />
      </div>
    )
  }
}

export default App
