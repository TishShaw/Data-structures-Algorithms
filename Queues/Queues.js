class Queue {
	constructor(value) {
		const newNode = new Node(value);
		this.fist = newNode;
		this.last = newNode;
		this.length = 1;
	}

	//Enqueue is adding someone to the line
	//In the same direction as push() in a linkedlist/array.
	enqueue(value) {
		const newNode = new Node(value);
		if (!this.length) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.ext = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}

	// Very similar to shift with a linked list.
	// remove() method in queue
	dequeue() {
		if (this.length === 0) return undefined;
		let temp = this.first;
		if ((this.length = 1)) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
			temp.next = null;
		}
        this.length --;
        return temp;
	}
}

const myQueue = new Queue(4);
myQueue.enqueue(7);
