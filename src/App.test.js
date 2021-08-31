import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import App from './App'

describe('Snapshot from <App/>', () => {

    test('should render <App/> correctly', () => {
        const wrapper = shallow(<App />)
        expect(wrapper).toMatchSnapshot()
    })

})

