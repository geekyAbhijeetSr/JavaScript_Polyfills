Array.prototype.myFilter = function (callbackFn, thisArg) {
	if (typeof this.length !== 'number' || typeof callbackFn !== 'function')
		return undefined

	const newArr = []

	for (let idx = 0; idx < this.length; idx++) {
		if (callbackFn.apply(thisArg || this, [this[idx], idx, this])) {
			newArr.push(this[idx])
		}
	}

	return newArr
}
