// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  //input validation
  if (!Array.isArray(list)) return null;

  // Return null if the list is empty or contains no numbers
  const numbers = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );
  if (numbers.length === 0) return null;

  // Sort the numbers in ascending order without mutating the original array
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const midIndex = Math.floor(sortedNumbers.length / 2);

  // If the length of the sorted numbers is odd, return the middle element
  if (sortedNumbers.length % 2 !== 0) {
    return sortedNumbers[midIndex];
  } else {
    // If the length is even, return the average of the two middle elements
    return (sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2;
  }
}

module.exports = calculateMedian;
