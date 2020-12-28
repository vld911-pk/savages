import { getUser } from "../api/fetchApi";
import { GET_USER } from '../constants/actionTypes'

export const userAction = () => ({
  type: GET_USER,
  payload: getUser(),
});
