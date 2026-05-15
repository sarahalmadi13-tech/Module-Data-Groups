const contains = require("./contains");

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
  expect(contains({}, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("Given an object with existing property name, return true", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("Given an object with a non-existent property name, return false", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should throw an error
test("Given invalid parameter like array, throw error", () => {
  expect(() => contains([1, 2, 5], "a")).toThrow("Invalid parameter");
});
