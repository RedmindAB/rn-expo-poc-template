export const generateRandomID = (length = 6) =>
  Math.random()
    .toString(36)
    .substring(2, 2 + length)
    .toUpperCase()
