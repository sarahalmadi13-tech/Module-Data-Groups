// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
console.log(invert({ a: 1, b: 2 }));

// a) What is the current return value when invert is called with { a : 1 }
// the current return value is { '1': 'a' } because the function is swapping the key and value of the object, so the key "a" becomes the value and the value "1" becomes the key in the new object.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// the current return value is { '1': 'a', '2': 'b' } because the function is swapping the key and value of the object, so the key "a" becomes the value and the value "1" becomes the key in the new object.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// the target return value is { '1': 'a', '2': 'b' } because the function is swapping the key and value of the object, so the key "a" becomes the value and the value "1" becomes the key in the new object, and similarly for "b" and "2".

// c) What does Object.entries return? Why is it needed in this program?
//the Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. It is needed in this program to iterate over the key-value pairs of the input object so that we can swap them and create the inverted object. By using Object.entries(), we can easily access both the keys and values in a single loop, which simplifies the process of creating the new object with swapped keys and values.

// d) Explain why the current return value is different from the target output
//the current return value is different from the target output because the current implementation of the invert function is correctly swapping the keys and values of the input object, so it actually produces the target output. If there was a difference, it could be due to an error in how the keys and values are being swapped or how the new object is being constructed. However, in this case, the current implementation seems to be correct and should produce the expected result.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
