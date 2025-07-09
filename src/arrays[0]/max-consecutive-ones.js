function findMaxConsecutiveOnes(nums) {
	let maxConsecutiveOnes = 0;
	let consecutiveOnes = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			consecutiveOnes++;
		} else {
			maxConsecutiveOnes = Math.max(maxConsecutiveOnes, consecutiveOnes);
			consecutiveOnes = 0;
		}
	}
	return Math.max(maxConsecutiveOnes, consecutiveOnes);
}

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));