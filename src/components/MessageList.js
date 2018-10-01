// @ts-check

// Packages
import React from 'react';
import isSameDay from 'date-fns/is_same_day';
import compareAsc from 'date-fns/compare_asc';

// Ours
import Day from './Day';
import Message from './Message';

/**
 * @typedef Props
 * @property {Array} messages
 * @property {object} user
 * @property {function} [renderDay]
 * @property {function} [renderMessage]
 * @augments {React.Component<Props>}
 */
class MessageList extends React.Component {
	isSameUser(user) {
		return user && this.props.user && this.props.user._id === user._id;
	}

	sortMessages() {
		return this.props.messages.sort((m1, m2) => compareAsc(m1.date, m2.date));
	}

	renderDay(date) {
		if (this.props.renderDay) {
			return this.props.renderDay(date);
		}
		return <Day date={date} />;
	}

	renderMessage(message, index) {
		const elements = [];
		const prev = this.props.messages[index - 1] || {};

		if (!isSameDay(message.date, prev.date)) {
			elements.push(this.renderDay(message.date));
		}

		if (this.props.renderMessage) {
			// custom render
			elements.push(this.props.renderMessage(message, this.props.user));
		} else {
			// Sent message?
			const position = this.isSameUser(message.user) ? 'right' : 'left';

			elements.push(
				<Message {...this.props} {...message} position={position} />
			);
		}

		return <li>{elements}</li>;
	}

	render() {
		return (
			<ul>
				{this.sortMessages().map((m, i) => this.renderMessage(m, i))}
				<style jsx>
					{`
						ul {
							display: flex;
							flex-direction: column;
							flex-grow: 1;
							overflow-x: hidden;
							overflow-y: auto;
							background: white;
							list-style-type: none;
							margin: 0;
							padding: 0;
							height: 0;
						}

						li {
							display: flex;
							margin: 0;
							padding: 0;
						}
					`}
				</style>
			</ul>
		);
	}
}

/** @type Props */
MessageList.defaultProps = {
	messages: [],
	user: {}
};

export default MessageList;
