// @ts-check

// Packages
import React from 'react';
import { linkifier } from 'react-linkifier';

/**
 * @typedef Props
 * @property {string} children
 * @property {string} [position]
 * @property {object} [style]
 * @property {object} [linkStyle]
 * @param {Props} props
 */
const Text = props => (
	<span className="text" style={props.style}>
		{linkifier(props.children, {
			style: {
				color: props.position === 'left' ? 'white' : 'black',
				...props.linkStyle
			}
		})}
	</span>
);

/** @type Props */
Text.defaultProps = {
	position: 'left',
	children: '',
	style: {},
	linkStyle: {}
};

export default Text;
