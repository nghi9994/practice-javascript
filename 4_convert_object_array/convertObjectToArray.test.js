// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []

import { toArray } from "./convertObjectToArray.js";

test("Case 1", () => {
  expect(toArray({ a: 1, b: 2 })).toEqual([
    ["a", 1],
    ["b", 2],
  ]);
});
test("Case 2", () => {
  expect(toArray({ shrimp: 15, tots: 12 })).toEqual([
    ["shrimp", 15],
    ["tots", 12],
  ]);
});
test("Case 3", () => {
  expect(toArray({})).toEqual([]);
});
