// @ts-check

// Packages
import React from 'react';
import moment from 'moment';

// Ours
import { CSS } from '../../utils';
import { Context } from '../../context';
import styles from './styles';

// TODO: make sure we check isSameDay before calling this component

/**
 * @typedef Props
 * @property {string} date
 * @property {object} [containerStyle]
 * @property {object} [wrapperStyle]
 * @property {object} [textStyle]
 * @property {string} [format]
 * @param {Props} props
 */
const Day = props => (
	<Context.Consumer>
		{ctx => (
			<div style={CSS([styles.container, props.containerStyle])}>
				<div style={props.wrapperStyle}>
					<span style={CSS([styles.text, props.textStyle])}>
						{moment(props.date)
							.locale(ctx.locale)
							.format(props.format)
							.toUpperCase()}
					</span>
				</div>
			</div>
		)}
	</Context.Consumer>
);

/** @type Props */
Day.defaultProps = {
	date: null,
	containerStyle: {},
	wrapperStyle: {},
	textStyle: {},
	format: 'll'
};

export default Day;
