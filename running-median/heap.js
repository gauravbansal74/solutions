const heap = function(sort){
	let elements = [];

	const root = function(){
		return elements[0];
	}
	const empty = function(){
		return elements.length === 0;
	}
	const length = function(){
		return elements.length;	
	} 

	const hasIndex = function(i){
		return i >= 0 && i < length();
	} 

	const hasParent = function(i){
		return hasIndex(Math.floor((i - 1) / 2));
	}
	const hasRight = function(i){
		return	hasIndex(2 * i + 2);
	} 
	const hasLeft = function(i){
		return hasIndex(2 * i + 1);
	} 

	const parent = function(i){
		return elements[Math.floor((i - 1) / 2)];
	} 
	const left = i => elements[2 * i + 1];
	const right = function(i) { 
		return elements[2 * i + 2];
	} 

	const higher = function(a, b) { return sort(a, b) < 0;}

	const swap = function(i, j) {
		const temp = elements[i];
		elements[i] = elements[j];
		elements[j] = temp;
	};

	const heapUp = function(start) {
		let i = start;
		while (hasParent(i) && higher(elements[i], parent(i))) {
			swap(i, Math.floor((i - 1) / 2));
			i = Math.floor((i - 1) / 2);
		}
	};

	const heapDown = function(start){
		let i = start;
		while (hasLeft(i)) {
			if (
				higher(left(i), elements[i])
				|| (hasRight(i) && higher(right(i), elements[i]))
			) {
				if (!hasRight(i) || higher(left(i), right(i))) {
					swap(i, 2 * i + 1);
					i = 2 * i + 1;
				} else {
					swap(i, 2 * i + 2);
					i = 2 * i + 2;
				}
			} else {
				break;
			}
		}
	};

	const remove = function(){
		const root = elements[0];
		if (length() === 1) {
			elements = [];
		} else {
			elements[0] = elements.pop();
			heapDown(0);
		}
		return root;
	};

	const insert = function(data){
		elements.push(data);
		heapUp(length() - 1);
	};

	const getElements = function(){
		return elements;
	}

	return {
		remove,
		insert,
		length,
		empty,
		root,
		getElements
	};
}

module.exports = heap;
