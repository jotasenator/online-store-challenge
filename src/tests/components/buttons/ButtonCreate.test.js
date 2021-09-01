import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import ButtonCreate from '../../../components/buttons/ButtonCreate'


describe('Test from ButtonCreate', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ButtonCreate />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test('should render <ButtonCreate/> correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should show what text is inside button', () => {
        expect(wrapper.find('button[className="btn btn-primary float-right"]').text()).toBe('Create')
        expect(wrapper.find('button').text()).toBe('Create')
        expect((wrapper.find('Link')).text()).toBe('Create')

    })

})
