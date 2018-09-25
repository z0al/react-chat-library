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
						display: flex;
						flex: 1;
						flex-direction: column;
						background: white;
						box-sizing: border-box;
						border: 1px solid lightgray;
						margin: 5px 10px;
						padding: 0.3em 0.6em;
						border-radius: 5px;
					}
					span {
						padding: 0.15em;
						margin: 0;
						outline: none;
						flex-grow: 1;
						font-size: 1rem;
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
