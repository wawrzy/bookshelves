// @flow

import { GET_SHELVES_SUCCESS } from 'Redux/actions/shelves';

import type { Shelve } from 'Types/shelve';


type Shelves = {
  shelves: Array<Shelve>,
};

const shelvesState = {
  shelves: [],
};

export const shelves = (state: Shelves = shelvesState, action: any) => {
  switch (action.type) {
    case GET_SHELVES_SUCCESS:
      return { shelves: action.payload.data };
    default:
      return state;
  }
};
