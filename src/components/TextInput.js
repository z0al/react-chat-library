// @ts-check

// Packages
import React from 'react';
import resize from 'autosize';

// Ours
import { TextContext } from '../contexts';

/**
 * @typedef Props
 * @property {string} [placeholder]	Input placeholder
 * @property {boolean} [sendOnEnter]	Trigger send event on enter key
 * @property {number} [lines]	Number of visible lines without scrolling
 * @property {object} [containerStyle]
 * @property {object} [inputStyle]
 * @param {Props} props
 */
const InputText = props => (
	<div style={props.containerStyle}>
		<TextContext.Consumer>
			{ctx => {
				const onkey = e => {
					// Enter key pressed without shift combination
					if (props.sendOnEnter && e.keyCode === 13 && !e.shiftKey) {
						ctx.send();
					}
				};

				const onchange = e => {
					const input = e.target;
					ctx.updateText(input.value);

					// Resize based on content
					resize(input);
				};

				return (
					<textarea
						style={props.inputStyle}
						data-testid={'text-input'}
						wrap="soft"
						rows={1}
						defaultValue={ctx.text}
						placeholder={props.placeholder}
						onChange={onchange}
						onKeyDown={onkey}
					/>
				);
			}}
		</TextContext.Consumer>
		<style jsx>{`
			div {
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
InputText.defaultProps = {
	placeholder: 'Type a message',
	sendOnEnter: true,
	lines: 5,
	containerStyle: {},
	inputStyle: {}
};

export default InputText;
