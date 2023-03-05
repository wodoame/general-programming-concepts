// Define a function called binarySearch that takes an array and a target value as arguments
function binarySearch(arr, target) {
  // Set the low pointer to the beginning of the array
  let low = 0;
  // Set the high pointer to the end of the array
  let high = arr.length - 1;
  
  // Start a loop that runs as long as the low pointer is less than or equal to the high pointer
  while (low <= high) {
    // Calculate the midpoint of the array by adding the low and high pointers and dividing by 2 (integer division)
    const mid = Math.floor((low + high) / 2);
    
    // If the value at the midpoint is equal to the target value, return the index of the midpoint
    if (arr[mid] === target) {
      return mid;
    // If the value at the midpoint is greater than the target value, update the high pointer to be one index less than the midpoint and repeat the loop
    } else if (arr[mid] > target) {
      high = mid - 1;
    // If the value at the midpoint is less than the target value, update the low pointer to be one index greater than the midpoint and repeat the loop
    } else {
      low = mid + 1;
    }
  }
  
  // If the loop finishes running and the target value was not found, return -1
  return -1;
}
