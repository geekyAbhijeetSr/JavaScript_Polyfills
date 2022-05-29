Function.prototype.myCall = function (obj, ...args) {
	obj.method__ = this
	return obj.method__(...args)
}
