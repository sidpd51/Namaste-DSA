function Node(val) {
	this.val = val;
	this.next = null;
}

function MyLinkedList() {
	this.head = null;
	this.size = 0;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

let linkedList = new MyLinkedList();
linkedList.head = node1;
linkedList.size = 4;

node1.next = node2;
node2.next = node3;
node3.next = node4;

let current = linkedList.head;
while (current) {
	console.log(current.val);
	current = current.next;
}
