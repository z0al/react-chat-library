// @ts-check

// Packages
import React from 'react';

// Ours
import { prepare } from '../utils';
import MessageList from './MessageList';
import Composer from './Composer';

/**
 * @typedef Props
 * @property {string} text
 * @property {Array} messages
 * @property {object} [user]
 * @property {object} [style]
 * @property {function} [onSend]
 * @property {function} [onTextChange]
 * @augments {React.Component<Props>}
 */
class Messenger extends React.Component {
	/** @type Props */
	constructor(props) {
		super(props);

		this.state = { text: props.text || '' };
	}

	onSubmit = () => {
		if (this.props.onSend) {
			this.props.onSend(this.state.text);
			this.setState({ text: '' });
		}
	};

	onTextChange = text => {
		this.setState({ text });

		this.props.onTextChange && this.props.onTextChange(text);
	};

	render() {
		return (
			<div style={this.props.style}>
				<MessageList {...prepare(this.props)} />
				<Composer
					{...prepare(this.props)}
					text={this.state.text}
					onSubmit={this.onSubmit}
					onTextChange={this.onTextChange}
				/>
				<style jsx>{`
					div {
						display: flex;
						flex: 1;
						flex-direction: column;
						height: 600px;
					}
				`}</style>
			</div>
		);
	}
}

/** @type Props */
Messenger.defaultProps = {
	text: '',
	messages: [],
	style: {}
};

export default Messenger;
