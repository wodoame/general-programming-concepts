/*
The time complexity of obtaining an item from an array is O(1) if the index of the item is known.
This means that accessing an item in an array takes a constant amount of time, regardless of the size of the array.

However, if the index of the item is not known and the array is unsorted, then the time complexity of obtaining the item becomes O(n), where n is the size of the array.
In this case, the algorithm would need to search through each element in the array until it finds the item it is looking for.

If the array is sorted and the search algorithm used is binary search, then the time complexity of obtaining the item becomes O(log n), where n is the size of the array. 
This is because binary search can eliminate half of the remaining elements in each iteration, leading to a much faster search time.
*/
