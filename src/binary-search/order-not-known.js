let arr = [1, 2, 3, 4, 5, 6];
function orderNotKnown(arr, target) {
	if (arr.length === 1) {
		if (arr[0] === target) return 0;
		else return -1;
	}
	let start = 0;
	let end = arr.length - 1;
	if (arr[start] < arr[end]) {
		while (start <= end) {
			let mid = Math.floor((start + end) / 2);
			if (arr[mid] === target) return mid;
			else if (arr[mid] > target) end = mid - 1;
			else start = mid + 1;
		}
	} else {
		while (start <= end) {
			let mid = Math.floor((start + end) / 2);
			if (arr[mid] === target) return mid;
			else if (arr[mid] > target) start = mid + 1;
			else end = mid - 1;
		}
	}
	return -1;
}

console.log(orderNotKnown(arr, 1));
