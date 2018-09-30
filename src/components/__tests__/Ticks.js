import React from 'react';
import renderer from 'react-test-renderer';

import Ticks from '../Ticks';

test('should match the snapshot', () => {
	const tree = renderer.create(<Ticks />).toJSON();
	expect(tree).toMatchSnapshot();
});
