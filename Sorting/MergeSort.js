function Merge(array1, array2) {
	let combined = [];
	let i = 0;
	let j = 0;
	while (i < array1.length && j < array1.length) {
		if (array1[i] < array2[j]) {
			combined.push(array1[i]);
			i++;
		} else {
			combined.push(array2[j]);
			j++;
		}
	}
	while (i < array1.length) {
		combined.push(array1[i]);
		i++;
	}
	while (j < array2.length) {
		combined.push(array2[j]);
		j++;
	}
	return combined;
}

function MergeSort(array) {
    // 1) Breaks arays in half
    // 2) Base case: when array.length is 1
    // 3) Uses Merge() to put arrays together
    if( array.length === 1) return array;

    let mid = Math.floor(array.length/2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    return Merge(MergeSort(left, MergeSort(right)))
}

// Space complexity: O(n)
// Time complexity: O(n log n)