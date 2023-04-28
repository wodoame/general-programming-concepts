// The sliding window algorithm is a technique used to efficiently solve problems involving subarrays (or sublists) of a fixed size in an array (or list).
// The basic idea is to maintain a sliding window of size k and move it through the array one element at a time.
// At each step, we calculate the sum (or any other metric) of the elements in the current window, and update the maximum sum if necessary.

// This approach is often faster than brute force because it avoids recomputing the sum of overlapping subarrays.
// Instead, it only adds and removes one element at a time.

// The time complexity of the sliding window algorithm is O(n), where n is the size of the input array.

// Example:
// Assume we have an array of integers and a window size k
const arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const k = 3;

// We start by calculating the sum of the first k elements in the array
let sum = 0;
for (let i = 0; i < k; i++) {
  sum += arr[i];
}

// We initialize the maximum sum as the sum of the first k elements
let maxSum = sum;

// We then slide the window by one element at a time and calculate the new sum
for (let i = k; i < arr.length; i++) {
  sum += arr[i] - arr[i - k];
  // We add the current element to the sum and subtract the element k positions behind it
  // This effectively removes the first element in the window and adds the current element

  // If the new sum is greater than the current maximum sum, update the maximum sum
  if (sum > maxSum) {
    maxSum = sum;
  }
}

// The maximum sum of any subarray of size k is stored in maxSum
console.log(maxSum); // Output: 16
