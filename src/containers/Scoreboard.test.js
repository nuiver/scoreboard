import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Scoreboard from './Scoreboard'

chai.use(chaiEnzyme())

const scoreboard = shallow(<Scoreboard />)

describe('<Scoreboard />', () => {
  it('has a wrapping ul tag', () => {
    expect(scoreboard).to.have.tagName('ul')
  })

  it('has a class "scoreboard"', () => {
    expect(scoreboard).to.have.className('scoreboard')
  })
})
