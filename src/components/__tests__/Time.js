import React from 'react';
import renderer from 'react-test-renderer';

import Time from '../Time';

test('should match the snapshot', () => {
	const tree = renderer.create(<Time />).toJSON();
	expect(tree).toMatchSnapshot();
});
