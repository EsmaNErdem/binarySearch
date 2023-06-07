function findFloor(nums, target) {
    let l = 0;
    let r = nums.length-1
    while (r >= l) {
        let midInd = Math.floor((l+r)/2);
        let midVal = nums[midInd]
        if (midVal < target && target < nums[midInd+1]) return midVal
        if (nums[r] < target) return nums[r]
        else if(midVal > target) {
            r = midInd - 1
        } else {
            l = midInd + 1
        }
    }
    return -1
}

module.exports = findFloor