function countDigit(num) {
	if (num == 0) return 1;
	let count = 0;
	num = Math.abs(num);
	while (num > 0) {
		num = Math.floor(num / 10);
		count++;
	}
	return count;
}

let num = 123;
console.log(`Digits in ${num} is: ${countDigit(num)}`);
num = 0;
console.log(`Digits in ${num} is: ${countDigit(num)}`);
num = -123;
console.log(`Digits in ${num} is: ${countDigit(num)}`);
