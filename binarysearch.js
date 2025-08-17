// Find the middle point of the array
// if the searchValue is equal to the value of the middle point element - return the index.
// if value to search is greater than the value in the middle element discard the left of the array
// else if value is less than the value in the middle element, discard right of the array
// repeat the search again with the new array.

function binarySearch(sortedArrayToSearch, valueToSearch) {
  let min = 0;
  let max = sortedArrayToSearch.length - 1;
  let mid = 0;
  while (max >= min) {
    mid = Math.floor((min + max) / 2);
    if (sortedArrayToSearch[mid] === valueToSearch) {
      return mid;
    }
    if (sortedArrayToSearch[mid] < valueToSearch) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return -1;
}

function binarySearchRecursive(
  sortedArrayToSearch,
  valueToSearch,
  min = 0,
  max = sortedArrayToSearch.length - 1
) {
  if (min > max) {
    return -1; // Not found
  }

  let mid = Math.floor((min + max) / 2);

  if (sortedArrayToSearch[mid] === value) {
    return mid;
  } else if (sortedArrayToSearch[mid] < value) {
    return binarySearchRecursive(sortedArrayToSearch, value, mid + 1, max);
  } else {
    return binarySearchRecursive(sortedArrayToSearch, value, min, mid - 1);
  }
}
