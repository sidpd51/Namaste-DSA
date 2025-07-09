function reverseInteger(x) {
	let xCopy = Math.abs(x);
	let rev = 0;
	while (xCopy > 0) {
		let lastDigit = xCopy % 10;
		xCopy = Math.floor(xCopy / 10);
		rev = rev * 10 + lastDigit;
	}
	const maxValue = Math.pow(2, 31);
	if (rev > maxValue) return 0;
	return x < 0 ? -rev : rev;
}

console.log(`Reverse of 123 is: ${reverseInteger(123)}`);
console.log(`Reverse of -123 is: ${reverseInteger(-123)}`);
console.log(`Reverse of 120 is: ${reverseInteger(120)}`);
console.log(`Reverse of 120 is: ${reverseInteger(1534236469)}`);
