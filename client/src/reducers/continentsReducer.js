import {GET_CONTINENTS} from '../constants/actionTypes'

const initialState = {
    continents : [],
    loading : false,
};
export const continentsReducer = (state = initialState ,action) =>{
    switch(action.type){
        case GET_CONTINENTS : 
            return {...state, continents : action.payload}
        default : 
            return state; 
    }
}