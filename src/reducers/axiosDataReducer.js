import { types } from "../types/types";

const initialState = {
    data: null,
    selected: null,
    deleted: '',
    created: null,
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
        case types.selected:
            return {
                ...state,
                selected: action.selectedItem
            }
        case types.delete:
            return {
                ...state,
                deleted: action.deletedItem
            }
        case types.created:
            return {
                ...state,
                created: action.createdItem
            }
        case types.modified:
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
