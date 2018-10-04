import Immutable from 'seamless-immutable';

const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true
};

export function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case 'EDIT_TILE':
      return state.merge({
        history: action.payload.history,
        stepNumber: action.payload.stepNumber,
        xIsNext: action.payload.xIsNext
      });
    case 'JUMP_TO':
      return state.merge({
        stepNumber: state.stepNumber,
        xIsNext: state.xIsNext
      });
    default:
      return state;
  }
}
