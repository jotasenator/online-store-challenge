import { types } from "../types/types";

const initialState = {
    data: null,
    error: ''
}

export const axiosDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.get:
            return {
                ...state,
                data: action.data
            }
        case types.error:
            return {
                ...state,
                error: action.msg
            }
        default:
            return state;
    }
}
