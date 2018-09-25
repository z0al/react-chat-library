// @ts-check

// Packages
import React from 'react';

/**
 * @typedef Props
 * @property {string} [label]
 * @property {boolean} [disabled]
 * @property {boolean} [visible]
 * @property {object} [buttonStyle]
 * @property {function} [onSubmit]
 * @param {Props} props
 */
const Send = props => (
	<button
		type="button"
		onClick={() => props.onSubmit()}
		disabled={props.disabled}
		style={props.buttonStyle}
	>
		<span>{props.label}</span>
		<style jsx>{`
			button {
				display: ${props.visible ? 'block' : 'none'};
				background: white;
				box-sizing: border-box;
				border: 1px solid lightgray;
				margin: 5px 0;
				padding: 0.3em 0.6em;
				border-radius: 5px;
			}
			span {
				display: block;
				padding: 0.15em;
				margin: 0;
				outline: none;
			}
		`}</style>
	</button>
);

/** @type Props */
Send.defaultProps = {
	label: 'Send',
	disabled: false,
	visible: true,
	buttonStyle: {},
	onSubmit: () => {}
};

export default Send;
