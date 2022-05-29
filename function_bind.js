Function.prototype.myBind = function (obj, ...args) {
	obj.method__ = this
	return function (...params) {
		const allArgs = [...args, ...params]
		return obj.method__(...allArgs)
	}
}
