// @ts-check

// Packages
import React from 'react';

// Ours
import { CSS } from '../../utils';
import Context from '../../context';
import styles from './styles';

const Send = props => (
	<Context.Consumer>
		{ctx => {
			// Only display the button if `alwaysShow` is set or the input text is
			// Not empty.
			let visibility = {};
			if (!props.alwaysShow && ctx.input.text.trim().length <= 0) {
				visibility = { display: 'none' };
			}

			return (
				<button
					type="button"
					data-test-id="send"
					style={CSS([styles.container, props.containerStyle, visibility])}
					onClick={() => {
						props.onSend(ctx.input.text.trim());
					}}
				>
					<div>
						{props.children || (
							<span style={CSS([styles.text, props.textStyle])}>
								{props.label}
							</span>
						)}
					</div>
				</button>
			);
		}}
	</Context.Consumer>
);

Send.defaultProps = {
	onSend: () => {},
	label: 'Send',
	containerStyle: {},
	textStyle: {},
	children: null,
	alwaysShow: false
};

export default Send;
