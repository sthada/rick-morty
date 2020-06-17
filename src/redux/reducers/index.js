import * as actionTypes from '../action';

const initialState = {
    characterDetail: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DETAILS:
            return {
                ...state,
                characterDetail: action.value

            }
        case actionTypes.GET_DETAILS_FAILURE:
            return {
                ...state,
                characterDetail: {
                    characterDetail: []
                }
            }
        case actionTypes.GET_DETAILS_SUCESS:
            return {
                ...state,
                characterDetail: action.value
            }
        case actionTypes.SORT_BY_CHANGE:
            return {
                ...state,
                characterDetail: [...action.value]  
            }
        case actionTypes.FILTER:
            return {
                ...state,
                characterDetail: [...action.value]
            }
        default:
            return state;
    }
}
export default rootReducer;