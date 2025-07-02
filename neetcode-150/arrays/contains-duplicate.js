function hasDuplicate(nums) {
	let freq = {};
	for (const num of nums) {
		freq[num] = (freq[num] || 0) + 1;
	}
	for (const key in freq) {
		if (freq[key] > 1) return true;
	}
	return false;
}
