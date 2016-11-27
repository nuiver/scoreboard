import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Title from './Title'

chai.use(chaiEnzyme())

const app = shallow(<App />)

describe('<App />', () => {

  it('renders the Title', () => {
    expect(app).to.have.descendants(Title)
  })
})
