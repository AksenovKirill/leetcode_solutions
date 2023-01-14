function sortedSquares(nums) {
  return nums
    .map((elem) => {
      if (elem < 0) {
        return Math.pow(Math.abs(elem), 2);
      } else {
        return Math.pow(elem, 2);
      }
    })
    .sort((a, b) => a - b);
}
