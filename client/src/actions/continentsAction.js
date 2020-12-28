import { fetchContinents } from "../api/fetchApi";
import { GET_CONTINENTS } from '../constants/actionTypes'

export const continentsAction = () => ({
  type: GET_CONTINENTS,
  payload: fetchContinents(),
});
