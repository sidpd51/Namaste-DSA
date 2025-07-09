function checkPalindrome(str, start, end) {
	if (start > end) return true;
	if (str[start] != str[end]) return false;
	start++;
	end--;
	return checkPalindrome(str, start, end);
}

function checkPalindromeNew(str, i) {
	if (i >= Math.floor(str.length / 2)) return true;
	if (str[i] != str[str.length - 1 - i]) return false;
	i++;
	return checkPalindromeNew(str, i);
}

let str = "appa";
console.log(checkPalindrome(str, 0, str.length - 1));
console.log(checkPalindromeNew(str, 0));
