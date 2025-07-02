function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (let num of array) {
    const complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here:
  Time complexity: O(n)
  Space complexity: O(n)
*/

/* 
  Add your pseudocode here:
  - Create a new Set to store numbers we've seen so far
  - Loop through each number in the array:
      - Calculate the complement (target - current number)
      - If the complement exists in the Set, return true
      - Otherwise, add the current number to the Set
  - If no such pair is found, return false
*/

/*
  Add written explanation of your solution here:
  The function loops through the array and for each number,
  checks if the complement (target - current number) has already been seen.
  If so, that means we have found a pair of numbers that add up to the target,
  so we return true. If not, we add the number to a Set for future checks.
  This approach is efficient and avoids nested loops.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  // Additional edge case tests
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 10));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 5));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 1, 2], 0));
}

module.exports = hasTargetSum;
