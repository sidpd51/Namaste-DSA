function missingNumber(nums) {
	nums.sort((a, b) => a - b);
	for (let i = 0; i <= nums.length; i++) {
		if (nums[i] != i) return i;
	}
}

function missingNumber(nums) {
	let result = nums.length;
	for (let i = 0; i < nums.length; i++) {
		result = result ^ i ^ nums[i];
	}
	return result;
}


function missingNumber(nums) {
    let n = nums.length;
    let realSum = n*(n+1)/2;
    let currentSum = 0;
    for(let i =0; i<nums.length; i++){
        currentSum+=nums[i];
    }
    return realSum-currentSum;
};