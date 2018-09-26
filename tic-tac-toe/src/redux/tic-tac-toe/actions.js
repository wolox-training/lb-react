const EDIT_TILE = 'EDIT_TILE';
const JUMP_TO = 'JUMP_TO';

const actionCreators = {
  editTile(gameState) {
    return {
      type: EDIT_TILE,
      payload: { gameState }
    };
  },
  jumpTo(step, xIsNext) {
    return {
      tyoe: JUMP_TO,
      payload: { step, xIsNext }
    };
  }
};

export default actionCreators;
