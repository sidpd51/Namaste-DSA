import { MinPriorityQueue } from "datastructures-js";

//tc: O(n+nlogn) sc: O(m) m: unique elements
function topKFrequent(nums, k) {
	const count = {};
	for (const num of nums) {
		count[num] = (count[num] || 0) + 1;
	}
	const arr = Object.entries(count).map(([num, freq]) => [
		freq,
		parseInt(num),
	]);
	arr.sort((a, b) => b[0] - a[0]);
	return arr.slice(0, k).map((pair) => pair[1]);
}

// console.log(topKFrequent([1, 2, 2, 4, 4, 4], 2));

// tc: O(nlogk), sc: O(n+k)
function topKFrequentElements(nums, k) {
	const count = {};
	for (const num of nums) {
		count[num] = (count[num] || 0) + 1;
	}

	const heap = new MinPriorityQueue((x) => x[1]);
	for (const [num, freq] of Object.entries(count)) {
		heap.enqueue([num, freq]);
		if (heap.size() > k) {
			heap.dequeue();
		}
	}
	const arr = [];
	for (let i = 0; i < k; i++) {
		const [num, cnt] = heap.dequeue();
		arr.push(parseInt(num));
	}
	return arr;
}

// console.log(topKFrequentElements([1, 2, 2, 4, 4, 4], 2));


//tc: O(n) sc: O(n)
function topKFrequentBucketSort(nums, k) {
	const count = {};
	const freq = Array.from({ length: nums.length + 1 }, () => []);
	for (const num of nums) {
		count[num] = (count[num] || 0) + 1;
	}
	for (const n in count) {
		freq[count[n]].push(parseInt(n));
	}

	const res = [];
	for (let i = freq.length - 1; i > 0; i--) {
		for(const n of freq[i]){
			res.push(n);
		}
		if(res.length===k) return res;
	}
}

console.log(topKFrequentBucketSort([1, 2, 2, 4, 4, 4], 2));
