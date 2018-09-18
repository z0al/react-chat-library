// @ts-check

// Packages
import React from 'react';

class ContextValue {
	/**
	 * @typedef Props
	 * @property {string} [inputText]
	 * @property {string} [locale]
	 * @property {function} [onSend]
	 * @param {Props} props
	 */
	constructor(props) {
		this.inputText = props.inputText || '';
		this.locale = props.locale || 'en';
		this.onSend = props.onSend || (() => {});
	}

	// Helper functions
	_send() {
		this.onSend(this.inputText.trim());
	}

	_emptyText() {
		return this.inputText.trim().length === 0;
	}
}

/**
 * A wrapper for ContextValue constructor
 *
 * @param {Props} props
 */
const propsToContext = props => {
	return new ContextValue(props);
};

const Context = React.createContext(propsToContext({}));

export { Context, propsToContext };
