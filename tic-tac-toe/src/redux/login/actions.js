const SET_LOGGED_USER = 'SET_LOGGED_USER';

export function login(user) {
  return {
    type: SET_LOGGED_USER,
    payload: user
  };
}
