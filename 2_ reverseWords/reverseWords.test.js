import { reverseWords } from "./reverseWords.js";

test("Case 1", () => {
  expect(reverseWords(" the sky is blue")).toBe("blue is sky the");
});
test("Case 2", () => {
  expect(reverseWords("hello   world!  ")).toBe("world!   hello");
});
test("Case 3", () => {
  expect(reverseWords(" a good example")).toBe("example good a");
});
