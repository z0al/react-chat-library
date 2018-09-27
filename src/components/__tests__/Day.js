import React from 'react';
import renderer from 'react-test-renderer';

import Day from '../Day';

test('should match the snapshot', () => {
	const tree = renderer.create(<Day />).toJSON();
	expect(tree).toMatchSnapshot();
});
