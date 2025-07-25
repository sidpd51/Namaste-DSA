function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let j = i;
		while (j > 0 && arr[j] < arr[j - 1]) {
			let temp = arr[j];
			arr[j] = arr[j - 1];
			arr[j - 1] = temp;
			j--;
		}
	}
	return arr;
}

console.log(insertionSort([14, 9, 15, 12, 6, 8, 13]));
