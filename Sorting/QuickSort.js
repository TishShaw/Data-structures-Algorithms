function Swap(array, firstIndex, secondIndex) {
	let temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
}

function Pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
	let swapIndex = pivotIndex;
	for (let i = pivotIndex + 1; i <= endIndex; i++) {
		if (array[i] < array[pivotIndex]) {
			swapIndex++;
			Swap(array, swapIndex, i);
		}
	}
	Swap(array, pivotIndex, swapIndex);
	return swapIndex;
}

function QuickSort(array, left = 0, right = array.length - 1) {
	if (left < right) {
		let pivotIndex = Pivot(array, left, right);
		QuickSort(array, left, pivotIndex - 1);
		QuickSort(array, left, pivotIndex + 1, right);
	}
	return array;
}

// Need a pivot point

// Space complexity: O(1)
// Time complexity: O(n log n)

// If you have sorted or almost sorted ata this is not a good sorting algortihm tip: use insertion sort -> O(n)
// IF you have random data , this would be efficient -> O(nlog n)