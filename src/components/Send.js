// @ts-check

// Packages
import React from 'react';

/**
 * @typedef Props
 * @property {string} [label]
 * @property {boolean} [disabled]
 * @property {boolean} [visible]
 * @property {object} [containerStyle]
 * @property {object} [buttonStyle]
 * @property {function} [onSubmit]
 * @param {Props} props
 */
const Send = props => (
	<div style={props.containerStyle}>
		<button
			type="button"
			onClick={() => props.onSubmit()}
			disabled={props.disabled}
			style={props.buttonStyle}
		>
			<span>{props.label}</span>
		</button>
		<style jsx>{`
			div {
				display: ${props.visible ? 'flex' : 'none'};
			}

			button {
				display: block;
				background: white;
				box-sizing: border-box;
				border: 1px solid gray;
				margin: 5px 0;
				padding: 0.3em 0.6em;
				border-radius: 5px;
			}

			span {
				display: block;
				outline: none;
				font-size: 1.2em;
			}
		`}</style>
	</div>
);

/** @type Props */
Send.defaultProps = {
	label: '+',
	disabled: false,
	visible: true,
	containerStyle: {},
	buttonStyle: {},
	onSubmit: () => {}
};

export default Send;
