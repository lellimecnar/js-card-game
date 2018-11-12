const _privates = new WeakMap();

export default function _(ctx) {
	if (!_privates.has(ctx)) {
		_privates.set(ctx, {});
	}
	
	return _privates.get(ctx);
}
