Array.prototype.myForEach = function (callbackFn, thisArg) {
	if (typeof this.length !== 'number' || typeof callbackFn !== 'function')
		return undefined

	for (let idx = 0; idx < this.length; idx++) {
		callbackFn.apply(thisArg || this, [this[idx], idx, this])
	}
}
