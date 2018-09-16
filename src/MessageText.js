import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native-web';

// import ParsedText from 'react-native-parsed-text';

export default class MessageText extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps) {
		return this.props.currentMessage.text !== nextProps.currentMessage.text;
	}

	render() {
		const linkStyle = StyleSheet.flatten([
			styles[this.props.position].link,
			this.props.linkStyle[this.props.position]
		]);
		return (
			<View
				style={[
					styles[this.props.position].container,
					this.props.containerStyle[this.props.position]
				]}
			>
				{/* <ParsedText
					style={[
						styles[this.props.position].text,
						this.props.textStyle[this.props.position],
						this.props.customTextStyle
					]}
					parse={[...this.props.parsePatterns(linkStyle)]}
					childrenProps={{ ...this.props.textProps }}
				> */}
				{this.props.currentMessage.text}
				{/* </ParsedText> */}
			</View>
		);
	}
}

const textStyle = {
	fontSize: 16,
	lineHeight: 20,
	marginTop: 5,
	marginBottom: 5,
	marginLeft: 10,
	marginRight: 10
};

const styles = {
	left: StyleSheet.create({
		container: {},
		text: {
			color: 'black',
			...textStyle
		},
		link: {
			color: 'black',
			textDecorationLine: 'underline'
		}
	}),
	right: StyleSheet.create({
		container: {},
		text: {
			color: 'white',
			...textStyle
		},
		link: {
			color: 'white',
			textDecorationLine: 'underline'
		}
	})
};

MessageText.contextTypes = {
	actionSheet: PropTypes.func
};

MessageText.defaultProps = {
	position: 'left',
	currentMessage: {
		text: ''
	},
	containerStyle: {},
	textStyle: {},
	linkStyle: {},
	customTextStyle: {},
	textProps: {},
	parsePatterns: () => []
};

MessageText.propTypes = {
	position: PropTypes.oneOf(['left', 'right']),
	currentMessage: PropTypes.object,
	containerStyle: PropTypes.shape({
		left: ViewPropTypes.style,
		right: ViewPropTypes.style
	}),
	textStyle: PropTypes.shape({
		left: Text.propTypes.style,
		right: Text.propTypes.style
	}),
	linkStyle: PropTypes.shape({
		left: Text.propTypes.style,
		right: Text.propTypes.style
	}),
	parsePatterns: PropTypes.func,
	textProps: PropTypes.object,
	customTextStyle: Text.propTypes.style
};
