function mergeSort(array) {
  const n = array.length;

  if (n <= 1) return array;
  const mid = Math.floor(n / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  mergeSort(left);
  mergeSort(right);
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.length) {
    result.push(right[j++]);
  }
  return result;
}

function generateArray(numberOfItems, upperLimit = 10) {
  return Array.from({ length: numberOfItems }, () =>
    Math.floor(Math.random() * upperLimit + 1)
  );
}
