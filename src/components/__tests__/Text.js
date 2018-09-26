import React from 'react';
import renderer from 'react-test-renderer';

import Text from '../Text';

test('should match the snapshot', () => {
	const tree = renderer.create(<Text />).toJSON();
	expect(tree).toMatchSnapshot();
});
