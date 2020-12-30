import { getUserData } from "../api/fetchApi";
import { GET_USER } from '../constants/actionTypes'

export const userAction = (userId) => ({
  type: GET_USER,
  payload: getUserData(userId),
});
