export function countTrue(arr) {
  if (!Array.isArray(arr)) return 0;

  // let trueArr = arr.filter((item, index) => item === true);
  let trueArr = arr.filter(Boolean);

  return trueArr.length;
}
