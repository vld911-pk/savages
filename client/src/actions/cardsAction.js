import { GET_CARDS, DELETE_CARDS } from '../constants/actionTypes'

export const cardsAction = (links) => ({
  type: GET_CARDS,
  payload: links,
});

export const deleteCardsAction = () => ({
  type: DELETE_CARDS,
});
