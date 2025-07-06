function reverseArray(arr, start, end) {
	if (start > end) return;
	let temp = arr[start];
	arr[start] = arr[end];
	arr[end] = temp;
	start++;
	end--;
	return reverseArray(arr, start, end);
}

let arr = [1, 2, 3, 4, 5];
reverseArray(arr, 0, arr.length - 1);
console.log(arr);
