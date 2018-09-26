// @ts-check

// Packages
import React from 'react';

// Ours
import Text from './Text';
import Time from './Time';

/**
 * @typedef Props
 * @property {string} text
 * @property {string} time
 * @property {string} [position]
 * @property {{left?: any,right?: any}} [style]
 * @param {Props} props
 */
const Bubble = props => (
	<div
		className={`bubble ${props.position}`}
		style={props.style[props.position]}
	>
		<Text position={props.position}>{props.text}</Text>
		<Time position={props.position}>{props.time}</Time>
		<style jsx>{`
			div.bubble {
				display: inline-flex;
				flex-direction: column;
				padding: 0.5em;
				margin: 0.5em;
				max-width: 80%;
				border-radius: 1em;
			}
			div.bubble.left {
				align-self: flex-start;
				border-top-left-radius: 0px;
				background: #f0f0f0;
				color: white;
			}
			div.bubble.right {
				align-self: flex-end;
				background: #007bef;
				border-top-right-radius: 0px;
			}
		`}</style>
	</div>
);

/** @type Props */
Bubble.defaultProps = {
	text: '',
	time: '',
	position: 'left',
	style: {}
};

export default Bubble;
