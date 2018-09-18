// @ts-check

// Packages
import React from 'react';

// Ours
import { CSS } from '../../utils';
import styles from './styles';

// TODO: support lightbox like functionality

/**
 * @typedef Props
 * @property {string} source
 * @property {string} [alt]
 * @property {object} [containerStyle]
 * @param {Props} props
 */
const MessageImage = props => (
	<div style={CSS([styles.container, props.containerStyle])}>
		<img src={props.source} alt={props.alt} />
	</div>
);

/** @type Props */
MessageImage.defaultProps = {
	source: null,
	alt: '',
	containerStyle: {}
};

export default MessageImage;
