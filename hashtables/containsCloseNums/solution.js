// My solution that wasn't fast enough to pass the 4s execution time test

function containsCloseNums(nums, k) {
    return nums
        .map((num, i) =>
            nums.lastIndexOf(num) !== i ? [i, nums.indexOf(num, i + 1)] : []
        )
        .some(([idx, nextIdx]) => nextIdx - idx <= k);
}

// A big brain solution I found online

function containsCloseNumsBB(nums, k) {
    var indexes = {};

    for (i = 0; i < nums.length; i++) {
        if (i - indexes[nums[i]] <= k) return true;
        indexes[nums[i]] = i;
    }

    return false;
}
