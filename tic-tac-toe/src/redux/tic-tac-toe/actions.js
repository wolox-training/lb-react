const EDIT_TILE = 'EDIT_TILE';
const JUMP_TO = 'JUMP_TO';

export function editTile(gameState) {
  return {
    type: EDIT_TILE,
    payload: gameState
  };
}

export function jumpTo(step, xIsNext) {
  return {
    tyoe: JUMP_TO,
    payload: { step, xIsNext }
  };
}
