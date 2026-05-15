function sum(elements) {
  if (elements.length === 0) return 0;
  let total = 0;
  let foundNumber = false;
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && !Number.isNaN(elements[i])) {
      total += elements[i];
      foundNumber = true;
    }
  }
  if (!foundNumber) return NaN;
  return total;
}

console.log(sum([10, 20, 30])); // should return 60, because 10 + 20 + 30 = 60
console.log(sum(["hey", 10, "hi", 60, 10])); // should return 80, because it ignores non-numerical values and sums 10 + 60 + 10 = 80
console.log(sum([])); // should return 0, because the array is empty and there are no numbers to sum
console.log(sum([13])); // should return 13, because there is only one number in the array and it sums to itself
console.log(sum([-12, 15, 3, -6, -1])); // should return -1, because -12 + 15 + 3 + (-6) + (-1) = -1
console.log(sum([2.5, 0.3, 0.8, 5.1, 3.9])); // should return 12.6, because 2.5 + 0.3 + 0.8 + 5.1 + 3.9 = 12.6
console.log(sum(["friends", "videosgames", "vacation"])); // should return NaN, because there are no numerical values to sum and non-numerical values are ignored

module.exports = sum;
