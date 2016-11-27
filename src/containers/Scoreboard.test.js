import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Scoreboard from './Scoreboard'
import Player from '../components/Player'

chai.use(chaiEnzyme())

const players = [
  {
    playerId: 4,
    avatar: 'http://cd.sseu.re/matthew-32094823098.png',
    name: 'Matthew',
    points: 0,
  },
  {
    playerId: 3,
    avatar: 'http://cd.sseu.re/miriam-3409830948.png',
    name: 'Miriam',
    points: 0,
  }
]

const app = shallow(<Scoreboard players={ players } />)

describe('<Scoreboard />', () => {
  it('has a wrapping ul tag', () => {
    expect(app).to.have.tagName('ul')
  })

  it('has a class "scoreboard"', () => {
    expect(app).to.have.className('scoreboard')
  })

  describe('players', () => {
    it('renders Players', () => {
      expect(app).to.have.descendants(Player)
    })

    it('renders both players', () => {
      expect(app).to.contain(<Player key={0} { ...players[0] } />)
      expect(app).to.contain(<Player key={1} { ...players[1] } />)
    })
  })
})
