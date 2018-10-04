import Immutable from 'seamless-immutable';

const initialState = {
  loggedUser: ''
};

export function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case 'SET_LOGGED_USER':
      return state.merge({
        loggedUser: action.payload.loggedUser
      });
    default:
      return state;
  }
}
