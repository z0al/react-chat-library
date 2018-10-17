// @ts-check

// Packages
import React from 'react';
import { linkifier } from 'react-linkifier';

/**
 * @typedef Props
 * @property {string} text
 * @property {string} [position]
 * @property {object} [style]
 * @property {object} [linkStyle]
 * @param {Props} props
 */
const Text = props => {
	const color = props.position === 'left' ? 'black' : 'white';

	return (
		<span className="text" style={props.style}>
			{linkifier(props.text, {
				style: {
					color,
					...props.linkStyle
				}
			})}
			<style jsx>{`
				span {
					white-space: pre-wrap;
				}
			`}</style>
		</span>
	);
};

/** @type Props */
Text.defaultProps = {
	position: 'left',
	text: '',
	style: {},
	linkStyle: {}
};

export default Text;
