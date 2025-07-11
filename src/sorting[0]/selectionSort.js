const arr = [13, 46, 24, 52, 20, 9];

function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let min = i;
		for (let j = i; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		let temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
	return arr;
}

console.log(selectionSort(arr));
