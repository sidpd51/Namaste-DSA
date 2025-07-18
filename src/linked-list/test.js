import { MyLinkedList } from './design-linked-list-leetcode.js';

const linkedList = new MyLinkedList();

linkedList.addAtIndex(0,8);
linkedList.addAtTail(3)
linkedList.addAtTail(4)
linkedList.addAtTail(5)
console.log(linkedList)
// let i = 4;
// console.log(`Index ${i} has element: ${linkedList.get(i)}`);
linkedList.deleteAtIndex(1);
console.log(linkedList)



