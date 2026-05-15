function tally(input) {
  if (!Array.isArray(input)) {
    throw new Error("not an Array");
  }
  let counter = {};

  for (let item of input) {
    if (counter[item] === undefined) {
      counter[item] = 1;
    } else {
      counter[item] += 1;
    }
  }

  return counter;
}

module.exports = tally;
