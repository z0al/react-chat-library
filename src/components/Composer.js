// @ts-check

// Packages
import React from 'react';

// Ours
import Input from './Input';
import Send from './Send';

/**
 * @typedef Props
 * @property {string} [text]
 * @property {boolean} [alwaysShowSend]
 * @property {boolean} [submitOnEnter]
 * @property {function} [onSubmit]
 * @property {function} [onTextChange]
 * @property {function} [renderSend]
 * @property {function} [renderInput]
 *
 * @augments {React.Component<Props>}
 */
class Composer extends React.Component {
	renderSend() {
		const visible =
			this.props.alwaysShowSend || this.props.text.trim().length > 0;

		const props = { ...this.props, visible };

		if (this.props.renderSend) {
			return this.props.renderSend(props);
		}

		return <Send {...props} />;
	}

	renderInput() {
		if (this.props.renderInput) {
			return this.props.renderInput(this.props);
		}

		return <Input {...this.props} />;
	}

	render() {
		return (
			<div>
				{this.renderInput()}
				{this.renderSend()}
				<style jsx>{`
					div {
						display: flex;
					}
				`}</style>
			</div>
		);
	}
}

/** @type Props */
Composer.defaultProps = {
	text: '',
	alwaysShowSend: true,
	submitOnEnter: true,
	onSubmit: () => {},
	onTextChange: () => {}
};

export default Composer;
