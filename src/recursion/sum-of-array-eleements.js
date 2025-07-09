const arr = [1, 2, 3, 4, 5, 6];

function sumOfArr(arr, i) {
	if (i === arr.length) return 0;
	return arr[i++] + sumOfArr(arr, i);
}

console.log(sumOfArr(arr, 0));
