function isPowerOfTwoRecursive(n) {
	if (n == 1) return true;
	if (n < 1 || n % 2 != 0) return false;
	return isPowerOfTwo(Math.floor(n / 2));
}

console.log(isPowerOfTwoRecursive(16));

function isPowerOfTwo(n) {
    if(n<=0) return false;
    if(n===1) return true;
    if((n&(n-1))===0) return true;
    else return false;
};


console.log(isPowerOfTwo(16));

