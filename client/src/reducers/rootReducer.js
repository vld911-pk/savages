import { combineReducers } from "redux";
import { continentsReducer } from '../reducers/continentsReducer';

const rootReducer = combineReducers({
    continents : continentsReducer,
});

export default rootReducer;