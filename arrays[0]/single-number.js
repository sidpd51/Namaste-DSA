function singleNumber(nums) {
	for (let i = 0; i < nums.length; i++) {
		var result = result ^ nums[i];
	}
	return result;
}

function singleNumber(nums) {
	let map = {};
	for (let i = 0; i < nums.length; i++) {
		map[nums[i]] = (map[nums[i]] || 0) + 1;
	}

	for (const key in map) {
		if (map[key] === 1) return Number(key);
	}
}
