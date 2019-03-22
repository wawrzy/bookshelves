export const GET_SHELVES_SUCCESS = 'GET_SHELVES_SUCCESS';
export const GET_SHELVES = 'GET_SHELVES';
export function fetchShelves() {
  return {
    type: GET_SHELVES,
    payload: {
      request: {
        url: '/users/5a8411b53ed02c04187ff02a/shelves',
      },
    },
  };
}
