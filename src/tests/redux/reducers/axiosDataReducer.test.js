import { axiosDataReducer } from "../../../redux/reducers/axiosDataReducer";
import { types } from "../../../redux/types/types";



describe('Testing axiosDataReducer', () => {
    const initialState = {
        data: null,
        selected: null,
        deleted: '',
    }
    test('should return default state', () => {
        const reducerInitialState = axiosDataReducer(initialState, {})
        expect(reducerInitialState).toEqual({
            data: null,
            selected: null,
            deleted: '',
        })
    })
    test('should return error message', () => {
        const action = {
            type: types.error,
            msg: 'Unable to modify item'
        }

        const state = axiosDataReducer({ data: undefined }, action)
        expect(state).toEqual({ data: undefined, error: 'Unable to modify item' })
    })

})
