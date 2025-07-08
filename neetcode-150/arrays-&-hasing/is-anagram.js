//tc: O(n log n+ m log m) sc: O(n)
function isAnagram(s, t) {
	if (s.length != t.length) return false;
	const sortedStringS = s.split("").sort().join("");
	const sortedStringT = t.split("").sort().join("");
	return sortedStringS === sortedStringT;
}

//tc: O(n+m) sc: O(n)
function isAnagram(s, t) {
	if (s.length != t.length) return false;
	const map1 = {};
	for (const value of s) {
		map1[value] = (map1[value] || 0) + 1;
	}
	const map2 = {};
	for (const value of t) {
		map2[value] = (map2[value] || 0) + 1;
	}

	for (const key in map1) {
		if (map1[key] != map2[key]) return false;
	}

	return true;
}

console.log(`Is "racecar" & "carrace" an anagram: ${isAnagram("racecar","carrace")}`)
