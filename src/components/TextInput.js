// @ts-check

// Packages
import React from 'react';

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
	<div className="container" style={props.containerStyle}>
		<TextContext.Consumer>
			{ctx => {
				const onkey = e => {
					// Enter key pressed without shift combination
					if (props.sendOnEnter && e.keyCode === 13 && !e.shiftKey) {
						ctx.send();
					}
				};

				const onchange = e => {
					ctx.updateText(e.target.innerText);
				};

				return (
					<div
						className="input"
						contentEditable={true}
						data-testid={'text-input'}
						style={props.inputStyle}
						onKeyDown={onkey}
						onInput={onchange}
						dangerouslySetInnerHTML={{ __html: ctx.text }}
					/>
				);
			}}
		</TextContext.Consumer>
		<style jsx>{`
			div.container {
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

			div.input {
				padding: 0.15em;
				margin: 0;
				outline: none;
				flex-grow: 1;
				cursor: text;
				max-height: ${props.lines}em;
				overflow-x: hidden;
				overflow-y: auto;
			}

			div.input:empty:before {
				content: "${props.placeholder}";
				padding: 0.2em;
				margin: 0;
				color: gray;
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
