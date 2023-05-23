export function compact(arr) {
  if (!Array.isArray(arr) || !arr.length) return [];

  let filteredList = [];

  filteredList = arr.filter((item) => !!item);
  return filteredList;
}
