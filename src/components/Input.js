// @ts-check

// Packages
import React from 'react';
import resize from 'autosize';

/**
 * @typedef Props
 * @property {string} [text]	Default text
 * @property {string} [placeholder]	Input placeholder
 * @property {boolean} [submitOnEnter]	Trigger submit event on enter key
 * @property {number} [lines]	Number of visible lines without scrolling
 * @property {object} [containerStyle]
 * @property {object} [inputStyle]
 * @property {function} [onSubmit]
 * @property {function} [onTextChange]
 * @param {Props} props
 */
const Input = props => (
	<div style={props.containerStyle}>
		<textarea
			style={props.inputStyle}
			data-testid={'text-input'}
			wrap="soft"
			rows={1}
			value={props.text}
			placeholder={props.placeholder}
			onChange={e => {
				const input = e.target;
				props.onTextChange(input.value);

				// Resize based on content
				resize(input);
			}}
			onKeyDown={e => {
				// Enter key pressed without shift combination
				if (props.submitOnEnter && e.keyCode === 13 && !e.shiftKey) {
					e.preventDefault();
					props.onSubmit();
				}
			}}
		/>
		<style jsx>{`
			div {
				display: flex;
				flex: 1;
				background: white;
				box-sizing: border-box;
				border: 1px solid gray;
				margin: 5px 10px;
				padding: 0.3em 0.6em;
				border-radius: 5px;
			}

			textarea {
				padding: 0;
				margin: 0;
				flex-grow: 1;
				resize: none;
				border: none;
				outline: none;
				max-height: ${props.lines * 1.2}em;
			}
		`}</style>
	</div>
);

/** @type Props */
Input.defaultProps = {
	text: '',
	placeholder: 'Type a message',
	submitOnEnter: true,
	lines: 5,
	containerStyle: {},
	inputStyle: {},
	onSubmit: () => {},
	onTextChange: () => {}
};

export default Input;
