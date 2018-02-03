const heap = require('./heap');

const median = function(){
	const minHeap = heap(function(a, b){ 
		return (a - b);
	});
	const maxHeap = heap(function(a, b){ 
		return (b - a);
	});
	const getValue = function(){
		if (minHeap.length() === maxHeap.length()) {
			return (minHeap.root() + maxHeap.root()) / 2;
		}
		return minHeap.length() > maxHeap.length()
			? minHeap.root()
			: maxHeap.root();
	};
	const addValue = function(val) {
		if (val > minHeap.root()) {
			if (minHeap.length() > maxHeap.length()) {
				const oldRoot = minHeap.remove();
				maxHeap.insert(oldRoot);
			}
			minHeap.insert(val);
		} else if (val < maxHeap.root()) {
			if (maxHeap.length() > minHeap.length()) {
				const oldRoot = maxHeap.remove();
				minHeap.insert(oldRoot);
			}
			maxHeap.insert(val);
		} else {
			if (minHeap.length() <= maxHeap.length()) {
				minHeap.insert(val);
			} else {
				maxHeap.insert(val);
			}
		}
	};
	return {
		addValue,
		getValue
	};
};
module.exports = median;
