function findSecondLargest(arr) {
    if (arr.length == 0 || arr.length == 1) {
        return null;
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let result = findSecondLargest([1, 2, 5, 8, 9]);
console.log("Second largest element is: ", result);

result = findSecondLargest([1, 2, 9, 5, 8, 9]);
console.log("Second largest element is: ", result);

result = findSecondLargest([1]);
console.log("Second largest element is: ", result);

result = findSecondLargest([]);
console.log("Second largest element is: ", result);