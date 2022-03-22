export function getData(path) {
  const data = fetch(`http://localhost:3000/${path}`);
  return data.then((response) => response.json());
}
