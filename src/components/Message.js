// @ts-check

// Packages
import React from 'react';

// Ours
import Bubble from './Bubble';

/**
 * @typedef Props
 * @property {string} text
 * @property {string} date
 * @property {object} [user]
 * @property {string} [position]
 * @param {Props} props
 */
const Message = props => {
	return (
		<div>
			<Bubble {...props} />
			<style jsx>{`
				div {
					display: flex;
					flex-direction: column;
				}
			`}</style>
		</div>
	);
};

/** @type Props */
Message.defaultProps = {
	position: 'left',
	text: '',
	date: '',
	user: {}
};

export default Message;
