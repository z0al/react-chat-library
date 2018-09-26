// @ts-check

// Packages
import React from 'react';

/**
 * @typedef Props
 * @property {string} [position]
 * @property {{left?: any,right?: any}} [style]
 * @param {Props} props
 */
const Bubble = props => (
	<div
		className={`bubble ${props.position}`}
		style={props.style[props.position]}
	>
		<style jsx>{`
			div.bubble {
				display: inline-flex;
				flex-direction: column;
				padding: 0.5em;
				margin: 0.5em;
				max-width: 80%;
				border-radius: 0.5em;
			}
			div.bubble.left {
				align-self: flex-start;
				border-top-left-radius: 0px;
				background: #0084ff;
				color: white;
			}
			div.bubble.right {
				align-self: flex-end;
				border-top-right-radius: 0px;
				background: #f0f0f0;
			}
		`}</style>
	</div>
);

/** @type Props */
Bubble.defaultProps = {
	position: 'left',
	style: {}
};

export default Bubble;
