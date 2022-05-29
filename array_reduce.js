Array.prototype.myReduce = function (callbackFn, initialValue) {
	if (typeof this.length !== 'number' || typeof callbackFn !== 'function')
		return undefined

	let previousValue

	if (initialValue !== undefined) {
		previousValue = initialValue
		for (let idx = 0; idx < this.length; idx++) {
			previousValue = callbackFn(previousValue, this[idx], idx, this)
		}
	} else {
		previousValue = this[0]
		for (let idx = 1; idx < this.length; idx++) {
			previousValue = callbackFn(previousValue, this[idx], idx, this)
		}
	}

	return previousValue
}
