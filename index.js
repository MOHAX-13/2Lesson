var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
	result;

//for value undefined
for (var key in data) {
	if (data[key] === undefined) {
		data[key] = {
			undefined
		};
	}
}

result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);
//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]

console.log('result', result);

function prioritySort(array, dataPriority) {
	return array.sort(function(left, right) {
		// write code here


		if (dataPriority.indexOf(isNull(left) || typeof left) > dataPriority.indexOf(isNull(right) || typeof right)) {
			return 1;
		} else if (dataPriority.indexOf(isNull(left) || typeof left) < dataPriority.indexOf(isNull(right) || typeof right)) {
			return -1;
		}
	});
}

function isNull(value) {
	// write code here
	return value === null;
}