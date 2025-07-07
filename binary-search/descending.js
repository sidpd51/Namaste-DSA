let arr = [6, 5, 4, 3, 2, 1];

function ascendingBinarySearch(arr, target) {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] === target) return mid;
		else if (arr[mid] > target) start = mid + 1;
		else end = mid - 1;
	}
	return -1;
}

console.log(ascendingBinarySearch(arr, 1));
