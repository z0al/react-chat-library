// @ts-check

// Packages
import React from 'react';
import { format } from 'date-fns';

/**
 * @typedef Props
 * @property {string} children
 * @property {string} [position]
 * @property {string} [format]
 * @property {object} [style]
 * @param {Props} props
 */
const Time = props => (
	<span className={props.position} style={props.style}>
		{format(props.children, props.format)}
		<style jsx>{`
			span {
				display: block;
				font-size: 0.65em;
				margin-top: 0.5em;
				text-align: right;
			}

			span.left {
				color: #aaa;
			}

			span.right {
				color: white;
			}
		`}</style>
	</span>
);

/** @type Props */
Time.defaultProps = {
	children: '',
	position: 'left',
	format: 'hh:mm A',
	style: {}
};

export default Time;
