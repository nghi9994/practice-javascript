import { compact } from ".";

test("Case 1", () => {
  expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
});
test("Case 2", () => {
  expect(compact("abc")).toEqual([]);
});
test("Case 3", () => {
  expect(compact([])).toEqual([]);
});
