Function.prototype.myApply = function (obj, args) {
	obj.method__ = this
	return obj.method__(...args)
}
