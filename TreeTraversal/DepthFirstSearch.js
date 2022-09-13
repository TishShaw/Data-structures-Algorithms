function DFSPreOrder() {
	let results = [];
	function Traverse(currentNode) {
		results.push(currentNode.value);
		if (currentNode.left) Traverse(currentNode.left);
		if (currentNode.right) Traverse(currentNode.right);
	}
	Traverse(this.root);
	return results;
}

function DFSPostOrder() {
	let results = [];
	function Traverse(currentNode) {
		if (currentNode.left) Traverse(currentNode.left);
		if (currentNode.right) Traverse(currentNode.right);
		results.push(currentNode.value);
	}
	Traverse(this.root);
	return results;
}

function DFSInOrder() {
	let results = [];
	function Traverse(currentNode) {
		if (currentNode.left) Traverse(currentNode.left);
        results.push(currentNode.value);
		if (currentNode.right) Traverse(currentNode.right);
	}
	Traverse(this.root);
	return results;
}
