const guessNumber = (n) => {
  let left = 1,
    right = n;

  while (left < right) {
    const middle = left + Math.floor((right - left) / 2);
    const current = guess(middle);
    if (current === 0) return middle;
    if (current === -1) right = middle;
    else left = middle + 1;
  }
  return left;
};
