// tc: O(n^2), sc: O(1)
function bubbleSort(arr) {
	for (let i = arr.length - 1; i >= 1; i--) {
		let isSwapped = false;
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				isSwapped = true;
			}
		}
		if (!isSwapped) break;
	}
	return arr;
}

console.log(bubbleSort([0, 1, 2, 4, 5]));
