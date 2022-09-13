// Collison : item that maps to the same space in memory.
// Seperate Chaining: The process of putting key value pairs in the same address space
// Linear probing: is a type of open addressing. check if the address soace is taken and if yes, add the item to the next address space.

// Seperate chaining oart 2: have a linkedlist at every address and just add to the linkedlist to deal with collisions

class HashTable {
	constructor(size = 7) {
		this.dataMap = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
		}
		return hash;
	}

	set(key, value) {
		let index = this._hash(key);
		if (!this.dataMap[index]) {
			this.dataMap[index] = [];
		}
		this.dataMap[index].push([key, value]);
		return this;
	}

	get(key) {
		let index = this._hash(key);
		if (this.dataMap[index]) {
			for (let i = 0; i < this.dataMap[index].length; i++) {
				if (this.dataMap[index][i][0] === key) {
					return this.dataMap[index][i][1];
				}
			}
		}
		return undefined;
	}

	keys() {
		let allKeys = [];
		for (let i = 0; i < this.datMap.length; i++) {
			if (this.dataMap[i]) {
				for (let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0])
                }
			}
		}
        return allKeys;
	}
}

let myHahTable = new HashTable();
