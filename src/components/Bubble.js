// @ts-check

// Packages
import React from 'react';

// Ours
import Text from './Text';
import Time from './Time';
import Ticks from './Ticks';

/**
 * @typedef Props
 * @property {string} text
 * @property {string} date
 * @property {boolean} [sent]
 * @property {boolean} [received]
 * @property {string} [position]
 * @property {{left?: any,right?: any}} [style]
 * @property {function} [renderText]
 * @property {function} [renderTime]
 * @property {function} [renderTicks]
 * @augments {React.Component<Props>}
 */
class Bubble extends React.Component {
	renderText() {
		if (this.props.renderText) {
			return this.props.renderText(this.props);
		}
		return <Text {...this.props} />;
	}

	renderTime() {
		if (this.props.renderTime) {
			return this.props.renderTime(this.props);
		}
		return <Time {...this.props} />;
	}

	renderTicks() {
		if (this.props.position !== 'right') {
			return null;
		}

		if (this.props.renderTicks) {
			return this.props.renderTicks(this.props);
		}

		return <Ticks {...this.props} />;
	}

	render() {
		return (
			<div
				className={`bubble ${this.props.position}`}
				style={this.props.style[this.props.position]}
			>
				{this.renderText()}

				<div className="meta">
					{this.renderTime()}

					{this.renderTicks()}
				</div>
				<style jsx>{`
					div.bubble {
						display: inline-flex;
						flex-direction: column;
						padding: 0.5em 0.7em;
						margin: 0.25em 0.5em;
						max-width: 70%;
						border-radius: 1em;
					}
					div.bubble.left {
						align-self: flex-start;
						border-top-left-radius: 0px;
						background: white;
						box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
						color: black;
					}
					div.bubble.right {
						align-self: flex-end;
						background: #007bef;
						border-top-right-radius: 0px;
						color: white;
					}
					div.meta {
						display: flex;
						flex-direction: row;
						justify-content: flex-end;
					}
				`}</style>
			</div>
		);
	}
}

/** @type Props */
Bubble.defaultProps = {
	text: '',
	date: '',
	position: 'left',
	style: {}
};

export default Bubble;
