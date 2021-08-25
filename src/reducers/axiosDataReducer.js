import { types } from "../types/types";

const initialState = {
    data: null,
    deleted: null,
    modified: null,
    error: ''
}

export const axiosDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.get:
            return {
                ...state,
                data: action.data
            }
        case types.delete:
            return {
                ...state,
                deleted: action.deletedItem
            }
        case types.modify:
            return {
                ...state,
                modified: action.modifiedItem
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
