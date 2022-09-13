// {
//     value: 4,
//     left: null,
//     right: null
// }

// Binary Search Tree

// nodes that are greater than the root value goes von the right.

//BST big O O(log n) - very efficient... divide and conquer
// worst O(n) best  O(log n)

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		// const newNode = new Node(value);
		// this.root = newNode;
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);

		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let temp = this.root;
		while (true) {
			if (newNode.value === temp.value) return undefined;
			if (newNode.value < temp.value) {
				if (temp.left === null) {
					temp.left = newNode;
					return this;
				}
				temp = temp.left;
			} else {
				if (temp.right === null) {
					temp.right = newNode;
					return this;
				}
				temp = temp.right;
			}
		}
	}

	contains(value) {
		if (this.root === null) return false;
		let temp = this.root;

		while (temp) {
			if (value < temp.value) {
				temp = temp.left;
			} else if (value < temp.value) {
				temp.right;
			} else {
				return true;
			}
		}
		return false;
	}

	BFS() {
		let currentNode = this.root;
		let queue = [];
		let results = [];
		queue.push(currentNode);

		while (queue.length) {
			currentNode = queue.shift();
			results.push(currentNode.value);
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}
		return results;
	}

	DFSPreOrder() {
		let results = [];
		function Traverse(currentNode) {
			results.push(currentNode.value);
			if (currentNode.left) Traverse(currentNode.left);
			if (currentNode.right) Traverse(currentNode.right);
		}
		Traverse(this.root);
		return results;
	}
}

let myTree = new BinarySearchTree();
