function dedupe(arr) {
  const specialArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!specialArr.includes(arr[i])) {
      specialArr.push(arr[i]);
    }
  }
  return specialArr;
}
module.exports = dedupe;
