let arr = [1, 2, 3, 4, 5, 6];

function ascendingBinarySearch(arr, target) {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] === target) return mid;
		else if (arr[mid] > target) end = mid - 1;
		else start = mid + 1;
	}
    return -1;
}


console.log(ascendingBinarySearch(arr,0));