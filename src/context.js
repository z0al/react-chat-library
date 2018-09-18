// @ts-check

// Packages
import { createContext } from 'react';

class ContextValue {
	/**
	 * @typedef Props
	 * @property {string} [inputText]
	 * @property {string} [locale]
	 * @property {function} [onSend]
	 * @property {function} [onTextChange]
	 * @param {Props} props
	 */
	constructor(props) {
		this.inputText = props.inputText || '';
		this.locale = props.locale || 'en';
		this.onSend = props.onSend;
		this.onTextChange = props.onTextChange;
	}

	// Helper functions
	_send() {
		if (this.onSend) {
			this.onSend(this.inputText.trim());
		}
	}

	_emptyText() {
		return this.inputText.trim().length === 0;
	}

	_onTextChange(text) {
		this.inputText = text;
		if (this.onTextChange) {
			this.onTextChange(text);
		}
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

const Context = createContext(propsToContext({}));

export { Context, propsToContext };
