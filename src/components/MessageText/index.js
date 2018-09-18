// @ts-check

// Packages
import React from 'react';
import { linkifier } from 'react-linkifier';

// Ours
import { CSS } from '../../utils';
import styles from './styles';

/**
 * @typedef Props
 * @property {string} [text]
 * @property {string} [position]
 * @property {object} [textStyle]
 * @property {object} [linkStyle]
 * @param {Props} props
 */
const MessageText = props => (
	<div
		style={CSS([styles[props.position].text, props.textStyle[props.position]])}
	>
		{linkifier(props.text, {
			target: '_blank',
			style: CSS([styles[props.position].link, props.linkStyle])
		})}
	</div>
);

/** @type Props */
MessageText.defaultProps = {
	position: 'left',
	text: '',
	textStyle: {},
	linkStyle: {}
};

export default MessageText;
