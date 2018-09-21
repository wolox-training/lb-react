const EDIT_TILE = 'EDIT_TILE';

export function editTile(number, player) {
  return {
    type: EDIT_TILE,
    payload: player
  };
}

dispatch(editTitle(number, player));
