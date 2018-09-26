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
	<span className={props.position}>
		{format(props.children, props.format)}
		<style jsx>{`
			span {
				display: block;
				font-size: 0.65em;
				margin-top: 0.5em;
			}

			span.left {
				text-align: left;
				color: lightgray;
			}

			span.right {
				text-align: right;
				color: gray;
			}
		`}</style>
	</span>
);

/** @type Props */
Time.defaultProps = {
	children: '',
	position: 'left',
	format: 'HH:mm',
	style: {}
};

export default Time;
