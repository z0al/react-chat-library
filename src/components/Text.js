// @ts-check

// Packages
import React from 'react';
import { linkifier } from 'react-linkifier';

/**
 * @typedef Props
 * @property {string} value
 * @property {object} [style]
 * @property {object} [linkStyle]
 * @param {Props} props
 */
const Text = props => (
	<span className="text" style={props.style}>
		{linkifier(props.value, {
			style: {
				color: '#039be5',
				fontSize: '1em',
				...props.linkStyle
			}
		})}
	</span>
);

/** @type Props */
Text.defaultProps = {
	value: '',
	style: {},
	linkStyle: {}
};

export default Text;
