// @ts-check

// Packages
import React from 'react';

/**
 * @typedef Props
 * @property {boolean} [sent]
 * @property {boolean} [received]
 * @param {Props} props
 */
const Ticks = props => (
	<span>
		{props.sent && '✓'}
		{props.received && '✓'}
		<style jsx>{`
			span {
				display: block;
				font-size: 0.65em;
				margin-top: 0.7em;
				margin-left: 0.7em;
				text-align: right;
			}
		`}</style>
	</span>
);

export default Ticks;
