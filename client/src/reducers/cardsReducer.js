import { GET_CARDS, DELETE_CARDS } from '../constants/actionTypes'

const initialState = {
    card_links : [],
    loading : false,
};
export const cardsReducer = (state = initialState ,action) =>{
    switch(action.type){
        case GET_CARDS: 
            return {...state, card_links : action.payload};
        case DELETE_CARDS:
            return {...state, card_links : {}};
        default : 
            return state; 
    }
}