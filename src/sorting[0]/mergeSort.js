function merge(arr, low, mid, high) {
	let result = [];
	let left = low,
		right = mid + 1;
	while (left <= mid && right <= high) {
		if (arr[left] <= arr[right]) {
			result.push(arr[left]);
			left++;
		} else {
			result.push(arr[right]);
			right++;
		}
	}
	while (left <= mid) {
		result.push(arr[left]);
		left++;
	}
	while (right <= high) {
		result.push(arr[right]);
		right++;
	}
	for (let i = 0; i < result.length; i++) {
		arr[low + i] = result[i];
	}
	return arr;
}

//tc: O(nlogn) sc: O(n)
function mergeSort(arr, low, high) {
	if (low >= high) return;
	let mid = Math.floor((low + high) / 2);
	mergeSort(arr, low, mid);
	mergeSort(arr, mid + 1, high);
	return merge(arr, low, mid, high);
}

console.log(mergeSort([14, 9, 15, 12, 6, 8, 13], 0, 6));
