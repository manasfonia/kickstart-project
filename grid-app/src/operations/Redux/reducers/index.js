import { combineReducers } from 'redux'
import { GET_GRID_DATA } from "../../type";

const gridReducer = (state = null, action) => {
    switch(action.type){
        case GET_GRID_DATA:
            state = action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    gridReducer: gridReducer
})
export default rootReducer