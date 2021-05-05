import { combineReducers } from "redux";
import { continentsReducer } from '../reducers/continentsReducer';
import { cardsReducer } from '../reducers/cardsReducer';

const rootReducer = combineReducers({
    continents: continentsReducer,
    card_links: cardsReducer,
});

export default rootReducer;