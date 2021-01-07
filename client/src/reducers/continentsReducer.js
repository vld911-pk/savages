import {GET_CONTINENTS} from '../constants/actionTypes'

const initialState = {
    payload : [],
    loading : false,
};
export const continentsReducer = (state = initialState ,{type ,payload}) =>{
    switch(type){
        case GET_CONTINENTS : 
            return {...state, payload}
        default : 
            return state; 
    }
}