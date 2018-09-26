import Immutable from 'seamless-immutable';

const initialState = {
  history: {
    squares: Array(9).fill(null)
  },
  stepNumber: 0,
  xIsNext: true
};

export function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case 'EDIT_TILE':
      return {};
    default:
      return state;
  }
}
