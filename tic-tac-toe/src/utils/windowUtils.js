export function localSetItem(name, value) {
  window.localStorage.setItem(name, value);
}

export function localGetItem(name) {
  return window.localStorage.getItem(name);
}
