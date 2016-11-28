import React from 'react'
import deepFreeze from 'deep-freeze-node'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Title from './Title'
import Scoreboard from '../containers/Scoreboard'

chai.use(chaiEnzyme())

const app = shallow(<App />)

describe('<App />', () => {

  it('renders the Title', () => {
    expect(app).to.have.descendants(Title)
  })

  it('renders a Scoreboard', () => {
    expect(app).to.have.descendants(Scoreboard)
  })

  describe('plusOne()', () => {
    const playerId = app.state('players')[0].playerId

    it('updates the points of the player', () => {
      expect(app.state('players')[0].points).to.eq(0)
      app.instance().plusOne(playerId)
      expect(app.state('players')[0].points).to.eq(1)
    })
  })

  describe('orderPlayers(players)', () => {
    const initialPlayers = deepFreeze([
      { name: 'Silver', points: 2 },
      { name: 'Bronze', points: 1 },
      { name: 'Gold', points: 3 },
    ])

    it('returns the players ordered by their points, desc', () => {
      const orderedPlayers = app.instance().orderPlayers(initialPlayers)
      expect(orderedPlayers[0].name).to.eq('Gold')
      expect(orderedPlayers[1].name).to.eq('Silver')
      expect(orderedPlayers[2].name).to.eq('Bronze')
    })
  })
})
