// @ts-check

// Packages
import React from 'react';
import { format } from 'date-fns';

/**
 * @typedef Props
 * @property {string} date
 * @property {string} [format]
 * @property {object} [containerStyle]
 * @property {object} [textStyle]
 * @param {Props} props
 */
const Day = props => (
	<div style={props.containerStyle}>
		<span style={props.textStyle}>{format(props.date, props.format)}</span>
		<style jsx>{`
			div {
				display: flex;
				justify-content: center;
				margin: 15px 0;
			}
			span {
				display: inline-block;
				font-size: 0.8em;
				padding: 0.2em 0.4em;
				text-align: center;
				color: #b2b2b2;
				font-weight: 600;
				text-transform: uppercase;
			}
		`}</style>
	</div>
);

/** @type Props */
Day.defaultProps = {
	date: '',
	format: 'MMM D, YYYY',
	containerStyle: {},
	textStyle: {}
};

export default Day;
