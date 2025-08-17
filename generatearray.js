function generateArray(numberOfItems, upperLimit = 10) {
  return Array.from({ length: numberOfItems }, () =>
    Math.floor(Math.random() * upperLimit + 1)
  );
}
