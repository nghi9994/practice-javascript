/**
 * @param {string} s
 * @return {number}
 */
export function romanToInteger(s) {
  const symbolValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const stringToArr = s.split("");
  let sum = 0;
  for (let i = 0; i < stringToArr.length; i++) {
    let currentItem = stringToArr[i];
    let nextItem = stringToArr[i + 1] || null;

    if (nextItem && symbolValue[currentItem] < symbolValue[nextItem]) {
      sum -= symbolValue[currentItem];
    } else {
      sum += symbolValue[currentItem];
    }
  }

  return sum;
}

romanToInteger("III");
romanToInteger("LVIII");
romanToInteger("MCMXCIV");
