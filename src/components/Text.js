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
const Text = props => {
	const color = props.position === 'left' ? 'black' : 'white';

	return (
		<span className="text" style={{ color, ...props.style }}>
			{linkifier(props.children, {
				style: {
					color,
					...props.linkStyle
				}
			})}
		</span>
	);
};

/** @type Props */
Text.defaultProps = {
	position: 'left',
	children: '',
	style: {},
	linkStyle: {}
};

export default Text;
