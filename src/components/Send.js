// @ts-check

// Packages
import React from 'react';

// Ours
import { TextContext } from '../contexts';

/**
 * @typedef Props
 * @property {string} [label]
 * @property {boolean} [disabled]
 * @property {object} [buttonStyle]
 * @param {Props} props
 */
const Send = props => (
	<TextContext.Consumer>
		{ctx => (
			<button
				type="button"
				onClick={() => ctx.send()}
				disabled={props.disabled}
				style={props.buttonStyle}
			>
				<span>{props.label}</span>
				<style jsx>{`
					button {
						display: block;
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
		)}
	</TextContext.Consumer>
);

/** @type Props */
Send.defaultProps = {
	label: 'Send',
	disabled: false,
	buttonStyle: {}
};

export default Send;
