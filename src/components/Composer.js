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
 * @param {Props} props
 */
class Composer extends React.Component {
	renderSend() {
		const { alwaysShowSend, text, onSubmit } = this.props;
		const visible = alwaysShowSend || text.trim().length > 0;

		const sendProps = { visible, onSubmit };

		if (this.props.renderSend) {
			return this.props.renderSend(sendProps);
		}

		return <Send {...sendProps} />;
	}

	renderInput() {
		const { text, onSubmit, onTextChange, submitOnEnter } = this.props;

		const inputProps = { text, onSubmit, onTextChange, submitOnEnter };

		if (this.props.renderInput) {
			return this.props.renderInput(inputProps);
		}

		return <Input {...inputProps} />;
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
	alwaysShowSend: false,
	submitOnEnter: true,
	onSubmit: () => {},
	onTextChange: () => {}
};

export default Composer;
