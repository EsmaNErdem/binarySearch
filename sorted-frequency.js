function sortedFrequency(nums, target) {
    const start = startIndex(nums, target);
    const end = endIndex(nums, target);
    if(start == -1 || end == -1) return -1
    return end - start + 1
}

function startIndex(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while(r >= l) {
        let midInd = Math.floor((l + r) / 2);
        let midVal = nums[midInd];
        if((midInd == 0 || nums[midInd - 1] < target) && nums[midInd] == target) {
            return midInd;
        } else if(midVal < target) {
            l = midInd + 1;            
        } else { 
            r = midInd - 1
        }
    }
    return -1
}

function endIndex(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while(r >= l) {
        let midInd = Math.floor((l + r) / 2);
        let midVal = nums[midInd];
        if((midInd == nums.length-1 || nums[midInd+1] > target) && nums[midInd] == target) {
            return midInd
        } else if(midVal > target) {
            r = midInd - 1;
        } else {
            l = midInd + 1;
        }
    }
    return -1
}

module.exports = sortedFrequency