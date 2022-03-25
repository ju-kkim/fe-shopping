export function getData(URL) {
  const data = fetch(URL);
  return data.then((response) => response.json());
}

export function toggleClass(target, className) {
  target.classList.toggle(className);
}
