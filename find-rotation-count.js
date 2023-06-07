function findRotationCount(nums) {
    let l = 0;
    let r = nums.length-1;
    if( nums[r] > nums[l] || nums.length == 1) return 0
    while (r >= l) {
      let midInd = Math.floor((l+r)/2)
      let midVal = nums[midInd]
      if(midVal > nums[midInd+1]) return midInd+1;
      else if(nums[l] <= midVal) {
          l = midInd + 1
      } else {
          r = midInd - 1
      }
    }
}
  

module.exports = findRotationCount