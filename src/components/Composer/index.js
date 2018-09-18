// @ts-check

// Packages
const React = require('react');

// Ours
import { Context } from '../../context';
import { CSS } from '../../utils';
import styles from './styles';

/**
 * @typedef Props
 * @property {string} [placeholder]
 * @property {object} [textInputProps]
 * @property {object} [inputStyle]
 * @property {boolean} [autofocus]
 * @param {Props} props
 */
const Composer = props => (
	<Context.Consumer>
		{ctx => (
			<textarea
				data-test-id={props.placeholder}
				placeholder={props.placeholder}
				defaultValue={ctx.inputText}
				onChange={e => {
					ctx._onTextChange(e.target.value);
				}}
				style={CSS([styles.textInput, props.inputStyle])}
				autoFocus={props.autofocus}
				{...props.textInputProps}
			/>
		)}
	</Context.Consumer>
);

/** @type Props */
Composer.defaultProps = {
	placeholder: 'Type a message...',
	textInputProps: {},
	inputStyle: {},
	autofocus: true
};

export default Composer;
