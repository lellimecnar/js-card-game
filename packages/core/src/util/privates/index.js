const _privates = new WeakMap();

export default function _(ctx: any, obj?: Object = null): Object {
	if (!_privates.has(ctx)) {
		_privates.set(ctx, {});
	}

	if (obj) {
		Object.assign(_privates.get(ctx), obj);
	}

	return _privates.get(ctx);
}
