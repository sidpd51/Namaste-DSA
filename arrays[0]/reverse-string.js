// function reverseString(s) {
// 	let start = 0;
// 	let end = s.length - 1;
// 	while (start < end) {
// 		let temp = s[start];
// 		s[start] = s[end];
// 		s[end] = temp;
// 		start++;
// 		end--;
// 	}
//     return s;
// }

function reverseString(s) {
	for (let i = 0; i < Math.floor(s.length / 2); i++) {
		let n = s.length;
		let temp = s[i];
		s[i] = s[n - 1 - i];
		s[n - 1 - i] = temp;
	}
	return s;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
