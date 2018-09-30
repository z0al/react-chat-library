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
 * @param {Props} props
 */
const Bubble = props => (
	<div
		className={`bubble ${props.position}`}
		style={props.style[props.position]}
	>
		<Text {...props} />
		<div className="meta">
			<Time {...props} />
			{props.position === 'right' && <Ticks {...props} />}
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

/** @type Props */
Bubble.defaultProps = {
	text: '',
	date: '',
	position: 'left',
	style: {}
};

export default Bubble;
