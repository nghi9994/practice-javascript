export function toArray(obj) {
  // const newList = [];
  // const createSubArr = (key, value) => {
  //   return [key, value];
  // };

  // Object.keys(obj).forEach((item, index) => {
  //   newList.push(createSubArr(item, obj[item]));
  // });

  // return newList;
  return Object.entries(obj);
}
