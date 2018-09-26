import React from 'react';
import renderer from 'react-test-renderer';

import Bubble from '../Bubble';

test('should match the snapshot', () => {
	const tree = renderer.create(<Bubble />).toJSON();
	expect(tree).toMatchSnapshot();
});
