import React from 'react';
import renderer from 'react-test-renderer';

import Messenger from '../Messenger';

test('should match the snapshot', () => {
	const tree = renderer.create(<Messenger />).toJSON();
	expect(tree).toMatchSnapshot();
});
