// @ts-check

// Packages
const React = require('react');
const moment = require('moment');

// Ours
import { CSS } from '../../utils';
import { Context } from '../../context';
import styles from './styles';

// TODO: make sure we check isSameDay before calling this component

const Day = props => {
	const { format, date } = props;

	return (
		<Context.Consumer>
			{ctx => (
				<div style={CSS([styles.container, props.containerStyle])}>
					<div style={props.wrapperStyle}>
						<span style={CSS([styles.text, props.textStyle])}>
							{moment(date)
								.locale(ctx.locale)
								.format(format)
								.toUpperCase()}
						</span>
					</div>
				</div>
			)}
		</Context.Consumer>
	);
};

Day.defaultProps = {
	date: null,
	containerStyle: {},
	wrapperStyle: {},
	textStyle: {},
	format: 'll'
};

export default Day;
