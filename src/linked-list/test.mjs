import { Node, MyLinkedList } from './design-linked-list-leetcode.mjs';

const linkedList = new MyLinkedList();

linkedList.addAtIndex(0,8);
linkedList.addAtTail(3)
linkedList.addAtTail(4)
linkedList.addAtTail(5)
linkedList.printLL();
// let i = 4;
// console.log(`Index ${i} has element: ${linkedList.get(i)}`);
linkedList.deleteAtIndex(3);
linkedList.printLL();


