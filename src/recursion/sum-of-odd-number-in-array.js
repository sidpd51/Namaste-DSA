const arr = [1, 2, 3, 4, 5, 6];

function sumOfOddElementsInAnArr(arr, i) {
	if (i === arr.length) return 0;
	let result = arr[i] % 2 != 0 ? arr[i] : 0;
	i++;
	return result + sumOfOddElementsInAnArr(arr, i);
}

console.log(sumOfOddElementsInAnArr(arr, 0));
