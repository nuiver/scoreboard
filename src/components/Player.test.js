import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import spies from 'chai-spies'
import chaiEnzyme from 'chai-enzyme'
import Player from './Player'

chai.use(spies)
chai.use(chaiEnzyme())

const playerProps = {
  name: 'Miriam',
  avatar: 'http://cd.sseu.re/miriam-3409830948.png',
  points: 6
}

const onChangeSpy = chai.spy()
const player = shallow(<Player { ...playerProps } onChange={ onChangeSpy } />)

describe('<Player />', () => {
  it('has a wrapping li tag', () => {
    expect(player).to.have.tagName('li')
  })

  it('has a class "player"', () => {
    expect(player).to.have.className('player')
  })

  it('renders the player\'s avatar', () => {
    expect(player.find('img')).to.have.attr('src', playerProps.avatar)
  })

  it('renders the points and name of the player', () => {
    const { points, name } = playerProps
    expect(player.find('.name')).to.have.text('Miriam')
  })

  describe('+1 Button', () => {
    it('shows it', () => {
      expect(player.find('button')).to.have.text('+1')
    })

    it('calls the onChange function when we click it', () => {
      const { playerId } = playerProps
      player.find('button').simulate('click')
      expect(onChangeSpy).to.have.been.called.with(playerId)
    })
  })
})
