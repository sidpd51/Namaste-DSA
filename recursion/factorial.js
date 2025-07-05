function factorialOfN(n) {
	if (n === 1 || n === 0) return 1;

	return n * factorialOfN(--n);
}

console.log(factorialOfN(5));
