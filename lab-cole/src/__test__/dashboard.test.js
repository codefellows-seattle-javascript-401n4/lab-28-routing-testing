import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import Dashboard from '../component/dashboard'

describe('Dashboard', () => {
  test('initial state is correct', () => {
    let wrapper = mount(<Dashboard />)
    expect(wrapper.state('expenses')).toEqual([])
  })
})

//will need to test an expense form state