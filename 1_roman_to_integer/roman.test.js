// const romanConverter = require("./roman");
import { romanToInteger } from "./roman.js";

test("III should be 3 ", () => {
  expect(romanToInteger("III")).toBe(3);
});
test("LVIII should be 58 ", () => {
  expect(romanToInteger("LVIII")).toBe(58);
});
test("MCMXCIV should be 1994 ", () => {
  expect(romanToInteger("MCMXCIV")).toBe(1994);
});
