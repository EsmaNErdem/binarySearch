function findRotatedIndex(nums, target) {
    let pivot = findPivot(nums);
    if (target > nums[0] && pivot > 0 && target <= nums[pivot-1]) {
        return findIndex(nums, target, 0, pivot-1)
    } else {
        return findIndex(nums, target, pivot, nums.length-1)
    }
    
}

function findPivot (nums) {
    let l = 0;
    let r = nums.length -1;
    if (nums.length == 1 || nums[l] < nums[r]) return 0;
    while (r >= l) {
        let midInd = Math.floor((l + r) / 2);
        if (nums[midInd] > nums[midInd + 1]) return midInd + 1;
        else if (nums[l] < nums[midInd]) {
            l = midInd + 1;
        } else {
            r = midInd - 1;
        }
    }
}

function findIndex (nums, target, l, r) {
    while (r >= l) {
        let midInd = Math.floor((l+r)/2)
        let midVal = nums[midInd]
        if (midVal < target) {
            l = midInd + 1
        } else if (midVal > target) {
            r = midInd - 1
        } else {
            return midInd
        }
    }
    return -1
}

module.exports = findRotatedIndex