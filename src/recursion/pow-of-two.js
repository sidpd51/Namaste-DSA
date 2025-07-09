function powOfTwo(n) {
	if (n === 0) return 1;
	return 2 * powOfTwo(--n);
}

console.log(powOfTwo(1));
