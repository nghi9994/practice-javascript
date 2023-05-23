// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

import { countTrue } from "./index.js";

test("Case 1", () => {
  expect(countTrue([true, false, false, true, false])).toBe(2);
});
test("Case 2", () => {
  expect(countTrue([false, false, false, false])).toBe(0);
});
test("Case 3", () => {
  expect(countTrue([])).toBe(0);
});
test("Case 4", () => {
  expect(countTrue("")).toBe(0);
});
