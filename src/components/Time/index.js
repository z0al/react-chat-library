// @ts-check

// Packages
import React from 'react';
import moment from 'moment';

// Ours
import { Context } from '../../context';
import { CSS } from '../../utils';
import styles from './styles';

/**
 * @typedef Props
 * @property {string} date
 * @property {string} [position]
 * @property {object} [containerStyle]
 * @property {object} [textStyle]
 * @property {string} [format]
 * @param {Props} props
 */
const Time = props => (
	<Context.Consumer>
		{ctx => (
			<div
				style={CSS([
					styles[props.position].container,
					props.containerStyle[props.position]
				])}
			>
				<span
					style={CSS([
						styles[props.position].text,
						props.textStyle[props.position]
					])}
				>
					{moment(props.date)
						.locale(ctx.locale)
						.format(props.format)}
				</span>
			</div>
		)}
	</Context.Consumer>
);

/** @type Props */
Time.defaultProps = {
	position: 'left',
	date: null,
	containerStyle: {},
	textStyle: {},
	format: 'LT'
};

export default Time;
