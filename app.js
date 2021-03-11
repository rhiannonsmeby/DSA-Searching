//1. How many searches
function binarySearch(array, value, start = 0, end = array.length - 1) {
    if (start> end) return -1;
    let index = Math.floor((start + end)/2);
    let item = array[index];

    if (item===value) {
        console.log('found')
        return index;
    }
    else if(item < value) {
        console.log(1)
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        console.log(1)
        return binarySearch(array, value, start, index - 1);
    }
};

console.log(binarySearch([3,5,6,8,11,12,14,15,17,18], 8)); //3???
console.log(binarySearch([3,5,6,8,11,12,14,15,17,18], 16)); // also 3

//2. in react-app, App.js

//3. How would you go about looking for a book in a library with a Dewey Decimal index, can you
//express this process as a search algorithm? Implement your algorithm to find a book whose Dewey
//and book title is provided

//4. Searching in a BST
//a. given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91
//and 35 25 15 14 19 27 89 79 91 90. What would be the post order traversal

/**
 *               35
 *         25         89
 *      27   15     79   90
 *         19  14          91
 * 
 * 
 */
//27, 14, 19,15, 25, 91, 90, 79, 89, 35
class BinarySearchTree {
    constructor(key=null, value=null, parent=null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    dfsPostOrder(values=[]) {
        if (this.left) {
            this.left.dfsPostOrder(values);
        }
        if (this.right) {
            this.right.dfsPostOrder(values);
        }
        console.log(this.key)
        // values.push(this.value);
        // return values;
    }
    
}

// function dfsPostOrder([35, 2, 15, 14, 19, 27, 89, 79, 91, 90]) {
    // if (this.left) {
    //     this.left.dfsPostOrder();
    // }
    // if (this.right) {
    //     this.right.dfsPostOrder();
    // }
//     console.log(this.key)
// }



//b.The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is it's pre order traversal?

