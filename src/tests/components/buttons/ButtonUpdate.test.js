import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import thunk from "redux-thunk";
import { Provider } from "react-redux"
import configureStore from "redux-mock-store";

import { types } from '../../../redux/types/types';
import ButtonUpdate from '../../../components/buttons/ButtonUpdate'

describe('ButtonUpdate test', () => {

    let wrapper;
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

    beforeEach(() => {
        wrapper = shallow(<Provider store={store}>
            <ButtonUpdate id={id} />
        </Provider>);
    });

    const getData = () => ({ type: 'GET-DATA' })

    // Dispatch the action
    store.dispatch(getData())

    test('should render <ButtonUpdate/> correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should store dispatch expected action', () => {
        // Test if your store dispatched the expected actions
        const actions = store.getActions()
        const expectedPayload = { type: types.get }
        expect(actions).toEqual([expectedPayload])
    })


})
