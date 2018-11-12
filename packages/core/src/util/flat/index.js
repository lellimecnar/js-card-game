export default function flat(...arr) {
	if (Array.isArray(this)) {
		arr = [...arr, ...this];
	}

	return arr.reduce((result, item) => ([
		...result,
		...(Array.isArray(item) ? flat(...item) : [item]),
	]), []);
}
