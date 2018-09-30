// @ts-check

// Packages
import React from 'react';
import { format } from 'date-fns';

/**
 * @typedef Props
 * @property {string} date
 * @property {string} [position]
 * @property {object} [style]
 * @param {Props} props
 */
const Time = props => (
	<span className={props.position} style={props.style}>
		{format(props.date, 'hh:mm A')}
		<style jsx>{`
			span {
				display: block;
				font-size: 0.65em;
				margin-top: 0.7em;
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
	date: '',
	position: 'left',
	style: {}
};

export default Time;
