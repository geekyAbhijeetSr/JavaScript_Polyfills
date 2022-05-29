Array.prototype.myMap = function (callbackFn, thisArg) {
	if (typeof this.length !== 'number' || typeof callbackFn !== 'function')
		return undefined

	const newArr = []

	for (let idx = 0; idx < this.length; idx++) {
		newArr.push(callbackFn.apply(thisArg || this, [this[idx], idx, this]))
	}

	return newArr
}
