function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length;
  let middle;
  let position = -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (target === nums[middle]) {
      position = middle;
      return position;
    }
    if (target < nums[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}
