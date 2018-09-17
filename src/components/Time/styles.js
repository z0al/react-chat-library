// @ts-check

// Ours
import Colors from '../../colors';

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
			color: Colors.timeTextColor,
			...textStyle
		}
	},
	right: {
		container: {
			...containerStyle
		},
		text: {
			color: Colors.white,
			...textStyle
		}
	}
};

export default styles;
