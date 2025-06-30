function isPalindrome(num) {
    if(num<0) return false;
	let rev = 0;
	let originalNum = num;
	while (num > 0) {
		let lastDigit = num % 10;
		rev = rev * 10 + lastDigit;
		num = Math.floor(num / 10);
	}
	if (rev === originalNum) return true;
	return false;
}

console.log(`123 is palindrome: ${isPalindrome(123)}`);
console.log(`121 is palindrome: ${isPalindrome(121)}`);
console.log(`-121 is palindrome: ${isPalindrome(-121)}`);
