function removeDuplicates(nums) {
	let x = 0;
	for (let i = 1; i < nums.length; i++) {
		if (nums[x] < nums[i]) {
			x++;
			nums[x] = nums[i];
		}
	}
	return x+1;
}

console.log(`No of unique elements in arr: [1,1,2], count:`+removeDuplicates([1,1,2]))
console.log(`No of unique elements in arr: [0,0,1,1,1,2,2,3,3,4], count:`+removeDuplicates([0,0,1,1,1,2,2,3,3,4]))