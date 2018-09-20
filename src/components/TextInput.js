// @ts-check

// Packages
import React from 'react';

// Ours
import { Context } from '../context';

/**
 * @typedef Props
 * @property {string} [placeholder]
 * @property {number} [maxHeight]
 * @property {object} [containerStyle]
 * @property {object} [inputStyle]
 * @param {Props} props
 */
const InputText = props => (
	<Context.Consumer>
		{ctx => (
			<div className="container" style={props.containerStyle}>
				<div
					className="input"
					contentEditable={true}
					data-test={'input-text'}
					style={props.inputStyle}
					onInput={e => {
						const div = e.target;
						// @ts-ignore
						ctx._onTextChange(div.innerText);
					}}
				>
					{ctx.inputText}
				</div>
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
								border-radius: 21px;
							}

							div.input {
								background: white;
								padding: 0.2em;
								margin: 0;
								outline: none;
								flex-grow: 1;
								cursor: text;
								line-height: 1em;
								max-height: ${props.maxHeight}em;
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
		)}
	</Context.Consumer>
);

/** @type Props */
InputText.defaultProps = {
	placeholder: 'Type a message',
	maxHeight: 5,
	containerStyle: {},
	inputStyle: {}
};

export default InputText;
