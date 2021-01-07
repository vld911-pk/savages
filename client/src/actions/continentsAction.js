import { fetchContinents } from "../api/fetchApi";
import { GET_CONTINENTS } from '../constants/actionTypes'

export const continentsAction = () => {
  return function(dispatch){
    dispatch({
      type: GET_CONTINENTS,
    });
    fetchContinents()
      .then(response => response.json())
      .then(data => dispatch({

        type: GET_CONTINENTS,
        payload: data
      }))
    }
};

