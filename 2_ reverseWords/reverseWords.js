export function reverseWords(str) {
  let reversedStr = "";
  let strArray = str.trim().split(" ");

  for (let index = strArray.length - 1; index >= 0; index--) {
    const element = strArray[index];
    if (index === 0) {
      reversedStr += `${element}`;
    } else {
      reversedStr += `${element} `;
    }
  }

  return reversedStr;
}
