// Given an empty array
// When passed to tally
// Then it should return an empty object
test.todo("tally on an empty array returns an empty object");
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

test("Given an array with duplicated items, return counts for each unique item", () => {
  expect(tally(["a", "a", "b", "c"])).toEqual({ a: 2, b: 1, c: 1 });
});
// Given an invalid input like a string
// When passed to tally
// Then it should throw an error
test("Given an invalid input such as a string, should throw an error: not an Array", () => {
  expect(() => {
    tally("hello");
  }).toThrow("not an Array");
});
