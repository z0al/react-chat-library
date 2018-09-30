// @ts-check

// Packages
import React from 'react';

// Ours
import { prepare } from '../utils';
import Input from './Input';
import Send from './Send';

/**
 * @typedef Props
 * @property {object} [style]
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
		if (this.props.renderSend) {
			return this.props.renderSend(prepare(this.props));
		}

		return <Send {...prepare(this.props)} />;
	}

	renderInput() {
		if (this.props.renderInput) {
			return this.props.renderInput(prepare(this.props));
		}

		return <Input {...prepare(this.props)} />;
	}

	render() {
		return (
			<div style={this.props.style}>
				{this.renderInput()}
				{this.renderSend()}
				<style jsx>{`
					div {
						display: flex;
						margin-top: 1rem;
					}
				`}</style>
			</div>
		);
	}
}

/** @type Props */
Composer.defaultProps = {
	style: {},
	submitOnEnter: true,
	onSubmit: () => {},
	onTextChange: () => {}
};

export default Composer;
