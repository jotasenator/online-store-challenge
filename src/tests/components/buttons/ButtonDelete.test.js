import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'

import thunk from "redux-thunk";
import { Provider } from "react-redux"
import configureStore from "redux-mock-store";

import ButtonDelete from '../../../components/buttons/ButtonDelete'
import { types } from '../../../redux/types/types';


describe('Test from ButtonDelete', () => {
    const id = 10
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares)
    const initState = {
        data: null,
        selected: null,
        deleted: '',
        created: null,
        modified: null,
        error: ''
    };
    const store = mockStore(initState);

    const wrapper = mount(
        <Provider store={store}>
            <ButtonDelete id={id} />
        </Provider>
    )

    const getData = () => ({ type: 'GET-DATA' })

    // Dispatch the action
    store.dispatch(getData())


    test('should render <ButtonDelete/> correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('should show text inside button tag', () => {
        expect((wrapper).find('button').text()).toBe('Delete')
        expect((wrapper).find('button[className="btn btn-danger"]').text()).toBe('Delete')
    })
    test('should store dispatch expected action', () => {
        // Test if your store dispatched the expected actions
        const actions = store.getActions()
        const expectedPayload = { type: types.get }
        expect(actions).toEqual([expectedPayload])
    })
})

