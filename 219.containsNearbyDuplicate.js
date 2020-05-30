var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
    if (set.size > k) {
        set.delete(nums[i - k]);
    }
  }
  console.log(set)
  return false;
};
var nums = [1, 2, 3, 1,2,3],
  k = 2;
console.log(containsNearbyDuplicate(nums, k));
