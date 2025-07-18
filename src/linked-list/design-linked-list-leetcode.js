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

	get(index) {
		if (index < 0 || index >= this.size) return -1;
		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return current.val;
	}

	addAtHead(val) {
		let current = this.head;
		let newNode = new Node(val);
		newNode.next = current;
		this.head = newNode;
		this.size++;
	}

	addAtTail(val) {
		const newNode = new Node(val);
		let current = this.head;
		if (!this.head) {
			this.head = newNode;
		} else {
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.size++;
	}

	addAtIndex(index, val) {
		let current = this.head;
		let newNode = new Node(val);
		if (index < 0 || index > this.size) return;
		if (index === 0) {
			this.addAtHead(val);
			return;
		} else if (index === this.size) {
			this.addAtTail(val);
			return;
		} else {
			for (let i = 0; i < index - 1; i++) {
				current = current.next;
			}
			newNode.next = current.next;
			current.next = newNode;
			this.size++;
		}
		return;
	}

	deleteAtIndex(index) {
		if (index < 0 || index >= this.size) return;
		let current = this.head;
		if (index === 0) {
			this.head = current.next;
		} else {
			for (let i = 0; i < index - 1; i++) {
				current = current.next;
			}
			current.next = current.next.next;
		}
		this.size--;
		return;
	}
}
