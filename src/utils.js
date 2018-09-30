// @ts-check

/**
 * Excludes certain keys (e.g. style) from an object which may cause
 * conflicts when passed children.
 *
 * @param {object} obj
 * @returns {any}
 */
export function prepare(obj) {
	const blaclist = ['style', 'containerStyle'];
	const o = {};

	for (const k of Object.keys(obj)) {
		if (!blaclist.includes(k)) {
			o[k] = obj[k];
		}
	}

	return o;
}
