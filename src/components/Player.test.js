import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Player from './Player'

chai.use(chaiEnzyme())

const playerProps = {
  name: 'Miriam',
  avatar: 'http://cd.sseu.re/miriam-3409830948.png',
  points: 6
}
const player = shallow(<Player { ...playerProps } />)

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
})
