export class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

export class MyLinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	addAtHead(val) {
		let newNode = new Node(val);
		newNode.next = this.head;
		this.head = newNode;
		this.size++;
	}

	addAtTail(val) {
		let current = this.head;
		let newNode = new Node(val);
		while (current.next) {
			current = current.next;
		}
		current.next = newNode;
		this.size++;
	}

	addAtIndex(index, val) {
		let newNode = new Node(val);
		if (index === 0) {
			newNode.next = this.head;
			this.head = newNode;
			this.size++;
			return;
		}
		let current = this.head;
		for (let i = 0; i < index - 1; i++) {
			current = current.next;
		}
		newNode.next = current.next;
		current.next = newNode;
		this.size++;
	}

	printLL() {
		let current = this.head;
		let str = "";
		while (current) {
			str += current.val + " ";
			current = current.next;
		}
		console.log("Linked List: ", str);
		console.log("Size of LL: ", this.size);
	}

	get(index) {
		if (index < 0 || index >= this.size) return -1;
		let current = this.head;
		let count = 0;
		while (current) {
			if (count === index) {
				return current.val;
			}
			count++;
			current = current.next;
		}
		return -1;
	}

	deleteAtIndex(index) {
		let current = this.head;
		if (index === 0) {
			this.head = current.next;
			this.size--;
			return;
		} else if (index === 1) {
			current.next = current.next.next;
			this.size--;
			return;
		}
		for (let i = 0; i < index - 1; i++) {
			current = current.next;
		}
		current.next = current.next.next;
		this.size--;
	}
}
