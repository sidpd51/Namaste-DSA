let strs = ["act", "pots", "tops", "cat", "stop", "hat"];
function groupAnagrams(strs) {
	let map = {};
	for (const value of strs) {
		let sortedValue = value.split("").sort().join("");
		if (!map[sortedValue]) map[sortedValue] = [];
		map[sortedValue].push(value);
	}
	return Object.values(map);
}

function groupAnagramsOptimal(strs) {
	let hash = {};
	for (const word of strs) {
		const count = new Array(26).fill(0);
		for (const char of word) {
			count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
		}
		const key = count.join("#");
		if (!hash[key]) {
			hash[key] = [];
		}
		hash[key].push(word);
	}
	return Object.values(hash);
}

console.log(groupAnagramsOptimal(strs));
