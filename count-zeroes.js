function countZeroes(nums) {
  let l = 0;
  let r = nums.length - 1;
//   it will keep cutting the array in half until r = l
  while (r >= l) {
    let midInd = Math.floor((l+r)/2)
    let midVal = nums[midInd]
    if (midVal > 0) {
        l = midInd + 1
    } else if (midVal == 0) {
        r = midInd - 1
    }
  }
  return nums.length - l
}

module.exports = countZeroes