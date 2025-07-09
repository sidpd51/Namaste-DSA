// tc: O(mlogm), sc: O(1)
function merge(nums1, m, nums2, n) {
	let length = nums1.length;
	for (let i = m; i < length; i++) {
		nums1[i] = nums2[i - m];
	}
	nums1.sort((a, b) => a - b);
}

// tc: O(m+n), sc: O(m)
function mergeSortedArrays(nums1, m, nums2, n) {
	let nums1Copy = nums1.slice(0, m);
	let p1 = 0,
		p2 = 0;
	let x = 0;
	while (p1 < m && p2 < n) {
		if (nums1Copy[p1] < nums2[p2]) {
			nums1[x] = nums1Copy[p1];
			p1++;
		} else {
			nums1[x] = nums2[p2];
			p2++;
		}
		x++;
	}
	while (p1 < m) {
		nums1[x] = nums1Copy[p1];
		p1++;
		x++;
	}

	while (p2 < n) {
		nums1[x] = nums2[p2];
		p2++;
		x++;
	}
	console.log(nums1);
}

//optimal tc:O(n) sc:O(1)
function merge(nums1, m, nums2, n) {
	let p1 = m - 1;
	let p2 = n - 1;
	for (let i = m + n - 1; i >= 0; i--) {
		if (p2 < 0) break;
		if (p1 >= 0 && nums1[p1] > nums2[p2]) {
			nums1[i] = nums1[p1--];
		} else {
			nums1[i] = nums2[p2--];
		}
	}
}

console.log(mergeSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
