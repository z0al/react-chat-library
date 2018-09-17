// @ts-check

// Ours
import colors from '../../colors';

const containerStyle = {
	marginLeft: 10,
	marginRight: 10,
	marginBottom: 5
};

const textStyle = {
	fontSize: 10,
	backgroundColor: 'transparent',
	textAlign: 'right'
};

const styles = {
	left: {
		container: {
			...containerStyle
		},
		text: {
			color: colors.timeTextColor,
			...textStyle
		}
	},
	right: {
		container: {
			...containerStyle
		},
		text: {
			color: colors.white,
			...textStyle
		}
	}
};

export default styles;
