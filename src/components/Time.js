// @ts-check

// Packages
import React from 'react';
import { format } from 'date-fns';

/**
 * @typedef Props
 * @property {string} time
 * @property {string} [position]
 * @property {string} [format]
 * @property {object} [style]
 * @param {Props} props
 */
const Time = props => (
	<span className={props.position}>
		{format(props.time, props.format)}
		<style jsx>{`
			span {
				display: block;
				font-size: 0.65em;
				color: #aaa;
			}

			span.left {
				text-align: left;
			}

			span.right {
				text-align: right;
			}
		`}</style>
	</span>
);

/** @type Props */
Time.defaultProps = {
	time: null,
	position: 'left',
	format: 'HH:mm',
	style: {}
};

export default Time;
