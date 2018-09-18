// @ts-check

const textStyle = {
	fontSize: 16,
	lineHeight: 20,
	marginTop: 5,
	marginBottom: 5,
	marginLeft: 10,
	marginRight: 10
};

const styles = {
	left: {
		text: {
			color: 'black',
			...textStyle
		},
		link: {
			color: 'black',
			textDecorationLine: 'underline'
		}
	},
	right: {
		text: {
			color: 'white',
			...textStyle
		},
		link: {
			color: 'white',
			textDecorationLine: 'underline'
		}
	}
};

export default styles;
