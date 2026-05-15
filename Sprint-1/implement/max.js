function findMax(elements) {
  if (!Array.isArray(elements)) return -Infinity;
  let max = -Infinity;
  for (let i = 0; i < elements.length; i++) {
    if (
      typeof elements[i] === "number" &&
      !isNaN(elements[i]) &&
      elements[i] > max
    ) {
      max = elements[i];
    }
  }
  return max;
}
console.log(findMax([-12, 15, 3, -6, -1])); // should return 15, because it's the largest number overall
console.log(findMax([-12, -15, -3, -6, -1])); // should return -1, because it's the closest one to zero
console.log(findMax([2.5, 0.3, 0.8, 5.1, 3.9])); // should return 5.1, because it's the largest decimal number
console.log(findMax([2.5, "potato", 0.3, null, 0.8, undefined, 5.1, 3.9])); // should return 5.1, because it's the largest number and non-numeric values are ignored
console.log(findMax(["kiwis", "potato", undefined])); // should return -Infinity, because there are no numeric values and non-numeric values are ignored

module.exports = findMax;
