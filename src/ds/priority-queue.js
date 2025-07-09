import { MinPriorityQueue } from "datastructures-js";

const heap = new MinPriorityQueue((x) => x[1]);
heap.enqueue([1, 3]);
heap.enqueue([2, 2]);
heap.enqueue([3, 5]);
console.log(heap.size());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.size());