// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
import { concatArray } from ".";

test("Case 1", () => {
  expect(concatArray([1, 2, 3], [4, 5], [6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
});
test("Case 2", () => {
  expect(concatArray([1], [2], [3], [4], [5], [6], [7])).toEqual([
    1, 2, 3, 4, 5, 6, 7,
  ]);
});
test("Case 3", () => {
  expect(concatArray([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
});
test("Case 4", () => {
  expect(concatArray([4, 4, 4, 4, 4])).toEqual([4, 4, 4, 4, 4]);
});
