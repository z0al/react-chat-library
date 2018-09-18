// @ts-check

// Packages
import moment from 'moment';

export function isSameDay(currentMessage = {}, diffMessage = {}) {
	if (!diffMessage.createdAt) {
		return false;
	}

	const currentCreatedAt = moment(currentMessage.createdAt);
	const diffCreatedAt = moment(diffMessage.createdAt);

	if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
		return false;
	}

	return currentCreatedAt.isSame(diffCreatedAt, 'day');
}

export function isSameUser(currentMessage = {}, diffMessage = {}) {
	return !!(
		diffMessage.user &&
		currentMessage.user &&
		diffMessage.user._id === currentMessage.user._id
	);
}

/**
 * Merge multiple Stylesheets to provide React compatible
 *
 * @export
 * @param {Array<object>} styles
 * @returns
 */
export function CSS(styles) {
	let computed = styles[0] || {};

	for (let i = 1; i < styles.length; i++) {
		computed = { ...computed, ...styles[i] };
	}

	return computed;
}
