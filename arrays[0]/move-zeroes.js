function moveZeroes(nums) {
	let l = 0;
	for (let r = 0; r < nums.length; r++) {
		if (nums[r] != 0) {
			let temp = nums[l];
			nums[l] = nums[r];
			nums[r] = temp;
			l++;
		}
	}
    return nums;
}


console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));